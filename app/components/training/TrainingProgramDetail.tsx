import Link from "next/link";
import InteriorPageNav from "../InteriorPageNav";
import TrainingProgramInterestForm from "./TrainingProgramInterestForm";
import { TRAINING_TRUST_CARDS, type TrainingProgram } from "@/lib/training";

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
            <InteriorPageNav
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Training", href: "/training" },
                { label: program.title },
              ]}
            />

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

              <div className="mt-10 rounded-sm border border-gold-500/20 bg-gold-500/5 p-6 sm:p-8">
                <h2 className="font-display text-2xl font-bold sm:text-3xl">
                  Ready to Develop Stronger Frontline Leaders?
                </h2>
                <p className="mt-4 text-base leading-relaxed text-white/65">
                  Whether you&apos;re preparing new supervisors or developing
                  experienced leaders, D1 Frontline Leadership provides
                  practical leadership training built for real operations.
                </p>
                <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-sm bg-gold-500 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-navy-950 transition-all hover:bg-gold-400 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]"
                  >
                    Schedule a Free Consultation
                  </Link>
                  <Link
                    href="/free-framework"
                    className="inline-flex items-center justify-center rounded-sm border border-white/15 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white/75 transition-all hover:border-gold-500/30 hover:text-gold-400"
                  >
                    Download Free Leadership Toolkit
                  </Link>
                </div>
              </div>
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

        <section className="relative pb-16 lg:pb-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <TrainingProgramInterestForm
              programTitle={program.title}
              programSlug={program.slug}
            />
          </div>
        </section>

        <section className="relative pb-16 lg:pb-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
                  Why D1
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
                  Why Organizations Choose D1
                </h2>
              </div>

              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {TRAINING_TRUST_CARDS.map((card) => (
                  <article
                    key={card.title}
                    className="rounded-sm border border-white/10 bg-navy-800/50 p-6 sm:p-8"
                  >
                    <h3 className="font-display text-xl font-bold text-white/90">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/60">
                      {card.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative pb-24 lg:pb-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl rounded-sm border border-gold-500/20 bg-gold-500/5 p-8 text-center sm:p-10">
              <h2 className="font-display text-2xl font-bold sm:text-3xl">
                Ready to build stronger supervisors?
              </h2>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-sm bg-gold-500 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-navy-950 transition-all hover:bg-gold-400 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]"
                >
                  Schedule a Consultation
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-sm border border-white/15 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white/75 transition-all hover:border-gold-500/30 hover:text-gold-400"
                >
                  Contact D1
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
