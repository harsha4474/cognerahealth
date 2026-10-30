import { usePageTitle, PageHero, Section, SectionHeader, CardGrid, GetInTouch } from '../components/ui'
import Icon from '../components/Icon'
import { LINKEDIN } from '../nav'

const values = [
  { icon: 'sparkles', title: 'Innovate', text: 'We believe in pushing the boundaries of technology and innovation—leveraging CogneraAI™ and Cognitive and Collaborative intelligence™ to deliver actionable insights that enable better decision-making and deeper engagement.' },
  { icon: 'heart', title: 'Customer Focus', text: 'We believe customers are at the heart of everything we do—driving our innovation and shaping solutions that deliver personalized support and real-time insights to meet their evolving needs.' },
  { icon: 'users', title: 'Collaborate', text: 'We believe transformative innovation is driven by diverse perspectives—building a connected ecosystem that enables smarter, more effective solutions.' },
  { icon: 'smile', title: 'Have Fun', text: 'We believe in fostering a fun, creative, and energetic culture and environment that inspires curiosity, fuels innovation, and promotes sustainable habits—driving best-in-class wellness solutions.' },
]

export default function About() {
  usePageTitle('About')
  return (
    <>
      <PageHero
        eyebrow="About"
        title="About Cognera Health"
        lead="Cognera Health™ is a category-defining technology platform transforming care delivery through CogneraAI™—making mental health, behavioral health, and wellness care more continuous, connected, and effective."
        image="/images/teams_meeting.webp"
      />

      <Section>
        <div className="grid grid-2">
          <article className="card vm-card">
            <span className="icon-tile"><Icon name="eye" /></span>
            <h2>Our Vision</h2>
            <p>To redefine global care by empowering providers with continuous, integrated, and comprehensive care technology — CogneraAI™ powered by cognitive and collaborative intelligence™ and seamlessly embedded into everyday life—to expand access and enable healthier, more resilient individuals and communities worldwide.</p>
          </article>
          <article className="card vm-card">
            <span className="icon-tile"><Icon name="target" /></span>
            <h2>Our Mission</h2>
            <p>To equip providers, clinicians, care teams with category-defining care technology to deliver continuous, integrated, and comprehensive care, reduce administrative burden, enhance clinical decision-making, and optimize operations—transforming outcomes and expanding access and engagement for individuals worldwide and ultimately helping save lives.</p>
          </article>
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeader eyebrow="What we believe" title="Our Values" />
        <CardGrid items={values} cols={4} />
      </Section>

      <GetInTouch
        items={[
          { icon: 'mail', title: 'Contact Us', text: 'Learn more about Cognera Health™ and how we support continuous, integrated care.', href: 'mailto:info@cognerahealth.ai', label: 'Contact Us' },
          { icon: 'briefcase', title: 'Join Our Team', text: 'Be part of building the future of continuous care.', href: '/careers', label: 'Join Our Team' },
          { icon: 'linkedin', title: 'Connect With Us', text: 'Interested in how Cognera Health™ can transform care delivery? Let’s connect.', href: LINKEDIN, label: 'LinkedIn' },
        ]}
      />
    </>
  )
}
