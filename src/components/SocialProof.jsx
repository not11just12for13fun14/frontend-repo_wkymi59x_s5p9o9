function SocialProof() {
  const stats = [
    { label: 'Drop in Drop-Offs', value: '-22.5%' },
    { label: 'Lift in High-Ticket Conversion', value: '+31.2%' },
    { label: 'ROI in 120 Days', value: '9.4×' },
  ]

  return (
    <section className="py-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl text-white">Trusted by brands where behavior directly affects revenue.</h2>

        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-white/10 bg-zinc-950 p-6">
              <div className="text-emerald-400/80 text-3xl font-semibold">{s.value}</div>
              <div className="mt-1 text-zinc-300">{s.label}</div>
              <div className="mt-4 text-xs text-zinc-500">Measured after implementing our behavioral blueprint.</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialProof
