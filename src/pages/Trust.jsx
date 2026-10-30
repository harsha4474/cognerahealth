import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { usePageTitle, PageHero, CtaBand } from '../components/ui'
import Icon from '../components/Icon'
import Prose from '../components/Prose'
import sections from '../content/legal/trust.json'

const icons = {
  'privacy-policy': 'lock',
  'terms-conditions': 'fileText',
  'data-deletion': 'database',
  'do-not-sell-or-share': 'shield',
  'trust-center': 'shieldCheck',
  'data-retention': 'refresh',
  compliance: 'clipboard',
  'governance-program-structure': 'landmark',
  'contact-section': 'mail',
}

function findSection(hash) {
  if (!hash) return null
  return sections.find((s) => s.id === hash || s.html.includes(`id="${hash}"`)) ?? null
}

export default function Trust() {
  usePageTitle('Trust Center')
  const { hash } = useLocation()
  const navigate = useNavigate()
  const target = decodeURIComponent(hash.slice(1))
  const [activeId, setActiveId] = useState(() => findSection(target)?.id ?? sections[0].id)
  const active = useMemo(() => sections.find((s) => s.id === activeId), [activeId])

  useEffect(() => {
    const s = findSection(target)
    if (!s) return
    setActiveId(s.id)
    requestAnimationFrame(() => {
      const el = document.getElementById(target === s.id ? 'trust-content' : target)
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [target])

  return (
    <>
      <PageHero
        eyebrow="Trust Center • Security • Privacy • Compliance • Responsible AI"
        title="Trusted by Design. Secure by Default. Governed Responsibly."
        lead="Cognera Health™ is built with privacy, security, compliance, responsible AI governance, and operational resilience at its core for mental health, behavioral health, wellness, integrated care, and continuous care delivery."
        actions={[
          { label: 'About CogneraAI™', to: '/cogneraai' },
          { label: 'About Platform', to: '/platform' },
          { label: 'About Solutions', to: '/solutions' },
          { label: 'About HealScript™', to: '/healscript' },
          { label: 'About HealConnect™', to: '/healconnect' },
        ]}
        image="/images/CHAI.webp"
        imageAlt="Clinician collaborating with responsible AI"
      />

      <section className="section tone-soft trust-section">
        <div className="container trust-layout">
          <aside className="trust-nav" aria-label="Trust Center sections">
            <p className="label-caps">Trust Center</p>
            <nav>
              {sections.map((s) => (
                <Link
                  key={s.id}
                  to={`#${s.id}`}
                  className={s.id === activeId ? 'is-active' : ''}
                  aria-current={s.id === activeId ? 'page' : undefined}
                >
                  <Icon name={icons[s.id]} size={18} />
                  {s.label}
                </Link>
              ))}
            </nav>
            <select
              className="trust-select"
              value={activeId}
              aria-label="Choose a Trust Center section"
              onChange={(e) => navigate(`#${e.target.value}`)}
            >
              {sections.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}
            </select>
          </aside>

          <article className="trust-content" id="trust-content">
            <header className="trust-head">
              {active.eyebrow && <p className="eyebrow">{active.eyebrow}</p>}
              <h2>{active.title || active.label}</h2>
              {active.intro?.map((t) => <p key={t} className="section-lead">{t}</p>)}
            </header>
            {active.toc.length > 0 && (
              <details className="toc" open>
                <summary>On this page <Icon name="chevronDown" size={16} /></summary>
                <ul>
                  {active.toc.map((t) => (
                    <li key={t.href}><Link to={t.href}>{t.label}</Link></li>
                  ))}
                </ul>
              </details>
            )}
            <Prose html={active.html} key={active.id} />
          </article>
        </div>
      </section>

      <div className="tone-soft">
        <CtaBand
          title="Built for trust. Designed for care."
          text="Explore how Cognera Health™ delivers continuous, secure, responsible, and clinically grounded care technology."
          actions={[
            { label: 'Explore Platform', to: '/platform' },
            { label: 'Explore Solutions', to: '/solutions' },
            { label: 'Contact Us', to: '/contact' },
          ]}
        />
      </div>
    </>
  )
}
