export default function Logo() {
  return (
    <a href="#top" className="logo" aria-label="Cognera Health home">
      <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="var(--brand)" />
        <path d="M21 11.5a7 7 0 1 0 0 9" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
        <circle cx="22" cy="16" r="2" fill="var(--accent)" />
      </svg>
      <span>
        Cognera<span className="logo-light"> Health</span>
        <sup>™</sup>
      </span>
    </a>
  )
}
