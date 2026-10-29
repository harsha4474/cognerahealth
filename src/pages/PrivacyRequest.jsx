import { useState } from 'react'
import { usePageTitle, PageHero, Section } from '../components/ui'
import Icon from '../components/Icon'
import Prose from '../components/Prose'
import deletion from '../content/legal/data-deletion.json'
import dns from '../content/legal/do-not-sell-or-share.json'

const pages = {
  deletion: {
    data: deletion,
    pageTitle: 'Data Deletion Request',
    image: '/images/hero-data-deletion.webp',
    kind: 'Data Deletion Request',
    formTitle: 'Submit Data Deletion Request',
    callout: 'Use HealConnect™ or HealScript™ in-product deletion options.',
    relationships: ['Individual user', 'Patient or care recipient', 'Authorized representative', 'Customer administrator', 'Healthcare provider', 'Other'],
    categories: ['Account deletion', 'Data deletion', 'App store data safety request', 'Correction or restriction request', 'Other privacy request'],
    placeholder: 'Describe the account, product, app, or information related to this request.',
  },
  dns: {
    data: dns,
    pageTitle: 'Do Not Sell or Share',
    image: '/images/hero-do-not-sell-share.webp',
    kind: 'Do Not Sell or Share Request',
    formTitle: 'Submit Opt-Out Request',
    callout: 'Use HealConnect™ or HealScript™ in-product do-not-sell/share options.',
    relationships: ['Individual consumer', 'Patient or care recipient', 'Authorized agent', 'Customer administrator', 'Healthcare provider', 'Other'],
    categories: ['Do not sell my personal information', 'Do not share my personal information', 'Limit use or disclosure of sensitive personal information', 'Consumer health data privacy request', 'Other privacy choice'],
    placeholder: 'Describe your opt-out request, applicable state, account, product, or privacy choice.',
  },
}

function RequestForm({ cfg }) {
  const [opened, setOpened] = useState(false)
  const submit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const v = (n) => {
      const f = form.elements[n]
      if (!f) return ''
      return f.type === 'checkbox' ? (f.checked ? 'Yes' : 'No') : f.value || ''
    }
    const subject = `${cfg.kind} - Cognera Health Privacy Request`
    const body = [
      'Cognera Health Privacy Request', '',
      `Request type: ${cfg.kind}`,
      `Submitted: ${new Date().toLocaleString()}`, '',
      'Requester details',
      `Name: ${v('name')}`, `Email: ${v('email')}`, `Phone: ${v('phone')}`, `Organization: ${v('organization')}`,
      `Relationship to Cognera Health: ${v('relationship')}`, `State / Country: ${v('region')}`, '',
      'Request details',
      `Request category: ${v('category')}`,
      `Authorized agent: ${v('authorized_agent')}`,
      `Can Cognera Health contact me for verification: ${v('verification')}`, '',
      'Details:', v('details'), '',
      'Acknowledgement',
      'I understand Cognera Health can verify my identity, authority, or request details before completing this request.', '',
      'Please review and route this request to the appropriate Cognera Health privacy team.',
    ].join('\n')
    window.location.href = `mailto:privacy@cognerahealth.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setOpened(true)
  }
  return (
    <form className="form-card request-form" onSubmit={submit} id="request-form">
      <h2>{cfg.formTitle}</h2>
      <p>Complete the fields below to open a prefilled email to the Cognera Health privacy team.</p>
      <p className="form-callout"><Icon name="shield" size={18} /> <span><strong>Do not include PHI, ePHI, clinical details, or sensitive PII.</strong> {cfg.callout}</span></p>
      <div className="form-grid">
        <div className="field"><label htmlFor="pr-name">Name</label><input id="pr-name" name="name" required autoComplete="name" /></div>
        <div className="field"><label htmlFor="pr-email">Email</label><input id="pr-email" name="email" type="email" required autoComplete="email" /></div>
        <div className="field"><label htmlFor="pr-phone">Phone</label><input id="pr-phone" name="phone" type="tel" autoComplete="tel" /></div>
        <div className="field"><label htmlFor="pr-org">Organization</label><input id="pr-org" name="organization" autoComplete="organization" /></div>
        <div className="field">
          <label htmlFor="pr-rel">Relationship to Cognera Health</label>
          <select id="pr-rel" name="relationship">{cfg.relationships.map((r) => <option key={r}>{r}</option>)}</select>
        </div>
        <div className="field"><label htmlFor="pr-region">State / Country</label><input id="pr-region" name="region" /></div>
        <div className="field field-full">
          <label htmlFor="pr-cat">Request Category</label>
          <select id="pr-cat" name="category">{cfg.categories.map((r) => <option key={r}>{r}</option>)}</select>
        </div>
        <label className="check-field field-full"><input type="checkbox" name="authorized_agent" /> I am submitting this request as an authorized agent or representative.</label>
        <label className="check-field field-full"><input type="checkbox" name="verification" /> Cognera Health can contact me to verify this request.</label>
        <div className="field field-full">
          <label htmlFor="pr-details">Request Details</label>
          <textarea id="pr-details" name="details" placeholder={cfg.placeholder} />
        </div>
      </div>
      <div className="form-footer">
        <small>Requests may be subject to identity verification, legal retention obligations, contractual requirements, and healthcare record retention rules.</small>
        <button type="submit" className="btn btn-primary">Open Email Request <Icon name="mail" size={18} /></button>
      </div>
      {opened && <p className="form-success" role="status">Your email client should open with a prefilled request. Please review and send it.</p>}
    </form>
  )
}

function PrivacyRequestPage({ cfg }) {
  usePageTitle(cfg.pageTitle)
  const { data } = cfg
  // The live page's form section is rendered by <RequestForm>; keep only the copy before it.
  const body = data.html.split('<h2>Submit ')[0]
  return (
    <>
      <PageHero
        eyebrow={data.eyebrow}
        title={data.title}
        lead={data.intro}
        image={cfg.image}
        actions={[{ label: cfg.formTitle, to: '#request-form' }, { label: 'Privacy Policy', to: '/trust#privacy-policy' }]}
      />
      <Section tone="soft">
        <div className="request-layout">
          <article className="trust-content">
            <Prose html={body} />
          </article>
          <div className="request-aside">
            <RequestForm cfg={cfg} />
          </div>
        </div>
      </Section>
    </>
  )
}

export const DataDeletion = () => <PrivacyRequestPage cfg={pages.deletion} />
export const DoNotSell = () => <PrivacyRequestPage cfg={pages.dns} />
