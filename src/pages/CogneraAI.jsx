import { usePageTitle, PageHero, Section, SectionHeader, CardGrid, Steps, Figure, Checklist, FaqSection } from '../components/ui'

const overview = [
  { title: 'Continuous care foundation', text: 'Powers connected mental health, behavioral health, and wellness care across the Cognera Health™ ecosystem.' },
  { title: 'Cognitive and Collaborative Intelligence™', text: 'Built on proprietary Cognitive and Collaborative Intelligence™, CogneraAI™ combines AI-powered clinical reasoning, contextual understanding, longitudinal analysis, predictive modeling, and assistive intelligence with human expertise across clinicians, care teams, individuals, and organizations.' },
  { title: 'Longitudinal data synthesis', text: 'By synthesizing longitudinal clinical, behavioral, engagement, and operational data, CogneraAI™ enables coordinated decision-making, real-time operational visibility, continuous engagement, connected clinical and operational intelligence, documentation support, predictive insights, recommendations, and longitudinal trend analysis.' },
  { title: 'Evidence-based evolution', text: 'Evolves through comprehensive, large-scale, evidence-based clinical and behavioral datasets curated under subject matter expert oversight.' },
  { title: 'Ongoing model optimization', text: 'Ongoing model retraining, validation workflows, continuous learning, and incremental optimization support AI-assisted documentation, NLP-powered session summarization, predictive intelligence, automated recommendations, longitudinal care insights, and real-time assistive support across the care continuum.' },
  { title: 'Responsible AI oversight', text: 'Designed with transparency, explainability, governance, bias monitoring, validation testing, privacy safeguards, and human-in-the-loop review.' },
]

const principles = [
  { icon: 'users', title: 'Human-in-the-loop', text: 'CogneraAI™ supports clinical expertise and does not replace clinician judgment, diagnosis, treatment planning, or provider-led care decisions.' },
  { icon: 'sparkles', title: 'Assistive by design', text: 'AI-generated insights and recommendations support clinicians and care teams by enhancing visibility, efficiency, and decision-making without replacing professional judgment.' },
  { icon: 'stethoscope', title: 'Clinician authority', text: 'Licensed professionals retain full responsibility for diagnosis, treatment planning, escalation, and all care decisions, ensuring that clinical expertise remains central to every outcome.' },
  { icon: 'eye', title: 'Explainability', text: 'Insights and recommendations are designed to be transparent, interpretable, and grounded in structured clinical, behavioral, and longitudinal data—ensuring they are understandable, reviewable, and contextually relevant.' },
  { icon: 'shieldCheck', title: 'Governance and Safety', text: 'Responsible AI is guided by oversight, validation, monitoring, traceability, safeguards, and continuous improvement to support ethical and clinically appropriate use.' },
]

const lifecycle = [
  { title: 'Define intended use', text: 'Clarify what the AI supports, who reviews it, and where it should not be used.' },
  { title: 'Validate before release', text: 'Use testing, expert review, and quality checks before capabilities move into production workflows.' },
  { title: 'Gate sensitive workflows', text: 'Keep high-impact outputs subject to professional review, escalation rules, and appropriate controls.' },
  { title: 'Monitor real-world use', text: 'Track performance, safety signals, feedback, and drift so risks can be found early.' },
  { title: 'Improve continuously', text: 'Update safeguards, documentation, validation methods, and model behavior as evidence evolves.' },
]

export const cogneraFaq = [
  { q: 'What is CogneraAI™?', a: 'CogneraAI™ is the intelligence foundation powering continuous, connected mental health, behavioral health, and wellness care across the Cognera Health™ ecosystem. It synthesizes longitudinal clinical, behavioral, engagement, and operational data into assistive real-time intelligence, automation, predictive insights, and connected care visibility.' },
  { q: 'What is Cognitive and Collaborative Intelligence™?', a: 'Cognitive and Collaborative Intelligence™ is CogneraAI’s proprietary framework combining cognitive intelligence, including contextual analysis, predictive modeling, and clinical reasoning, with collaborative intelligence that connects clinicians, care teams, individuals, and organizations through a shared understanding of care.' },
  { q: 'Does CogneraAI™ replace clinicians or providers?', a: 'No. CogneraAI™ is designed to augment clinicians, providers, and authorized care teams, not replace them. All recommendations, automation, insights, and workflows are assistive in nature, while all diagnosis, treatment planning, escalation, and care decisions remain under human oversight.' },
  { q: 'What types of intelligence does CogneraAI™ provide?', a: 'CogneraAI™ supports AI-assisted documentation, predictive insights, longitudinal trend analysis, contextual recommendations, NLP-powered session summarization, operational visibility, workflow support, and continuous clinical and behavioral intelligence across the care continuum.' },
  { q: 'How does CogneraAI™ support continuous care?', a: 'CogneraAI™ connects session documentation, assessments, behavioral signals, operational workflows, and between-session engagement into a unified intelligence layer that supports continuous visibility and coordinated care delivery.' },
  { q: 'What data does CogneraAI™ analyze?', a: 'CogneraAI™ is designed to analyze structured and unstructured clinical, behavioral, operational, and engagement-related data including assessments, session documentation, longitudinal trends, care coordination activities, and behavioral signals.' },
  { q: 'How does CogneraAI™ support clinicians and care teams?', a: 'CogneraAI™ assists clinicians and care teams through workflow support, contextual insights, documentation assistance, longitudinal visibility, predictive analysis, care coordination support, and operational intelligence designed to improve efficiency and continuity of care.' },
  { q: 'Does CogneraAI™ support predictive insights and trend analysis?', a: 'Yes. CogneraAI™ is designed to identify longitudinal patterns, behavioral trends, engagement signals, and clinically relevant changes that may help support proactive intervention and operational visibility.' },
  { q: 'How does CogneraAI™ learn and improve over time?', a: 'CogneraAI™ continuously evolves through comprehensive and large-scale evidence-based clinical and behavioral datasets curated under subject matter expert oversight through ongoing validation, model retraining, continuous learning, and incremental optimization.' },
  { q: 'What Responsible AI principles guide CogneraAI™?', a: 'CogneraAI™ is designed with Responsible AI principles including transparency, explainability, governance, bias monitoring, validation testing, privacy, security, and strict human-in-the-loop oversight aligned with Cognera Health’s AI Ethics Governance framework.' },
  { q: 'Is CogneraAI™ designed for healthcare environments?', a: 'Yes. CogneraAI™ is designed for mental health, behavioral health, and wellness environments with support for enterprise workflows, governance, interoperability, operational visibility, privacy, security, and standards-based healthcare infrastructure.' },
  { q: 'Can CogneraAI™ support operational intelligence?', a: 'Yes. CogneraAI™ is designed to support operational intelligence across utilization, workflows, care coordination, engagement, outcomes visibility, capacity planning, and organizational performance.' },
  { q: 'How does CogneraAI™ work across the Cognera Health™ ecosystem?', a: 'CogneraAI™ powers intelligence capabilities across HealScript™, HealConnect™, and operational workflows by connecting clinical, engagement, and organizational data into a unified, continuous care intelligence layer.' },
  { q: 'Does CogneraAI™ support measurement-based and evidence-based care?', a: 'Yes. CogneraAI™ is designed to support evidence-based and measurement-based care workflows through structured assessments, longitudinal tracking, contextual analysis, and assistive intelligence aligned with industry-standard frameworks.' },
  { q: 'How does CogneraAI™ help address fragmented care?', a: 'CogneraAI™ is designed to unify disconnected clinical, behavioral, engagement, and operational workflows into a continuous, connected intelligence framework that supports coordinated visibility and longitudinal understanding across the care continuum.' },
]

export default function CogneraAI() {
  usePageTitle('CogneraAI™')
  return (
    <>
      <PageHero
        eyebrow="CogneraAI™ Responsible AI"
        title="Responsible intelligence for continuous, connected care"
        lead="CogneraAI™ is the intelligence foundation powering continuous, connected mental health, behavioral health, and wellness care across the Cognera Health™ ecosystem."
        actions={[
          { label: 'About Platform', to: '/platform' },
          { label: 'About Solutions', to: '/solutions' },
          { label: 'About HealScript™', to: '/healscript' },
          { label: 'About HealConnect™', to: '/healconnect' },
          { label: 'Legal & Governance', to: '/trust#governance-program-structure' },
        ]}
        image="/images/cs4.webp"
        imageAlt="Clinician working alongside assistive AI"
      />

      <Section>
        <SectionHeader eyebrow="CogneraAI™ Overview" title="The intelligence foundation behind continuous care" />
        <div className="grid grid-3 numbered">
          {overview.map((o, i) => (
            <article key={o.title} className="card">
              <span className="card-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{o.title}</h3>
              <p>{o.text}</p>
            </article>
          ))}
        </div>
        <Figure
          className="wide-figure"
          src="/images/cogneraAIhires.webp"
          alt="CogneraAI intelligence layer overview showing AI and human expertise across care teams"
          caption="CogneraAI™ connects longitudinal data, clinical reasoning, collaborative expertise, and governed recommendations."
        />
      </Section>

      <Section tone="soft">
        <SectionHeader
          eyebrow="Responsible AI principles"
          title="Built for responsible use across the care continuum"
          lead="CogneraAI™ is designed to support safe, explainable, governed, and clinically supervised intelligence across mental health, behavioral health, and wellness care."
        />
        <CardGrid items={principles} cols={3} />
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Governance model"
          title="Responsible AI is governed across the lifecycle"
          lead="CogneraAI™ frames Responsible AI as a repeatable operating model that spans design, testing, deployment, monitoring, and continuous improvement."
        />
        <Steps items={lifecycle} />
      </Section>

      <Section tone="ink">
        <div className="statement">
          <SectionHeader
            light
            eyebrow="Clinical authority"
            title="Cognera Health™ reinforces clinical expertise with intelligent support while preserving full professional authority across all care decisions."
          />
          <Checklist
            items={[
              'All recommendations are assistive, advisory, and subject to professional review.',
              'Clinicians, providers, and care teams retain full decision-making authority.',
              'No autonomous diagnosis, treatment, or care execution occurs without licensed professional oversight.',
              'Clinical workflows are designed to align with evidence-based and measurement-based care principles.',
            ]}
          />
        </div>
      </Section>

      <FaqSection
        id="cogneraai-faq"
        eyebrow="CogneraAI™ FAQ"
        title="Common questions about assistive intelligence, governance, clinical oversight, and continuous care."
        items={cogneraFaq}
      />

    </>
  )
}
