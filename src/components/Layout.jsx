import { Suspense, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import CookieBanner from './CookieBanner'
import seo from '../content/seo.json'

const SITE = 'https://www.cognerahealth.ai'

function setMeta(selector, attr, value) {
  const el = document.head.querySelector(selector)
  if (el) el.setAttribute(attr, value)
}

/** Per-route title, description and canonical URL (same values as the previous site). */
function SeoManager() {
  const { pathname } = useLocation()
  useEffect(() => {
    const path = pathname.replace(/\/+$/, '') || '/'
    const meta = seo[path]
    if (!meta) return
    document.title = meta.title
    setMeta('meta[name="description"]', 'content', meta.description)
    setMeta('link[rel="canonical"]', 'href', SITE + path)
    setMeta('meta[property="og:url"]', 'content', SITE + path)
  }, [pathname])
  return null
}

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      // Wait a frame so the target page has rendered.
      const id = decodeURIComponent(hash.slice(1))
      requestAnimationFrame(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}

export default function Layout() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <ScrollManager />
      <SeoManager />
      <Header />
      <main id="main">
        <Suspense fallback={<div className="page-loading" />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
