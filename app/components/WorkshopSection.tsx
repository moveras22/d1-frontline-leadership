const takeaways = [
  "Why technical excellence doesn't predict supervisory success",
  "The hidden traits that separate good employees from great leaders",
  "How to identify high-potential frontline candidates before promotion",
  "A practical assessment approach you can use immediately",
];

export default function WorkshopSection() {
  return (
    <section id="workshop" className="relative py-24 lg:py-32">
      <div className="section-divider mx-auto max-w-7xl" />
      <div className="mx-auto max-w-7xl px-6 pt-24 lg:px-8">
        <div className="overflow-hidden rounded-sm border border-gold-500/20 bg-gradient-to-br from-navy-800/80 to-navy-900/90">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-12 lg:p-16">
              <p className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                Free Workshop
              </p>
              <h2 className="mt-6 font-display text-3xl font-bold leading-tight sm:text-4xl">
                Why Great Employees Fail as Supervisors
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/65">
                A 60-minute live session for plant managers, operations leaders,
                and HR professionals who are tired of watching promotions fail.
              </p>
              <ul className="mt-8 space-y-4">
                {takeaways.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-400">
                      <svg
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </span>
                    <span className="text-sm leading-relaxed text-white/70">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#early-access"
                data-track="workshop_join_cta"
                className="mt-10 inline-flex items-center justify-center rounded-sm bg-gold-500 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-navy-950 transition-all hover:bg-gold-400"
              >
                Join Free Workshop
              </a>
            </div>

            <div className="image-placeholder relative min-h-[320px] border-t border-gold-500/10 lg:min-h-0 lg:border-l lg:border-t-0">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400/70">
                  Live Virtual Session
                </p>
                <p className="mt-3 font-display text-2xl font-bold text-white/90">
                  60 Minutes
                </p>
                <p className="mt-2 text-sm text-white/40">
                  Interactive · Q&A · Actionable Framework
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
