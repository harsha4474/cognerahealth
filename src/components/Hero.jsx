import Icon from './Icon'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Category-defining, AI-powered continuous care platform</p>
          <h1>
            Clinical intelligence in the session.
            <br />
            <em>Continuous care beyond it.</em>
          </h1>
          <p className="lead">
            Cognera Health is one unified platform for continuous, integrated care across mental
            health, behavioral health, and wellness — connecting clinicians, care teams,
            organizations, and individuals in a single system.
          </p>
          <div className="hero-actions">
            <a href="#platform" className="btn btn-primary">
              Explore CogneraAI™ <Icon name="arrow" size={18} />
            </a>
            <a href="#solutions" className="btn btn-ghost">
              Explore Solutions
            </a>
          </div>
          <p className="hero-note">
            <Icon name="shield" size={16} /> Augmenting clinicians — not replacing them.
          </p>
        </div>
        <HeroVisual />
      </div>
    </section>
  )
}

function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="card hv-session">
        <div className="hv-label">In session · CogneraAI™</div>
        <div className="hv-line w80" />
        <div className="hv-line w60" />
        <div className="hv-chip-row">
          <span className="chip">PHQ-9 trend ↓</span>
          <span className="chip">Plan updated</span>
        </div>
      </div>
      <div className="card hv-chart">
        <div className="hv-label">Between sessions</div>
        <svg viewBox="0 0 200 70" className="hv-spark">
          <polyline
            points="0,55 25,48 50,52 75,38 100,40 125,28 150,30 175,18 200,14"
            fill="none"
            stroke="var(--brand)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="hv-meta">
          <span>Mood check-ins</span>
          <strong>+32%</strong>
        </div>
      </div>
      <div className="card hv-team">
        <div className="hv-label">Care team</div>
        <div className="avatars">
          <span style={{ background: '#99f6e4' }}>DR</span>
          <span style={{ background: '#c7d2fe' }}>CM</span>
          <span style={{ background: '#fde68a' }}>PS</span>
        </div>
        <div className="hv-line w70" />
      </div>
    </div>
  )
}
