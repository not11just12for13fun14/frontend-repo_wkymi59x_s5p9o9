function HighTicketHero() {
  return (
    <section className="relative min-h-[92vh] flex items-center">
      {/* Deep teal/forest base with neon accents */}
      <div className="absolute inset-0 bg-[radial-gradient(55%_50%_at_50%_8%,rgba(16,185,129,0.18),transparent_60%)] pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 pt-28">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white">
            The most advanced behavioral insights you’ll ever get.
          </h1>
          <p className="mt-6 text-lg text-zinc-300 max-w-2xl">
            Grow revenue, eliminate friction, and engineer high-ticket conversions with scientific precision. We decode your customer’s mind using deep psychology, emotion mapping, and behavior-led diagnostics — not guesses, not generic surveys.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-emerald-400 text-black px-6 py-3 font-medium hover:bg-emerald-300 transition">
              Start a Project
            </a>
            <a href="#work" className="inline-flex items-center justify-center rounded-full border border-emerald-400/50 text-white px-6 py-3 font-medium hover:border-emerald-300 transition">
              See Case Studies
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HighTicketHero
