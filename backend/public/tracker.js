// public/tracker.js
// ─────────────────────────────────────────────────────────────────────────────
// Lightweight site visitor tracker (~1.5KB minified)
// Add to your site:  <script src="/tracker.js" defer></script>
// ─────────────────────────────────────────────────────────────────────────────
;(function () {
  'use strict'

  const API_ENDPOINT = 'https://login-solution-ep9v.onrender.com/api/analytics/track'

  // ── Generate or reuse a persistent visitor ID (localStorage) ─────────────
  function getVisitorId() {
    try {
      let id = localStorage.getItem('_vid')
      if (!id) {
        id = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11)
          .replace(/[018]/g, c =>
            (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
          )
        localStorage.setItem('_vid', id)
      }
      return id
    } catch (e) {
      return 'anon-' + Math.random().toString(36).slice(2)
    }
  }

  // ── Generate or reuse a session ID (sessionStorage — resets on tab close) ─
  function getSessionId() {
    try {
      let id = sessionStorage.getItem('_sid')
      if (!id) {
        id = Date.now().toString(36) + Math.random().toString(36).slice(2)
        sessionStorage.setItem('_sid', id)
      }
      return id
    } catch (e) {
      return 'sess-' + Math.random().toString(36).slice(2)
    }
  }

  // ── Detect device type from screen width ──────────────────────────────────
  function getDevice() {
    const w = window.innerWidth
    if (w <= 768) return 'mobile'
    if (w <= 1024) return 'tablet'
    return 'desktop'
  }

  // ── Parse browser name from user agent ───────────────────────────────────
  function getBrowser() {
    const ua = navigator.userAgent
    if (/Edg\//.test(ua))     return 'Edge'
    if (/OPR\//.test(ua))     return 'Opera'
    if (/Chrome\//.test(ua))  return 'Chrome'
    if (/Firefox\//.test(ua)) return 'Firefox'
    if (/Safari\//.test(ua))  return 'Safari'
    return 'Other'
  }

  // ── Parse OS name from user agent ────────────────────────────────────────
  function getOS() {
    const ua = navigator.userAgent
    if (/Windows/.test(ua))   return 'Windows'
    if (/Mac OS X/.test(ua))  return 'macOS'
    if (/Android/.test(ua))   return 'Android'
    if (/iPhone|iPad/.test(ua)) return 'iOS'
    if (/Linux/.test(ua))     return 'Linux'
    return 'Other'
  }

  // ── Send a pageview hit ───────────────────────────────────────────────────
  function track() {
    // Skip bots and prerender
    if (
      /bot|crawler|spider|prerender|phantom|headless/i.test(navigator.userAgent) ||
      navigator.webdriver
    ) return

    const payload = {
      visitor_id:  getVisitorId(),
      session_id:  getSessionId(),
      page:        window.location.pathname,
      referrer:    document.referrer || null,
      device:      getDevice(),
      browser:     getBrowser(),
      os:          getOS(),
      user_agent:  navigator.userAgent,
    }

    // Use sendBeacon for reliability (won't be cancelled on page unload)
    const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' })
    if (navigator.sendBeacon) {
      navigator.sendBeacon(API_ENDPOINT, blob)
    } else {
      // Fallback for older browsers
      fetch(API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        keepalive: true,
      }).catch(() => {})
    }
  }

  // ── Track initial page load ───────────────────────────────────────────────
  track()

  // ── Track SPA route changes (React Router / history API) ─────────────────
  const _pushState = history.pushState.bind(history)
  history.pushState = function (...args) {
    _pushState(...args)
    setTimeout(track, 0)
  }
  window.addEventListener('popstate', () => setTimeout(track, 0))

})()