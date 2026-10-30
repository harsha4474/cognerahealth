import { usePageTitle, PageHero, Section, SectionHeader, CardGrid, Checklist } from '../components/ui'
import { people } from './HealScript'

const orgs = [
  { icon: 'hospital', title: 'Hospitals & Health Systems', text: 'Transform system-wide care delivery with a unified, continuous care platform powered by CogneraAI™.', bullets: ['Multi-facility resource management and capacity optimization', 'Integrated care coordination across departments, providers, and sites', 'Real-time analytics across utilization, outcomes, and performance', 'Longitudinal patient insights across the full care continuum', 'Workflow orchestration for complex, multi-disciplinary care delivery'] },
  { icon: 'stethoscope', title: 'Health Clinics & Private Practices', text: 'Enhance clinical efficiency and deliver more personalized, continuous care at the practice level.', bullets: ['AI-assisted documentation, session summaries, and structured workflows', 'Individual progress tracking with longitudinal insights and assessments', 'Intelligent treatment planning aligned with evidence-based care', 'Reduced administrative burden to increase time for patient care', 'Continuous engagement between sessions through guided tools'] },
  { icon: 'graduation', title: 'Universities & Educational Institutions', text: 'Support student mental health and wellness with proactive, coordinated care systems.', bullets: ['Student wellness and behavioral health programs', 'Early risk detection, crisis prevention, and intervention support', 'Campus-wide analytics for utilization, trends, and outcomes', 'Coordinated care across counseling, health services, and support teams', 'Continuous engagement tools for students beyond appointments'] },
  { icon: 'landmark', title: 'Government Organizations', text: 'Strengthen public health systems with scalable, secure, and data-driven care infrastructure.', bullets: ['Population health management and program oversight', 'Secure, privacy-conscious data infrastructure and interoperability', 'Real-time visibility into care delivery, utilization, and outcomes', 'Compliance-aligned workflows and governance support', 'Cross-agency coordination for community and behavioral health initiatives'] },
  { icon: 'heartHand', title: 'Non-Profit Organizations', text: 'Maximize impact with intelligent tools designed to extend reach and improve outcomes.', bullets: ['Community outreach program management and coordination', 'Resource allocation and service optimization', 'Impact tracking and outcome measurement', 'Data-informed decision-making for program effectiveness', 'Scalable support for underserved and at-risk populations'] },
  { icon: 'home', title: 'Communities', text: 'Enable connected, collaborative wellness ecosystems that extend beyond clinical settings.', bullets: ['Community health and wellness program coordination', 'Resource discovery and connection to local services', 'Peer support and network-based engagement', 'Wellness event planning and participation tracking', 'Continuous support across social, behavioral, and preventive care'] },
  { icon: 'briefcase', title: 'Corporate Organizations & Employers', text: 'Transform workforce wellness with continuous, data-driven, and integrated care solutions.', bullets: ['Employee wellness and behavioral health programs', 'Workforce analytics for engagement, utilization, and outcomes', 'Integration with benefits, EAPs, and health systems', 'Proactive support for stress, burnout, and mental health', 'Continuous engagement tools to support employees beyond point-in-time services'] },
]

export default function WhoWeServe() {
  usePageTitle('Who We Serve')
  return (
    <>
      <PageHero
        eyebrow="Who We Serve"
        title="Serving All Healthcare Organizations"
        lead="Transform your care delivery with our comprehensive CogneraAI™ powered platform."
        actions={[
          { label: 'About CogneraAI™', to: '/cogneraai' },
          { label: 'About Platform', to: '/platform' },
          { label: 'About Solutions', to: '/solutions' },
          { label: 'About HealScript™', to: '/healscript' },
          { label: 'About HealConnect™', to: '/healconnect' },
        ]}
        image="/images/whoweserve.webp"
      />

      <Section tone="soft">
        <SectionHeader
          eyebrow="Who We Serve"
          title="Organizations & Professionals We Serve"
          lead="Supporting healthcare organizations, providers, care teams, wellness professionals, and operational leaders with connected clinical, operational, and engagement intelligence designed to strengthen coordination, improve visibility, reduce administrative burden, and enable continuous, integrated care delivery across mental health, behavioral health, wellness, and well-being."
        />
        <CardGrid items={orgs} cols={3} />
      </Section>

      <Section>
        <div className="split align-start">
          <SectionHeader
            eyebrow="Professionals"
            title="Empowering the People Behind Continuous Care"
            lead="Support care professionals, support personnel, providers, practitioners, care teams, and operational leaders with connected clinical, operational, and engagement intelligence designed to strengthen coordination, improve visibility, reduce administrative burden, and support continuous, integrated mental health, behavioral health, wellness, and well-being care delivery."
          />
          <div className="card">
            <Checklist items={people} />
          </div>
        </div>
      </Section>

    </>
  )
}
