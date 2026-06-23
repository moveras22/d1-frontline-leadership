export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-950 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-sm border border-gold-500/40 bg-navy-800 font-display text-xs font-bold text-gold-400">
              D1
            </span>
            <div>
              <p className="text-sm font-semibold text-white/90">
                D1 Frontline Leadership
              </p>
              <p className="text-xs text-white/40">
                Elite frontline leadership for manufacturing
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {[
              { label: "Problem", href: "#problem" },
              { label: "Framework", href: "#framework" },
              { label: "Workshop", href: "#workshop" },
              { label: "About", href: "#about" },
              { label: "Early Access", href: "#early-access" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-wider text-white/45 transition-colors hover:text-gold-400"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} D1 Frontline Leadership. All
            rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-white/30 transition-colors hover:text-white/60"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-white/30 transition-colors hover:text-white/60"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
