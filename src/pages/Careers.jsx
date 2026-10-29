import { usePageTitle, PageHero, Section, Checklist, Button } from '../components/ui'
import Icon from '../components/Icon'

export default function Careers() {
  usePageTitle('Careers')
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Join Our Mission"
        lead="Building the future of care through innovative technology and cognitive and collaborative intelligence™—join us and make a meaningful impact."
        image="/images/careers.webp"
        actions={[{ label: 'Apply Now', to: 'mailto:careers@cognerahealth.ai' }]}
      />

      <Section>
        <div className="grid grid-2">
          <article className="card apply-card">
            <span className="icon-tile"><Icon name="mail" /></span>
            <h2>How to Apply</h2>
            <p>To apply, please send your resume and a brief introduction to:</p>
            <a className="big-mail" href="mailto:careers@cognerahealth.ai">careers@cognerahealth.ai</a>
            <Button to="mailto:careers@cognerahealth.ai" icon="arrowRight">Apply Now</Button>
          </article>
          <article className="card">
            <span className="icon-tile"><Icon name="clipboard" /></span>
            <h2>Application Requirements</h2>
            <p>Please include the following in your application:</p>
            <Checklist
              items={['Your resume/CV', "Role you're interested in", 'Brief introduction about yourself', 'Why you want to join Cognera Health']}
            />
          </article>
          <article className="card">
            <span className="icon-tile"><Icon name="scale" /></span>
            <h2>Equal Opportunity Employer</h2>
            <p>Cognera Health is an equal opportunity employer. We are committed to providing fair and inclusive employment practices and do not discriminate based on age, color, disability, gender, gender identity or expression, genetic information, national origin, race, religion, sexual orientation, or military status.</p>
          </article>
          <article className="card">
            <span className="icon-tile"><Icon name="users" /></span>
            <h2>Diversity &amp; Inclusion</h2>
            <p>Cognera Health is committed to fostering a culture of collaboration, innovation, and belonging. We believe our strength comes from diverse perspectives, backgrounds, and experiences, and that meaningful progress is driven by inclusive, open exchange of ideas.</p>
          </article>
        </div>
      </Section>
    </>
  )
}
