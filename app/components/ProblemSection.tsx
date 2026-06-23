const problems = [
  {
    title: "Poor Accountability",
    description:
      "Supervisors avoid difficult conversations, letting standards slip until performance becomes a crisis.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
      />
    ),
  },
  {
    title: "Weak Communication",
    description:
      "Critical shift handoffs, safety briefings, and performance feedback lack clarity and consistency.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
      />
    ),
  },
  {
    title: "Inconsistent Execution",
    description:
      "What works on one shift falls apart on the next—processes exist on paper but not on the floor.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
      />
    ),
  },
  {
    title: "Promotion Failures",
    description:
      "Top performers promoted to supervisor struggle because technical skill doesn't equal leadership skill.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
      />
    ),
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="relative py-24 lg:py-32">
      <div className="section-divider mx-auto max-w-7xl" />
      <div className="mx-auto max-w-7xl px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
            The Challenge
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Why Frontline Leadership Breaks Down
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/60">
            Most manufacturing organizations invest in training programs that
            miss the root cause. The gap isn&apos;t knowledge—it&apos;s
            leadership capability at the supervisor level.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="group rounded-sm border border-white/8 bg-navy-800/40 p-8 transition-all hover:border-gold-500/25 hover:bg-navy-800/70"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-sm border border-gold-500/20 bg-gold-500/5 text-gold-400 transition-colors group-hover:border-gold-500/40 group-hover:bg-gold-500/10">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  {problem.icon}
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold">
                {problem.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
