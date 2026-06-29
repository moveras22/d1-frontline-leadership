import Link from "next/link";
import type { TrainingProgram } from "@/lib/training";

type TrainingProgramDetailProps = {
  program: TrainingProgram;
};

export default function TrainingProgramDetail({
  program,
}: TrainingProgramDetailProps) {
  return (
    <>
      <main>
        <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-20">
          <div className="industrial-grid absolute inset-0 opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/95 to-navy-900" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <Link
              href="/training"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gold-400 transition-colors hover:text-gold-300"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
              All Training Programs
            </Link>

            <div className="mx-auto max-w-3xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-gold-500/25 bg-gold-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                Training Program
              </p>
              <h1 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl">
                {program.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/65 lg:text-xl">
                {program.description}
              </p>
            </div>
          </div>
        </section>

        <section className="relative pb-16 lg:pb-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl rounded-sm border border-white/10 bg-navy-800/50 p-8 sm:p-10">
              <h2 className="font-display text-2xl font-bold sm:text-3xl">
                What Participants Gain
              </h2>
              <ul className="mt-8 space-y-4">
                {program.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-400">
                      <svg
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                    </span>
                    <span className="text-base leading-relaxed text-white/70">
                      {outcome}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="relative pb-24 lg:pb-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl rounded-sm border border-gold-500/20 bg-gold-500/5 p-8 text-center sm:p-10">
              <h2 className="font-display text-2xl font-bold sm:text-3xl">
                Start Building Stronger Frontline Leaders
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/60">
                Explore the D1 Framework and download free leadership resources
                to begin developing supervisors on your plant floor today.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/free-framework"
                  className="inline-flex items-center justify-center rounded-sm border border-gold-500/40 bg-gold-500/10 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-gold-400 transition-all hover:border-gold-500/60 hover:bg-gold-500/15 hover:text-gold-300"
                >
                  Explore the D1 Framework
                </Link>
                <Link
                  href="/resources"
                  className="inline-flex items-center justify-center rounded-sm border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white/75 transition-all hover:border-gold-500/30 hover:text-gold-400"
                >
                  Download Free Resources
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
