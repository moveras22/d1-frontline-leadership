import Image from "next/image";

const leadershipTraits = [
  "Discipline",
  "Coachability",
  "Accountability",
  "Execution",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-32">
      <div className="industrial-grid absolute inset-0 opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/95 to-navy-900" />
      <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-gold-500/5 blur-3xl" />
      <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-gold-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-500/25 bg-gold-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
              Manufacturing Leadership
            </p>
            <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Build Frontline Leaders Who Perform Like{" "}
              <span className="gold-gradient-text">Elite Athletes</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 lg:text-xl">
              A practical framework for identifying, developing, and coaching
              high-performance frontline leaders.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#early-access"
                data-track="hero_assessment_cta"
                className="inline-flex items-center justify-center rounded-sm bg-gold-500 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-navy-950 transition-all hover:bg-gold-400 hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]"
              >
                Get Free D1 Assessment
              </a>
              <a
                href="#workshop"
                data-track="hero_workshop_cta"
                className="inline-flex items-center justify-center rounded-sm border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:border-gold-500/40 hover:bg-white/10"
              >
                Join Free Workshop
              </a>
            </div>
            <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-8">
              {[
                { value: "500+", label: "Leaders Assessed" },
                { value: "15+", label: "Years in Operations" },
                { value: "6", label: "D1 Performance Pillars" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl font-bold text-gold-400">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-white/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-white/10 shadow-2xl shadow-black/40 sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/images/hero-plant-floor.jpg"
                alt="Inside a modern manufacturing and distribution facility"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                quality={90}
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-navy-950/60" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/35 to-navy-950/50" />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-950/40 to-navy-950/10" />
            </div>

            <div className="absolute -bottom-4 -right-2 z-10 w-[min(100%,240px)] rounded-sm border border-gold-500/25 bg-navy-900/90 px-5 py-4 shadow-xl shadow-black/40 backdrop-blur-md sm:-bottom-5 sm:-right-4">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-400">
                D1 Leadership Traits
              </p>
              <ul className="mt-3 space-y-2">
                {leadershipTraits.map((trait) => (
                  <li
                    key={trait}
                    className="flex items-center gap-2 text-sm text-white/85"
                  >
                    <span className="text-gold-400" aria-hidden="true">
                      ✓
                    </span>
                    {trait}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
