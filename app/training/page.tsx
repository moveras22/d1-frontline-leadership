import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import InteriorPageNav from "../components/InteriorPageNav";
import {
  TRAINING_AUDIENCES,
  TRAINING_LEARNING_OUTCOMES,
  TRAINING_PROGRAMS,
} from "@/lib/training";

export const metadata: Metadata = {
  title: "Frontline Leadership Training | D1 Frontline Leadership",
  description:
    "Practical frontline leadership training for supervisors, team leads, and future leaders who manage people, production, accountability, and performance every day.",
};

export default function TrainingPage() {
  return (
    <>
      <main>
        <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
          <div className="industrial-grid absolute inset-0 opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/95 to-navy-900" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <InteriorPageNav
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Training" },
              ]}
            />
            <div className="mx-auto max-w-4xl text-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-gold-500/25 bg-gold-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                D1 Training
              </p>
              <h1 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Frontline Leadership Training Built for{" "}
                <span className="gold-gradient-text">Real Operations</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/65 lg:text-xl">
                Practical training for supervisors, team leads, and future
                leaders who manage people, production, accountability, and
                performance every day.
              </p>
            </div>
          </div>
        </section>

        <section
          id="overview"
          className="relative scroll-mt-28 pb-20 lg:pb-28"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="section-divider mb-16" />
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
                  Training Overview
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
                  Leadership Development for the Plant Floor
                </h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-white/65 lg:text-lg">
                <p>
                  D1 Frontline Leadership training is built for manufacturing,
                  logistics, warehouse, and operations environments — where
                  supervisors are judged by production results, team morale,
                  safety performance, and the ability to develop people under
                  real pressure.
                </p>
                <p>
                  This is not generic management training adapted from a
                  boardroom. Every program is grounded in the D1 Framework — six
                  leadership traits that predict frontline success — and
                  designed for leaders who run shifts, hold people accountable,
                  and carry the weight of daily operations on their shoulders.
                </p>
                <p>
                  Whether you are preparing a first-time supervisor, strengthening
                  an existing management team, or building a leadership pipeline
                  before your next promotion, D1 training gives you practical
                  tools — not theory alone.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="programs"
          className="relative scroll-mt-28 pb-20 lg:pb-28"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
                Training Programs
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
                Programs Built for Every Stage of Frontline Leadership
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
                From first-time supervisors to operations leaders building a
                promotion pipeline — choose the program that matches your team&apos;s
                needs.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {TRAINING_PROGRAMS.map((program) => (
                <article
                  key={program.slug}
                  id={program.slug}
                  className="scroll-mt-28 flex flex-col rounded-sm border border-white/8 bg-navy-800/50 p-6 transition-all hover:border-gold-500/30 hover:bg-navy-800/80 sm:p-8"
                >
                  <h3 className="font-display text-xl font-bold leading-snug">
                    {program.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55">
                    {program.shortDescription}
                  </p>
                  <Link
                    href={`/training/${program.slug}`}
                    className="mt-6 inline-flex text-sm font-semibold uppercase tracking-wider text-gold-400 transition-colors hover:text-gold-300"
                  >
                    View Program →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="who-this-is-for"
          className="relative scroll-mt-28 pb-20 lg:pb-28"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="rounded-sm border border-white/10 bg-navy-800/40 p-8 sm:p-12 lg:p-16">
              <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
                    Who This Is For
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
                    Built for Leaders Who Run the Operation
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-white/60">
                    D1 training serves anyone responsible for frontline people
                    performance — whether you lead a single shift or develop
                    supervisors across the entire plant.
                  </p>
                </div>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {TRAINING_AUDIENCES.map((audience) => (
                    <li
                      key={audience}
                      className="flex items-center gap-3 rounded-sm border border-white/8 bg-navy-900/50 px-4 py-3"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                      <span className="text-sm font-medium text-white/80">
                        {audience}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id="what-leaders-learn"
          className="relative scroll-mt-28 pb-20 lg:pb-28"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
                  What Leaders Learn
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
                  Practical Skills That Show Up on the Floor
                </h2>
                <p className="mt-4 text-base leading-relaxed text-white/60">
                  Every D1 training program focuses on behaviors supervisors can
                  apply immediately — during the next shift, the next
                  conversation, and the next production challenge.
                </p>
              </div>
              <ul className="space-y-4">
                {TRAINING_LEARNING_OUTCOMES.map((outcome) => (
                  <li
                    key={outcome}
                    className="flex items-start gap-3 border-b border-white/8 pb-4 last:border-b-0 last:pb-0"
                  >
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
                    <span className="text-base leading-relaxed text-white/75">
                      {outcome}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="get-started"
          className="relative scroll-mt-28 pb-24 lg:pb-32"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl rounded-sm border border-gold-500/20 bg-gold-500/5 p-8 text-center sm:p-12">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                Ready to Develop Stronger Frontline Leaders?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
                Start with the D1 Framework and free leadership resources — then
                build the training program that fits your operation.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/free-framework"
                  className="inline-flex items-center justify-center rounded-sm border border-gold-500/40 bg-gold-500/10 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-gold-400 transition-all hover:border-gold-500/60 hover:bg-gold-500/15 hover:text-gold-300"
                >
                  Explore the D1 Framework
                </Link>
                <Link
                  href="/resources"
                  className="inline-flex items-center justify-center rounded-sm border border-white/15 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white/75 transition-all hover:border-gold-500/30 hover:text-gold-400"
                >
                  Download Free Leadership Resources
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
