import React, { useEffect, useState, useCallback } from 'react'
import {
  LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend,
} from 'recharts'

const fmt = n => n >= 1000 ? (n / 1000).toFixed(1) + 'k' : String(n ?? 0)
const pct = n => n === null || n === undefined ? null : `${n > 0 ? '+' : ''}${n}%`

function changeColor(v) {
  if (v === null || v === undefined) return '#94a3b8'
  return v >= 0 ? '#22c55e' : '#ef4444'
}
function changeArrow(v) {
  if (v === null || v === undefined) return ''
  return v >= 0 ? '▲' : '▼'
}

function StatCard({ icon, label, value, change, color, delay = 0 }) {
  return (
    <div style={{
      background: '#fff', borderRadius: 18, padding: '20px 22px',
      border: '1px solid #f1f5f9', boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
      display: 'flex', flexDirection: 'column', gap: 10,
      animation: `fadeUp 0.5s ease ${delay}s both`,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: '#94a3b8' }}>{label}</span>
        <span style={{ width: 36, height: 36, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, background: color + '18' }}>{icon}</span>
      </div>
      <div style={{ fontSize: 30, fontWeight: 800, color: '#1e293b', lineHeight: 1 }}>{fmt(value)}</div>
      {change !== undefined && (
        <div style={{ fontSize: 12, fontWeight: 600, color: changeColor(change) }}>
          {changeArrow(change)} {pct(change) ?? 'No prev. data'}
          <span style={{ color: '#94a3b8', fontWeight: 400, marginLeft: 4 }}>vs last period</span>
        </div>
      )}
    </div>
  )
}

function Card({ title, subtitle, children, style = {} }) {
  return (
    <div style={{ background: '#fff', borderRadius: 18, padding: '20px 22px', border: '1px solid #f1f5f9', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', ...style }}>
      {title && (
        <div style={{ marginBottom: 16 }}>
          <p style={{ margin: 0, fontWeight: 700, fontSize: 14, color: '#1e293b' }}>{title}</p>
          {subtitle && <p style={{ margin: '2px 0 0', fontSize: 12, color: '#94a3b8' }}>{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  )
}

function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div style={{ background: '#1e293b', border: 'none', borderRadius: 10, padding: '8px 14px', fontSize: 12, color: '#fff', boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }}>
      <p style={{ margin: '0 0 4px', fontWeight: 700, color: '#94a3b8' }}>{label}</p>
      {payload.map((p, i) => (
        <p key={i} style={{ margin: '2px 0', color: p.color }}>{p.name}: <strong>{fmt(p.value)}</strong></p>
      ))}
    </div>
  )
}

function Skeleton({ h = 200, radius = 12 }) {
  return (
    <div style={{ height: h, borderRadius: radius, background: 'linear-gradient(90deg,#f1f5f9 25%,#e2e8f0 50%,#f1f5f9 75%)', backgroundSize: '200% 100%', animation: 'shimmer 1.4s ease infinite' }} />
  )
}

function DistributionBar({ data, colors }) {
  const total = data.reduce((s, d) => s + d.count, 0)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ display: 'flex', height: 8, borderRadius: 99, overflow: 'hidden', gap: 2 }}>
        {data.map((d, i) => (
          <div key={i} style={{ flex: d.count, background: colors[i % colors.length], borderRadius: 99, transition: 'flex 0.5s ease' }} />
        ))}
      </div>
      {data.map((d, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 10, height: 10, borderRadius: 3, background: colors[i % colors.length], display: 'inline-block' }} />
            <span style={{ fontSize: 13, color: '#475569', fontWeight: 500 }}>{d.device ?? d.browser ?? d.label}</span>
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <span style={{ fontSize: 12, color: '#94a3b8' }}>{total ? Math.round(d.count / total * 100) : 0}%</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: '#1e293b', minWidth: 40, textAlign: 'right' }}>{fmt(d.count)}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

function CountryRow({ country, country_code, visitors, max }) {
  const pctW = max ? Math.round((visitors / max) * 100) : 0
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
      <span style={{ fontSize: 20, width: 28, textAlign: 'center', flexShrink: 0 }}>
        {country_code
          ? country_code.toUpperCase().replace(/./g, c => String.fromCodePoint(0x1F1E6 - 65 + c.charCodeAt(0)))
          : '🌐'}
      </span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: '#1e293b', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{country ?? 'Unknown'}</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: '#1e293b', flexShrink: 0, marginLeft: 8 }}>{fmt(visitors)}</span>
        </div>
        <div style={{ height: 5, borderRadius: 99, background: '#f1f5f9', overflow: 'hidden' }}>
          <div style={{ height: '100%', borderRadius: 99, width: `${pctW}%`, background: 'linear-gradient(90deg,#6903FE,#1F5FF5)', transition: 'width 0.6s ease' }} />
        </div>
      </div>
    </div>
  )
}

// FIX: new CityRow component — shows flag + city + country + visitor bar
function CityRow({ city, country, country_code, visitors, max }) {
  const pctW = max ? Math.round((visitors / max) * 100) : 0
  const flag = country_code
    ? country_code.toUpperCase().replace(/./g, c => String.fromCodePoint(0x1F1E6 - 65 + c.charCodeAt(0)))
    : '🌐'
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
      <span style={{ fontSize: 18, width: 28, textAlign: 'center', flexShrink: 0 }}>{flag}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
          <div style={{ minWidth: 0 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#1e293b', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', display: 'block' }}>
              {city ?? 'Unknown'}
            </span>
            <span style={{ fontSize: 11, color: '#94a3b8' }}>{country ?? ''}</span>
          </div>
          <span style={{ fontSize: 13, fontWeight: 700, color: '#1e293b', flexShrink: 0, marginLeft: 8 }}>{fmt(visitors)}</span>
        </div>
        <div style={{ height: 5, borderRadius: 99, background: '#f1f5f9', overflow: 'hidden' }}>
          <div style={{ height: '100%', borderRadius: 99, width: `${pctW}%`, background: 'linear-gradient(90deg,#f97316,#eab308)', transition: 'width 0.6s ease' }} />
        </div>
      </div>
    </div>
  )
}

// ── Today: hourly bar chart (0–23h) ──────────────────────────────────────────
function HourlyChart({ data }) {
  const hours = Array.from({ length: 24 }, (_, h) => {
    const found = (data ?? []).find(d => Number(d.hour) === h)
    const label = h === 0 ? '12am' : h < 12 ? `${h}am` : h === 12 ? '12pm' : `${h - 12}pm`
    return { hour: label, pageviews: found?.pageviews ?? 0, visitors: found?.visitors ?? 0 }
  })
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={hours} margin={{ top: 4, right: 8, bottom: 0, left: -10 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
        <XAxis dataKey="hour" tick={{ fontSize: 10, fill: '#94a3b8' }} interval={2} />
        <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} tickFormatter={fmt} />
        <Tooltip content={<ChartTooltip />} />
        <Legend wrapperStyle={{ fontSize: 12, paddingTop: 8 }} />
        <Bar dataKey="pageviews" name="Page Views"      fill="#6903FE" radius={[4, 4, 0, 0]} />
        <Bar dataKey="visitors"  name="Unique Visitors" fill="#1F5FF5" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
const RANGES = [
  { label: 'Today', value: 'today' },
  { label: '7d',    value: 7 },
  { label: '30d',   value: 30 },
  { label: '90d',   value: 90 },
]

const DEVICE_COLORS  = ['#6903FE', '#1F5FF5', '#22c55e']
const BROWSER_COLORS = ['#6903FE', '#1F5FF5', '#f97316', '#22c55e', '#eab308', '#94a3b8']

export default function AnalyticsDashboard() {
  const [range, setRange]     = useState('today')
  const [data, setData]       = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)
  const [tab, setTab]         = useState('overview')
  const [exporting, setExporting] = useState(false)

  const isToday    = range === 'today'
  const rangeLabel = isToday ? 'today' : `the last ${range} days`

  const load = useCallback(async (r) => {
    setLoading(true)
    setError(null)
    try {
      const res  = await fetch(`${import.meta.env.VITE_VERCEL_URL || 'http://localhost:5000'}/api/analytics/stats?range=${r}`)
      const json = await res.json()
      if (!json.success) throw new Error(json.message)
      setData(json)
    } catch (e) {
      setError(e.message || 'Failed to load analytics.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { load(range) }, [range])

  const handleExport = async (format) => {
    setExporting(true)
    try {
      const base = import.meta.env.VITE_VERCEL_URL || 'http://localhost:5000'
      const url  = `${base}/api/analytics/export?range=${range}&format=${format}`
      const res  = await fetch(url)
      if (!res.ok) throw new Error('Export failed')
      const blob = await res.blob()
      const label = range === 'today' ? 'today' : `last_${range}d`
      const filename = `analytics_${label}.${format}`
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = filename
      link.click()
      URL.revokeObjectURL(link.href)
    } catch (e) {
      console.error('Export error:', e)
    } finally {
      setExporting(false)
    }
  }

  const font = "'DM Sans','Nunito',sans-serif"

  return (
    <div style={{ minHeight: '100vh', background: '#f8f7ff', padding: '24px 28px', fontFamily: font }}>
      <style>{`
        @keyframes fadeUp  { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:none} }
        @keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
        .tab-btn { border:none; background:none; cursor:pointer; font-family:inherit; font-size:13px; font-weight:600; padding:7px 16px; border-radius:10px; transition:all 0.18s; }
        .tab-btn.active { background:linear-gradient(135deg,#6903FE,#1F5FF5); color:#fff; box-shadow:0 2px 8px rgba(105,3,254,0.25); }
        .tab-btn:not(.active) { color:#64748b; }
        .tab-btn:not(.active):hover { background:#f1f5f9; color:#1e293b; }
        .range-btn { border:1.5px solid #e2e8f0; background:#fff; cursor:pointer; font-family:inherit; font-size:12px; font-weight:700; padding:5px 14px; border-radius:8px; transition:all 0.18s; color:#64748b; }
        .range-btn.active { border-color:#6903FE; color:#6903FE; background:#6903FE0f; }
      `}</style>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
        <div>
          <p style={{ margin: 0, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#6903FE' }}>Dashboard</p>
          <h1 style={{ margin: '2px 0 0', fontSize: 22, fontWeight: 800, color: '#1e293b' }}>Site Analytics</h1>
          <p style={{ margin: '2px 0 0', fontSize: 13, color: '#94a3b8' }}>
            {data ? `${fmt(data.totals.total_pageviews)} pageviews ${rangeLabel}` : 'Loading…'}
          </p>
        </div>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          {RANGES.map(r => (
            <button key={r.value} className={`range-btn${range === r.value ? ' active' : ''}`}
              onClick={() => setRange(r.value)}>{r.label}</button>
          ))}
          <button onClick={() => load(range)}
            style={{ marginLeft: 4, background: '#fff', border: '1.5px solid #e2e8f0', borderRadius: 8, width: 32, height: 32, cursor: 'pointer', fontSize: 15, color: '#6903FE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            title="Refresh">↺</button>
          <div style={{ marginLeft: 8, display: 'flex', gap: 6, borderLeft: '1.5px solid #e2e8f0', paddingLeft: 12 }}>
            <button
              onClick={() => handleExport('csv')}
              disabled={exporting || loading}
              style={{ padding: '5px 13px', borderRadius: 8, border: '1.5px solid #e2e8f0', background: '#fff', fontSize: 12, fontWeight: 700, color: '#15803d', cursor: exporting ? 'wait' : 'pointer', fontFamily: font, opacity: exporting ? 0.6 : 1, display: 'flex', alignItems: 'center', gap: 5 }}>
              {exporting ? '…' : '↓'} CSV
            </button>
            {/* <button
              onClick={() => handleExport('json')}`
              disabled={exporting || loading}
              style={{ padding: '5px 13px', borderRadius: 8, border: '1.5px solid #e2e8f0', background: '#fff', fontSize: 12, fontWeight: 700, color: '#1F5FF5', cursor: exporting ? 'wait' : 'pointer', fontFamily: font, opacity: exporting ? 0.6 : 1, display: 'flex', alignItems: 'center', gap: 5 }}>
              {exporting ? '…' : '↓'} JSON
            </button> */}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: 4, marginBottom: 22, background: '#f1f5f9', borderRadius: 12, padding: 4, width: 'fit-content' }}>
        {[['overview','Overview'],['pages','Top Pages'],['audience','Audience']].map(([k, l]) => (
          <button key={k} className={`tab-btn${tab === k ? ' active' : ''}`} onClick={() => setTab(k)}>{l}</button>
        ))}
      </div>

      {error && (
        <div style={{ background: '#fff1f2', border: '1px solid #fecdd3', borderRadius: 12, padding: '12px 16px', color: '#ef4444', fontSize: 13, marginBottom: 20 }}>
          ⚠️ {error}
        </div>
      )}

      {/* OVERVIEW */}
      {tab === 'overview' && (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 14, marginBottom: 20 }}>
            {loading ? (
              [...Array(4)].map((_, i) => <div key={i} style={{ borderRadius: 18, overflow: 'hidden' }}><Skeleton h={110} /></div>)
            ) : [
              { icon: '👁', label: 'Page Views',     value: data?.totals.total_pageviews, change: data?.totals.pv_change, color: '#6903FE', delay: 0 },
              { icon: '👤', label: 'Unique Visitors', value: data?.totals.unique_visitors,  change: data?.totals.uv_change, color: '#1F5FF5', delay: 0.05 },
              { icon: '🔗', label: 'Sessions',        value: data?.totals.total_sessions,   color: '#f97316', delay: 0.1 },
              { icon: '📄', label: 'Pages / Session', value: data?.totals.pages_per_session, color: '#22c55e', delay: 0.15 },
            ].map((c, i) => <StatCard key={i} {...c} />)}
          </div>

          {/* Today → hourly bars | Other → daily line */}
          <Card
            title={isToday ? 'Today — Hourly Breakdown' : 'Visits Over Time'}
            subtitle={isToday ? 'Pageviews & visitors by hour' : `Daily pageviews & unique visitors — last ${range} days`}
            style={{ marginBottom: 20, animation: 'fadeUp 0.5s ease 0.2s both' }}>
            {loading ? <Skeleton h={220} /> : isToday ? (
              <HourlyChart data={data?.hourly_today ?? []} />
            ) : (
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={data?.daily_visits ?? []} margin={{ top: 4, right: 8, bottom: 0, left: -10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="date" tick={{ fontSize: 11, fill: '#94a3b8' }} tickFormatter={d => d?.slice(5)} />
                  <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} tickFormatter={fmt} />
                  <Tooltip content={<ChartTooltip />} />
                  <Legend wrapperStyle={{ fontSize: 12, paddingTop: 8 }} />
                  <Line type="monotone" dataKey="pageviews" name="Page Views" stroke="#6903FE" strokeWidth={2.5} dot={false} activeDot={{ r: 5 }} />
                  <Line type="monotone" dataKey="visitors" name="Unique Visitors" stroke="#1F5FF5" strokeWidth={2.5} dot={false} strokeDasharray="4 2" activeDot={{ r: 5 }} />
                </LineChart>
              </ResponsiveContainer>
            )}
          </Card>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, animation: 'fadeUp 0.5s ease 0.3s both' }}>
            <Card title="Device Types" subtitle="Breakdown by device category">
              {loading ? <Skeleton h={120} /> : <DistributionBar data={data?.devices ?? []} colors={DEVICE_COLORS} />}
            </Card>
            <Card title="Browsers" subtitle="Top browsers used by visitors">
              {loading ? <Skeleton h={120} /> : (
                <DistributionBar data={(data?.browsers ?? []).map(b => ({ ...b, label: b.browser }))} colors={BROWSER_COLORS} />
              )}
            </Card>
          </div>
        </>
      )}

      {/* TOP PAGES */}
      {tab === 'pages' && (
        <Card title="Top Pages" subtitle={`Most visited pages ${rangeLabel}`} style={{ animation: 'fadeUp 0.4s ease both' }}>
          {loading ? <Skeleton h={300} /> : (data?.top_pages?.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px 0', color: '#94a3b8', fontSize: 13 }}>No data yet</div>
          ) : (
            <>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data?.top_pages ?? []} layout="vertical" margin={{ top: 0, right: 16, left: 8, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" horizontal={false} />
                  <XAxis type="number" tick={{ fontSize: 11, fill: '#94a3b8' }} tickFormatter={fmt} />
                  <YAxis type="category" dataKey="page" width={140} tick={{ fontSize: 11, fill: '#64748b' }} tickFormatter={p => p.length > 20 ? p.slice(0, 20) + '…' : p} />
                  <Tooltip content={<ChartTooltip />} />
                  <Legend wrapperStyle={{ fontSize: 12 }} />
                  <Bar dataKey="views" name="Views" fill="#6903FE" radius={[0, 6, 6, 0]} />
                  <Bar dataKey="unique_visitors" name="Unique Visitors" fill="#1F5FF5" radius={[0, 6, 6, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <div style={{ marginTop: 20 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 80px 80px', padding: '6px 10px', borderRadius: 8, background: '#f8f7ff', fontSize: 11, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: 1 }}>
                  <span>Page</span><span style={{ textAlign: 'right' }}>Views</span><span style={{ textAlign: 'right' }}>Uniques</span>
                </div>
                {data?.top_pages?.map((p, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 80px 80px', padding: '9px 10px', borderBottom: '1px solid #f8f7ff', fontSize: 13, alignItems: 'center', background: i % 2 === 0 ? '#fff' : '#fafbff', borderRadius: 8 }}>
                    <span style={{ color: '#475569', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.page}</span>
                    <span style={{ textAlign: 'right', fontWeight: 700, color: '#1e293b' }}>{fmt(p.views)}</span>
                    <span style={{ textAlign: 'right', color: '#64748b' }}>{fmt(p.unique_visitors)}</span>
                  </div>
                ))}
              </div>
            </>
          ))}
        </Card>
      )}

      {/* AUDIENCE */}
      {tab === 'audience' && (
        // FIX: now a 3-column grid to fit Countries, Cities, and Device/Browser side by side
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, animation: 'fadeUp 0.4s ease both' }}>

          {/* Countries */}
          <Card title="Top Countries" subtitle="Unique visitors by country">
            {loading ? <Skeleton h={280} /> : (data?.countries?.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px 0', color: '#94a3b8', fontSize: 13 }}>No location data yet</div>
            ) : (() => {
              const max = data.countries[0]?.visitors ?? 1
              return data.countries.map((c, i) => <CountryRow key={i} {...c} max={max} />)
            })())}
          </Card>

          {/* FIX: Cities panel */}
          <Card title="Top Cities" subtitle="Unique visitors by city">
            {loading ? <Skeleton h={280} /> : ((!data?.cities || data.cities.length === 0) ? (
              <div style={{ textAlign: 'center', padding: '40px 0', color: '#94a3b8', fontSize: 13 }}>No city data yet</div>
            ) : (() => {
              const max = data.cities[0]?.visitors ?? 1
              return data.cities.map((c, i) => <CityRow key={i} {...c} max={max} />)
            })())}
          </Card>

          {/* Devices + Browsers stacked */}
          <Card title="Device Types">
            {loading ? <Skeleton h={100} /> : <DistributionBar data={data?.devices ?? []} colors={DEVICE_COLORS} />}
          </Card>
          <Card title="Browsers">
            {loading ? <Skeleton h={120} /> : (
              <DistributionBar data={(data?.browsers ?? []).map(b => ({ ...b, label: b.browser }))} colors={BROWSER_COLORS} />
            )}
          </Card>

        </div>
      )}
    </div>
  )
}