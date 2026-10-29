import mailto from '../content/mailto.json'
import { usePageTitle, PageHero, Section, SectionHeader, CardGrid, Checklist, Split, Figure, Steps, Tabs, CtaBand } from '../components/ui'

const PARTNER_MAIL = mailto.partnerships

const models = [
  { label: 'Healthcare Providers', icon: 'stethoscope', text: 'Join a network of clinicians, care teams, and healthcare organizations delivering continuous, connected care.', bullets: ['AI-assisted clinical workflows, documentation, and decision support', 'Automated, structured workflows aligned with evidence-based care', 'Continuous patient engagement between sessions', 'Care coordination across providers, specialties, and systems', 'Longitudinal patient insights for improved outcomes'] },
  { label: 'Technology Partners', icon: 'cpu', text: 'Integrate and extend your solutions within the Cognera Health™ platform ecosystem.', bullets: ['API-first architecture with FHIR/HL7-ready interoperability', 'Custom workflows and embedded integrations', 'Access to CogneraAI™ intelligence-layer capabilities', 'Developer tools, sandbox environments, and technical documentation', 'Co-development opportunities for new solutions and features'] },
  { label: 'Research Partners', icon: 'flask', text: 'Collaborate on advancing clinical, behavioral, wellness, and population health innovation.', bullets: ['Data-informed research and outcome analysis', 'Measurement-based and evidence-based care collaboration', 'Aggregated, de-identified insights where applicable', 'Research grants and pilot programs', 'Publication and thought leadership opportunities'] },
  { label: 'Academic Partners', icon: 'graduation', text: 'Work with universities and institutions to shape the future of care and healthcare technology.', bullets: ['Student training programs and experiential learning opportunities', 'Joint research in mental health, behavioral health, and wellness', 'Curriculum integration and educational resources', 'Innovation labs and collaborative development programs', 'Support for faculty-led research and clinical studies'] },
  { label: 'Corporate & Enterprise', icon: 'briefcase', text: 'Build strategic partnerships to deliver scalable, enterprise-grade care and wellness solutions.', bullets: ['Enterprise deployments across health systems, employers, and wellness programs', 'Custom integrations with benefits platforms, EHRs, and enterprise systems', 'Workforce wellness and behavioral health solutions', 'Dedicated account management and implementation support', 'Data-driven insights for performance, engagement, and outcomes'] },
  { label: 'Government & Public Sector', icon: 'landmark', text: 'Support large-scale public health initiatives with secure, scalable infrastructure.', bullets: ['Population health management and analytics', 'Cross-agency care coordination and data integration', 'Compliance-aligned, privacy-conscious infrastructure', 'Community and behavioral health program enablement', 'Real-time visibility into program outcomes and utilization'] },
  { label: 'Non-Profit & Community', icon: 'heartHand', text: 'Extend access and improve outcomes across underserved and at-risk populations.', bullets: ['Community outreach and program coordination', 'Resource allocation and service delivery optimization', 'Impact tracking and outcome measurement', 'Prevention, early intervention, and crisis response support', 'Scalable tools to expand reach and engagement'] },
]

const why = [
  { icon: 'sparkles', title: 'Innovation Leadership', text: 'Advance healthcare transformation with CogneraAI™ and Cognitive and Collaborative Intelligence™.', note: 'Co-innovation across clinical, behavioral, and wellness domains' },
  { icon: 'layers', title: 'Unified Platform Ecosystem', text: 'Connect into one continuous care platform rather than fragmented point solutions.', note: 'Shared data layer across care delivery, engagement, and operations' },
  { icon: 'cpu', title: 'Technical Enablement', text: 'Accelerate integration and deployment with dedicated technical resources and solution support.', note: 'API access, integration guidance, and developer support' },
  { icon: 'globe', title: 'Market Expansion', text: 'Extend reach across healthcare, wellness, enterprise, institutional, and community ecosystems.', note: 'Joint go-to-market and co-branding opportunities' },
  { icon: 'trendingUp', title: 'Strategic Growth', text: 'Unlock long-term value through partnership-driven innovation, adoption, and platform expansion.', note: 'Revenue growth and strategic alignment' },
]

const process = [
  { title: 'Discover', text: 'Align on goals, use cases, audiences, technical requirements, and partnership model.' },
  { title: 'Integrate', text: 'Connect systems, workflows, APIs, data flows, and operational requirements.' },
  { title: 'Deploy', text: 'Launch solutions across target users, teams, institutions, communities, or enterprise environments.' },
  { title: 'Optimize', text: 'Track performance, outcomes, adoption, engagement, and operational impact.' },
  { title: 'Scale', text: 'Expand across new markets, care models, populations, organizations, and use cases.' },
]

export default function Partnerships() {
  usePageTitle('Partnerships')
  return (
    <>
      <PageHero
        eyebrow="Partnerships"
        title="Join our healthcare innovation network"
        lead="Partner with Cognera Health™ to advance the shift from fragmented, episodic care to continuous, integrated, and intelligent care, powered by CogneraAI™ and Cognitive and Collaborative Intelligence™."
        actions={[
          { label: 'Contact Partnership Team', to: PARTNER_MAIL },
          { label: 'Request Early Access', to: '/early-access' },
        ]}
        image="/images/partnerships.webp"
      >
        <p className="hero-tagline">Build the future of continuous care together.</p>
      </PageHero>

      <Section>
        <Split media={<Figure src="/images/partnerships1.webp" alt="Care team reviewing partnership and care strategy" caption="Partnerships that connect care delivery, engagement, operations, and outcomes." />}>
          <SectionHeader
            eyebrow="Partner with Cognera Health™"
            title="Collaborate across the full care ecosystem"
            lead="Work alongside clinicians, care teams, organizations, researchers, technology innovators, and community leaders to build and scale the next generation of mental health, behavioral health, and wellness solutions."
          />
          <Checklist
            items={[
              { title: 'Continuous care:', text: 'expand support beyond sessions into coordinated, longitudinal engagement.' },
              { title: 'Unified intelligence:', text: 'connect clinical, behavioral, operational, and engagement data.' },
              { title: 'Scalable impact:', text: 'deploy across providers, enterprises, institutions, and communities.' },
            ]}
          />
        </Split>
      </Section>

      <Section tone="soft" id="partner-types">
        <SectionHeader
          eyebrow="Partnership models"
          title="Built for providers, innovators, institutions, enterprises, and communities"
          lead="Cognera Health™ supports partnership pathways across healthcare delivery, technology integration, research, education, enterprise wellness, public health, and community impact."
        />
        <Tabs
          tabs={models}
          render={(m) => (
            <div className="capability-panel model-panel">
              <div>
                <h3>{m.label}</h3>
                <p>{m.text}</p>
              </div>
              <Checklist items={m.bullets} />
            </div>
          )}
        />
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Why partner with Cognera Health™"
          title="Join a category-defining continuous care platform"
          lead="Build with a platform designed to enable continuous, integrated care across the full continuum, enhancing clinical, operational, and individual outcomes while expanding access and engagement."
        />
        <CardGrid items={why} cols={5} className="compact-cards" />
      </Section>

      <Section tone="soft">
        <SectionHeader
          eyebrow="Partner engagement model"
          title="How we work together"
          lead="Our partnership process is designed to move from strategic alignment to integration, deployment, optimization, and scale."
        />
        <Steps items={process} />
      </Section>

      <div className="tone-soft">
        <CtaBand
          eyebrow="Build the future of continuous care together"
          title="Partner with Cognera Health™ to transform care delivery"
          text="Collaborate with us to unlock new opportunities across clinical, operational, enterprise, academic, research, public health, and community ecosystems. Advance continuous, integrated care at scale."
          actions={[{ label: 'Contact Partnership Team', to: PARTNER_MAIL }, { label: 'Request Early Access', to: '/early-access' }]}
        />
      </div>
    </>
  )
}
