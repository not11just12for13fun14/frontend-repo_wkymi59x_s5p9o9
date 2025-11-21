function WhatWeDo() {
  const items = [
    'Site Visit Behavior Mapping (Real Estate)',
    'OPD Experience Optimization (Healthcare)',
    'High-Ticket Conversion Blueprint',
    'Funnel Redesign & Persuasion Architecture',
    'Pricing Psychology & Anchoring',
    'Sales Script & Cue Optimization',
  ]

  return (
    <section className="py-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl text-white max-w-4xl">
          We find the psychological leaks costing you revenue — and fix them with precision.
        </h2>

        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((t) => (
            <div
              key={t}
              className="rounded-xl border border-white/10 bg-zinc-950 p-6 hover:border-emerald-400/40 transition"
            >
              <div className="w-8 h-8 rounded-md bg-emerald-500/20 border border-emerald-400/30" />
              <div className="mt-4 text-white">{t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo
