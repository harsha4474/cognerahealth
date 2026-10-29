import { useNavigate } from 'react-router-dom'

/** Renders trusted first-party HTML (legal copy) and routes internal links client-side. */
export default function Prose({ html, className = '' }) {
  const navigate = useNavigate()
  const onClick = (e) => {
    const a = e.target.closest('a')
    if (!a) return
    const href = a.getAttribute('href') || ''
    if (href.startsWith('/') && !e.metaKey && !e.ctrlKey) {
      e.preventDefault()
      navigate(href)
    } else if (href.startsWith('#')) {
      e.preventDefault()
      navigate({ hash: href })
    }
  }
  return <div className={`prose ${className}`} onClick={onClick} dangerouslySetInnerHTML={{ __html: html }} />
}
