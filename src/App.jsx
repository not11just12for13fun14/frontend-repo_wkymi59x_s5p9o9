import Navbar from './components/Navbar'
import HighTicketHero from './components/HighTicketHero'
import WhyBehavior from './components/WhyBehavior'
import WhatWeDo from './components/WhatWeDo'
import ProcessPremium from './components/ProcessPremium'
import SocialProof from './components/SocialProof'
import CaseStudies from './components/CaseStudies'
import PremiumCTA from './components/PremiumCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Teal/emerald atmospheric layers */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(16,185,129,0.08),transparent_60%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_20%)]" />

      <Navbar />

      <main className="relative">
        <HighTicketHero />
        <WhyBehavior />
        <WhatWeDo />
        <SocialProof />
        <ProcessPremium />
        <CaseStudies />
        <PremiumCTA />
      </main>

      <Footer />
    </div>
  )
}

export default App
