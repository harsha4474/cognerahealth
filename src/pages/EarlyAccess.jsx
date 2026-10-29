import { useState } from 'react'
import { usePageTitle, PageHero, Section, SectionHeader, Checklist } from '../components/ui'
import Icon from '../components/Icon'

const roles = ['Therapist / counselor', 'Psychiatrist / prescriber', 'Psychologist', 'Clinical social worker', 'Clinical director', 'Practice owner', 'Health system leader', 'Employer / wellness leader', 'Investor', 'Partner']
const interests = ['Early access', 'Organization / platform demo', 'Partnership', 'Investor conversation', 'Security or compliance review', 'Other']

const countWords = (t) => (t.trim() ? t.trim().split(/\s+/).length : 0)

export default function EarlyAccess() {
  usePageTitle('Get Early Access')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)
  const words = countWords(message)

  const submit = (e) => {
    e.preventDefault()
    const f = Object.fromEntries(new FormData(e.currentTarget))
    const v = (k) => String(f[k] ?? '').trim()
    if (['first_name', 'last_name', 'email', 'phone', 'organization', 'role', 'interest', 'message'].some((k) => !v(k))) {
      return setError('Please fill in all required fields.')
    }
    if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(v('email'))) return setError('Please enter a valid email address.')
    if (!/^[\d\s\-+()]+$/.test(v('phone')) || v('phone').replace(/\D/g, '').length < 10) {
      return setError('Please enter a valid phone number with at least 10 digits.')
    }
    if (words < 10) return setError('Message must be at least 10 words.')
    if (words > 150) return setError('Message must be 150 words or less.')
    setError('')

    const submittedAt = new Date().toLocaleString('en-US', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', timeZoneName: 'short',
    })
    const body = [
      'Hi,', '',
      'Thank you for reaching out to Cognera Health.', '',
      "We've received your message and will contact you as soon as possible.", '',
      `Name: ${v('first_name')} ${v('last_name')}`,
      `Email: ${v('email')}`,
      `Phone: ${v('phone')}`,
      `Organization: ${v('organization')}`,
      `Role: ${v('role')}`,
      `Additional Details: ${v('message')}`,
      `Areas of Interest: ${v('interest')}`, '',
      'What happens next:',
      '• Your message is routed to appropriate team',
      "• We'll follow up directly as the next step", '',
      "If you'd like to provide additional context, feel free to reply directly to this email.", '',
      'Visit us at', 'Cognera Health, Inc.', 'www.cognerahealth.ai', 'info@cognerahealth.ai', '',
      `Submitted: ${submittedAt}`,
    ].join('\n')
    window.location.href =
      'mailto:info@cognerahealth.ai;founders@cognerahealth.ai?cc=' + encodeURIComponent(v('email')) +
      '&subject=' + encodeURIComponent('Cognera Health Contact Form Submission') +
      '&body=' + encodeURIComponent(body)
    setSent(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Start the conversation"
        title="Step into the future of human-centered, intelligent care."
        lead="Be among the first to experience our CogneraAI™-powered healthcare platform."
        image="/images/earlyaccess.webp"
        actions={[{ label: 'Request access', to: '#early-access' }]}
      />

      <Section tone="soft" id="early-access">
        <div className="split align-start ea-split">
          <div>
            <SectionHeader
              eyebrow="Early access"
              title="Tell us how you want to use Cognera Health."
              lead="Get early access to a human-centered, intelligent care continuum platform built for continuous, data-driven care across clinical, mental health, behavioral health, and wellness settings."
            />
            <div className="grid ea-cards">
              <article className="card">
                <span className="icon-tile"><Icon name="building" /></span>
                <h3>For Organizations</h3>
                <p>Request an enterprise demo for clinics, health systems, universities, employers, and wellness programs.</p>
                <Checklist className="checklist-sm" items={['Explore platform capabilities and use cases', 'See how Cognera Health fits your workflows and infrastructure', 'Review integration, security, and compliance readiness', 'Understand deployment, onboarding, and scalability']} />
              </article>
              <article className="card">
                <span className="icon-tile"><Icon name="trendingUp" /></span>
                <h3>For Investors</h3>
                <p>Request the investor deck or schedule a strategic conversation.</p>
                <Checklist className="checklist-sm" items={['Access latest investor materials and product overview', 'Learn about market opportunity, traction, and roadmap', 'Explore partnership opportunities and strategic alignment']} />
              </article>
            </div>
          </div>

          <form className="form-card" onSubmit={submit} noValidate>
            <h2>Request access, a demo, or an investor conversation</h2>
            <p>Share a few details and the right Cognera Health team member will follow up.</p>
            <div className="form-grid">
              <div className="field"><label htmlFor="ea-first">First Name *</label><input id="ea-first" name="first_name" autoComplete="given-name" required /></div>
              <div className="field"><label htmlFor="ea-last">Last Name *</label><input id="ea-last" name="last_name" autoComplete="family-name" required /></div>
              <div className="field"><label htmlFor="ea-email">Email *</label><input id="ea-email" name="email" type="email" autoComplete="email" required /></div>
              <div className="field"><label htmlFor="ea-phone">Phone *</label><input id="ea-phone" name="phone" type="tel" autoComplete="tel" required /></div>
              <div className="field field-full"><label htmlFor="ea-org">Organization *</label><input id="ea-org" name="organization" autoComplete="organization" required /></div>
              <div className="field">
                <label htmlFor="ea-role">Role *</label>
                <select id="ea-role" name="role" defaultValue="" required>
                  <option value="" disabled>Select your role</option>
                  {roles.map((r) => <option key={r}>{r}</option>)}
                </select>
              </div>
              <div className="field">
                <label htmlFor="ea-interest">Interest *</label>
                <select id="ea-interest" name="interest" defaultValue="" required>
                  <option value="" disabled>Select your interest</option>
                  {interests.map((r) => <option key={r}>{r}</option>)}
                </select>
              </div>
              <div className="field field-full">
                <label htmlFor="ea-msg">Message *</label>
                <textarea id="ea-msg" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
                <span className={`hint${words > 150 ? ' is-error' : ''}`}>{words} / 150 words (minimum 10)</span>
              </div>
            </div>
            {error && <p className="form-error" role="alert">{error}</p>}
            <div className="form-footer">
              <small>* Required fields</small>
              <button type="submit" className="btn btn-primary">Submit inquiry <Icon name="arrowRight" size={18} /></button>
            </div>
            {sent && <p className="form-success" role="status">Thank you. Your email has been prepared. Please send it from your email client.</p>}
          </form>
        </div>
      </Section>
    </>
  )
}
