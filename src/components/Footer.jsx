import { Link } from 'react-router-dom'
import Logo from './Logo'
import Icon from './Icon'
import { footerNav, LINKEDIN } from '../nav'

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
          <div className="footer-social">
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="Cognera Health on LinkedIn">
              <Icon name="linkedin" size={20} />
            </a>
            <a href="mailto:info@cognerahealth.ai" aria-label="Email Cognera Health">
              <Icon name="mail" size={20} />
            </a>
          </div>
        </div>
        {footerNav.map((col) => (
          <div key={col.title} className="footer-col">
            <h3>{col.title}</h3>
            <ul>
              {col.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container">
        <div className="footer-partner">
          <span>Partners</span>
          <img src="/images/microsoft-for-startups.png" alt="Microsoft for Startups" width="120" height="51" />
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Cognera Health, Inc.™ All rights reserved.</p>
        <p>
          <Link to="/trust#privacy-policy">Privacy</Link>
          <Link to="/trust#terms-conditions">Terms</Link>
          <Link to="/contact">Contact</Link>
        </p>
      </div>
    </footer>
  )
}
