import type { ReactNode } from "react";

type Audience = {
  title: string;
  subtitle?: string;
  icon: ReactNode;
};

const audiences: Audience[] = [
  {
    title: "Manufacturing Managers",
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5h15" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 19.5V9l6-4.5L18 9v10.5" />
        <path strokeLinecap="round" d="M9.5 19.5v-4h5v4M9.5 12h5" />
      </>
    ),
  },
  {
    title: "Plant Managers",
    icon: (
      <>
        <path strokeLinecap="round" d="M6 14.5h12" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 14.5V11l3.75-2.25L15.75 11v3.5" />
        <path strokeLinecap="round" d="M12 4.5v2.25" />
      </>
    ),
  },
  {
    title: "Operations Managers",
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.812.854 1.005.201 1.958.493 2.856.868.412.177.677.589.677 1.036v1.093c0 .55-.398 1.02-.94 1.11l-.894.149a1.125 1.125 0 00-.854.812c-.201 1.005-.493 1.958-.868 2.856-.177.412-.589.677-1.036.677h-1.093c-.55 0-1.02-.398-1.11-.94l-.149-.894a1.125 1.125 0 00-.812-.854 11.348 11.348 0 01-2.856-.868 1.125 1.125 0 01-.677-1.036v-1.093c0-.55.398-1.02.94-1.11l.894-.149a1.125 1.125 0 00.854-.812c.201-1.005.493-1.958.868-2.856.177-.412.589-.677 1.036-.677z"
        />
        <circle cx="12" cy="12" r="2.25" />
      </>
    ),
  },
  {
    title: "HR Professionals",
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
        />
      </>
    ),
  },
  {
    title: "Frontline Supervisors",
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </>
    ),
  },
  {
    title: "Employees preparing for their first leadership role",
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25V19.5" />
      </>
    ),
  },
  {
    title: "Professionals seeking promotion into leadership",
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </>
    ),
  },
  {
    title: "Business Owners",
    subtitle: "Building stronger leadership teams.",
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .414-.336.75-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5m0 4.5h4.125M3.75 8.25h16.5M6 8.25V6.75A2.25 2.25 0 018.25 4.5h7.5A2.25 2.25 0 0118 6.75v1.5M6 12h.008v.008H6V12zm0 3h.008v.008H6V15zm0 3h.008v.008H6V18zm9-6h.008v.008H15V12zm0 3h.008v.008H15V15zm0 3h.008v.008H15V18z" />
      </>
    ),
  },
];

const progressionSteps = [
  {
    label: "Production Worker",
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v2M8.25 8h7.5M9 8v1.25c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75V8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 10.75L7.5 19.5h9l-.75-8.75" />
        <path strokeLinecap="round" d="M6 19.5h12" />
      </>
    ),
  },
  {
    label: "Production Supervisor",
    icon: (
      <>
        <circle cx="9" cy="8" r="2" />
        <circle cx="15.5" cy="9" r="1.65" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 18.75c0-2.485 1.679-4.125 3.75-4.125S12.75 16.265 12.75 18.75M12.75 15.625c.932 0 1.786.402 2.25 1.125.464-.723 1.318-1.125 2.25-1.125 2.071 0 3.75 1.64 3.75 4.125" />
      </>
    ),
  },
  {
    label: "Manager",
    icon: (
      <>
        <circle cx="12" cy="7.25" r="2.35" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.25 19.5v-1.25c0-2.623 2.127-4.75 4.75-4.75s4.75 2.127 4.75 4.75V19.5" />
        <path strokeLinecap="round" d="M9.25 12.75h5.5M10.25 15.25h3.5" />
      </>
    ),
  },
  {
    label: "Plant Manager / CEO",
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 19.5V10.5L12 5.25l6.75 5.25V19.5" />
        <path strokeLinecap="round" d="M9.75 19.5v-3.75h4.5V19.5" />
        <circle cx="12" cy="10.25" r="1.65" />
      </>
    ),
  },
];

function LeadershipProgression() {
  return (
    <div
      className="w-full rounded-sm border border-white/8 bg-navy-800/40 p-7 sm:p-9 lg:sticky lg:top-28 lg:p-10"
      aria-label="Leadership progression from production worker to executive"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
        Leadership Path
      </p>
      <p className="mt-3 font-display text-xl font-semibold text-white/90 sm:text-2xl lg:text-[1.65rem]">
        Your Progression
      </p>

      <div className="relative mt-12 sm:mt-14">
        <div
          className="absolute left-[8%] right-[8%] top-8 h-px bg-gradient-to-r from-gold-500/20 via-gold-500/55 to-gold-500/90 sm:top-[2.65rem]"
          aria-hidden="true"
        />
        <div
          className="absolute right-[6%] top-[1.35rem] text-gold-500 sm:top-[1.95rem]"
          aria-hidden="true"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </div>

        <ol className="grid grid-cols-4 gap-x-1 sm:gap-x-2">
          {progressionSteps.map((step, index) => (
            <li key={step.label} className="relative flex flex-col items-center text-center">
              <div
                className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full border bg-navy-900/80 sm:h-[5.2rem] sm:w-[5.2rem] ${
                  index === progressionSteps.length - 1
                    ? "border-gold-500/45 shadow-[0_0_28px_rgba(212,175,55,0.14)]"
                    : "border-gold-500/20"
                }`}
              >
                <svg
                  className="h-7 w-7 text-gold-400 sm:h-9 sm:w-9"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.35}
                  aria-hidden="true"
                >
                  {step.icon}
                </svg>
                <span className="absolute -bottom-1 flex h-5 w-5 items-center justify-center rounded-full border border-gold-500/30 bg-navy-950 text-[0.6rem] font-bold text-gold-400 sm:h-[1.35rem] sm:w-[1.35rem] sm:text-[0.65rem]">
                  {index + 1}
                </span>
              </div>
              <p className="mt-4 text-[0.62rem] font-semibold leading-snug text-white/80 sm:mt-5 sm:text-[0.72rem]">
                {step.label}
              </p>
            </li>
          ))}
        </ol>
      </div>

      <p className="mt-10 border-t border-white/8 pt-6 text-center text-sm font-medium leading-relaxed text-white/55 sm:text-[0.95rem]">
        A roadmap for every stage of your leadership journey.
      </p>
    </div>
  );
}

export default function D1USPSection() {
  return (
    <section id="audience" className="relative overflow-visible py-24 lg:py-32">
      <div className="section-divider mx-auto max-w-7xl" />
      <div className="mx-auto max-w-7xl px-6 pt-20 sm:pt-24 lg:px-8 lg:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
            Who It&apos;s For
          </p>
          <h2 className="mt-5 text-balance font-display text-3xl font-bold leading-[1.2] sm:text-4xl lg:text-[2.65rem] lg:leading-[1.15]">
            Who Is the D1 Leadership Framework For?
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/60">
            Whether you&apos;re hiring your next frontline leader or preparing
            to become one, the D1 Leadership Framework provides practical tools
            to identify, develop, and evaluate leadership potential.
          </p>
        </div>

        <div className="mt-20 grid items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="grid gap-4 sm:grid-cols-2">
            {audiences.map((audience) => (
              <div
                key={audience.title}
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
                    {audience.icon}
                  </svg>
                </div>
                <p className="font-display text-sm font-semibold leading-snug text-white/90 sm:text-base">
                  {audience.title}
                </p>
                {audience.subtitle && (
                  <p className="mt-1.5 text-xs leading-relaxed text-white/50">
                    {audience.subtitle}
                  </p>
                )}
              </div>
            ))}
          </div>

          <LeadershipProgression />
        </div>

        <div className="mx-auto mt-20 max-w-3xl text-center lg:mt-24">
          <blockquote className="rounded-sm border border-gold-500/30 bg-gold-500/5 px-6 py-8 sm:px-8 sm:py-10">
            <p className="font-display text-lg font-semibold leading-relaxed text-white/90 sm:text-xl">
              Whether you&apos;re hiring your next leader or becoming one, the
              D1 Framework provides a practical roadmap for leadership success.
            </p>
          </blockquote>
          <a
            href="#early-access"
            data-track="audience_download_framework_cta"
            className="mt-12 inline-flex items-center justify-center rounded-sm bg-gold-500 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-navy-950 transition-all hover:bg-gold-400 hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]"
          >
            Download the Free Framework
          </a>
        </div>
      </div>
    </section>
  );
}
