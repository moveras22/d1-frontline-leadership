const audiences = [
  "Manufacturing Managers",
  "Plant Managers",
  "Operations Managers",
  "HR Professionals",
  "Frontline Supervisors",
  "Employees preparing for their first leadership role",
  "Professionals seeking promotion into leadership",
  "Business Owners building stronger leadership teams",
];

export default function D1USPSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="section-divider mx-auto max-w-7xl" />
      <div className="mx-auto max-w-7xl px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
            Who It&apos;s For
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Who Is the D1 Leadership Framework For?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/60">
            Whether you&apos;re hiring your next frontline leader or preparing
            to become one, the D1 Leadership Framework provides practical tools
            to identify, develop, and evaluate leadership potential.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => (
            <div
              key={audience}
              className="group rounded-sm border border-white/8 bg-navy-800/40 p-6 transition-all hover:border-gold-500/25 hover:bg-navy-800/70 sm:p-8"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-sm border border-gold-500/20 bg-gold-500/5 text-gold-400 transition-colors group-hover:border-gold-500/40 group-hover:bg-gold-500/10">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>
              </div>
              <p className="font-display text-base font-semibold leading-snug text-white/90 sm:text-lg">
                {audience}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl text-center">
          <blockquote className="rounded-sm border border-gold-500/30 bg-gold-500/5 px-6 py-8 sm:px-8">
            <p className="font-display text-lg font-semibold leading-relaxed text-white/90 sm:text-xl">
              Whether you&apos;re hiring your next leader or becoming one, the
              D1 Framework provides a practical roadmap for leadership success.
            </p>
          </blockquote>
          <a
            href="#free-framework"
            data-track="audience_download_framework_cta"
            className="mt-10 inline-flex items-center justify-center rounded-sm bg-gold-500 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-navy-950 transition-all hover:bg-gold-400 hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]"
          >
            Download the Free Framework
          </a>
        </div>
      </div>
    </section>
  );
}
