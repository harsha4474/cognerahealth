import Icon from '../components/Icon'
import { usePageTitle, PageHero, Section, SectionHeader, CardGrid, Steps, Split, Checklist, CtaBand, Actions } from '../components/ui'

const capabilities = [
  {
    icon: 'brain',
    title: 'Clinical Intelligence',
    text: 'Capture, structure, and interpret clinical interactions and assessments in real time—supporting consistent documentation, stronger clinical visibility, and more informed decision-making.',
    note: 'Outcome: Reduced documentation and administrative burden, improved accuracy, and more confident, data-informed care decisions.',
  },
  {
    icon: 'message',
    title: 'Continuous Engagement',
    text: 'Extend care beyond the session with ongoing, practitioner-guided engagement—transforming episodic interactions into continuous, connected care experiences.',
    note: 'Outcome: Stronger engagement, improved adherence, and greater visibility into real-world progress between visits.',
  },
  {
    icon: 'link',
    title: 'Care Coordination & Longitudinal Intelligence',
    text: 'Unify care plans, communication, and data across providers, individuals, and teams—creating a continuous, evolving understanding of progress over time.',
    note: 'Outcome: Better coordination, fewer care gaps, and deeper insight into outcomes, trends, and recovery trajectories.',
  },
  {
    icon: 'barChart',
    title: 'Operations & Performance Intelligence',
    text: 'Deliver real-time visibility into utilization, workflows, outcomes, and system performance across practices and organizations.',
    note: 'Outcome: Improved efficiency, optimized resource utilization, scalable operations, and data-driven performance management.',
  },
]

const loop = [
  { title: 'Capture', text: 'Clinical interactions and real-world engagement generate continuous, structured data.' },
  { title: 'Connect', text: 'Data flows across providers, individuals, and systems—creating a unified view of care.' },
  { title: 'Understand', text: 'CogneraAI™ transforms data into real-time insights, predictions, and recommendations.' },
  { title: 'Act', text: 'Insights drive clinical decisions, engagement, and operational actions across the continuum.' },
]

const advantages = [
  { icon: 'layers', title: 'Unified Platform', text: 'One platform that unifies clinical intelligence and engagement across the continuum.' },
  { icon: 'sparkles', title: 'AI-Powered Intelligence', text: 'CogneraAI™ continuously delivers real-time intelligence, insights, and recommendations.' },
  { icon: 'refresh', title: 'Continuous Care', text: 'Closed-loop connectivity between sessions, providers, teams, and systems.' },
  { icon: 'shieldCheck', title: 'Enterprise Ready', text: 'Secure, scalable, interoperable, and built for demanding environments.' },
  { icon: 'trendingUp', title: 'Better Outcomes', text: 'Data-driven coordination that improves experiences and drives measurable results.' },
]

export default function Platform() {
  usePageTitle('Platform')
  return (
    <>
      <PageHero
        eyebrow="Unified platform"
        title="The continuous care intelligence layer for mental health, behavioral health, and wellness."
        lead={[
          'Cognera Health™ unifies clinical workflows, between-session engagement, care coordination, analytics, and CogneraAI™ into a continuous, closed-loop care platform.',
          'It connects providers, individuals, and organizations across the full continuum—enabling real-time visibility, earlier intervention, and more coordinated, data-driven care.',
        ]}
        note={{ title: 'Augmenting clinicians—not replacing them.', text: 'All care decisions remain under the authority of licensed clinicians and providers.' }}
        actions={[
          { label: 'Explore CogneraAI™', to: '/cogneraai' },
          { label: 'Explore Solutions', to: '/solutions' },
          { label: 'Explore HealScript™', to: '/healscript' },
          { label: 'Explore HealConnect™', to: '/healconnect' },
          { label: 'Who We Serve', to: '/who-we-serve' },
        ]}
        image="/images/chplatform.webp"
        imageFit="contain"
        imageAlt="Cognera Health platform dashboards on desktop and mobile"
      >
        <p className="hero-tagline">
          Reduce administrative burden. Improve clinical visibility. Strengthen individual engagement. Enable earlier intervention and more proactive care.
        </p>
      </PageHero>

      <Section tone="soft">
        <div className="statement">
          <SectionHeader eyebrow="The category shift" title="From fragmented, episodic care to continuous, connected care" />
          <div>
            <p>The current system relies on disconnected tools, session-based workflows, and care models that activate only during appointments.</p>
            <p>Cognera Health™ introduces a continuous care model—connecting clinical workflows, between-session engagement, and operational intelligence into a unified, closed-loop system that supports individuals before, during, and between every interaction.</p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="One platform. Four pillars of continuous care."
          title="Human-centered, intelligent care—unified in one continuous platform"
          lead={[
            'Cognera Health™ is designed to transform fragmented, session-bound tools into a connected care model where data, insight, and action continuously flow across the full continuum.',
            'For clinicians, care teams, and organizations, the platform delivers unified workflows, real-time visibility, and operational intelligence—reducing administrative burden, improving coordination, and enabling more proactive, efficient care delivery at scale.',
            'For individuals, Cognera Health™ extends care beyond the session with continuous, practitioner-guided engagement—strengthening adherence, increasing awareness of patterns and progress, and enabling a more connected, personalized care experience between visits.',
          ]}
        />
        <p className="label-caps">Platform Capabilities</p>
        <CardGrid items={capabilities} cols={2} />
      </Section>

      <Section tone="soft">
        <SectionHeader
          eyebrow="How it works"
          title="A continuous, closed-loop care system"
          lead="Cognera Health™ continuously captures, connects, and activates data across clinical, behavioral, and operational touchpoints—creating a system where every interaction informs the next."
        />
        <Steps items={loop} />
      </Section>

      <Section id="architecture">
        <SectionHeader
          eyebrow="Architecture"
          title="Two connected care layers. One intelligence foundation."
          lead="Cognera Health™ unifies clinical intelligence and continuous engagement on a single platform."
          align="center"
        />
        <div className="architecture">
          <div className="arch-layers">
            <div className="arch-layer">
              <span className="icon-tile"><Icon name="stethoscope" /></span>
              <h3>HealScript™</h3>
              <p>Clinical and Operational Intelligence Layer for providers, care teams, and organizations.</p>
              <ul className="tag-list">
                {['Documentation', 'MBC', 'Risk visibility', 'Operations Intelligence Center'].map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
            <div className="arch-link" aria-hidden="true"><Icon name="refresh" size={26} /></div>
            <div className="arch-layer">
              <span className="icon-tile"><Icon name="heart" /></span>
              <h3>HealConnect™</h3>
              <p>Continuous Engagement Layer for between-session support, check-ins, nudges, and longitudinal behavioral signals.</p>
              <ul className="tag-list">
                {['Check-ins', 'Journaling', 'Adherence', 'Signals'].map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
          </div>
          <div className="arch-foundation">
            <Icon name="sparkles" size={26} />
            <div>
              <h3>CogneraAI™</h3>
              <p>Cognitive and Collaborative Intelligence™ foundation</p>
            </div>
          </div>
          <div className="arch-summary">
            <h3>Unified. Continuous. Connected.</h3>
            <p>Data, insight, and action flow continuously between layers, creating a closed-loop system that drives better outcomes across the full continuum of care.</p>
          </div>
        </div>

        <h2 className="sub-heading">The Cognera Health™ Advantage</h2>
        <CardGrid items={advantages} cols={5} className="compact-cards" />
        <div className="advantage-close">
          <img src="/images/logo.png" alt="" width="48" />
          <div>
            <p>One platform. Two connected care layers.</p>
            <h3>Infinite possibilities for better care.</h3>
          </div>
          <Actions items={[{ label: 'Explore Solutions', to: '/solutions' }, { label: 'Explore CogneraAI™', to: '/cogneraai' }]} />
        </div>
      </Section>

      <Section tone="soft">
        <Split
          align="start"
          media={
            <div className="card designed-for">
              <p className="label-caps">Designed for:</p>
              <Checklist
                items={[
                  'Clinics and group practices',
                  'Health systems and integrated care networks',
                  'Universities and employer wellness programs',
                  'Enterprise and population health initiatives',
                ]}
              />
              <p className="card-note">Outcome: Scalable, secure, and continuously connected care delivery across providers, organizations and individuals.</p>
            </div>
          }
        >
          <SectionHeader
            eyebrow="Enterprise infrastructure"
            title="Enterprise-ready. Built to scale."
            lead={[
              'Cognera Health™ is designed for organizations delivering mental health, behavioral health, and wellness services at scale—supporting secure, interoperable, and continuously connected care delivery.',
              'Built with interoperability, security, and responsible AI at the foundation, the platform enables seamless integration with existing systems while maintaining governance, transparency, and human oversight.',
            ]}
          />
          <Actions items={[{ label: 'Who We Serve', to: '/who-we-serve', variant: 'secondary' }]} className="mt-0" />
        </Split>
      </Section>

      <div className="tone-soft">
        <CtaBand
          title="Bring continuous care to your organization"
          text="See how Cognera Health™ enables continuous, connected care across clinicians, individuals, and operations—delivering real-time visibility, stronger engagement, and more coordinated, data-driven outcomes."
          actions={[
            { label: 'Request a demo', to: '/early-access' },
            { label: 'Explore Solutions', to: '/solutions' },
            { label: 'Talk to our team', to: '/contact' },
          ]}
        />
      </div>
    </>
  )
}
