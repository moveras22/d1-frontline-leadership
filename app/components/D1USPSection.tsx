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

const progressionSteps = [
  {
    label: "Production Worker",
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v2.25M8.25 8.25h7.5M9 8.25v1.5c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75V8.25"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 10.5L7.5 19.5h9l-.75-9"
        />
        <path strokeLinecap="round" d="M6 19.5h12" />
      </>
    ),
  },
  {
    label: "Production Supervisor",
    icon: (
      <>
        <circle cx="9" cy="8" r="2.25" />
        <circle cx="15.5" cy="9" r="1.75" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.5 18c0-2.5 1.75-4 3.5-4s3.5 1.5 3.5 1.5M12.5 15.5S14 14 15.5 14s3 1.5 3 4"
        />
        <path strokeLinecap="round" d="M17.5 7.5l1 1.5" />
      </>
    ),
  },
  {
    label: "Manager",
    icon: (
      <>
        <circle cx="12" cy="7.5" r="2.5" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 19.5v-1.5c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5v1.5"
        />
        <path strokeLinecap="round" d="M9 12.5h6M10 15h4" />
      </>
    ),
  },
  {
    label: "Plant Manager / CEO",
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 19.5V11l7-5 7 5v8.5"
        />
        <path strokeLinecap="round" d="M9.5 19.5v-4h5v4" />
        <circle cx="12" cy="10" r="1.75" />
      </>
    ),
  },
];

function LeadershipProgression() {
  return (
    <div
      className="rounded-sm border border-white/8 bg-navy-800/40 p-6 sm:p-8 lg:sticky lg:top-28"
      aria-label="Leadership progression from production worker to executive"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
        Leadership Path
      </p>
      <p className="mt-2 font-display text-xl font-semibold text-white/90 sm:text-2xl">
        Your Progression
      </p>

      <div className="relative mt-10">
        <div
          className="absolute left-[8%] right-[4%] top-7 h-px bg-gradient-to-r from-gold-500/25 via-gold-500/55 to-gold-500 sm:top-[2.125rem]"
          aria-hidden="true"
        />
        <div
          className="absolute right-[2%] top-[1.35rem] text-gold-500/70 sm:top-[1.85rem]"
          aria-hidden="true"
        >
          <svg
            className="h-3.5 w-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>

        <ol className="grid grid-cols-4 gap-x-1 sm:gap-x-2">
          {progressionSteps.map((step, index) => (
            <li key={step.label} className="relative flex flex-col items-center text-center">
              <div
                className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border bg-navy-900/80 sm:h-[4.5rem] sm:w-[4.5rem] ${
                  index === progressionSteps.length - 1
                    ? "border-gold-500/45 shadow-[0_0_24px_rgba(212,175,55,0.12)]"
                    : "border-gold-500/20"
                }`}
              >
                <svg
                  className="h-6 w-6 text-gold-400 sm:h-8 sm:w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.35}
                  aria-hidden="true"
                >
                  {step.icon}
                </svg>
                <span className="absolute -bottom-1 flex h-4 w-4 items-center justify-center rounded-full border border-gold-500/30 bg-navy-950 text-[0.55rem] font-bold text-gold-400 sm:h-5 sm:w-5 sm:text-[0.6rem]">
                  {index + 1}
                </span>
              </div>
              <p className="mt-3 text-[0.62rem] font-semibold leading-snug text-white/80 sm:mt-4 sm:text-[0.7rem]">
                {step.label}
              </p>
            </li>
          ))}
        </ol>
      </div>

      <p className="mt-8 border-t border-white/8 pt-5 text-center text-sm italic text-white/50">
        From frontline contributor to frontline leader.
      </p>
    </div>
  );
}

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

        <div className="mt-16 grid items-start gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <div className="grid gap-3 sm:grid-cols-2">
            {audiences.map((audience) => (
              <div
                key={audience}
                className="group rounded-sm border border-white/8 bg-navy-800/40 p-5 transition-all hover:border-gold-500/25 hover:bg-navy-800/70 sm:p-6"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-sm border border-gold-500/20 bg-gold-500/5 text-gold-400 transition-colors group-hover:border-gold-500/40 group-hover:bg-gold-500/10">
                  <svg
                    className="h-4 w-4"
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
                <p className="font-display text-sm font-semibold leading-snug text-white/90 sm:text-base">
                  {audience}
                </p>
              </div>
            ))}
          </div>

          <LeadershipProgression />
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
