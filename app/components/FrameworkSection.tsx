import Link from "next/link";

type Pillar = {
  letter: string;
  title: string;
  description: string;
  href?: string;
};

const pillars: Pillar[] = [
  {
    letter: "D",
    title: "Discipline",
    description:
      "Consistent habits, routines, and standards that hold under pressure on every shift.",
    href: "/pillars/discipline",
  },
  {
    letter: "1",
    title: "Coachability",
    description:
      "Openness to feedback, rapid learning, and the humility to grow beyond current capability.",
    href: "/pillars/coachability",
  },
  {
    letter: "D",
    title: "Competitive Drive",
    description:
      "An internal standard of excellence that pushes teams to outperform—not just comply.",
    href: "/pillars/competitive-drive",
  },
  {
    letter: "1",
    title: "Accountability",
    description:
      "Ownership of outcomes, direct conversations, and follow-through without excuses.",
    href: "/pillars/accountability",
  },
  {
    letter: "D",
    title: "Pressure Response",
    description:
      "Composure and clear decision-making when production demands peak and problems stack up.",
    href: "/pillars/pressure-response",
  },
  {
    letter: "1",
    title: "Team Impact",
    description:
      "The ability to elevate crew performance, trust, and engagement—not just individual output.",
    href: "/pillars/team-impact",
  },
];

const pillarOverviewItems = [
  "Coachability",
  "Discipline",
  "Accountability",
  "Competitive Drive",
  "Pressure Response",
  "Team Impact",
];

export default function FrameworkSection() {
  return (
    <section id="framework" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 industrial-grid opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-end gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
              The D1 Framework
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              Six Pillars of{" "}
              <span className="gold-gradient-text">Elite Frontline Leadership</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/60">
              Borrowed from elite athletics and adapted for the plant floor, the
              D1 Framework gives you a common language to assess, develop, and
              coach supervisors with precision.
            </p>
            <div className="image-placeholder mt-10 aspect-video overflow-hidden rounded-sm border border-white/10">
              <div className="flex h-full flex-col justify-center overflow-y-auto px-6 py-8 sm:px-8 lg:px-10">
                <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                  The D1 Leadership Pillars
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/65 sm:text-base">
                  Great frontline leaders are not defined by experience alone.
                  The D1 Framework evaluates the traits that predict leadership
                  success before someone is hired or promoted.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/65 sm:text-base">
                  These six pillars form the foundation of the D1 Leadership
                  Framework:
                </p>
                <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-x-6">
                  {pillarOverviewItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-white/75"
                    >
                      <span className="text-gold-400" aria-hidden="true">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-white/55">
                  Click any pillar to learn how to identify, evaluate, and
                  develop that trait in future leaders.
                </p>
                <Link
                  href="/free-framework"
                  data-track="framework_overview_cta"
                  className="mt-6 inline-flex w-fit items-center justify-center rounded-sm bg-gold-500 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-navy-950 transition-all hover:bg-gold-400 hover:shadow-[0_0_30px_rgba(212,175,55,0.25)] sm:text-sm"
                >
                  Get the Free Framework
                </Link>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar, index) => {
              const cardClassName =
                "group relative overflow-hidden rounded-sm border border-white/8 bg-navy-800/50 p-6 transition-all hover:border-gold-500/30 hover:bg-navy-800/80";
              const cardContent = (
                <>
                  <span className="absolute -right-2 -top-4 font-display text-7xl font-bold text-gold-500/5 transition-colors group-hover:text-gold-500/10">
                    {pillar.letter}
                  </span>
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gold-500/10 text-xs font-bold text-gold-400">
                    {index + 1}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    {pillar.description}
                  </p>
                  {pillar.href && (
                    <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-gold-400 transition-colors group-hover:text-gold-300">
                      Learn more →
                    </p>
                  )}
                </>
              );

              if (pillar.href) {
                return (
                  <Link
                    key={pillar.title}
                    href={pillar.href}
                    data-track={`pillar_${pillar.title.toLowerCase().replace(/\s+/g, "_")}_card`}
                    className={cardClassName}
                  >
                    {cardContent}
                  </Link>
                );
              }

              return (
                <div key={pillar.title} className={cardClassName}>
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
