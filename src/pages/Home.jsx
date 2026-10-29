import Icon from '../components/Icon'
import {
  usePageTitle, PageHero, Section, SectionHeader, Checklist, CardGrid, Split, Figure, CtaBand, Button,
} from '../components/ui'

const audiences = [
  { icon: 'stethoscope', title: 'Clinicians', text: 'AI-assisted workflows, documentation, and decision support.' },
  { icon: 'users', title: 'Care Teams', text: 'Shared visibility, coordination, and communication.' },
  { icon: 'building', title: 'Organizations', text: 'Operational intelligence, analytics, and scalable care delivery.' },
  { icon: 'heart', title: 'Individuals', text: 'Continuous engagement, tracking, and guided support.' },
]

const enables = [
  {
    icon: 'clipboard',
    title: 'Clinical & Care Delivery',
    text: 'AI-assisted documentation, structured assessments, treatment planning, decision support, and measurement-based care workflows.',
    note: '✓ Reduced administrative burden and stronger clinical visibility',
  },
  {
    icon: 'smile',
    title: 'Engagement & Individual Experience',
    text: 'Practitioner-guided mood tracking, journaling, check-ins, reminders, habit support, and continuous engagement between sessions.',
    note: '✓ Stronger adherence and continuity beyond the visit',
  },
  {
    icon: 'link',
    title: 'Care Coordination & Longitudinal Insights',
    text: 'Shared care plans, referrals, team communication, progress tracking, longitudinal signals, and outcome movement in one view.',
    note: '✓ Better coordinated, more informed care',
  },
  {
    icon: 'barChart',
    title: 'Operations & Performance',
    text: 'Dashboards, population analytics, utilization insight, workflow orchestration, performance benchmarking, and value-based care readiness.',
    note: '✓ Data-driven operations and scalable care delivery',
  },
]

const why = [
  { from: 'Episodic', to: 'Continuous', icon: 'refresh', text: 'Extends care beyond sessions into a continuous, connected model.' },
  { from: 'Fragmented', to: 'Unified', icon: 'layers', text: 'Replaces disconnected tools with one integrated platform.' },
  { from: 'Autonomous', to: 'Assistive', icon: 'shieldCheck', text: 'Augments clinicians with AI while preserving full clinical authority.' },
]

export default function Home() {
  usePageTitle()
  return (
    <>
      <PageHero
        eyebrow="Category-defining, AI-powered continuous care platform"
        title="Clinical intelligence in the session. Continuous care beyond it"
        lead="Cognera Health™ is a unified platform that enables continuous, integrated care delivery across mental health, behavioral health, and wellness—connecting clinicians, care teams, organizations, and individuals in a single system."
        note={{ title: 'Augmenting clinicians—not replacing them.', text: 'Licensed professionals retain full decision authority.' }}
        actions={[
          { label: 'Explore CogneraAI™', to: '/cogneraai' },
          { label: 'Explore Platform', to: '/platform' },
        ]}
        image="/images/hero_woman_smiling.webp"
        related={[
          { label: 'Solutions', to: '/solutions' },
          { label: 'HealScript™', to: '/healscript' },
          { label: 'HealConnect™', to: '/healconnect' },
          { label: 'Who We Serve', to: '/who-we-serve' },
        ]}
      />

      <Section>
        <Split
          media={
            <Figure
              src="/images/teams_meeting.webp"
              alt="Care team in a collaborative planning meeting"
              caption="Delivering continuous, coordinated care across the full continuum."
            />
          }
        >
          <SectionHeader
            eyebrow="The category shift"
            title="From episodic care to continuous, AI-powered care"
            lead="Traditional systems center on the session—documentation, administration, billing, and records. Cognera Health™ enables continuous, connected care across the full continuum—reducing documentation and administrative burden while unifying care data, assessments, engagement, coordination, and analytics into a closed-loop system."
          />
          <Checklist
            items={[
              { title: 'For Clinicians:', text: 'move from documentation and administrative burden to AI-augmented clinical visibility—while retaining full decision authority.' },
              { title: 'For Individuals:', text: 'stay supported with guided engagement, tracking, and continuity between sessions.' },
              { title: 'For Organizations:', text: 'gain real-time, end-to-end visibility across care delivery, engagement, and outcomes.' },
            ]}
          />
        </Split>
      </Section>

      <Section tone="soft">
        <SectionHeader
          eyebrow="Who it serves"
          title="Built for the entire care ecosystem"
          lead="Cognera Health™ is designed for the full care ecosystem—connecting clinicians, care teams, organizations, and individuals through a unified, continuous care platform that aligns workflows, engagement, and insight across every role."
        />
        <CardGrid items={audiences} cols={4} />
        <div className="actions">
          <Button to="/who-we-serve" variant="secondary" icon="arrowRight">Who We Serve</Button>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Backed by clinicians. Enterprise-grade care, built to scale"
          title="What Cognera Health enables"
          lead="Cognera Health™ brings clinical workflows, between-session engagement, care coordination, analytics, and AI-powered insights into one connected system—supporting clinicians, care teams, organizations, and individuals without replacing professional judgment."
        />
        <CardGrid items={enables} cols={2} />
        <div className="actions">
          <Button to="/platform" icon="arrowRight">Explore Platform</Button>
          <Button to="/solutions" variant="secondary">Explore Solutions</Button>
        </div>
      </Section>

      <Section tone="ink">
        <SectionHeader
          light
          eyebrow="Why Cognera Health"
          title="Purpose-built for continuous, integrated care"
          lead="Cognera Health™ is purpose-built for continuous, integrated mental health, behavioral health, and wellness care—extending support beyond episodic sessions, replacing fragmented systems with one unified platform, and augmenting clinicians with responsible, assistive CogneraAI™ while preserving full clinical authority."
        />
        <div className="grid grid-3">
          {why.map((w) => (
            <article key={w.to} className="card card-dark versus-card">
              <span className="icon-tile">
                <Icon name={w.icon} />
              </span>
              <h3>
                {w.to} <span>vs {w.from}</span>
              </h3>
              <p>{w.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <div className="tone-white" style={{ paddingTop: 96 }}>
        <CtaBand
          title="Transform care delivery"
          text="Join early access and experience continuous, connected, intelligent care."
          actions={[
            { label: 'Get Early Access', to: '/early-access' },
            { label: 'Who We Serve', to: '/who-we-serve' },
          ]}
        />
      </div>
    </>
  )
}
