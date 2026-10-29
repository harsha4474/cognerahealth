import { useEffect, useState } from 'react'

const KEY = 'ch-cookie-consent'

export default function CookieBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    try {
      setShow(!localStorage.getItem(KEY))
    } catch {
      setShow(true)
    }
  }, [])

  if (!show) return null

  const agree = () => {
    try {
      localStorage.setItem(KEY, '1')
    } catch {
      /* storage unavailable: just hide for this visit */
    }
    setShow(false)
  }

  return (
    <div className="cookie-banner" role="region" aria-label="Cookie notice">
      <p>We use cookies to enhance your browsing experience. By continuing, you agree to our cookie policy.</p>
      <button className="btn btn-dark btn-sm" onClick={agree}>
        Agree
      </button>
    </div>
  )
}
