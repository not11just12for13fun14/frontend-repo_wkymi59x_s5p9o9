function Solutions() {
  return (
    <section id="units" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* High-ticket unit */}
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-8">
            <span className="text-emerald-400/80 text-xs tracking-widest">HIGH-TICKET UNIT</span>
            <h3 className="mt-3 text-2xl text-white">Behavior-led growth for Real Estate, Healthcare, Automotive</h3>
            <p className="mt-3 text-zinc-400">We don’t just track behavior; we engineer it. De-risk high-stakes growth with prescriptive playbooks your team can run end-to-end.</p>
            <ul className="mt-6 space-y-2 text-zinc-300 text-sm">
              <li>• Diagnostic Deck: pinpoint revenue leaks across the funnel</li>
              <li>• Behavioral Playbook: scripts, cues, and placements to convert</li>
              <li>• Site Visit Optimization for real estate</li>
            </ul>
            <a href="#contact" className="mt-6 inline-flex items-center rounded-full bg-white text-black px-5 py-2 font-medium">Talk to an expert</a>
          </div>

          {/* Low-ticket unit */}
          <div className="rounded-2xl border border-white/10 bg-zinc-950 p-8">
            <span className="text-zinc-300/70 text-xs tracking-widest">LOW-TICKET / HIGH-VOLUME</span>
            <h3 className="mt-3 text-2xl text-white">Everyday consumer insights at cultural scale</h3>
            <p className="mt-3 text-zinc-400">Vibrant, high-volume research powering your growth engine. The data here validates frameworks applied in high-ticket strategy.</p>
            <ul className="mt-6 space-y-2 text-zinc-300 text-sm">
              <li>• Message testing and persona clarity</li>
              <li>• Channel and funnel optimization</li>
              <li>• Rapid experiments with measurable lift</li>
            </ul>
            <a href="#work" className="mt-6 inline-flex items-center rounded-full border border-white/20 text-white px-5 py-2 font-medium">See examples</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solutions
