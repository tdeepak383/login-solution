// routes/analytics.js  —  Express.js + MySQL
const express = require('express')
const router  = express.Router()
const pool = require('../config/db.js');

// FIX: added city to resolveCountry
async function resolveCountry(ip) {
  if (!ip || ip === '127.0.0.1' || ip === '::1') return { country: 'Local', country_code: 'LC', city: 'Local' }
  try {
    // FIX: added city to fields
    const res  = await fetch(`http://ip-api.com/json/${ip}?fields=country,countryCode,city`, { signal: AbortSignal.timeout(2000) })
    const data = await res.json()
    return {
      country:      data.country     ?? null,
      country_code: data.countryCode ?? null,
      city:         data.city        ?? null,
    }
  } catch {
    return { country: null, country_code: null, city: null }
  }
}

function setCORSHeaders(res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
}

router.options('/track', (req, res) => { setCORSHeaders(res); return res.status(204).end() })

// ─────────────────────────────────────────────────────────────────────────────
// POST /api/analytics/track
// ─────────────────────────────────────────────────────────────────────────────
router.post('/track', async (req, res) => {
  setCORSHeaders(res)
  try {
    const { visitor_id, session_id, page, referrer, device, browser, os, user_agent } = req.body
    if (!visitor_id || !page) return res.status(400).json({ success: false })

    const ip =
      (req.headers['x-forwarded-for'] || '').split(',')[0].trim() ||
      req.socket?.remoteAddress || null

    // FIX: destructure city too
    const { country, country_code, city } = await resolveCountry(ip)

    // FIX: added city column to INSERT
    await pool.query(
      `INSERT INTO analytics_visits
        (visitor_id, session_id, page, referrer, device, browser, os, country, country_code, city, ip, user_agent)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        visitor_id, session_id,
        page.slice(0, 500),
        referrer ? referrer.slice(0, 500) : null,
        device || 'desktop', browser || null, os || null,
        country, country_code, city, ip,
        user_agent ? user_agent.slice(0, 500) : null,
      ]
    )
    return res.status(204).end()
  } catch (err) {
    console.error('[POST /api/analytics/track]', err)
    return res.status(500).end()
  }
})

// ─────────────────────────────────────────────────────────────────────────────
// GET /api/analytics/stats?range=today|7|30|90
// ─────────────────────────────────────────────────────────────────────────────
router.get('/stats', async (req, res) => {
  const rawRange = req.query.range
  const isToday  = rawRange === 'today'
  const range    = isToday ? null : (parseInt(rawRange) || 30)

  const whereClause  = isToday ? `DATE(created_at) = CURDATE()` : `created_at >= NOW() - INTERVAL ? DAY`
  const whereParams  = isToday ? [] : [range]
  const prevParams   = isToday ? [] : [range * 2, range]
  const prevWhere    = isToday
    ? `DATE(created_at) = DATE_SUB(CURDATE(), INTERVAL 1 DAY)`
    : `created_at >= NOW() - INTERVAL ? DAY AND created_at < NOW() - INTERVAL ? DAY`

  try {
    // ── Totals ───────────────────────────────────────────────────────────────
    const [[totals]] = await pool.query(`
      SELECT
        COUNT(*)                          AS total_pageviews,
        COUNT(DISTINCT visitor_id)        AS unique_visitors,
        COUNT(DISTINCT session_id)        AS total_sessions,
        ROUND(COUNT(*) / NULLIF(COUNT(DISTINCT session_id), 0), 1) AS pages_per_session
      FROM analytics_visits
      WHERE ${whereClause}
    `, whereParams)

    // ── Previous period for % change ─────────────────────────────────────────
    const [[prevTotals]] = await pool.query(`
      SELECT
        COUNT(*)                   AS total_pageviews,
        COUNT(DISTINCT visitor_id) AS unique_visitors
      FROM analytics_visits
      WHERE ${prevWhere}
    `, prevParams)

    // ── Hourly breakdown (only for today) ────────────────────────────────────
    let hourly_today = []
    if (isToday) {
      const [hourlyRows] = await pool.query(`
        SELECT
          HOUR(created_at)           AS hour,
          COUNT(*)                   AS pageviews,
          COUNT(DISTINCT visitor_id) AS visitors
        FROM analytics_visits
        WHERE DATE(created_at) = CURDATE()
        GROUP BY HOUR(created_at)
        ORDER BY hour ASC
      `)
      hourly_today = hourlyRows
    }

    // ── Daily visits (for 7/30/90d line chart) ────────────────────────────────
    let daily_visits = []
    if (!isToday) {
      const [rows] = await pool.query(`
        SELECT
          DATE(created_at)           AS date,
          COUNT(*)                   AS pageviews,
          COUNT(DISTINCT visitor_id) AS visitors
        FROM analytics_visits
        WHERE ${whereClause}
        GROUP BY DATE(created_at)
        ORDER BY date ASC
      `, whereParams)
      daily_visits = rows
    }

    // ── Top pages ─────────────────────────────────────────────────────────────
    const [topPages] = await pool.query(`
      SELECT
        page,
        COUNT(*)                   AS views,
        COUNT(DISTINCT visitor_id) AS unique_visitors
      FROM analytics_visits
      WHERE ${whereClause}
      GROUP BY page
      ORDER BY views DESC
      LIMIT 10
    `, whereParams)

    // ── Devices ───────────────────────────────────────────────────────────────
    const [devices] = await pool.query(`
      SELECT device, COUNT(*) AS count
      FROM analytics_visits
      WHERE ${whereClause}
      GROUP BY device
      ORDER BY count DESC
    `, whereParams)

    // ── Browsers ──────────────────────────────────────────────────────────────
    const [browsers] = await pool.query(`
      SELECT browser, COUNT(*) AS count
      FROM analytics_visits
      WHERE ${whereClause} AND browser IS NOT NULL
      GROUP BY browser
      ORDER BY count DESC
      LIMIT 6
    `, whereParams)

    // ── Countries ─────────────────────────────────────────────────────────────
    const [countries] = await pool.query(`
      SELECT country, country_code, COUNT(DISTINCT visitor_id) AS visitors
      FROM analytics_visits
      WHERE ${whereClause} AND country IS NOT NULL
      GROUP BY country, country_code
      ORDER BY visitors DESC
      LIMIT 10
    `, whereParams)

    // FIX: new query — top cities
    const [cities] = await pool.query(`
      SELECT
        city,
        country,
        country_code,
        COUNT(DISTINCT visitor_id) AS visitors
      FROM analytics_visits
      WHERE ${whereClause} AND city IS NOT NULL
      GROUP BY city, country, country_code
      ORDER BY visitors DESC
      LIMIT 10
    `, whereParams)

    return res.json({
      success: true,
      range:   isToday ? 'today' : range,
      totals: {
        ...totals,
        pv_change: prevTotals.total_pageviews
          ? Math.round(((totals.total_pageviews - prevTotals.total_pageviews) / prevTotals.total_pageviews) * 100)
          : null,
        uv_change: prevTotals.unique_visitors
          ? Math.round(((totals.unique_visitors - prevTotals.unique_visitors) / prevTotals.unique_visitors) * 100)
          : null,
      },
      hourly_today,
      daily_visits,
      top_pages:  topPages,
      devices,
      browsers,
      countries,
      cities,   // FIX: added cities to response
    })

  } catch (err) {
    console.error('[GET /api/analytics/stats]', err)
    return res.status(500).json({ success: false, message: 'Server error.' })
  }
})

module.exports = router

// ─────────────────────────────────────────────────────────────────────────────
// GET /api/analytics/export?range=today|7|30|90&format=csv|json
// Returns raw visit rows for the given range as CSV or JSON download
// ─────────────────────────────────────────────────────────────────────────────
router.get('/export', async (req, res) => {
  const rawRange = req.query.range
  const format   = (req.query.format || 'csv').toLowerCase()
  const isToday  = rawRange === 'today'
  const range    = isToday ? null : (parseInt(rawRange) || 30)

  const whereClause = isToday
    ? `DATE(created_at) = CURDATE()`
    : `created_at >= NOW() - INTERVAL ? DAY`
  const whereParams = isToday ? [] : [range]

  try {
    const [rows] = await pool.query(`
      SELECT
        id, visitor_id, session_id, page, referrer,
        device, browser, os, country, country_code, city,
        ip, user_agent, created_at
      FROM analytics_visits
      WHERE ${whereClause}
      ORDER BY created_at DESC
      LIMIT 50000
    `, whereParams)

    const label = isToday ? 'today' : `last_${range}d`

    if (format === 'json') {
      res.setHeader('Content-Type', 'application/json')
      res.setHeader('Content-Disposition', `attachment; filename="analytics_${label}.json"`)
      return res.json({ exported_at: new Date().toISOString(), range: rawRange, total: rows.length, data: rows })
    }

    const cols = ['id','visitor_id','session_id','page','referrer','device','browser','os','country','country_code','city','ip','user_agent','created_at']
    const escape = v => {
      if (v === null || v === undefined) return ''
      const s = String(v)
      return s.includes(',') || s.includes('"') || s.includes('\n') ? `"${s.replace(/"/g, '""')}"` : s
    }
    const csv = [cols.join(','), ...rows.map(r => cols.map(c => escape(r[c])).join(','))].join('\n')

    res.setHeader('Content-Type', 'text/csv')
    res.setHeader('Content-Disposition', `attachment; filename="analytics_${label}.csv"`)
    return res.send(csv)

  } catch (err) {
    console.error('[GET /api/analytics/export]', err)
    return res.status(500).json({ success: false, message: 'Export failed.' })
  }
})

module.exports = router