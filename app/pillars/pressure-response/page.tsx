import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Pressure Response | D1 Frontline Leadership",
  description:
    "Learn how to identify pressure response before hiring — how a person behaves when expectations, stress, uncertainty, and consequences increase.",
};

const interviewQuestions = [
  "Tell me about the most stressful situation you faced at work.",
  "Describe a time a major problem occurred unexpectedly.",
  "How do you prioritize when everything feels urgent?",
  "Tell me about a time you made a difficult decision with incomplete information.",
];

const positiveIndicators = [
  "Remains calm under pressure",
  "Focuses on facts and solutions",
  "Communicates clearly during challenges",
  "Maintains standards when stressed",
  "Demonstrates resilience after setbacks",
];

const redFlags = [
  "Becomes emotional or reactive",
  "Blames others during difficult situations",
  "Avoids difficult decisions",
  "Panics when plans change",
  "Struggles to recover from setbacks",
];

function ChecklistItem({
  children,
  variant,
}: {
  children: ReactNode;
  variant: "positive" | "negative";
}) {
  const icon = variant === "positive" ? "✓" : "✗";
  const iconClass =
    variant === "positive" ? "text-gold-400" : "text-red-400/80";

  return (
    <li className="flex items-start gap-3">
      <span
        className={`mt-0.5 shrink-0 font-semibold ${iconClass}`}
        aria-hidden="true"
      >
        {icon}
      </span>
      <span className="text-sm leading-relaxed text-white/75 sm:text-base">
        {children}
      </span>
    </li>
  );
}

export default function PressureResponsePage() {
  return (
    <>
      <main>
        <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-20">
          <div className="industrial-grid absolute inset-0 opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/95 to-navy-900" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <Link
              href="/"
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
              Back to Home
            </Link>
            <div className="mx-auto max-w-3xl text-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-gold-500/25 bg-gold-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                D1 Pillar
              </p>
              <h1 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl">
                Pressure Response
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/65 lg:text-xl">
                How a person behaves when expectations, stress, uncertainty, and
                consequences increase.
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-3xl px-6 pb-24 lg:px-8 lg:pb-32">
          <section className="mb-16">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              What Is Pressure Response?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/65">
              Pressure Response measures a person&apos;s ability to remain
              composed, make decisions, communicate effectively, and maintain
              standards during difficult situations.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Why It Matters
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/65">
              Anyone can perform when conditions are favorable. Leadership is
              often revealed during production issues, customer escalations,
              staffing shortages, missed targets, and unexpected challenges.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              How to Identify Pressure Response Before Hiring
            </h2>
            <div className="mt-6 rounded-sm border border-gold-500/25 bg-gradient-to-br from-gold-500/8 via-navy-800/80 to-navy-900/90 p-6 sm:p-8">
              <p className="text-lg leading-relaxed text-white/75">
                Pressure exposes habits and character. Use these interview
                questions to see how candidates respond when stakes are high and
                conditions are uncertain.
              </p>
            </div>
            <ul className="mt-8 space-y-4">
              {interviewQuestions.map((question) => (
                <li key={question} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                  <span className="text-sm leading-relaxed text-white/75 sm:text-base">
                    {question}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <div className="mb-16 grid gap-8 sm:grid-cols-2">
            <section className="rounded-sm border border-white/10 bg-navy-800/50 p-6 sm:p-8">
              <h2 className="font-display text-xl font-bold sm:text-2xl">
                Positive Indicators
              </h2>
              <ul className="mt-6 space-y-4">
                {positiveIndicators.map((item) => (
                  <ChecklistItem key={item} variant="positive">
                    {item}
                  </ChecklistItem>
                ))}
              </ul>
            </section>

            <section className="rounded-sm border border-white/10 bg-navy-800/50 p-6 sm:p-8">
              <h2 className="font-display text-xl font-bold sm:text-2xl">
                Red Flags
              </h2>
              <ul className="mt-6 space-y-4">
                {redFlags.map((item) => (
                  <ChecklistItem key={item} variant="negative">
                    {item}
                  </ChecklistItem>
                ))}
              </ul>
            </section>
          </div>

          <section className="mb-16">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              D1 Athlete Connection
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/65">
              Elite athletes are evaluated when pressure is highest.
              Championship moments reveal preparation, discipline, and
              composure. Great leaders demonstrate similar behaviors when
              organizations face challenges.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Real-World Leadership Example
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/65">
              In operations environments, pressure response becomes visible
              during quality escapes, equipment failures, customer complaints,
              staffing shortages, and missed production goals.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Key Takeaway
            </h2>
            <blockquote className="mt-6 rounded-sm border border-gold-500/30 bg-gold-500/5 px-6 py-8 sm:px-8">
              <p className="font-display text-lg font-semibold leading-relaxed text-white/90 sm:text-xl">
                Pressure does not create character—it reveals it.
              </p>
            </blockquote>
          </section>

          <div className="text-center">
            <Link
              href="/free-framework"
              data-track="pressure_response_free_framework_cta"
              className="inline-flex items-center justify-center rounded-sm bg-gold-500 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-navy-950 transition-all hover:bg-gold-400 hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]"
            >
              Get the Free D1 Leadership Framework
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
