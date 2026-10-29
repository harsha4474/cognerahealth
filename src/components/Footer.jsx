import Logo from './Logo'
import { footerLinks } from '../content'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo />
          <p className="footer-tag">
            Cognitive and Collaborative Intelligence™ for continuous, integrated care.
          </p>
          <a className="footer-social" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group}>
            <h4>{group}</h4>
            <ul>
              {links.map((l) => (
                <li key={l}>
                  <a href="#top">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container footer-bottom">
        © {new Date().getFullYear()} Cognera Health, Inc.™ All rights reserved.
      </div>
    </footer>
  )
}
