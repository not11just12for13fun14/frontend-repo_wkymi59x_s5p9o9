function WhyBehavior() {
  const cards = [
    {
      title: 'Hidden Friction Kills Intent',
      desc:
        'Even intelligent buyers lose trust over small cues: a confusing step, a wrong word, an unclear benefit.',
    },
    {
      title: 'Emotion Outweighs Logic',
      desc:
        'At ₹50L+ decisions, buyers anchor on feelings, not features. They justify with logic after the emotional decision is made.',
    },
    {
      title: 'Biases Drive Every Outcome',
      desc:
        'Loss aversion, choice overload, ambiguity aversion — high-ticket funnels collapse if these aren’t designed correctly.',
    },
  ]

  return (
    <section className="py-24 border-t border-white/10" id="about">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl text-white max-w-3xl">
          When the stakes are high, your customers don’t behave logically.
        </h2>
        <p className="mt-4 text-zinc-300 max-w-2xl">
          They hesitate, second-guess, compare, stall, and abandon — not because your product is wrong, but because the psychology of the purchase is unresolved.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div
              key={c.title}
              className="rounded-xl border border-emerald-500/20 bg-[linear-gradient(180deg,rgba(16,185,129,0.06),rgba(2,6,4,0.6))] p-6"
            >
              <div className="text-emerald-300 text-sm tracking-widest">INSIGHT</div>
              <div className="mt-2 text-xl text-white">{c.title}</div>
              <p className="mt-2 text-zinc-300/90 text-sm">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyBehavior
