import { useRef, useState } from 'react'
import { usePageTitle, PageHero, Section, SectionHeader, Checklist, Button } from '../components/ui'
import Icon from '../components/Icon'
import press from '../content/press.json'

const icons = { advisors: 'users', launchpad: 'award', platform: 'hexagon' }

export default function Press() {
  usePageTitle('Press')
  const [activeId, setActiveId] = useState(press[0].id)
  const detailRef = useRef(null)
  const item = press.find((p) => p.id === activeId)

  const select = (id) => {
    setActiveId(id)
    if (window.matchMedia('(max-width: 960px)').matches) {
      requestAnimationFrame(() => detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Press"
        title="News & Updates"
        lead="Stay up to date on Cognera Health milestones, announcements, and media coverage."
        image="/images/news.webp"
      />
      <Section tone="soft">
        <SectionHeader eyebrow="Press" title="Latest Cognera Health Updates" lead="Announcements, recognitions, and media coverage." />
        <div className="press-layout">
          <div className="press-list" role="list">
            {press.map((p) => (
              <button
                key={p.id}
                role="listitem"
                className={`press-item${p.id === activeId ? ' is-active' : ''}`}
                aria-pressed={p.id === activeId}
                onClick={() => select(p.id)}
              >
                <span className="icon-tile"><Icon name={icons[p.id]} /></span>
                <span>
                  <span className="press-meta">{p.label} · {p.date}</span>
                  <strong>{p.title}</strong>
                  <span className="press-summary">{p.summary}</span>
                </span>
              </button>
            ))}
          </div>

          <article className="press-detail" ref={detailRef} aria-live="polite">
            <p className="press-meta"><Icon name={icons[item.id]} size={16} /> {item.label} · {item.date}</p>
            <h2>{item.title}</h2>
            <div className="prose">
              {item.paragraphs.map((html, i) => (
                // Trusted first-party copy that contains inline links.
                <p key={i} dangerouslySetInnerHTML={{ __html: html }} />
              ))}
            </div>
            {item.features.length > 0 && <Checklist items={item.features} className="mt-24" />}
            {item.tags.length > 0 && (
              <ul className="tag-list press-tags">
                {item.tags.map((t) => (
                  <li key={t}>
                    <a href={`https://www.linkedin.com/search/results/all/?keywords=${encodeURIComponent(t)}`} target="_blank" rel="noopener noreferrer">{t}</a>
                  </li>
                ))}
              </ul>
            )}
            {item.ctaHref && (
              <Button to={item.ctaHref} variant="secondary" icon="external" className="mt-24">{item.ctaText}</Button>
            )}
          </article>
        </div>
      </Section>
    </>
  )
}
