import Link from "next/link";

export default function FreeFrameworkSection() {
  return (
    <section id="free-framework" className="relative py-24 lg:py-32">
      <div className="section-divider mx-auto max-w-7xl" />
      <div className="mx-auto max-w-7xl px-6 pt-24 lg:px-8">
        <div className="overflow-hidden rounded-sm border border-gold-500/25 bg-gradient-to-br from-gold-500/8 via-navy-800/80 to-navy-900/90 shadow-[0_0_60px_rgba(212,175,55,0.06)]">
          <div className="relative mx-auto max-w-3xl px-8 py-12 text-center sm:px-12 lg:py-16">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold-500/5 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-gold-500/5 blur-3xl" />

            <div className="relative">
              <p className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                Free Download
              </p>
              <h2 className="mt-6 font-display text-3xl font-bold leading-tight sm:text-4xl">
                Free Download: The D1 Leadership Framework
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
                Get the practical scorecard for identifying, hiring, and
                developing high-performance frontline leaders using traits
                proven in elite athletics and operations.
              </p>
              <Link
                href="/free-framework"
                data-track="free_framework_cta"
                className="mt-10 inline-flex items-center justify-center rounded-sm bg-gold-500 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-navy-950 transition-all hover:bg-gold-400 hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]"
              >
                Get the Free Framework
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
