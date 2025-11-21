function PremiumCTA() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-emerald-500/30 bg-[linear-gradient(180deg,rgba(16,185,129,0.06),rgba(2,6,4,0.6))] p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl text-white">Ready to engineer your customer’s behavior?</h3>
            <p className="mt-2 text-zinc-300 max-w-xl">Let’s build a high-ticket growth engine based on science, not intuition.</p>
          </div>
          <a href="mailto:hello@whatcustomerthinks.com" className="inline-flex items-center rounded-full bg-emerald-400 text-black px-6 py-3 font-medium hover:bg-emerald-300 transition">Let’s Talk</a>
        </div>
      </div>
    </section>
  )
}

export default PremiumCTA
