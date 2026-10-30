import { usePageTitle, PageHero, Section, SectionHeader, CardGrid, Tabs, Button, CtaBand } from '../components/ui'

const outcomeGroups = [
  {
    label: 'Clinical & Care Delivery',
    icon: 'stethoscope',
    items: [
      { title: 'Clinical Intelligence', text: 'CogneraAI™ assisted documentation, secure telehealth workflows, audio and video session support, transcription, structured assessments, treatment planning, clinical decision support, and longitudinal visibility designed to support evidence-based, measurement-based care delivery.', note: 'Outcomes: Consistent documentation, reduced admin burden, and evidence-based, outcome-driven care' },
      { title: 'Decision Support', text: 'Real-time recommendations powered by CogneraAI™, including treatment planning guidance, guideline-aligned interventions (APA, NICE, SAMHSA etc.,), and contextual insights derived from clinical and behavioral data. Designed to support and enhance clinical judgment—while clinicians and providers remain the final decision-makers in all aspects of care.', note: 'Outcomes: More informed and proactive clinical decisions' },
      { title: 'Earlier Risk Visibility', text: 'Continuously monitor progress, behavioral signals, and risk indicators to surface early warnings and enable proactive care.', note: 'Outcomes: Earlier visibility into risk and behavioral changes' },
    ],
  },
  {
    label: 'Engagement & Individual Experience',
    icon: 'smile',
    items: [
      { title: 'Continuous Engagement', text: 'Always-on, practitioner-guided engagement between sessions through mood and symptom tracking, voice journaling, adaptive check-ins, and personalized nudges. Enables continuous monitoring with CogneraAI™ guided prompts that respond to real-time inputs, capturing real-world behavioral signals and supporting adherence to care plans beyond episodic interactions.', note: 'Outcomes: Stronger engagement and adherence between sessions' },
      { title: 'Improve adherence to care plans', text: 'Support individuals with personalized nudges, reminders, habit tracking, and guided activities aligned with treatment goals.', note: 'Outcomes: Better adherence and outcomes' },
      { title: 'Whole-Person Visibility', text: 'Track mood, sleep, stress, activity, and behavioral patterns in a unified, intuitive dashboard.', note: 'Outcomes: Whole-person visibility' },
      { title: 'Crisis recognition & support', text: 'Detect risk patterns through behavioral and clinical signals, triggering alerts and enabling timely intervention and escalation workflows.', note: 'Outcomes: Support when it matters most' },
    ],
  },
  {
    label: 'Care Coordination & Longitudinal Visibility',
    icon: 'link',
    items: [
      { title: 'Care Coordination', text: 'Shared care plans, centralized communication, and synchronized workflows across clinicians, care teams, and organizations. Enables referrals, handoffs, and multidisciplinary collaboration with a unified view of individual progress and care history.', note: 'Outcomes: Aligned teams and coordinated, continuous care delivery' },
      { title: 'Longitudinal Insights', text: 'Continuous synthesis of session data, structured assessments, and behavioral signals over time to generate a comprehensive, evolving view of individual progress. Enables trend analysis, outcome measurement, relapse prediction, and recovery trajectory modeling.', note: 'Outcomes: Better continuity and longitudinal care visibility' },
    ],
  },
  {
    label: 'Operational & Enterprise Intelligence',
    icon: 'barChart',
    items: [
      { title: 'Operational Intelligence', text: 'Real-time dashboards and analytics providing visibility into utilization, outcomes, clinician performance, and operational efficiency across practices and enterprise systems. Supports resource optimization, workflow orchestration, and performance benchmarking for value-based care readiness.', note: 'Outcomes: Greater operational visibility and efficiency' },
      { title: 'Optimize operational efficiency', text: 'Automate workflows, streamline scheduling, and coordinate care across teams, roles, and locations.', note: 'Outcomes: Improved efficiency and utilization' },
      { title: 'Scale care delivery', text: 'Support consistent, high-quality care delivery from solo practices to multi-site and enterprise health systems.', note: 'Outcomes: Enterprise-ready scalability' },
      { title: 'Strengthen financial performance', text: 'Improve operational efficiency, resource utilization, workflow visibility, and coordinated care delivery through connected operational intelligence.', note: 'Outcomes: Supports operational efficiency and organizational performance' },
      { title: 'Support Value-Based Care Readiness', text: 'Leverage operational intelligence, longitudinal outcomes data, and coordinated care visibility to support value-based care models, reimbursement readiness, and sustainable care delivery.', note: 'Outcomes: Supports sustainable and scalable care delivery' },
      { title: 'Enable data-driven decisions', text: 'Unify clinical, engagement, and operational data into real-time dashboards, reports, and cohort analytics.', note: 'Outcomes: Actionable, real-time insights' },
      { title: 'Accelerate integration', text: 'Integrate seamlessly with EHRs and existing systems through FHIR/HL7 standards and API-first architecture.', note: 'Outcomes: Faster implementation and connectivity' },
    ],
  },
  {
    label: 'Enterprise-Ready Infrastructure',
    icon: 'shieldCheck',
    items: [
      { title: 'Privacy, Security & Compliance', text: 'Protect data with HIPAA- and SOC 2-compliant architecture, enterprise-grade encryption, audit trails, and full user control over data access and sharing.', note: 'Outcomes: Trusted, secure experience by design' },
      { title: 'Interoperable by default', text: 'Enable seamless connectivity across systems, platforms, and partners with standards-based APIs and integrations.', note: 'Outcomes: Connected ecosystem' },
      { title: 'Optimize workforce performance', text: 'Reduce clinician burnout, improve workflow efficiency, and increase provider capacity through intelligent automation.', note: 'Outcomes: More capacity, less burnout' },
    ],
  },
]

const cci = [
  { icon: 'brain', title: 'Cognitive Intelligence', text: 'CogneraAI reasons across documentation, assessments, longitudinal data, behavioral signals, and care plans to surface patterns that are hard to see manually.' },
  { icon: 'users', title: 'Collaborative Intelligence', text: 'Clinicians, individuals, care teams, and organizations work from the same continuously updated picture, with appropriate permissions and role-based views.' },
  { icon: 'shieldCheck', title: 'Clinician in control', text: 'The platform supports professional decision-making. It does not replace licensed judgment, therapeutic alliance, or organization-specific clinical governance.' },
]

const promise = [
  ['AI-assisted clinical documentation & workflow intelligence', 'Reduces administrative burden, fragmented workflows, and documentation fatigue while improving clinical consistency and operational efficiency.', 'AI-assisted SOAP/BIRP/DAP notes, NLP-powered session summarization, transcription, intake workflows, structured documentation, virtual care workflows, treatment planning, session intelligence, operational visibility, workflow orchestration through HealScript™ and CogneraAI™.', 'Therapists, counselors, psychologists, psychiatrists, PMHNPs, social workers, care coordinators, clinical operations teams.'],
  ['Measurement-based and outcome-informed care', 'Makes progress, symptom movement, adherence, and risk visibility measurable across the care continuum instead of relying only on episodic observation.', 'PHQ-9, GAD-7, OQ-45.2 and structured assessments, longitudinal tracking, outcome analytics, treatment visibility, predictive insights, recovery trend monitoring, explainable clinical intelligence powered by CogneraAI™.', 'Clinicians, supervisors, quality teams, care managers, value-based care organizations, payers.'],
  ['Continuous between-session engagement', 'Extends care beyond the traditional 50-minute session to strengthen engagement, adherence, and continuity of support.', 'Mood and symptom tracking, voice journaling, adaptive check-ins, medication reminders, behavioral reinforcement, personalized prompts, guided wellness support, practitioner-guided engagement through HealConnect™.', 'Individuals, clinicians, wellness programs, behavioral health organizations, care teams.'],
  ['Collaborative care coordination & connected workflows', 'Eliminates disconnected communication and fragmented care coordination across providers, programs, and organizations.', 'Shared treatment visibility, referrals, coordinated workflows, follow-up management, shared engagement signals, team collaboration, connected care pathways, longitudinal visibility across providers powered by Cognitive and Collaborative Intelligence™.', 'Care teams, integrated care organizations, clinics, health systems, collaborative care programs.'],
  ['Real-time risk visibility & proactive intervention support', 'Helps organizations identify deterioration, disengagement, or elevated risk earlier rather than waiting for the next appointment.', 'Real-time behavioral and engagement visibility, adherence monitoring, automated alerts, longitudinal behavioral pattern analysis, predictive risk indicators, operational escalation visibility, continuous monitoring through HealConnect™ and CogneraAI™.', 'Clinicians, crisis response teams, supervisors, population health teams, organizations managing high-risk populations.'],
  ['Operational intelligence & enterprise visibility', 'Replaces fragmented reporting and disconnected operational oversight with unified, real-time organizational intelligence.', 'Utilization analytics, provider performance visibility, scheduling intelligence, workflow orchestration, engagement analytics, KPI monitoring, operational dashboards, multi-site visibility, care delivery intelligence through HealScript™ Operations Center.', 'Clinical directors, executives, operations leaders, enterprise buyers, health systems, multi-site organizations.'],
  ['Population intelligence & longitudinal analytics', 'Enables organizations to understand engagement, outcomes, operational trends, and care delivery performance at scale.', 'Aggregated longitudinal analytics, engagement trends, outcome visibility, utilization insights, predictive operational intelligence, organizational reporting, care pathway analytics powered by CogneraAI™.', 'Enterprise organizations, behavioral health networks, health systems, quality improvement teams, strategic leadership.'],
  ['Continuous intelligence powered by CogneraAI™', 'Converts fragmented clinical, behavioral, engagement, and operational data into actionable real-time intelligence.', 'Cognitive intelligence including clinical reasoning and predictive modeling combined with collaborative intelligence connecting clinicians, individuals, and organizations into one shared operational and clinical understanding.', 'Entire care ecosystem including providers, individuals, care teams, and organizations.'],
  ['Unified platform architecture', 'Removes the need for disconnected point solutions that do not communicate effectively across the care continuum.', 'One connected ecosystem integrating HealScript™, HealConnect™ powered by CogneraAI™, engagement workflows, documentation, analytics, coordination, operational intelligence, and continuous care visibility within a closed-loop care continuum.', 'Behavioral health organizations, wellness programs, clinics, health systems, universities, employers, enterprise partners.'],
]
const promiseHead = ['Capability', 'What it solves', 'Core platform capabilities', 'Who benefits']

export default function Solutions() {
  usePageTitle('Solutions')
  return (
    <>
      <PageHero
        eyebrow="Comprehensive solutions"
        title="Comprehensive solution for continuous mental health, behavioral health, and wellness care."
        lead="Cognera Health™ helps clinicians, care teams, and organizations deliver continuous, integrated care by connecting clinical workflows, operational intelligence, between-session engagement, and CogneraAI™ powered insights within one coordinated care environment."
        note={{ title: 'Augmenting clinicians—not replacing them.', text: 'All insights and recommendations are assistive, and all care decisions remain under the authority of licensed clinicians and providers.' }}
        actions={[
          { label: 'Explore CogneraAI™', to: '/cogneraai' },
          { label: 'Explore Platform', to: '/platform' },
          { label: 'Explore HealScript™', to: '/healscript' },
          { label: 'Explore HealConnect™', to: '/healconnect' },
          { label: 'Who We Serve', to: '/who-we-serve' },
        ]}
        image="/images/chsolutions1.webp"
        imageFit="contain"
        imageAlt="Cognera Health, HealScript and HealConnect product overview"
      />

      <Section tone="soft">
        <SectionHeader
          eyebrow="Outcomes & Capabilities"
          title="What organizations can achieve with Cognera Health™"
          lead="Cognera Health™ supports continuous, integrated care delivery by connecting clinical workflows, engagement, care coordination, and operational visibility across one connected care environment."
        />
        <Tabs
          tabs={outcomeGroups}
          render={(g) => <CardGrid items={g.items} cols={g.items.length % 3 === 0 || g.items.length > 4 ? 3 : 2} />}
        />
      </Section>

      <Section id="introducing-the-solution">
        <SectionHeader
          eyebrow="Introducing the Solution environments"
          title="Clinical and engagement intelligence working together across the care continuum."
          lead="Cognera Health™ supports continuous, integrated care delivery by connecting clinical workflows, engagement, care coordination, and operational visibility across one connected care environment."
        />
        <div className="grid grid-2">
          <article className="card product-card">
            <img src="/images/healscript.webp" alt="HealScript clinical dashboard preview" loading="lazy" />
            <h3>HealScript™</h3>
            <p>HealScript™ is the clinician and organizational intelligence system within Cognera Health™, helping providers reduce documentation burden, strengthen clinical decision-making, coordinate care, and gain real-time visibility across clinical and operational workflows through AI-assisted documentation, measurement-based care, decision support, and operational intelligence.</p>
            <Button to="/healscript" variant="secondary" icon="arrowRight">Explore HealScript™</Button>
          </article>
          <article className="card product-card">
            <img className="is-contain" src="/images/healconnect.webp" alt="HealConnect product view on a mobile device" loading="lazy" />
            <h3>HealConnect™</h3>
            <p>HealConnect™ is the continuous engagement and behavioral visibility environment within Cognera Health™, helping individuals stay connected and supported between sessions through practitioner-guided tracking, journaling, adaptive check-ins, reminders, and real-time behavioral insights that strengthen continuity, adherence, and proactive care.</p>
            <Button to="/healconnect" variant="secondary" icon="arrowRight">Explore HealConnect™</Button>
          </article>
        </div>
      </Section>

      <Section tone="ink">
        <SectionHeader light eyebrow="Cognitive and Collaborative Intelligence" title="AI that is built around clinical context and shared care." />
        <CardGrid items={cci} cols={3} cardClass="card-dark" />
        <div className="intro-cognera">
          <h3>Introducing CogneraAI™</h3>
          <p>CogneraAI™ is the intelligence layer powering continuous, connected mental health, behavioral health, and wellness care across the Cognera Health™ ecosystem. Built on proprietary Cognitive and Collaborative Intelligence™, it transforms fragmented clinical, behavioral, operational, and engagement data into actionable, real-time insights that support coordinated care, operational visibility, AI-assisted documentation, predictive intelligence, and longitudinal care visibility across the continuum.</p>
          <p>Designed to augment clinicians, providers, and care teams rather than replace professional judgment, CogneraAI™ operates with Responsible AI principles including transparency, explainability, governance, validation, bias monitoring, and strict human-in-the-loop oversight, while all final care decisions remain under licensed professional authority.</p>
          <Button to="/cogneraai" variant="light" icon="arrowRight">Learn More About CogneraAI™</Button>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Solution promise"
          title="Comprehensive solutions without compromise."
          lead="Cognera Health is positioned as the technology solution that lets mental health, behavioral health and wellness providers operate with continuity, intelligence, and integrated care delivery."
        />
        <table className="data-table">
          <thead>
            <tr>{promiseHead.map((h) => <th key={h}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {promise.map((row) => (
              <tr key={row[0]}>
                {row.map((cell, i) => (
                  <td key={i} data-label={i ? promiseHead[i] : undefined}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <CtaBand
        title="A category-defining solution shift from episodic care to continuous, connected care intelligence."
        text="Cognera Health™ helps clinicians reduce administrative burden, strengthen decision-making, and improve care visibility; enables organizations to optimize operations, coordinate care delivery, and gain real-time operational and clinical insight; and supports individuals through continuous engagement, connected support, and personalized guidance beyond the session within one unified platform powered by CogneraAI™."
        actions={[
          { label: 'Request early access', to: '/early-access' },
          { label: 'Explore Investment Opportunity', to: '/investors' },
        ]}
      />
    </>
  )
}
