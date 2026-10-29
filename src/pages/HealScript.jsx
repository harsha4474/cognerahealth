import { Link } from 'react-router-dom'
import {
  usePageTitle, PageHero, Section, SectionHeader, CardGrid, Steps, Split, Figure, Checklist, FaqSection, CtaBand, Button,
} from '../components/ui'
import { CapabilityTabs, Disclaimer, DataLoop } from '../components/ProductBits'

const capabilities = [
  {
    label: 'Clinical Workflow Intelligence', icon: 'clipboard',
    text: 'HealScript™ streamlines documentation, treatment planning, and structured clinical workflows to reduce administrative burden while improving care visibility, coordination, consistency, and operational efficiency across the continuum of care.',
    bullets: ['CogneraAI™-generated clinical documentation support, including SOAP, BIRP, DAP, and additional note formats', 'AI-assisted session summaries, transcription, and voice-to-text workflows', 'Intake, follow-up, and guided documentation workflows', 'Secure telehealth, audio/video session, and virtual care support', 'Structured clinical documentation and multidisciplinary workflow management', 'Intelligent scheduling, provider follow-up, and workflow automation', 'Cross-session contextual continuity and longitudinal session intelligence', 'Care-plan-linked documentation and standardized documentation support'],
    impact: ['Reduces documentation and administrative burden while improving provider productivity, workflow consistency, and operational scalability', 'Strengthens care coordination, documentation continuity, and connected clinical workflows across teams and systems'],
  },
  {
    label: 'Measurement-Based Care & Treatment Visibility', icon: 'gauge',
    text: 'Operationalize evidence-based and measurement-based mental and behavioral healthcare through structured assessments, longitudinal tracking, predictive analytics, and real-time clinical visibility.',
    bullets: ['Structured assessments including PHQ-9, GAD-7, OQ-45.2, and related tools', 'Longitudinal assessment tracking and symptom progression monitoring', 'Outcome trend analytics and structured outcome reporting', 'Automated scoring and assessment-driven treatment optimization', 'Predictive recovery trajectory modeling and risk-adjusted outcome analysis', 'Benchmarking, comparative outcomes visibility, and treatment progress intelligence', 'Data-driven care planning and treatment adjustment support'],
    impact: ['Improves clinical accuracy, treatment visibility, and outcome-informed decision-making', 'Strengthens longitudinal care tracking, recovery monitoring, and evidence-based treatment optimization'],
  },
  {
    label: 'Clinical Decision Support & Risk Visibility', icon: 'eye',
    text: 'Augment clinician judgment with explainable, guideline-aligned insights, predictive behavioral visibility, and proactive risk detection while maintaining full human oversight and clinician decision authority.',
    bullets: ['Guideline-aligned recommendations informed by APA, NICE, SAMHSA, and related best-practice frameworks', 'Behavioral signal monitoring, risk indicators, and crisis visibility', 'Early warning alerts and predictive risk stratification', 'CogneraAI™-assisted intervention recommendations and escalation workflows', 'Explainable AI reasoning and contextual clinical insight generation', 'Longitudinal behavioral pattern recognition and deterioration visibility', 'Suicide and self-harm escalation visibility with guided intervention support'],
    impact: ['Enables earlier intervention, proactive care delivery, and improved behavioral risk visibility', 'Strengthens clinical confidence, consistency, and decision support through contextual longitudinal intelligence'],
  },
  {
    label: 'Care Coordination & Continuous Care', icon: 'link',
    text: 'Connect providers, care teams, engagement workflows, and operational visibility across the full continuum of care to support coordinated, continuous, and longitudinal care delivery.',
    bullets: ['Shared care plans, referral management, and intelligent triage', 'Team communication and closed-loop coordination workflows', 'Native HealConnect™ integration and connected engagement-to-clinical workflows', 'Virtual follow-up, telehealth continuity, and remote engagement visibility', 'Pre-session and post-session engagement workflows', 'Cross-provider and multidisciplinary care visibility', 'Shared longitudinal care intelligence and real-time care status visibility', 'Transitional care management and escalation coordination', 'Continuous between-session care intelligence across settings'],
    impact: ['Reduces fragmentation and improves continuity, coordination, and multidisciplinary collaboration', 'Extends care beyond episodic interactions through connected between-session engagement and longitudinal visibility'],
  },
  {
    label: 'Behavioral Health & Whole-Person Care', icon: 'heart',
    text: 'Support behavioral, emotional, preventive, wellness-oriented, and whole-person care through longitudinal engagement, contextual intelligence, and continuous visibility into wellbeing and behavioral patterns.',
    bullets: ['Behavioral engagement and adherence tracking', 'Sleep, stress, activity, resilience, and emotional regulation monitoring', 'Substance use disorder and preventive care workflow support', 'Social determinants and contextual wellness intelligence', 'Structured behavior changes and behavioral reinforcement workflows', 'Longitudinal wellbeing visibility and daily behavioral pattern tracking', 'Proactive engagement signals, alerts, and intervention support', 'Whole-person engagement analytics and wellness intelligence'],
    impact: ['Strengthens continuous engagement, longitudinal wellbeing visibility, and preventive care support', 'Supports long-term behavioral improvement and earlier intervention through continuous behavioral intelligence'],
  },
  {
    label: 'Operational Intelligence & Enterprise Performance', icon: 'barChart',
    text: 'Provide organizations with operational visibility, workflow orchestration, resource optimization, and enterprise performance intelligence across teams, practices, multi-site systems, and population-level care delivery.',
    bullets: ['Utilization dashboards and provider performance visibility', 'Workflow orchestration and operational analytics', 'Resource allocation, scheduling optimization, and workforce efficiency intelligence', 'Multi-site operational visibility and population-level insights', 'Outcomes tracking, benchmarking, and value-based care readiness', 'AI-driven scheduling, automated workflows, and enterprise-wide operational visibility', 'Predictive operational intelligence and bottleneck identification', 'KPI tracking, throughput analytics, and organizational performance monitoring'],
    impact: ['Improves operational efficiency, resource utilization, scalability, and enterprise performance visibility', 'Supports data-driven care delivery optimization, workflow coordination, and value-based care readiness at scale'],
  },
  {
    label: 'Enterprise Infrastructure, Security & Interoperability', icon: 'shieldCheck',
    text: 'Built for enterprise-grade security, interoperability, governance, Responsible AI oversight, and scalable deployment across connected healthcare ecosystems.',
    bullets: ['HIPAA and SOC 2 readiness', 'FHIR/HL7 interoperability and EHR connectivity', 'API extensibility and cross-platform orchestration', 'Responsible AI governance, transparency, and oversight controls', 'Human-in-the-loop AI review and explainability workflows', 'Enterprise-grade data protection, audit logging, and traceability', 'Role-based access controls and governance enforcement', 'Unified data synchronization and secure longitudinal data management', 'Scalable enterprise deployment architecture and interoperability support'],
    impact: ['Strengthens organizational trust through secure, compliant, and Responsible AI-enabled infrastructure', 'Accelerates interoperability, ecosystem connectivity, and scalable enterprise deployment across healthcare environments'],
  },
]

const roles = [
  { icon: 'stethoscope', title: 'Mental Health & Behavioral Health Providers', text: 'Support mental health and behavioral health providers with unified clinical intelligence designed to reduce administrative burden, strengthen decision-making, and improve continuity of care across mental health and behavioral health services.' },
  { icon: 'hospital', title: 'Healthcare & Integrated Care Providers', text: 'Enable connected, whole-person care delivery across behavioral health, primary care, specialty care, and multidisciplinary care environments through coordinated operational and clinical intelligence.' },
  { icon: 'heart', title: 'Wellness, Well-Being & Coaching Professionals', text: 'Extend continuous, personalized support beyond appointments with structured engagement, wellness tracking, behavioral insights, and guided follow-through designed to improve participation, consistency, and measurable outcomes.' },
  { icon: 'building', title: 'Organizations & Enterprise Care Networks', text: 'Support clinics, health systems, hospitals, private practices, behavioral health organizations, wellness programs, universities, educational institutions, employers, corporate organizations, government agencies, non-profit organizations, community health organizations, enterprise care networks, and multidisciplinary care systems with connected operational, clinical, and engagement intelligence designed to improve coordination, visibility, scalability, and outcomes.' },
]

export const people = [
  'Therapists, counselors, psychologists, psychiatrists, PMHNPs, and behavioral health clinicians',
  'Social workers, LMFTs, LCSWs, substance use and addiction professionals',
  'Care teams, care managers, care coordinators, and clinical supervisors',
  'Wellness, health, behavioral, and lifestyle coaches and practitioners',
  'Mindfulness, well-being, workplace, and preventive wellness professionals',
  'Integrated care, primary care, and healthcare providers',
  'Population health and multidisciplinary care teams',
  'Telehealth, community mental health, and crisis support professionals',
  'Student wellness, counseling, and occupational wellness professionals',
  'Clinical operations and healthcare leadership teams',
]

const workflow = [
  { title: 'Before the session', text: 'HealConnect signals, assessments, adherence, goals, and reported context help clinicians prepare with better visibility.' },
  { title: 'During the session', text: 'AI-assisted documentation, transcription, measurement-based care, and clinical context help keep focus on the person.' },
  { title: 'After the session', text: 'Care plans, tasks, safety steps, referrals, and follow-up actions carry treatment work forward between appointments.' },
  { title: 'Across the organization', text: 'Clinical and operational data rolls into dashboards for utilization, performance, risk, outcomes, and population visibility.' },
]

const connected = [
  { icon: 'activity', title: 'Real-time Individual Analytics', text: 'Access real-time insights from individual interactions through practitioner dashboards, enabling earlier visibility, more proactive care, and timely interventions.' },
  { icon: 'clipboard', title: 'Automated Treatment Plans', text: 'Share treatment plans that enable individuals to receive continuous guidance, support, and engagement throughout their wellness journey while ongoing progress data feeds back into clinical insights and care visibility.' },
  { icon: 'bell', title: 'Progress Monitoring', text: 'Track individual adherence to treatment plans and receive automated alerts when intervention may be needed.' },
  { icon: 'chart', title: 'Comprehensive Reporting and Analytics', text: 'Generate comprehensive, consolidated reports that unify engagement data, continuous wellness signals, and clinical insights to deliver actionable intelligence that supports outcome visibility and strengthens informed decision-making.' },
]

const bidirectional = [
  { title: 'Care plan created', text: 'Clinicians define goals, actions, reminders, assessments, and safety steps in HealScript™.' },
  { title: 'HealConnect guides support', text: 'Individuals receive structured check-ins, nudges, journaling, and guided practice between appointments.' },
  { title: 'Signals return to clinicians', text: 'Mood, adherence, goals, sleep, symptoms, and engagement patterns inform the next visit.' },
  { title: 'Organizations see the system', text: 'Dashboards synthesize clinical, behavioral, and operational data into care delivery intelligence.' },
]

const opsPoints = [
  { title: 'Real-time visibility', text: 'Track sessions, assessments, care activity, capacity, and documentation movement across teams.' },
  { title: 'Connected care context', text: 'Link session data with between-session engagement so the next clinical interaction has more context.' },
  { title: 'Operational control', text: 'Identify workload, utilization, appointment, and workflow patterns that affect care delivery.' },
  { title: 'Assistive intelligence', text: 'Surface recommendations and alerts while clinicians and authorized care teams remain decision-makers.' },
]

const cogneraLink = { label: 'View CogneraAI™ FAQ', to: '/cogneraai#cogneraai-faq' }

const faq = [
  { q: 'What makes HealScript™ different from a traditional EHR?', a: 'HealScript™ is designed as a continuous clinical and operational intelligence layer for mental health, behavioral health, and wellness. Unlike traditional systems focused primarily on records and billing, HealScript™ supports documentation, measurement-based care, decision support, care coordination, operational visibility, and longitudinal insights across the care continuum.' },
  { q: 'Does HealScript™ support measurement-based care?', a: 'Yes. HealScript™ is designed to support evidence-based and measurement-based care workflows through structured assessments, automated scoring, longitudinal tracking, and outcome visibility across individuals and populations.' },
  { q: 'Can HealScript™ help reduce administrative burden?', a: 'HealScript™ is designed to streamline documentation, workflows, follow-up coordination, and operational processes through CogneraAI™-assisted clinical intelligence and workflow support, helping providers and care teams spend more time focused on care delivery.' },
  { q: 'Does HealScript™ support multidisciplinary care teams?', a: 'Yes. HealScript™ is built to support coordinated workflows across therapists, counselors, psychiatrists, psychologists, care managers, wellness professionals, and authorized care teams through shared visibility, collaboration tools, and coordinated care workflows.' },
  { q: 'How does HealScript™ support continuous care?', a: 'HealScript™ connects session-based workflows with between-session engagement, behavioral signals, assessments, care coordination, and operational intelligence to help organizations maintain visibility across the full care continuum.' },
  { q: 'Does HealScript™ provide real-time risk visibility?', a: 'HealScript™ is designed to help surface clinically relevant patterns, behavioral signals, and workflow alerts that may support earlier visibility into risk, engagement concerns, escalation needs, and care coordination opportunities.' },
  { q: 'Can HealScript™ support enterprise and multi-site organizations?', a: 'Yes. HealScript™ is designed for scalable deployment across clinics, group practices, health systems, universities, employers, and wellness organizations with centralized operational visibility and workflow coordination.' },
  { q: 'What types of documentation workflows are supported?', a: 'HealScript™ supports structured clinical workflows including progress notes, intake documentation, treatment planning, assessments, follow-up tracking, referrals, care coordination, and longitudinal documentation workflows.' },
  { q: 'How does CogneraAI™ support HealScript™?', a: 'CogneraAI™ helps HealScript™ structure session information, assist documentation, surface measurement-based insights, support care-plan context, and improve clinical and operational visibility while clinicians remain the final decision-makers.', link: cogneraLink },
  { q: 'Is HealScript™ designed with Responsible AI principles?', a: 'Yes. HealScript™ is designed with Responsible AI principles including human-in-the-loop oversight, governance, explainability, privacy, security, and clinician-controlled decision-making.' },
  { q: 'Can HealScript™ integrate with existing healthcare systems?', a: 'HealScript™ is designed to support standards-based interoperability and integration with existing healthcare infrastructure, including EHR connectivity and enterprise workflow environments.' },
  { q: 'Who is HealScript™ designed for?', a: 'HealScript™ is designed for clinicians, providers, practitioners, therapists, counselors, psychiatrists, psychologists, care teams, and organizations delivering mental health, behavioral health, and wellness services.' },
]

const opsFaq = [
  { q: 'What is the HealScript™ Operations Center?', a: 'The HealScript™ Operations Center is a CogneraAI™-powered operational intelligence environment designed to provide organizations with continuous visibility across care delivery, engagement, workflows, utilization, provider activity, documentation movement, and outcomes in one connected operational view.' },
  { q: 'How is the HealScript™ Operations Center different from traditional reporting dashboards?', a: 'Traditional dashboards often rely on fragmented reports and delayed operational visibility. The HealScript™ Operations Center is designed as a continuous operational intelligence layer that brings together clinical workflows, engagement signals, assessments, care coordination activity, provider utilization, and longitudinal operational insights into a shared, real-time view.' },
  { q: 'What operational data can organizations monitor?', a: 'The Operations Center is designed to help organizations monitor care activity, provider utilization, appointment movement, assessments, documentation workflows, engagement patterns, operational bottlenecks, care coordination activity, outcomes visibility, and population-level operational trends.' },
  { q: 'Does the Operations Center support real-time operational visibility?', a: 'Yes. The HealScript™ Operations Center is designed to provide real-time operational, clinical, and engagement visibility so organizations can better understand what is scheduled, completed, delayed, requires follow-up, or may need escalation across the care continuum.' },
  { q: 'How does CogneraAI™ support the Operations Center?', a: 'CogneraAI™ helps structure and synthesize operational, clinical, engagement, and behavioral information into actionable intelligence, including workflow visibility, longitudinal insights, assistive recommendations, utilization trends, documentation movement, and operational coordination support while clinicians and authorized teams remain the final decision-makers.' },
  { q: 'Can the Operations Center support population-level visibility?', a: 'Yes. The HealScript™ Operations Center is designed to support population-level operational visibility across programs, providers, sites, organizations, and care populations by helping teams monitor engagement, utilization, outcomes, risk indicators, access patterns, and workflow performance.' },
  { q: 'How does the Operations Center support care coordination?', a: 'The platform is designed to connect session workflows, assessments, HealConnect™ engagement signals, documentation activity, follow-up actions, referrals, care plans, and operational workflows into a coordinated operational environment that supports continuous care delivery.' },
  { q: 'Does the Operations Center help identify operational bottlenecks?', a: 'Yes. HealScript™ Operations Intelligence is designed to help organizations identify workflow delays, incomplete documentation, utilization imbalances, care coordination gaps, follow-up needs, and operational inefficiencies that may affect care delivery and organizational performance.' },
  { q: 'Can organizations monitor provider utilization and workload?', a: 'Yes. The Operations Center is designed to provide visibility into provider workload distribution, utilization patterns, scheduling activity, appointment movement, and operational capacity across clinicians, teams, programs, and locations.' },
  { q: 'How does the Operations Center support continuous care delivery?', a: 'The Operations Center helps connect what happens before, during, and between sessions by bringing together clinical workflows, HealConnect™ engagement signals, assessments, care coordination activity, operational workflows, and longitudinal intelligence into one connected operational experience.' },
  { q: 'Can the Operations Center surface risk and escalation visibility?', a: 'HealScript™ Operations Intelligence is designed to help surface clinically relevant patterns, engagement concerns, workflow alerts, incomplete documentation, escalation indicators, and operational signals that may support earlier visibility and coordinated follow-up.' },
  { q: 'Who is the HealScript™ Operations Center designed for?', a: 'The Operations Center is designed for clinics, group practices, health systems, universities, employers, wellness organizations, community programs, public health initiatives, and multi-site behavioral health organizations requiring centralized operational visibility and coordinated care intelligence.' },
  { q: 'Does the Operations Center replace clinical decision-making?', a: 'No. The HealScript™ Operations Center and CogneraAI™ are designed to augment clinicians, care teams, and operational leaders with assistive intelligence, workflow visibility, and operational insights. Licensed clinicians and authorized professionals remain responsible for all care decisions and organizational actions.' },
  { q: 'Is the Operations Center designed with Responsible AI principles?', a: 'Yes. HealScript™ Operations Intelligence is designed with Responsible AI principles including explainability, governance, privacy, security, human-in-the-loop oversight, and clinician-controlled operational and clinical decision-making.' },
  { q: 'Can the Operations Center integrate with existing healthcare systems?', a: 'HealScript™ is designed to support standards-based interoperability, including integration with existing healthcare infrastructure, enterprise systems, EHR environments, and operational workflows through interoperability-ready architecture.' },
]

export default function HealScript() {
  usePageTitle('HealScript™')
  return (
    <>
      <PageHero
        eyebrow="Powered by CogneraAI™ for providers"
        title="HealScript™"
        lead="A clinical and operational intelligence platform that helps providers reduce documentation burden, strengthen clinical decision-making, coordinate care, and maintain visibility between visits."
        actions={[
          { label: 'Request early access', to: '/early-access' },
          { label: 'HealScript™ Operations Center', to: '#operations-dashboard' },
        ]}
        image="/images/chhs1.webp"
        imageAlt="Clinician and client in a session supported by HealScript"
        chips={['AI-assisted documentation', 'Measurement-based care', 'Operational visibility', 'HealConnect integration']}
        related={[
          { label: 'CogneraAI™', to: '/cogneraai' },
          { label: 'Platform', to: '/platform' },
          { label: 'Solutions', to: '/solutions' },
          { label: 'HealConnect™', to: '/healconnect' },
          { label: 'Who We Serve', to: '/who-we-serve' },
        ]}
      />

      <Section>
        <Split
          media={
            <div>
              <Figure src="/images/healscript.webp" alt="HealScript clinical dashboard preview" />
              <Disclaimer>Disclaimer: Preview version only. Final live system functionality and UI may vary.</Disclaimer>
            </div>
          }
        >
          <SectionHeader
            eyebrow="Meet HealScript™"
            title="Clinical and operational intelligence for continuous care delivery."
            lead={[
              'HealScript™ brings AI-assisted documentation, measurement-based care, care coordination, telehealth context, and operational dashboards into one clinician-centered system.',
              'Through native integration with HealConnect™, HealScript™ turns between-session engagement, clinical workflows, and organizational data into a closed-loop model for earlier visibility and more coordinated support.',
            ]}
          />
        </Split>
      </Section>

      <Section tone="ink">
        <div className="statement">
          <SectionHeader light eyebrow="Powered by CogneraAI™" title="Assistive intelligence for documentation, care coordination, and operational visibility." />
          <div>
            <p className="on-dark">CogneraAI™ helps HealScript™ structure session data, assessments, documentation, engagement signals, and operational workflows into real-time insight while keeping clinicians and authorized care teams in control.</p>
            <Button to="/cogneraai" variant="light" icon="arrowRight" className="mt-24">Explore CogneraAI™</Button>
          </div>
        </div>
      </Section>

      <Section tone="soft" id="features">
        <SectionHeader
          eyebrow="Clinical and Operational Intelligence for continuous care delivery"
          title="Transform Your Practice"
          lead={[
            'HealScript™ is the clinical and operational intelligence layer within Cognera Health™, designed to help clinicians, providers, care teams, and organizations reduce administrative burden, strengthen clinical decision-making, coordinate care delivery, and maintain real-time visibility across care and operations.',
            'It unifies AI-assisted documentation, transcription, measurement-based care, structured assessments, outcome tracking, risk visibility, operational intelligence, and coordinated workflows within one connected system built for continuous, integrated care delivery.',
          ]}
        >
          <p className="section-lead">
            HealScript™ supports evidence-informed and measurement-based workflows while ensuring clinicians and authorized care teams remain in control of all diagnosis, treatment planning, escalation, and care decisions. Aligned with <Link to="/standards" className="inline-link">industry standards</Link> frameworks and guidance to help organizations improve efficiency, strengthen coordination, and deliver more consistent, outcome-informed care.
          </p>
        </SectionHeader>
        <CapabilityTabs groups={capabilities} />
      </Section>

      <Section id="empowering-healthcare-practitioners">
        <SectionHeader
          eyebrow="Empowering Healthcare Practitioners"
          title="Connected intelligence for every care role."
          lead="Empowering clinicians, providers, care teams, wellness professionals, support personnel, leadership teams and organizations with connected clinical, operational, and engagement intelligence designed to strengthen coordination, reduce administrative burden, improve visibility, and support continuous, integrated mental health, behavioral health, wellness, and well-being care delivery powered by CogneraAI™."
        />
        <CardGrid items={roles} cols={2} />
        <div className="card people-card">
          <h3>Empowering the People Behind Continuous Care</h3>
          <p>Support care professionals, support personnel, providers, practitioners, care teams, and operational leaders with connected clinical, operational, and engagement intelligence designed to strengthen coordination, improve visibility, reduce administrative burden, and support continuous, integrated mental health, behavioral health, wellness, and well-being care delivery.</p>
          <Checklist items={people} className="checklist-sm people-list" />
          <Button to="/who-we-serve" variant="secondary" icon="arrowRight">Who We Serve</Button>
        </div>
      </Section>

      <Section tone="soft" id="continuous-care-workflow">
        <SectionHeader
          eyebrow="Continuous care workflow"
          title="Connecting every stage of continuous care delivery."
          lead="HealScript™ keeps clinical workflows, between-session signals, care-team actions, and operational visibility connected before, during, and after the session."
        />
        <Steps items={workflow} />

        <h2 className="sub-heading">Connected Intelligence for HealConnect™ and HealScript™</h2>
        <p className="section-lead narrow-lead">Experience the power of unified healthcare delivery through HealScript™ and HealConnect™, creating a continuous loop of care, guidance, engagement, insights, and outcomes.</p>
        <div className="mt-32"><DataLoop /></div>
        <div className="mt-32"><CardGrid items={connected} cols={4} className="compact-cards" /></div>
        <div className="unified-box">
          <ul className="badge-row">
            <li><span>Better</span>Engagement</li>
            <li><span>Improved</span>Outcomes</li>
            <li><span>Proactive</span>Care</li>
            <li><span>Data-Driven</span>Decisions</li>
          </ul>
          <div>
            <h3>Unified. Intelligent. Impactful.</h3>
            <p>HealConnect™ and HealScript™ work together to deliver smarter care, stronger engagement, better outcomes, and healthier lives.</p>
          </div>
        </div>

        <h2 className="sub-heading">A bidirectional data loop for continuous care.</h2>
        <p className="label-caps">HealScript™ + HealConnect™</p>
        <p className="section-lead narrow-lead mb-28">HealScript™ and HealConnect™ work together to connect clinical sessions, care plans, between-session engagement, and organizational visibility.</p>
        <Steps items={bidirectional} />
        <div className="actions">
          <Button to="/healconnect" variant="secondary" icon="arrowRight">Explore HealConnect™</Button>
        </div>
      </Section>

      <Section id="operations-dashboard">
        <Split
          align="start"
          media={
            <div>
              <Figure src="/images/chopscenter.webp" alt="HealScript Operations Intelligence dashboard preview" />
              <Disclaimer>Disclaimer: Preview version only. Dashboard metrics shown are illustrative examples. Final live system functionality and UI may vary.</Disclaimer>
            </div>
          }
        >
          <SectionHeader
            eyebrow="Clinical and operational intelligence"
            title="HealScript™ connects the work of care with the system running around it."
            lead={[
              'HealScript™ Operations Intelligence brings clinical workflows, HealConnect™ signals, assessments, care-plan activity, documentation, utilization, and outcomes into a shared operating layer for clinicians, care teams, and organizations.',
              'Powered by CogneraAI™, the operations center helps convert disconnected activity into usable intelligence so leaders can see what is happening, where attention is needed, and what actions may support more coordinated care delivery.',
            ]}
          />
          <Checklist items={opsPoints} />
        </Split>
      </Section>

      <FaqSection tone="soft" eyebrow="HealScript™ FAQ" title="Common questions from providers, care teams, and organizations." items={faq} />
      <FaqSection id="operations-faq" eyebrow="HealScript™ Operations Center FAQ" title="Common questions about operational intelligence and connected care visibility." items={opsFaq} />

      <CtaBand
        title="Ready to enhance your practice?"
        text="Explore how HealScript™ can help your organization reduce documentation burden, strengthen clinical visibility, and deliver continuous, coordinated care."
        actions={[{ label: 'Request early access', to: '/early-access' }, { label: 'Talk to our team', to: '/contact' }]}
      />
    </>
  )
}
