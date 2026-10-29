import { usePageTitle, PageHero, Section, SectionHeader, Checklist, Split, Figure, CtaBand } from '../components/ui'
import Icon from '../components/Icon'

const metrics = [
  ['40-70%', 'Reduction in administrative and documentation burden.'],
  ['2-3x', 'Increase in engagement and adherence.'],
  ['~90%+', 'Accuracy potential in predictive clinical insights.'],
  ['30-50%', 'Faster deployment through FHIR and HL7 readiness.'],
  ['3-4x', 'ROI potential through automation and operational intelligence.'],
]

const enable = [
  { icon: 'brain', title: 'Clinical Intelligence', text: 'CogneraAI™ automates documentation and decision support so clinicians can reclaim time for direct patient care.', stat: '40-70% less admin' },
  { icon: 'activity', title: 'Continuous Monitoring', text: 'Real-time engagement and insights across the continuum enable proactive interventions between sessions.', stat: '2-3x engagement' },
  { icon: 'trendingUp', title: 'Predictive Analytics', text: 'Longitudinal signals and early risk detection help care teams improve outcomes and intervene sooner.', stat: '~90% insight accuracy' },
  { icon: 'puzzle', title: 'Seamless Integration', text: 'FHIR/HL7-ready interoperability enables multi-provider and enterprise-scale care delivery.', stat: '30-50% faster deployment' },
  { icon: 'barChart', title: 'Revenue Optimization', text: 'Operational intelligence improves financial visibility and supports value-based care model efficiency.', stat: '3-4x ROI potential' },
]

export default function Investors() {
  usePageTitle('Investors')
  return (
    <>
      <PageHero
        eyebrow="Why invest in Cognera Health"
        title="Transforming healthcare from fragmented to continuous"
        lead="Revolutionizing care delivery through CogneraAI™ and Collaborative and Cognitive Intelligence™. A unified platform connecting providers, individuals, and organizations across the full continuum of care, enabling intelligent, longitudinal health management at scale."
        note={{ title: 'Backed by clinicians.', text: 'Powered by CogneraAI™.' }}
        actions={[
          { label: 'Request investor deck', to: '/early-access#early-access' },
          { label: 'About Platform', to: '/platform' },
        ]}
        image="/images/investors.webp"
        related={[
          { label: 'CogneraAI™', to: '/cogneraai' },
          { label: 'Solutions', to: '/solutions' },
          { label: 'HealScript™', to: '/healscript' },
          { label: 'HealConnect™', to: '/healconnect' },
        ]}
      />

      <Section>
        <SectionHeader
          eyebrow="Platform metrics"
          title="Designed for measurable clinical, operational, and economic impact"
          lead="Cognera Health™ brings clinical workflows, documentation, engagement, care coordination, analytics, and AI-powered insights into one connected system."
        />
        <div className="stats">
          {metrics.map(([n, t]) => (
            <div key={n} className="stat">
              <strong>{n}</strong>
              <span>{t}</span>
            </div>
          ))}
        </div>
        <p className="footnote">* Early pilot results demonstrate the opportunity for meaningful efficiency, engagement, and operational gains. Metrics are directional and may vary by implementation.</p>
      </Section>

      <Section tone="soft">
        <Split media={<Figure src="/images/investors1.webp" alt="Care team reviewing a continuous care plan together" caption="Connected, continuous care across providers, organizations, and individuals." />}>
          <SectionHeader
            eyebrow="The investment thesis"
            title="From episodic care to a closed-loop, continuous care ecosystem"
            lead="Investing in Cognera Health means backing the shift from fragmented, reactive care to a connected, intelligent platform built to scale across providers, enterprises, and individuals."
          />
          <Checklist
            items={[
              { title: 'Unified care delivery:', text: 'one system for clinical workflows, engagement, coordination, analytics, and longitudinal insights.' },
              { title: 'Assistive intelligence:', text: 'CogneraAI™ automates documentation and delivers decision support while preserving licensed professional authority.' },
              { title: 'Enterprise readiness:', text: 'FHIR/HL7-ready interoperability supports deployment across multi-provider and organizational care environments.' },
            ]}
          />
        </Split>
      </Section>

      <Section>
        <SectionHeader eyebrow="What we enable" title="A full-stack platform for care transformation" />
        <div className="grid grid-5 compact-cards">
          {enable.map((e) => (
            <article key={e.title} className="card">
              <span className="icon-tile"><Icon name={e.icon} /></span>
              <h3>{e.title}</h3>
              <p>{e.text}</p>
              <p className="card-note stat-note">{e.stat}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="soft" className="partners-band">
        <div className="partners-row">
          <div>
            <p className="eyebrow">Partners</p>
            <p className="section-lead">Built in collaboration with trusted technology ecosystems.</p>
          </div>
          <img src="/images/microsoft-for-startups.png" alt="Microsoft for Startups" width="240" height="101" loading="lazy" />
        </div>
      </Section>

      <div className="tone-soft">
      <CtaBand
        eyebrow="Our commitment"
        title="Category-defining, closed-loop care technology built to scale worldwide"
        text="Cognera Health™ delivers continuous, integrated, and comprehensive care technology, transforming outcomes while expanding global access and engagement. Ultimately save lives."
        actions={[{ label: 'Request investor deck', to: '/early-access#early-access' }, { label: 'Contact founders', to: '/contact' }]}
      />
      </div>
    </>
  )
}
