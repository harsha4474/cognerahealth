import Icon from './Icon'
import { Checklist, Tabs } from './ui'

/** Tabbed capability explorer: description, feature list and impact notes per tab. */
export function CapabilityTabs({ groups }) {
  return (
    <Tabs
      className="capability-tabs"
      tabs={groups}
      render={(g) => (
        <div className="capability-panel">
          <div>
            <h3>{g.label}</h3>
            <p>{g.text}</p>
            <Checklist items={g.bullets} className="checklist-sm two-col" />
          </div>
          <aside className="impact">
            <p className="label-caps">Impact</p>
            {g.impact.map((t) => (
              <p key={t}>
                <Icon name="check" size={16} strokeWidth={2.4} /> {t}
              </p>
            ))}
          </aside>
        </div>
      )}
    />
  )
}

export function Disclaimer({ children }) {
  return <p className="disclaimer">{children}</p>
}

/** HealConnect inputs → CogneraAI → HealScript outputs */
export function DataLoop() {
  const inputs = ['Daily check-ins', 'Mood & symptoms', 'Sleep data', 'Activity logs', 'Program engagement', 'video and audio', 'Messages & feedback']
  const outputs = ['Live patient insights', 'Treatment plans', 'Program assignments', 'Personalized content', 'Alerts & Adherence', 'Outcomes & Trends', 'Reminders & nudges']
  return (
    <div className="data-loop">
      <div className="loop-col">
        <p className="label-caps">Individual Engagement</p>
        <h3>HealConnect™</h3>
        <ul>{inputs.map((t) => <li key={t}>{t}</li>)}</ul>
      </div>
      <div className="loop-core">
        <span className="loop-arrow">Inputs <Icon name="arrowRight" size={16} /></span>
        <div className="loop-ai">
          <Icon name="sparkles" size={28} />
          <strong>CogneraAI™</strong>
        </div>
        <span className="loop-arrow">Outputs <Icon name="arrowRight" size={16} /></span>
      </div>
      <div className="loop-col">
        <p className="label-caps">Clinical Intelligence</p>
        <h3>HealScript™</h3>
        <ul>{outputs.map((t) => <li key={t}>{t}</li>)}</ul>
      </div>
    </div>
  )
}
