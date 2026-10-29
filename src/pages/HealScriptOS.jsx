import { useMemo, useState } from 'react'
import { PageHero, Section, SectionHeader, CtaBand } from '../components/ui'
import Icon from '../components/Icon'
import { Disclaimer } from '../components/ProductBits'
import sections from '../content/operations.json'

const icons = ['brain', 'message', 'stethoscope', 'activity', 'barChart', 'cpu', 'database', 'puzzle', 'building', 'sparkles']
const total = sections.reduce((n, s) => n + s.rows.length, 0)

// Metric tables repeat the section name in their first column; drop it when displaying.
const columns = (s) => (s.headers[0] === 'Section' ? s.headers.slice(1) : s.headers)
const cells = (s, row) => (s.headers[0] === 'Section' ? row.slice(1) : row)

export default function HealScriptOS() {
  const [active, setActive] = useState('all')
  const [query, setQuery] = useState('')

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return sections
      .map((s, i) => ({ ...s, i }))
      .filter((s) => active === 'all' || s.i === active)
      .map((s) => ({ ...s, rows: q ? s.rows.filter((r) => r.join(' ').toLowerCase().includes(q)) : s.rows }))
      .filter((s) => s.rows.length)
  }, [active, query])
  const shown = visible.reduce((n, s) => n + s.rows.length, 0)

  return (
    <>
      <PageHero
        eyebrow="HealScript™ Operations Center"
        title="Operations Intelligence Dashboard"
        lead={[
          'OperationsAI™ Assistant — site performance review, prior-period change detection, and operations intelligence summaries.',
          'Explore every operational, clinical, engagement, financial, technical, and enterprise metric tracked across the HealScript™ Operations Center.',
        ]}
        actions={[{ label: 'Explore metrics', to: '#metrics' }, { label: 'About HealScript™', to: '/healscript' }]}
        image="/images/chopscenter.webp"
        imageFit="contain"
        imageAlt="HealScript Operations Intelligence dashboard preview"
        related={[{ label: 'CogneraAI™', to: '/cogneraai' }, { label: 'HealScript™', to: '/healscript' }]}
      >
        <Disclaimer>Disclaimer: Preview version only. Dashboard metrics shown are illustrative examples. Final live system functionality and UI may vary.</Disclaimer>
      </PageHero>

      <Section tone="soft" id="metrics">
        <SectionHeader
          eyebrow="Operations metric explorer"
          title="All Operations"
          lead={`${total} metrics across ${sections.length} areas of the Enterprise View — each with its target outcome and strategic value.`}
        />
        <div className="ops-layout">
          <aside className="ops-nav" aria-label="Metric areas">
            <button className={active === 'all' ? 'is-active' : ''} onClick={() => setActive('all')}>
              <Icon name="layers" size={18} />
              <span>All Metrics</span>
              <em>{total}</em>
            </button>
            {sections.map((s, i) => (
              <button key={s.title} className={active === i ? 'is-active' : ''} onClick={() => setActive(i)}>
                <Icon name={icons[i]} size={18} />
                <span>{s.title}</span>
                <em>{s.rows.length}</em>
              </button>
            ))}
          </aside>

          <div className="ops-main">
            <label className="ops-search">
              <Icon name="eye" size={18} />
              <input
                type="search"
                placeholder="Search operations, metrics, outcomes…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search metrics"
              />
            </label>
            <p className="ops-count">{shown} {shown === 1 ? 'metric' : 'metrics'}</p>
            {visible.length === 0 && <p className="ops-empty">No metrics match “{query}”.</p>}
            {visible.map((s) => (
              <div key={s.title} className="ops-table-wrap">
                <h3>{s.title}</h3>
                <table className="data-table">
                  <thead>
                    <tr>{columns(s).map((h) => <th key={h}>{h}</th>)}</tr>
                  </thead>
                  <tbody>
                    {s.rows.map((r) => (
                      <tr key={r.join('|')}>
                        {cells(s, r).map((c, ci) => (
                          <td key={ci} data-label={ci ? columns(s)[ci] : undefined}>{c}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <div className="tone-soft">
        <CtaBand
          title="Ready to enhance your practice?"
          text="Explore how HealScript™ can help your organization reduce documentation burden, strengthen clinical visibility, and deliver continuous, coordinated care."
          actions={[{ label: 'Request early access', to: '/early-access' }, { label: 'About HealScript™', to: '/healscript' }]}
        />
      </div>
    </>
  )
}
