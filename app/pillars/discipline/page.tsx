import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Discipline | D1 Frontline Leadership",
  description:
    "Learn how to identify discipline before hiring — the ability to consistently execute the right actions regardless of motivation, circumstances, or obstacles.",
};

const interviewQuestions = [
  "Tell me about a long-term goal that required sustained effort.",
  "Describe a process or routine that helped you succeed.",
  "What is something you do consistently that most people avoid?",
  "Tell me about a time you had to stay committed when results were not immediate.",
];

const positiveIndicators = [
  "Consistent work history",
  "Demonstrates long-term commitment to goals",
  "Can describe routines and systems",
  "Shows preparation and follow-through",
  "Values accountability and standards",
];

const redFlags = [
  "Frequently changes direction without completing goals",
  "Blames lack of motivation for poor results",
  "Cannot describe consistent habits",
  "Focuses on intentions instead of execution",
  "Has difficulty providing examples of persistence",
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

export default function DisciplinePage() {
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
                Discipline
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/65 lg:text-xl">
                The ability to consistently execute the right actions regardless
                of motivation, circumstances, or obstacles.
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-3xl px-6 pb-24 lg:px-8 lg:pb-32">
          <section className="mb-16">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              What Is Discipline?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/65">
              Discipline is the commitment to doing what needs to be done, even
              when it is difficult, repetitive, or inconvenient. High-performing
              leaders rely on systems, habits, and standards rather than
              motivation alone.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Why It Matters
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/65">
              In leadership and operations, disciplined individuals create
              consistency. They follow processes, meet commitments, maintain
              standards, and drive results over long periods of time.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              How to Identify Discipline Before Hiring
            </h2>
            <div className="mt-6 rounded-sm border border-gold-500/25 bg-gradient-to-br from-gold-500/8 via-navy-800/80 to-navy-900/90 p-6 sm:p-8">
              <p className="text-lg leading-relaxed text-white/75">
                Discipline is often visible through patterns of behavior rather
                than interview performance alone. Use these interview questions
                to uncover how candidates sustain effort over time.
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
              Elite athletes develop discipline through years of structured
              practice, training, and preparation. Success is rarely the result
              of a single effort. The same principle applies to leadership.
              High-performing leaders consistently execute the fundamentals day
              after day.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Real-World Leadership Example
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/65">
              In operations environments, discipline often appears in leaders
              who maintain standards, follow up on commitments, track performance
              metrics, and consistently address issues rather than waiting for
              problems to grow.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Key Takeaway
            </h2>
            <blockquote className="mt-6 rounded-sm border border-gold-500/30 bg-gold-500/5 px-6 py-8 sm:px-8">
              <p className="font-display text-lg font-semibold leading-relaxed text-white/90 sm:text-xl">
                Discipline is what allows talent and potential to produce
                consistent results over time.
              </p>
            </blockquote>
          </section>

          <div className="text-center">
            <Link
              href="/free-framework"
              data-track="discipline_free_framework_cta"
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
