import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | Cognera Health™` : 'Cognera Health™ — AI-powered continuous care platform'
  }, [title])
}

const isExternal = (href) => /^(https?:|mailto:|tel:)/.test(href)

export function Button({ to, children, variant = 'primary', size, icon, className = '' }) {
  const cls = `btn btn-${variant}${size ? ` btn-${size}` : ''} ${className}`.trim()
  const inner = (
    <>
      {children}
      {icon && <Icon name={icon} size={18} />}
    </>
  )
  if (isExternal(to)) {
    const ext = to.startsWith('http')
    return (
      <a href={to} className={cls} {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {inner}
      </a>
    )
  }
  return (
    <Link to={to} className={cls}>
      {inner}
    </Link>
  )
}

export function Actions({ items, className = '' }) {
  if (!items?.length) return null
  return (
    <div className={`actions ${className}`}>
      {items.map((a, i) => (
        <Button key={a.label} to={a.to} variant={a.variant ?? (i === 0 ? 'primary' : 'secondary')} icon={i === 0 ? 'arrowRight' : undefined}>
          {a.label}
        </Button>
      ))}
    </div>
  )
}

export function Eyebrow({ children, light }) {
  return <p className={`eyebrow${light ? ' eyebrow-light' : ''}`}>{children}</p>
}

/** "Explore" row of quiet links to related pages. */
export function Related({ links, label = 'Explore' }) {
  if (!links?.length) return null
  return (
    <div className="related">
      <span>{label}</span>
      {links.map((l) => (
        <Link key={l.to} to={l.to}>
          {l.label}
          <Icon name="arrowUpRight" size={14} />
        </Link>
      ))}
    </div>
  )
}

export function ClinicianNote({ title = 'Augmenting clinicians—not replacing them.', children }) {
  return (
    <div className="clinician-note">
      <Icon name="shieldCheck" size={20} />
      <p>
        <strong>{title}</strong> {children}
      </p>
    </div>
  )
}

function Paras({ text, className }) {
  if (!text) return null
  const list = Array.isArray(text) ? text : [text]
  return list.map((t, i) => (
    <p key={i} className={className}>
      {t}
    </p>
  ))
}

export function PageHero({ eyebrow, title, lead, image, imageAlt = '', actions, related, note, chips, children, imageFit }) {
  return (
    <section className={`page-hero${image ? ' has-image' : ''}`}>
      <div className="hero-glow" aria-hidden="true" />
      <div className="container page-hero-grid">
        <div className="page-hero-copy">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className={title.length > 70 ? 'h1-long' : undefined}>{title}</h1>
          <Paras text={lead} className="lead" />
          {note && <ClinicianNote title={note.title}>{note.text}</ClinicianNote>}
          <Actions items={actions} />
          {children}
          {chips && (
            <ul className="chip-row">
              {chips.map((c) => (
                <li key={c}>
                  <Icon name="check" size={14} strokeWidth={2.4} /> {c}
                </li>
              ))}
            </ul>
          )}
        </div>
        {image && (
          <div className={`page-hero-media${imageFit === 'contain' ? ' is-contain' : ''}`}>
            <img src={image} alt={imageAlt} />
          </div>
        )}
      </div>
      {related && (
        <div className="container">
          <Related links={related} />
        </div>
      )}
    </section>
  )
}

export function Section({ tone = 'white', id, className = '', children, narrow }) {
  return (
    <section id={id} className={`section tone-${tone} ${className}`.trim()}>
      <div className={`container${narrow ? ' container-narrow' : ''}`}>{children}</div>
    </section>
  )
}

export function SectionHeader({ eyebrow, title, lead, align = 'left', light, children }) {
  return (
    <div className={`section-header align-${align}`}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      {title && <h2>{title}</h2>}
      <Paras text={lead} className="section-lead" />
      {children}
    </div>
  )
}

export function Checklist({ items, className = '' }) {
  return (
    <ul className={`checklist ${className}`}>
      {items.map((t) => (
        <li key={typeof t === 'string' ? t : t.title}>
          <span className="check-dot">
            <Icon name="check" size={14} strokeWidth={2.6} />
          </span>
          <span>
            {typeof t === 'string' ? t : (
              <>
                <strong>{t.title}</strong> {t.text}
              </>
            )}
          </span>
        </li>
      ))}
    </ul>
  )
}

export function Card({ icon, num, title, text, note, notes, bullets, children, className = '' }) {
  return (
    <article className={`card ${className}`}>
      {(icon || num) && (
        <div className="card-head">
          {icon && (
            <span className="icon-tile">
              <Icon name={icon} />
            </span>
          )}
          {num && <span className="card-num">{num}</span>}
        </div>
      )}
      {title && <h3>{title}</h3>}
      <Paras text={text} />
      {bullets && <Checklist items={bullets} className="checklist-sm" />}
      {children}
      {note && <p className="card-note">{note}</p>}
      {notes && (
        <div className="card-notes">
          {notes.map((n) => (
            <p key={n} className="card-note">
              {n}
            </p>
          ))}
        </div>
      )}
    </article>
  )
}

export function CardGrid({ items, cols = 3, className = '', cardClass = '' }) {
  return (
    <div className={`grid grid-${cols} ${className}`}>
      {items.map((it, i) => (
        <Card key={it.title ?? i} {...it} className={cardClass} />
      ))}
    </div>
  )
}

export function Steps({ items, light }) {
  return (
    <ol className={`steps steps-${items.length}${light ? ' steps-light' : ''}`}>
      {items.map((s, i) => (
        <li key={s.title}>
          <span className="step-num">{s.num ?? String(i + 1).padStart(2, '0')}</span>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </li>
      ))}
    </ol>
  )
}

export function Faq({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="faq">
      {items.map((f, i) => {
        const isOpen = open === i
        return (
          <div key={f.q} className={`faq-item${isOpen ? ' is-open' : ''}`}>
            <h3>
              <button aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)}>
                <span>{f.q}</span>
                <Icon name="plus" size={20} />
              </button>
            </h3>
            <div className="faq-answer" hidden={!isOpen}>
              <p>{f.a}</p>
              {f.link && (
                <Link to={f.link.to} className="text-link">
                  {f.link.label} <Icon name="arrowRight" size={16} />
                </Link>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export function FaqSection({ id, eyebrow, title, items, tone = 'white' }) {
  return (
    <Section tone={tone} id={id}>
      <div className="faq-layout">
        <div>
          <SectionHeader eyebrow={eyebrow} title={title} />
          <div className="faq-help">
            <p>Still have questions? Reach out to our support team for assistance.</p>
            <Button to="/contact" variant="secondary">
              Contact Support
            </Button>
          </div>
        </div>
        <Faq items={items} />
      </div>
    </Section>
  )
}

export function CtaBand({ eyebrow, title, text, actions }) {
  return (
    <section className="cta-band">
      <div className="container">
        <div className="cta-inner">
          <div>
            {eyebrow && <Eyebrow light>{eyebrow}</Eyebrow>}
            <h2>{title}</h2>
            {text && <p>{text}</p>}
          </div>
          <div className="actions">
            {actions.map((a, i) => (
              <Button key={a.label} to={a.to} variant={i === 0 ? 'light' : 'ghost-light'} icon={i === 0 ? 'arrowRight' : undefined}>
                {a.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Figure({ src, alt, caption, frame = true, className = '' }) {
  return (
    <figure className={`figure${frame ? ' figure-frame' : ''} ${className}`}>
      <img src={src} alt={alt} loading="lazy" />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}

export function Split({ media, children, reverse, align = 'center', className = '' }) {
  return (
    <div className={`split${reverse ? ' split-reverse' : ''} align-${align} ${className}`}>
      <div className="split-copy">{children}</div>
      <div className="split-media">{media}</div>
    </div>
  )
}

export function Tabs({ tabs, render, className = '' }) {
  const [active, setActive] = useState(0)
  return (
    <div className={`tabs ${className}`}>
      <div className="tab-list" role="tablist">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            role="tab"
            aria-selected={active === i}
            className={active === i ? 'is-active' : ''}
            onClick={() => setActive(i)}
          >
            {t.icon && <Icon name={t.icon} size={18} />}
            {t.label}
          </button>
        ))}
      </div>
      <div className="tab-panel" role="tabpanel">
        {render(tabs[active], active)}
      </div>
    </div>
  )
}

export function ContactCard({ icon, title, text, href, label }) {
  return (
    <article className="card contact-card">
      <span className="icon-tile">
        <Icon name={icon} />
      </span>
      <h3>{title}</h3>
      <p>{text}</p>
      <Button to={href} variant="secondary" size="sm" icon="arrowRight">
        {label}
      </Button>
    </article>
  )
}

export function GetInTouch({ items }) {
  return (
    <Section tone="soft">
      <SectionHeader title="Get in Touch" align="center" />
      <div className="grid grid-3">
        {items.map((c) => (
          <ContactCard key={c.title} {...c} />
        ))}
      </div>
    </Section>
  )
}
