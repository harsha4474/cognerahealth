import { useState } from 'react'

const roles = ['Clinician', 'Care team', 'Organization', 'Individual', 'Investor / Partner']

export default function EarlyAccess() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // No backend yet: wire this up to a form service or API endpoint.
    setSubmitted(true)
  }

  return (
    <section className="section cta" id="contact">
      <div className="container cta-inner">
        <div>
          <p className="eyebrow">Transform care delivery</p>
          <h2>Bring continuous care to your practice</h2>
          <p className="lead">
            Join the early access program and see how Cognera Health connects every session,
            every team, and every day in between.
          </p>
        </div>
        {submitted ? (
          <div className="card form-done" role="status">
            <h3>Thank you!</h3>
            <p>We'll be in touch soon about early access to Cognera Health.</p>
          </div>
        ) : (
          <form className="card form" onSubmit={handleSubmit}>
            <label>
              Full name
              <input name="name" required autoComplete="name" />
            </label>
            <label>
              Work email
              <input name="email" type="email" required autoComplete="email" />
            </label>
            <label>
              Organization
              <input name="org" autoComplete="organization" />
            </label>
            <label>
              I am a…
              <select name="role" defaultValue={roles[0]}>
                {roles.map((r) => (
                  <option key={r}>{r}</option>
                ))}
              </select>
            </label>
            <button type="submit" className="btn btn-primary">
              Get Early Access
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
