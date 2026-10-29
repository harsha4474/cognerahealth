import { lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
const Platform = lazy(() => import('./pages/Platform'))
const CogneraAI = lazy(() => import('./pages/CogneraAI'))
const Solutions = lazy(() => import('./pages/Solutions'))
const HealScript = lazy(() => import('./pages/HealScript'))
const HealConnect = lazy(() => import('./pages/HealConnect'))
const WhoWeServe = lazy(() => import('./pages/WhoWeServe'))
const Investors = lazy(() => import('./pages/Investors'))
const Trust = lazy(() => import('./pages/Trust'))
const Standards = lazy(() => import('./pages/Standards'))
const About = lazy(() => import('./pages/About'))
const Leadership = lazy(() => import('./pages/Leadership'))
const Partnerships = lazy(() => import('./pages/Partnerships'))
const Press = lazy(() => import('./pages/Press'))
const Careers = lazy(() => import('./pages/Careers'))
const Contact = lazy(() => import('./pages/Contact'))
const EarlyAccess = lazy(() => import('./pages/EarlyAccess'))
const DataDeletion = lazy(() => import('./pages/PrivacyRequest').then((m) => ({ default: m.DataDeletion })))
const DoNotSell = lazy(() => import('./pages/PrivacyRequest').then((m) => ({ default: m.DoNotSell })))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="platform" element={<Platform />} />
        <Route path="cogneraai" element={<CogneraAI />} />
        <Route path="solutions" element={<Solutions />} />
        <Route path="healscript" element={<HealScript />} />
        <Route path="healconnect" element={<HealConnect />} />
        <Route path="who-we-serve" element={<WhoWeServe />} />
        <Route path="investors" element={<Investors />} />
        <Route path="trust" element={<Trust />} />
        <Route path="standards" element={<Standards />} />
        <Route path="about" element={<About />} />
        <Route path="leadership" element={<Leadership />} />
        <Route path="partnerships" element={<Partnerships />} />
        <Route path="press" element={<Press />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} />
        <Route path="early-access" element={<EarlyAccess />} />
        <Route path="data-deletion" element={<DataDeletion />} />
        <Route path="do-not-sell-or-share" element={<DoNotSell />} />
        {/* Legacy URLs from the previous site */}
        <Route path="trust-center" element={<Navigate to="/trust#trust-center" replace />} />
        <Route path="healscriptos" element={<Navigate to="/healscript#operations-dashboard" replace />} />
        <Route path="data-deletion.html" element={<Navigate to="/data-deletion" replace />} />
        <Route path="do-not-sell-or-share.html" element={<Navigate to="/do-not-sell-or-share" replace />} />
        <Route path="trust.html" element={<Navigate to="/trust" replace />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
