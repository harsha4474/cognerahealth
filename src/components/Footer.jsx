import { Link } from 'react-router-dom'
import Logo from './Logo'
import Icon from './Icon'
import { footerLinks, LINKEDIN } from '../nav'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Logo light />
          <p>
            A unified platform powered by CogneraAI™ and Cognitive and Collaborative Intelligence™ for
            continuous, integrated care across mental health, behavioral health, and wellness.
          </p>
        </div>
        <div className="footer-col">
          <h3>Company</h3>
          <ul className="footer-grid">
            {footerLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
            <li>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="footer-linkedin">
                <Icon name="linkedin" size={16} /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Cognera Health, Inc.™ All rights reserved.</p>
      </div>
    </footer>
  )
}
