import { usePageTitle, Section, Actions } from '../components/ui'

export default function NotFound() {
  usePageTitle('Page not found')
  return (
    <Section narrow className="not-found">
      <p className="eyebrow">404</p>
      <h1>We couldn’t find that page.</h1>
      <p className="section-lead">Please check the URL and try again, or head back to the homepage.</p>
      <Actions items={[{ label: 'Go to homepage', to: '/' }, { label: 'Contact us', to: '/contact' }]} />
    </Section>
  )
}
