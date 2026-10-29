import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

/** Renders trusted first-party HTML (legal copy) and routes internal links client-side. */
export default function Prose({ html, className = '' }) {
  const navigate = useNavigate()
  const ref = useRef(null)

  // Wrap wide tables in a focusable scroll region so keyboard users can scroll them (WCAG 2.1.1).
  useEffect(() => {
    ref.current?.querySelectorAll('table').forEach((t) => {
      if (t.parentElement.classList.contains('table-scroll')) return
      const wrap = document.createElement('div')
      wrap.className = 'table-scroll'
      wrap.tabIndex = 0
      wrap.setAttribute('role', 'region')
      wrap.setAttribute('aria-label', 'Scrollable table')
      t.replaceWith(wrap)
      wrap.appendChild(t)
    })
  }, [html])

  const onClick = (e) => {
    const a = e.target.closest('a')
    if (!a) return
    const href = a.getAttribute('href') || ''
    // Let the browser handle files (PDFs) and links meant for a new tab.
    const isFile = /\.[a-z0-9]+$/i.test(href.split(/[?#]/)[0])
    if (href.startsWith('/') && !isFile && a.target !== '_blank' && !e.metaKey && !e.ctrlKey) {
      e.preventDefault()
      navigate(href)
    } else if (href.startsWith('#')) {
      e.preventDefault()
      navigate({ hash: href })
    }
  }
  return <div ref={ref} className={`prose ${className}`} onClick={onClick} dangerouslySetInnerHTML={{ __html: html }} />
}
