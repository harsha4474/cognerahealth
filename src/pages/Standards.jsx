import { useEffect, useMemo, useState } from 'react'
import { usePageTitle, PageHero, Section, SectionHeader, CardGrid, Checklist } from '../components/ui'
import Icon from '../components/Icon'
import data from '../content/standards-data.json'

const { orgs, categories, capabilities } = data
const allIds = Object.keys(orgs)

const layers = ['Mental health', 'Behavioral health', 'Wellness', 'Well-being', 'Research', 'Clinical', 'Population Health']
const key = (s) => s.trim().toUpperCase()
const inLayer = (o, layer) => o.cats.some(([l]) => key(l) === key(layer)) || key(o.layer) === key(layer)

const pillars = [
  { icon: 'book', title: 'Evidence Integration', text: 'Continuously integrate trusted standards and guidelines across all care layers.', note: 'Clinical · Research' },
  { icon: 'compass', title: 'Intelligent Alignment', text: 'Map care workflows to evidence-based standards and best practices.', note: 'Mental Health · Behavioral Health' },
  { icon: 'shieldCheck', title: 'Outcome Validation', text: 'Validate outcomes against recognized measures and research frameworks.', note: 'Research · Population Health' },
  { icon: 'scale', title: 'Governance & Compliance', text: 'Ensure ethical, regulatory, and privacy compliance across all standards.', note: 'Clinical · All Orgs' },
]

const modes = [
  { id: 'category', label: 'By category', icon: 'layers' },
  { id: 'layer', label: 'By care layer', icon: 'sliders' },
  { id: 'all', label: 'All organizations', icon: 'globe' },
  { id: 'cap', label: 'Cognera Capabilities', icon: 'sparkles' },
]

function OrgCard({ id, onOpen }) {
  const o = orgs[id]
  return (
    <button className="card org-card" onClick={() => onOpen(id)}>
      <span className="org-abbr">{o.abbr}</span>
      <strong>{o.name}</strong>
      <span className="org-why">{o.why}</span>
      <span className="org-pills">
        {o.cats.map(([l]) => <em key={l}>{l}</em>)}
      </span>
    </button>
  )
}

function OrgDialog({ id, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.classList.add('no-scroll')
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.classList.remove('no-scroll')
    }
  }, [onClose])
  const o = orgs[id]
  return (
    <div className="dialog-backdrop" onClick={onClose}>
      <div className="dialog" role="dialog" aria-modal="true" aria-labelledby="org-title" onClick={(e) => e.stopPropagation()}>
        <button className="dialog-close" onClick={onClose} aria-label="Close"><Icon name="close" /></button>
        <p className="press-meta">{o.abbr} · {o.layer}</p>
        <h2 id="org-title">{o.name}</h2>
        <p className="org-why big">{o.why}</p>
        <div className="org-pills">{o.cats.map(([l]) => <em key={l}>{l}</em>)}</div>
        <dl className="org-facts">
          <dt>Mission</dt><dd>{o.mission}</dd>
          <dt>Impact</dt><dd>{o.impact}</dd>
        </dl>
        <p className="label-caps">Key features</p>
        <ul className="tag-list">{o.features.map((f) => <li key={f}>{f}</li>)}</ul>
        {(o.healscript.length > 0 || o.healconnect.length > 0) && (
          <div className="org-align">
            {o.healscript.length > 0 && (
              <div><p className="label-caps">HealScript™ alignment</p><Checklist items={o.healscript} className="checklist-sm" /></div>
            )}
            {o.healconnect.length > 0 && (
              <div><p className="label-caps">HealConnect™ alignment</p><Checklist items={o.healconnect} className="checklist-sm" /></div>
            )}
          </div>
        )}
        <a className="btn btn-secondary mt-24" href={o.url} target="_blank" rel="noopener noreferrer">
          Open Website <Icon name="external" size={18} />
        </a>
      </div>
    </div>
  )
}

export default function Standards() {
  usePageTitle('Standards')
  const [mode, setMode] = useState('category')
  const [cat, setCat] = useState(categories[0].id)
  const [layer, setLayer] = useState(layers[0])
  const [open, setOpen] = useState(null)

  const ids = useMemo(() => {
    if (mode === 'category') return categories.find((c) => c.id === cat).orgs
    if (mode === 'layer') return allIds.filter((id) => inLayer(orgs[id], layer))
    return allIds
  }, [mode, cat, layer])

  return (
    <>
      <PageHero
        eyebrow="Standards"
        title="Authority Organizations"
        lead="Trusted clinical standards, scientific research, behavioral science, and global well-being frameworks guiding everything we build."
        image="/images/standards.webp"
        related={[
          { label: 'CogneraAI™', to: '/cogneraai' },
          { label: 'Platform', to: '/platform' },
          { label: 'Solutions', to: '/solutions' },
          { label: 'HealScript™', to: '/healscript' },
          { label: 'HealConnect™', to: '/healconnect' },
        ]}
      />

      <Section>
        <SectionHeader
          eyebrow="Standards framework"
          title="Clinical, research, wellness, and governance authorities"
          lead="We align with leading authorities and frameworks to ensure evidence-based, ethical, and outcomes-driven care across every layer of our platform."
        />
        <CardGrid items={pillars} cols={4} />
      </Section>

      <Section tone="soft" id="explorer">
        <SectionHeader
          eyebrow="Explore"
          title={`${allIds.length} organizations across ${categories.length} categories`}
          lead="Choose a category or filter by care layer, then select an organization to view mission, impact, key features, URL, and platform alignment."
        />
        <div className="tab-list" role="tablist">
          {modes.map((m) => (
            <button key={m.id} role="tab" aria-selected={mode === m.id} className={mode === m.id ? 'is-active' : ''} onClick={() => setMode(m.id)}>
              <Icon name={m.icon} size={18} /> {m.label}
            </button>
          ))}
        </div>

        {mode === 'category' && (
          <div className="cat-list">
            {categories.map((c) => (
              <button key={c.id} className={`cat-chip${c.id === cat ? ' is-active' : ''}`} onClick={() => setCat(c.id)}>
                <span>{c.num}</span>
                <strong>{c.title}</strong>
                <em>{c.desc}</em>
              </button>
            ))}
          </div>
        )}
        {mode === 'layer' && (
          <div className="filter-row">
            {layers.map((l) => (
              <button key={l} className={`filter-chip${l === layer ? ' is-active' : ''}`} onClick={() => setLayer(l)}>
                {l} <span>{allIds.filter((id) => inLayer(orgs[id], l)).length}</span>
              </button>
            ))}
          </div>
        )}

        {mode === 'cap' ? (
          <div className="grid grid-3">
            {capabilities.map((c) => (
              <article key={c.title} className={`card cap-card${c.summary ? ' is-summary' : ''}`}>
                <p className="press-meta">{c.label}</p>
                <h3>{c.title}</h3>
                <p>{c.subtitle}</p>
                <p className="label-caps">Aligned with</p>
                <ul className="tag-list">{c.aligned.map((a) => <li key={a}>{a}</li>)}</ul>
                <p className="label-caps">Delivers</p>
                <Checklist items={c.delivers} className="checklist-sm" />
                <p className="card-note">{c.why}</p>
              </article>
            ))}
          </div>
        ) : mode === 'all' ? (
          <table className="data-table org-table">
            <thead><tr><th>Organization</th><th>Categories</th><th>Care layer</th><th>Impact (brief)</th><th>Website</th></tr></thead>
            <tbody>
              {allIds.map((id) => {
                const o = orgs[id]
                return (
                  <tr key={id}>
                    <td><button className="link-btn" onClick={() => setOpen(id)}>{o.name} <span>({o.abbr})</span></button></td>
                    <td data-label="Categories">{o.cats.map(([l]) => l).join(', ')}</td>
                    <td data-label="Care layer">{o.layer}</td>
                    <td data-label="Impact (brief)">{o.why}</td>
                    <td data-label="Website"><a className="inline-link" href={o.url} target="_blank" rel="noopener noreferrer">Open</a></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        ) : (
          <div className="grid grid-3 org-grid">
            {ids.map((id) => <OrgCard key={id} id={id} onOpen={setOpen} />)}
          </div>
        )}
      </Section>

      {open && <OrgDialog id={open} onClose={() => setOpen(null)} />}
    </>
  )
}
