import Icon from './Icon'
import { shift, audiences, capabilities, pillars, trust } from '../content'

function SectionHead({ eyebrow, title, children }) {
  return (
    <div className="section-head">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children && <p className="lead">{children}</p>}
    </div>
  )
}

export function CategoryShift() {
  return (
    <section className="section" id="platform">
      <div className="container">
        <SectionHead eyebrow="The category shift" title="From episodic visits to continuous care">
          Traditional systems were built to document, bill, and store records. Cognera Health is
          built for what happens to people — in the session and every day after it.
        </SectionHead>
        <div className="shift">
          <div className="shift-col shift-before">
            <h3>{shift.before.title}</h3>
            <ul>
              {shift.before.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <div className="shift-arrow" aria-hidden="true">
            <Icon name="arrow" size={28} />
          </div>
          <div className="shift-col shift-after">
            <h3>{shift.after.title}</h3>
            <ul>
              {shift.after.points.map((p) => (
                <li key={p}>
                  <Icon name="check" size={18} /> {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export function WhoWeServe() {
  return (
    <section className="section section-tint" id="who-we-serve">
      <div className="container">
        <SectionHead eyebrow="Who it serves" title="One system for everyone in the care journey" />
        <div className="grid-4">
          {audiences.map((a) => (
            <article key={a.title} className="card audience">
              <div className="icon-badge">
                <Icon name={a.icon} />
              </div>
              <h3>{a.title}</h3>
              <p>{a.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Capabilities() {
  return (
    <section className="section" id="solutions">
      <div className="container">
        <SectionHead eyebrow="What Cognera Health enables" title="Everything continuous care needs, unified">
          CogneraAI™ — our assistive AI layer — runs across the platform, powering Cognitive and
          Collaborative Intelligence™ for every workflow.
        </SectionHead>
        <div className="grid-2">
          {capabilities.map((c, i) => (
            <article key={c.title} className="card capability">
              <span className="cap-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{c.title}</h3>
              <ul className="tags">
                {c.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Why() {
  return (
    <section className="section section-dark" id="why">
      <div className="container">
        <SectionHead eyebrow="Why Cognera Health" title="Built on three commitments" />
        <div className="grid-3">
          {pillars.map((p) => (
            <article key={p.word} className="pillar">
              <h3>
                {p.word} <span>vs. {p.versus}</span>
              </h3>
              <p>{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Trust() {
  return (
    <section className="section" id="trust">
      <div className="container">
        <SectionHead eyebrow="Trust & standards" title="Responsible AI for sensitive care" />
        <div className="grid-3">
          {trust.map((t) => (
            <article key={t.title} className="card trust">
              <Icon name="shield" />
              <h3>{t.title}</h3>
              <p>{t.body}</p>
            </article>
          ))}
        </div>
        <div className="partners">
          <span>Partners</span>
          <strong>Microsoft for Startups</strong>
        </div>
      </div>
    </section>
  )
}
