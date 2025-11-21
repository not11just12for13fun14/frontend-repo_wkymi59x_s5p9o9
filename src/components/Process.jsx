function Process() {
  const steps = [
    {
      k: '01',
      t: 'The Diagnostic',
      d: 'A complete choke-point analysis that shows exactly where revenue leaks and why.',
    },
    {
      k: '02',
      t: 'The Playbook',
      d: 'A prescriptive roadmap—placements, scripts, and cues your team executes end-to-end.',
    },
    {
      k: '03',
      t: 'Guided Decisions',
      d: 'We prioritize quick wins by urgency, effort, and ROI to move metrics in days, not months.',
    },
  ]

  return (
    <section id="process" className="py-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl text-white">How we turn insights into action</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.k} className="rounded-xl border border-white/10 bg-zinc-950 p-6">
              <div className="text-emerald-400/80 text-xs tracking-widest">{s.k}</div>
              <div className="mt-3 text-xl text-white">{s.t}</div>
              <p className="mt-2 text-zinc-400 text-sm">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
