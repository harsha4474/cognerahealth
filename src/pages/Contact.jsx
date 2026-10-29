import { Link } from 'react-router-dom'
import { usePageTitle, PageHero, Section, SectionHeader, ContactCard, CtaBand } from '../components/ui'
import mailto from '../content/mailto.json'
import { LINKEDIN } from '../nav'

const departments = [
  { icon: 'mail', title: 'General Information', text: "General inquiries and information about Cognera Health's Platform, Products and Services", href: mailto.general, label: 'General Information' },
  { icon: 'user', title: 'Founders', text: 'Connect directly with our leadership team for strategic discussions', href: mailto.founders, label: 'Founders' },
  { icon: 'handshake', title: 'Partnerships', text: 'Explore collaboration opportunities and strategic partnerships', href: mailto.partnerships, label: 'Partnerships' },
  { icon: 'trendingUp', title: 'Investments', text: 'For investment opportunities and financial inquiries', href: mailto.investments, label: 'Investments' },
  { icon: 'globe', title: 'Visit Us', text: 'Connect with us online', href: 'https://www.cognerahealth.ai', label: 'www.cognerahealth.ai' },
  { icon: 'linkedin', title: 'Connect With Us', text: 'Interested in learning more about how Cognera Health can transform your care experience? Reach out to us today.', href: LINKEDIN, label: 'LinkedIn' },
]

export default function Contact() {
  usePageTitle('Contact')
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch"
        lead="Have questions about Cognera Health's products and services? We'd love to hear from you! Choose the most appropriate department below to get in touch."
        image="/images/contact.webp"
      />
      <Section tone="soft">
        <SectionHeader title="Choose a department" align="center" />
        <div className="grid grid-3">
          {departments.map((d) => <ContactCard key={d.title} {...d} />)}
        </div>
        <p className="footnote center">
          Looking for privacy, security, compliance, legal or support contacts? Visit the <Link className="inline-link" to="/trust#contact-section">Trust Center</Link>.
        </p>
      </Section>
      <div className="tone-soft">
        <CtaBand
          title="Step into the future of human-centered, intelligent care."
          text="Be among the first to experience our CogneraAI™-powered healthcare platform."
          actions={[{ label: 'Get early access', to: '/early-access' }, { label: 'Explore Platform', to: '/platform' }]}
        />
      </div>
    </>
  )
}
