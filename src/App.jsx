import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import Process from './components/Process'
import CaseStudies from './components/CaseStudies'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* background subtle grid */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(16,185,129,0.08),transparent_60%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06),transparent_20%)]" />

      <Navbar />

      <main className="relative">
        <Hero />
        <Solutions />
        <Process />
        <CaseStudies />

        {/* Contact CTA */}
        <section id="contact" className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-2xl border border-white/10 bg-zinc-950 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl">Let’s unlock your next growth lever</h3>
                <p className="mt-2 text-zinc-400 max-w-xl">Tell us your biggest revenue leak or positioning challenge. We’ll respond with a crisp plan for the first 2 weeks.</p>
              </div>
              <a href="mailto:hello@whatcustomerthinks.com" className="inline-flex items-center rounded-full bg-white text-black px-6 py-3 font-medium hover:bg-zinc-200 transition">Book a 20‑min intro</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
