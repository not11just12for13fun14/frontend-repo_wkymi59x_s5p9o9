function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center">
      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_10%,rgba(16,185,129,0.12),transparent_60%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 pt-28">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white">
            The most accurate customer insights you’ll ever get
          </h1>
          <p className="mt-6 text-lg text-zinc-300 max-w-2xl">
            Grow revenue, fix leaks, and position your brand with clarity. We engineer behavior using rigorous, psychology-driven research — not guesses or generic surveys.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 font-medium hover:bg-zinc-200 transition">
              Start a project
            </a>
            <a href="#work" className="inline-flex items-center justify-center rounded-full border border-white/20 text-white px-6 py-3 font-medium hover:border-white/40 transition">
              See case studies
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-zinc-300/80">
            {[
              'Open-ended interviews reveal 3x more unmet needs',
              '95% of purchase decisions are subconscious',
              'Only 20% of consumers can explain their own behavior',
              'Brands using behavioral science grow revenue 2x as fast',
            ].map((t, i) => (
              <div key={i} className="text-sm border-t border-white/10 pt-4">{t}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
