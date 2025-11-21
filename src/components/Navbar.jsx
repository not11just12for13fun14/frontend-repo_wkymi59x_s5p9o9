import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-sm bg-emerald-500"></div>
          <span className="text-white text-sm tracking-widest">WHAT CUSTOMER THINKS</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
          <a href="#work" className="hover:text-white transition">Case Studies</a>
          <a href="#process" className="hover:text-white transition">Process</a>
          <a href="#units" className="hover:text-white transition">Solutions</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#contact" className="ml-4 inline-flex items-center rounded-full bg-white text-black px-4 py-2 font-medium hover:bg-zinc-200 transition">Let’s Talk</a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          <span className="sr-only">Open menu</span>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="opacity-80">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="px-6 py-4 space-y-2 text-zinc-300">
            <a href="#work" className="block">Case Studies</a>
            <a href="#process" className="block">Process</a>
            <a href="#units" className="block">Solutions</a>
            <a href="#about" className="block">About</a>
            <a href="#contact" className="block mt-2 inline-flex items-center rounded-full bg-white text-black px-4 py-2 font-medium">Let’s Talk</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
