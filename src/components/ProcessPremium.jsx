function ProcessPremium() {
  const steps = [
    {
      k: '01',
      t: 'Diagnose Friction',
      d: 'We identify behavioral choke points — emotional, cognitive, experiential.',
    },
    {
      k: '02',
      t: 'Engineer Behavior',
      d: 'Scripts, cues, flows, and choice architecture that move customers forward.',
    },
    {
      k: '03',
      t: 'Deliver the Behavioral Blueprint',
      d: 'A step-by-step, execution-ready roadmap your team can deploy immediately.',
    },
    {
      k: '04',
      t: 'Implementation Oversight (Optional)',
      d: 'We guide your team through every high-stakes moment until revenue improves.',
    },
  ]

  return (
    <section id="process" className="py-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl text-white">Our high-ticket process</h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.k} className="rounded-xl border border-emerald-500/20 bg-[linear-gradient(180deg,rgba(16,185,129,0.06),rgba(2,6,4,0.6))] p-6">
              <div className="text-emerald-300 text-xs tracking-widest">{s.k}</div>
              <div className="mt-3 text-xl text-white">{s.t}</div>
              <p className="mt-2 text-zinc-300 text-sm">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessPremium
