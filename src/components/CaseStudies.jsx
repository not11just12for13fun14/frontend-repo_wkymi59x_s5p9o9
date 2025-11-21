function CaseStudies() {
  const items = [
    {
      title: 'F&B Brand Transformation',
      roi: '100X',
      bullets: [
        'Break-even in 3 months through operational and location strategy',
        '₹80L in year-one revenue via precise segmentation',
      ],
    },
    {
      title: 'Retail Messaging Optimization',
      roi: '100X',
      bullets: [
        'Conversion lift from 0.5% → 2.8% in 3 months',
        'Psychological profiling to realign communication',
      ],
    },
    {
      title: 'SaaS Lead Optimization',
      roi: '16X',
      bullets: [
        'CPL reduced from ₹8,000 → ₹500',
        'Better personas and channel allocation',
      ],
    },
  ]

  return (
    <section id="work" className="py-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl md:text-4xl text-white">Case studies and impact</h2>
          <a href="#contact" className="hidden md:inline-flex items-center rounded-full border border-white/20 text-white px-4 py-2 font-medium">Request full deck</a>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((c) => (
            <div key={c.title} className="rounded-xl border border-white/10 bg-zinc-950 p-6">
              <div className="text-emerald-400/80 text-xs tracking-widest">ROI — {c.roi}</div>
              <div className="mt-3 text-xl text-white">{c.title}</div>
              <ul className="mt-4 space-y-2 text-zinc-400 text-sm">
                {c.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-flex items-center rounded-full bg-white text-black px-4 py-2 font-medium">Explore</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
