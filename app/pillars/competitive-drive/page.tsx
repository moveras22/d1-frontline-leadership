import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Competitive Drive | D1 Frontline Leadership",
  description:
    "Learn how to identify competitive drive before hiring — the internal desire to improve, win, raise standards, and pursue better results.",
};

const interviewQuestions = [
  "Tell me about a goal you set that required you to push yourself.",
  "What does winning mean to you in a work environment?",
  "Describe a time you improved a process, metric, or result.",
  "What motivates you when no one is watching?",
];

const positiveIndicators = [
  "Talks about improvement and standards",
  "Sets personal or professional goals",
  "Shows pride in measurable results",
  "Wants to outperform their previous best",
  "Demonstrates urgency and ownership",
];

const redFlags = [
  "Shows little interest in goals or results",
  "Accepts average performance too easily",
  "Competes in a way that hurts the team",
  "Focuses on personal recognition over team success",
  "Cannot describe what motivates them to improve",
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

export default function CompetitiveDrivePage() {
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
                Competitive Drive
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/65 lg:text-xl">
                The internal desire to improve, win, raise standards, and pursue
                better results.
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-3xl px-6 pb-24 lg:px-8 lg:pb-32">
          <section className="mb-16">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              What Is Competitive Drive?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/65">
              Competitive drive is the desire to improve performance and pursue
              better outcomes. It is not about ego or arrogance. It is about
              caring deeply about results, standards, and progress.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Why It Matters
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/65">
              In leadership and operations, competitive people push teams
              forward. They challenge the status quo, look for improvement
              opportunities, and are not satisfied with average performance.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              How to Identify Competitive Drive Before Hiring
            </h2>
            <div className="mt-6 rounded-sm border border-gold-500/25 bg-gradient-to-br from-gold-500/8 via-navy-800/80 to-navy-900/90 p-6 sm:p-8">
              <p className="text-lg leading-relaxed text-white/75">
                Competitive drive shows up in how people talk about goals,
                improvement, standards, and results. Use these interview
                questions to uncover whether candidates push themselves and
                their teams toward better performance.
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
              Elite athletes are trained to compete against opponents, standards,
              and their own previous performance. The best competitors do not
              just want to win once. They want to keep improving. That same drive
              can translate into leadership when it is paired with humility,
              discipline, and team orientation.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Real-World Leadership Example
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/65">
              In operations environments, competitive drive appears in leaders
              who track performance, push for better results, improve weak
              areas, and create energy around team goals without creating a toxic
              or blame-based culture.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Healthy Competition vs Ego
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/65">
              Competitive drive becomes valuable when it raises standards for
              the entire team. It becomes harmful when it turns into ego,
              politics, or individual success at the expense of the group. D1
              looks for competitive drive that is connected to team performance.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Key Takeaway
            </h2>
            <blockquote className="mt-6 rounded-sm border border-gold-500/30 bg-gold-500/5 px-6 py-8 sm:px-8">
              <p className="font-display text-lg font-semibold leading-relaxed text-white/90 sm:text-xl">
                Competitive drive is the force that pushes people beyond average,
                but it must be balanced with humility, coachability, and
                team-first leadership.
              </p>
            </blockquote>
          </section>

          <div className="text-center">
            <Link
              href="/free-framework"
              data-track="competitive_drive_free_framework_cta"
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
