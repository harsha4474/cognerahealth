import Header from './components/Header'
import Hero from './components/Hero'
import { CategoryShift, WhoWeServe, Capabilities, Why, Trust } from './components/Sections'
import EarlyAccess from './components/EarlyAccess'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CategoryShift />
        <WhoWeServe />
        <Capabilities />
        <Why />
        <Trust />
        <EarlyAccess />
      </main>
      <Footer />
    </>
  )
}
