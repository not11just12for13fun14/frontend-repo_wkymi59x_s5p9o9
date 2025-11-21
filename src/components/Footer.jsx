function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        <div className="text-zinc-400 text-sm">
          <div className="text-white">Where strategy meets creativity</div>
          <div className="mt-2">© 2025 What Customer Thinks</div>
        </div>
        <div className="flex gap-10 text-sm text-zinc-400">
          <div>
            <div className="text-white mb-2">Company</div>
            <ul className="space-y-1">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#process" className="hover:text-white">Process</a></li>
              <li><a href="#units" className="hover:text-white">Solutions</a></li>
              <li><a href="#work" className="hover:text-white">Clients</a></li>
            </ul>
          </div>
          <div>
            <div className="text-white mb-2">Resources</div>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Reports</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
