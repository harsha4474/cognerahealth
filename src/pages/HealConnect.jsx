import Icon from '../components/Icon'
import {
  usePageTitle, PageHero, Section, SectionHeader, CardGrid, Steps, Split, FaqSection, CtaBand, Button,
} from '../components/ui'
import { Disclaimer } from '../components/ProductBits'

const journey = [
  { title: 'Pre-session support', text: 'AI-guided preparation, assessments, mood tracking, reminders, and behavioral insights help individuals arrive prepared while giving clinicians greater visibility before the session.' },
  { title: 'During-session enhancement', text: 'AI-assisted documentation, progress insights, HealScript™ context, and measurement-based care help clinicians stay focused on care delivery instead of administrative tasks.' },
  { title: 'Post-session follow-up', text: 'Care plan reminders, guided support, progress tracking, safety steps, and engagement prompts help reinforce continuity and momentum between appointments.' },
]

const capabilities = [
  { icon: 'mic', title: 'Personalized Wellness and Wellbeing Assistant', text: 'Natural interactions help individuals reflect, track how they are doing, and access supportive resources when needed.', bullets: ['Natural language emotional support', 'Voice-enabled journaling and mood tracking', 'Supportive resources and escalation pathways', 'Holistic wellbeing support'] },
  { icon: 'target', title: 'Behavioral Health Engagement', text: 'Behavior-aware coaching helps individuals build healthier routines and sustain engagement between appointments.', bullets: ['Habit, routine, and behavior change tracking', 'Care plan, homework, and medication routine reminders', 'Substance use and risk-pattern awareness support', 'Personalized nudges and recommendations'] },
  { icon: 'sparkles', title: 'Smart Insights', text: 'CogneraAI™ analyzes daily inputs to surface patterns that can help individuals and providers make more informed care decisions.', bullets: ['Behavioral pattern recognition', 'Customized wellness reports', 'Progress and milestone visibility', 'Provider-ready summaries'] },
  { icon: 'heartHand', title: 'Personalized Support', text: "Adaptive guidance responds to each individual's goals, preferences, care plan, and risk context.", bullets: ['24/7 support for reflection and self-management', 'Personalized therapy, health, and wellness insights', 'Coping strategies and guided exercises', 'Progress tracking and milestones'] },
  { icon: 'activity', title: 'Daily Wellness Tracking', text: 'Voice-powered tracking makes it easier to maintain a longitudinal record of daily experiences and wellness signals.', bullets: ['Mood, emotion, and symptom tracking', 'Sleep pattern monitoring', 'Daily activity and habit tracking', 'Journaling and reflection history'] },
  { icon: 'users', title: 'Connected Journey', text: 'Individuals, providers, and care teams stay aligned through secure communication and shared care visibility.', bullets: ['Secure messaging and appointment support', 'Shared progress reports and care plans', 'Coordinated care across multiple providers', 'HealScript™ integration for clinician workflows'] },
]

const companionFlow = [
  { icon: 'mic', title: 'Your Input', text: 'Voice journal: experiencing anxiety attacks during work meetings' },
  { icon: 'sparkles', title: 'HealConnect™ Response', text: 'AI detected increasing anxiety patterns during scheduled meetings' },
  { icon: 'stethoscope', title: 'Professional Care', text: 'Dr. Sarah (Psychiatrist) reviews anxiety patterns and updates treatment plan with specialized techniques' },
]

const companionFeatures = [
  { icon: 'activity', title: 'Real-time Analysis', text: 'Continuous monitoring and analysis of user interactions, providing immediate insights and support recommendations.' },
  { icon: 'target', title: 'Smart Interventions', text: 'AI-powered intervention strategies that adapt to individual needs and circumstances in real-time.' },
  { icon: 'users', title: 'Care Team Collaboration', text: 'Seamless coordination between AI systems and healthcare providers for optimal care delivery.' },
]

const progress = [
  { title: 'Anxiety Management', provider: 'Dr. Sarah Johnson', next: '2026-02-05', pct: 45, steps: ['Initial Assessment', 'CBT Sessions', 'Mindfulness Training', 'Progress Review'], note: 'Making good progress with anxiety reduction techniques' },
  { title: 'Depression Care', provider: 'Dr. James Wilson', next: '2026-02-07', pct: 60, steps: ['Clinical Evaluation', 'Therapy Sessions', 'Lifestyle Changes', 'Support Group'], note: 'Showing improvement in mood and daily activities' },
  { title: 'Stress Management', provider: 'Dr. Emily Chen', next: '2026-02-08', pct: 70, steps: ['Stress Assessment', 'Relaxation Techniques', 'Work-Life Balance', 'Follow-up'], note: 'Successfully implementing stress reduction strategies' },
  { title: 'Sleep Improvement', provider: 'Dr. Michael Brown', next: '2026-02-09', pct: 35, steps: ['Sleep Study', 'Habit Formation', 'Sleep Hygiene', 'Progress Check'], note: 'Working on establishing better sleep patterns' },
  { title: 'Mindfulness Journey', provider: 'Lisa Anderson, LMHC', next: '2026-02-10', pct: 40, steps: ['Introduction', 'Daily Practice', 'Advanced Techniques', 'Maintenance'], note: 'Developing consistent mindfulness practice' },
  { title: 'Emotional Wellness', provider: 'Dr. Rachel Green', next: '2026-02-12', pct: 65, steps: ['Initial Consultation', 'Emotional Mapping', 'Coping Strategies', 'Review & Adjust'], note: 'Good progress in emotional regulation' },
  { title: 'Mental Fitness', provider: 'Dr. David Miller', next: '2026-02-14', pct: 30, steps: ['Baseline Assessment', 'Cognitive Training', 'Memory Exercises', 'Performance Review'], note: 'Engaging well with cognitive exercises' },
  { title: 'Relationship Counseling', provider: 'Dr. Amanda Taylor', next: '2026-02-15', pct: 55, steps: ['Joint Assessment', 'Communication Skills', 'Conflict Resolution', 'Progress Review'], note: 'Improving communication patterns' },
]

const privacyControls = [
  { title: 'AI Assistant Conversations', text: 'Control your chat history and interaction preferences', state: 'On' },
  { title: 'Sleep Analytics', text: 'Monitor and manage your sleep pattern data', state: 'Limited' },
  { title: 'Journal Entries', text: 'Access and control your personal journal records', state: 'On' },
  { title: 'Crisis Recognition', text: 'Manage early warning signs and alert settings', state: 'On' },
  { title: 'Treatment Goals', text: 'Track and adjust your therapeutic objectives', state: 'On' },
  { title: 'Progress Analytics', text: 'View and control your progress metrics', state: 'On' },
  { title: 'Session Summaries', text: 'Access and review your therapy session summaries', state: 'Limited' },
]

const faq = [
  { q: 'How does HealConnect™ protect privacy and data?', a: 'HealConnect™ uses enterprise-grade encryption and security protocols, supports HIPAA-aligned handling, gives individuals control over what is shared with providers, and supports modification, export, or deletion of data.' },
  { q: 'Can it be used with a current therapist or provider?', a: 'Yes. HealConnect™ is designed to complement existing care. Individuals can share insights, progress reports, and engagement data, and provider workflows can connect through HealScript™.' },
  { q: 'What conditions and areas does it support?', a: 'It supports mental health, behavioral health, wellness, and well-being, including anxiety, depression, stress, sleep, substance use, and lifestyle-related challenges.' },
  { q: 'How accurate are the AI insights and recommendations?', a: 'AI insights are based on validated frameworks and pattern analysis. They identify trends and potential risks as decision support, not a replacement for licensed clinical judgment.' },
  { q: 'What insights does HealConnect™ provide?', a: 'HealConnect™ delivers mood trends, behavioral patterns, progress tracking, wellness reports, and longitudinal context that help individuals and providers understand change over time.' },
  { q: 'How does CogneraAI™ support HealConnect™?', a: 'CogneraAI™ helps HealConnect™ turn check-ins, mood patterns, sleep data, goals, care-plan activity, and engagement signals into useful insights for individuals and care teams between sessions.', link: { label: 'View CogneraAI™ FAQ', to: '/cogneraai#cogneraai-faq' } },
  { q: 'How does it support communication with care teams?', a: 'Individuals can securely share progress, journal entries, health data, reports, and treatment-plan context with providers for better visibility between sessions.' },
  { q: 'What makes the AI voice assistant unique?', a: 'The AI voice assistant supports 24/7 natural interaction for journaling, mood tracking, guided support, and adaptive resources when additional help may be needed.' },
  { q: 'Is HealConnect™ covered by insurance?', a: 'Coverage varies by provider and plan. Some insurers include digital tools within health benefits, so individuals should check with their plan or support team.' },
  { q: 'Can HealConnect™ integrate with healthcare systems?', a: 'Yes. HealConnect™ integrates with provider systems through HealScript™ and interoperable standards for secure, consent-controlled data sharing.' },
  { q: 'What support is available for new users?', a: 'New users receive guided onboarding, tutorials, documentation, and customer support to help them use continuous care features effectively.' },
]

function Timeline() {
  const row = (label, signal, active) => (
    <div className={`tl-row${active ? ' is-active' : ''}`}>
      <span className="tl-label">{label}</span>
      <div className="tl-track">
        {[0, 1, 2].map((i) => (
          <span key={i} className="tl-seg">
            <span className="tl-session">Session</span>
            {i < 2 && <span className="tl-gap">{signal}</span>}
          </span>
        ))}
      </div>
    </div>
  )
  return (
    <div className="timeline" aria-label="Between-session comparison">
      <p className="label-caps">Between Session</p>
      {row('Episodic / Legacy care', 'no signal', false)}
      {row('Cognera care', 'HealConnect signals', true)}
    </div>
  )
}

export default function HealConnect() {
  usePageTitle('HealConnect™')
  return (
    <>
      <PageHero
        eyebrow="Practitioner-guided continuous engagement"
        title="HealConnect™"
        lead="A CogneraAI™-powered engagement platform that keeps individuals supported between sessions while giving care teams earlier visibility into needs, progress, and risk signals."
        actions={[
          { label: 'Request early access', to: '/early-access' },
          { label: 'Explore HealScript™', to: '/healscript' },
        ]}
        image="/images/outcomes_woman_bed_phone.webp"
        imageAlt="Person checking in on HealConnect from their phone"
        chips={['Between-session support', 'Mood and behavior tracking', 'Care-team visibility', 'Privacy controls']}
        related={[
          { label: 'CogneraAI™', to: '/cogneraai' },
          { label: 'Platform', to: '/platform' },
          { label: 'Solutions', to: '/solutions' },
        ]}
      />

      <Section>
        <Split
          media={
            <div className="phone-figure">
              <img src="/images/healconnect.webp" alt="HealConnect product view on a mobile device" loading="lazy" />
              <Disclaimer>Disclaimer: Preview version only. Final live system functionality and UI may vary.</Disclaimer>
            </div>
          }
        >
          <SectionHeader
            eyebrow="Meet HealConnect™"
            title="Continuous support, tracking, insight, and connection in one guided experience."
            lead={[
              'HealConnect™ extends care into everyday life with practitioner-guided check-ins, journaling, tracking, reminders, and personalized engagement. Individuals stay connected to their care journey while providers gain a more complete picture of what happens between sessions.',
              'When connected with HealScript™, HealConnect™ helps create a bidirectional care loop: the session informs between-session support, and between-session signals help prepare the next clinical conversation.',
            ]}
          />
          <Button to="/healscript" variant="secondary" icon="arrowRight">Explore HealScript™</Button>
        </Split>
      </Section>

      <Section tone="ink">
        <div className="statement">
          <SectionHeader light eyebrow="Powered by CogneraAI™" title="Assistive intelligence for connected engagement between visits." />
          <div>
            <p className="on-dark">CogneraAI™ helps HealConnect™ turn check-ins, mood and symptom patterns, sleep, activity, journaling, goals, and care-plan engagement into clinically useful signals for individuals, providers, and care teams.</p>
            <Button to="/cogneraai" variant="light" icon="arrowRight" className="mt-24">Explore CogneraAI™</Button>
          </div>
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeader
          eyebrow="Extend care beyond sessions"
          title="Before, during, and after the session."
          lead={[
            'HealConnect™ is designed to support the full wellness journey, not just the scheduled appointment. Legacy systems focus on the session, leaving gaps in between. Cognera Health™ keeps the loop active—maintaining a continuous, closed-loop system that turns between-session data into actionable clinical insights.',
            'A care plan created in HealScript™ can guide the HealConnect™ experience. Signals from HealConnect™ can help clinicians prepare for the next visit. Organization-level dashboards synthesize both into care delivery intelligence.',
          ]}
        />
        <Steps items={journey} />
        <Timeline />
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Core capabilities"
          title="Built for everyday engagement and care-team insight."
          lead="HealConnect™ combines individual-facing support with provider-guided visibility, helping make between-session activity clinically useful."
        />
        <CardGrid items={capabilities} cols={3} />
      </Section>

      <Section tone="soft">
        <SectionHeader
          eyebrow="Everyday support, continuous insight"
          title="Your Personal AI Wellness Companion"
          lead={[
            'HealConnect™ helps individuals track wellness patterns, follow care-plan progress, and stay connected with their care team while turning between-session activity into actionable support and visibility.',
            'Track your wellness journey, get personalized support, and stay connected with your care team - all in one intelligent app',
          ]}
        />
        <ol className="companion-flow">
          {companionFlow.map((s, i) => (
            <li key={s.title}>
              <span className="icon-tile"><Icon name={s.icon} /></span>
              <div>
                <p className="label-caps">{['Input', 'Analysis', 'Response'][i]}</p>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-32"><CardGrid items={companionFeatures} cols={3} /></div>

        <h2 className="sub-heading">Daily Wellness Tracking</h2>
        <p className="section-lead narrow-lead mb-28">Monitor your emotional well-being, sleep patterns, and personal progress with CogneraAI™ powered insights</p>
        <div className="grid grid-3 app-tiles">
          <article className="card">
            <h3>Mood Tracker</h3>
            <p>Track your daily emotional well-being</p>
            <div className="mini-chart" aria-hidden="true">
              {[40, 55, 48, 62, 70, 66, 78, 82].map((h, i) => <span key={i} style={{ height: `${h}%` }} />)}
            </div>
            <p className="card-note">Today's Mood Pattern · Last 8 hours<br />AI Analysis: Positive trend today</p>
          </article>
          <article className="card">
            <h3>Sleep Insights</h3>
            <p>AI-powered sleep analysis</p>
            <div className="sleep-score"><Icon name="moon" size={22} /><strong>94</strong><span>Optimal Pattern</span></div>
            <p className="card-note">Weekly Sleep Pattern · Last 7 days<br />Sleep Schedule 22:30 - 07:00</p>
          </article>
          <article className="card">
            <h3>Journal Entries</h3>
            <p>Track your thoughts and progress</p>
            <div className="journal-lines" aria-hidden="true"><span /><span /><span /></div>
            <p className="card-note">+ New Entry</p>
          </article>
        </div>

        <h2 className="sub-heading">Progress Tracking</h2>
        <p className="section-lead narrow-lead mb-28">Monitor your treatment progress with CogneraAI™ powered insights and personalized care plans</p>
        <div className="grid grid-4 progress-grid">
          {progress.map((p) => (
            <article key={p.title} className="card">
              <h3>{p.title}</h3>
              <p className="progress-provider">Provider: {p.provider}<br />Next: {p.next}</p>
              <div className="progress-bar" role="img" aria-label={`Progress ${p.pct}%`}>
                <span style={{ width: `${p.pct}%` }} />
              </div>
              <p className="progress-pct">Progress {p.pct}%</p>
              <ol className="progress-steps">
                {p.steps.map((st, i) => (
                  <li key={st} className={i < Math.round((p.pct / 100) * p.steps.length) ? 'is-done' : ''}>{st}</li>
                ))}
              </ol>
              <p>{p.note}</p>
            </article>
          ))}
        </div>
        <Disclaimer>Illustrative preview of the HealConnect™ experience. Names, dates, and figures are examples only.</Disclaimer>
      </Section>

      <Section>
        <Split
          align="start"
          media={
            <div className="settings-card">
              <p className="label-caps">Privacy settings</p>
              {privacyControls.map((c) => (
                <div key={c.title} className="setting-row">
                  <div>
                    <strong>{c.title}</strong>
                    <span>{c.text}</span>
                  </div>
                  <em className={c.state === 'On' ? 'is-on' : 'is-limited'}>{c.state}</em>
                </div>
              ))}
            </div>
          }
        >
          <SectionHeader
            eyebrow="Built around trust, privacy and transparency"
            title="Consent, privacy, reporting, and secure data management are part of the product experience."
            lead={[
              'HealConnect™ gives individuals flexible control over wellness data, progress insights, session information, and AI interactions through secure, transparent, and customizable privacy and consent settings.',
              'HealConnect™ gives individuals control over what information is shared with healthcare providers and when it is shared.',
            ]}
          />
          <p className="label-caps">Your Data, Your Control</p>
          <div className="grid trust-points">
            <div><h3>Granular Privacy Settings</h3><p>Choose exactly what data to share, including mood logs, sleep patterns, daily activities, and care-plan details.</p></div>
            <div><h3>Customizable Reports</h3><p>Generate reports with only the information selected for therapy sessions or progress tracking.</p></div>
            <div><h3>Secure Data Management</h3><p>Data is encrypted, securely stored, exportable, and removable while preserving individual ownership.</p></div>
          </div>
        </Split>
      </Section>

      <FaqSection tone="soft" eyebrow="HealConnect™ FAQ" title="Common questions about continuous engagement, support, and connected care." items={faq} />

      <div className="tone-soft">
        <CtaBand
          title="Begin Your Wellness Journey Today"
          text="Take the first step toward a healthier, more balanced life. Contact your provider for more information."
          actions={[{ label: 'Request early access', to: '/early-access' }, { label: 'Contact us', to: '/contact' }]}
        />
      </div>
    </>
  )
}
