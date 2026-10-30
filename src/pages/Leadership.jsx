import { usePageTitle, PageHero, Section, GetInTouch } from '../components/ui'
import Icon from '../components/Icon'
import { LINKEDIN } from '../nav'

const blocks = [
  { icon: 'stethoscope', title: 'Advisory Board', stat: '70+ years', statLabel: 'combined clinical leadership', text: 'Our advisory board represents more than 70 years of combined clinical leadership and innovation across mental health, behavioral health, wellness, and wellbeing. With deep clinical experience across leading organizations, and as experienced counselors, educators, and strategic advisors, they bridge real-world clinical practice with scalable, technology-driven care models. Their visionary leadership and academic expertise ensure Cognera Health’s solutions remain clinically rigorous, evidence-aligned, and future-focused.' },
  { icon: 'cpu', title: 'Leadership Team', stat: '60+ years', statLabel: 'combined platform & healthcare SaaS experience', text: 'Our leadership team brings over 60 years of combined experience across enterprise platforms, healthcare SaaS, and clinical innovation. With a proven track record of building and scaling healthcare technology, they bring deep expertise in regulatory compliance, responsible AI, HIPAA-aligned architecture, and advanced data systems, including federated learning. This combination of clinical insight and technical execution positions Cognera Health as a category-defining leader in digital healthcare transformation.' },
]

export default function Leadership() {
  usePageTitle('Leadership')
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Leadership Driving Cognera Health™"
        lead="Advancing care delivery by combining human expertise with intelligent technology that cohesively unifies data, insight, and action across the full continuum of care."
        image="/images/teams_meeting.webp"
      />

      <Section>
        <div className="grid grid-2">
          {blocks.map((b) => (
            <article key={b.title} className="card leader-card">
              <div className="card-head">
                <span className="icon-tile"><Icon name={b.icon} /></span>
              </div>
              <h2>{b.title}</h2>
              <p className="leader-stat"><strong>{b.stat}</strong> {b.statLabel}</p>
              <p>{b.text}</p>
            </article>
          ))}
        </div>
        <article className="card expertise-card">
          <h2>Unmatched Expertise</h2>
          <p>Together, our advisory board and leadership team bring unmatched expertise across clinical care, technology innovation, and healthcare transformation-powering Cognera Health’s mission to redefine integrated care across mental health, behavioral health, wellness, and wellbeing through category-defining, AI-driven, provider- and individual-centric solutions.</p>
        </article>
      </Section>

      <GetInTouch
        items={[
          { icon: 'mail', title: 'Contact Us', text: 'Click to learn more about Cognera Health.', href: 'mailto:info@cognerahealth.ai', label: 'Contact Us' },
          { icon: 'briefcase', title: 'Join Our Team', text: 'Click to join our mission.', href: '/careers', label: 'Join Our Team' },
          { icon: 'linkedin', title: 'Connect With Us', text: 'Interested in learning more about how Cognera Health can transform your care experience? Reach out to us today.', href: LINKEDIN, label: 'LinkedIn' },
        ]}
      />
    </>
  )
}
