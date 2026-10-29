import { Link } from 'react-router-dom'

export default function Logo({ light = false }) {
  return (
    <Link to="/" className={`logo${light ? ' logo-light' : ''}`} aria-label="Cognera Health home">
      <img src="/images/logo.png" alt="" width="34" height="32" />
      <span>
        Cognera Health<sup>™</sup>
      </span>
    </Link>
  )
}
