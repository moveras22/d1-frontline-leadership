import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Accountability | D1 Frontline Leadership",
  description:
    "Learn how to identify accountability before hiring — the willingness to take ownership of actions, decisions, results, and outcomes without blaming others.",
};

const interviewQuestions = [
  "Tell me about a significant mistake you made and what you learned from it.",
  "Describe a time you missed a goal or expectation.",
  "How do you handle situations when your team underperforms?",
  "Tell me about a problem you inherited and how you addressed it.",
];

const positiveIndicators = [
  "Takes ownership of mistakes",
  "Focuses on solutions instead of excuses",
  "Gives specific examples of learning from failure",
  "Accepts responsibility for team outcomes",
  "Demonstrates follow-through on commitments",
];

const redFlags = [
  "Consistently blames coworkers, managers, or circumstances",
  "Cannot identify personal mistakes",
  "Avoids responsibility for poor outcomes",
  "Makes excuses instead of discussing corrective actions",
  "Focuses on what others should have done",
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

export default function AccountabilityPage() {
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
                Accountability
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/65 lg:text-xl">
                The willingness to take ownership of actions, decisions, results,
                and outcomes without blaming others.
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-3xl px-6 pb-24 lg:px-8 lg:pb-32">
          <section className="mb-16">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              What Is Accountability?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/65">
              Accountability is the ability to own both successes and failures.
              Accountable leaders take responsibility for outcomes, follow
              through on commitments, and focus on solutions rather than
              excuses.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Why It Matters
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/65">
              Organizations succeed when leaders take ownership. Accountable
              leaders build trust, create clarity, solve problems faster, and
              establish a culture where people focus on results instead of
              blame.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              How to Identify Accountability Before Hiring
            </h2>
            <div className="mt-6 rounded-sm border border-gold-500/25 bg-gradient-to-br from-gold-500/8 via-navy-800/80 to-navy-900/90 p-6 sm:p-8">
              <p className="text-lg leading-relaxed text-white/75">
                Accountability is revealed by how people discuss challenges,
                mistakes, and setbacks. Use these interview questions to see
                whether candidates own their results or shift responsibility
                elsewhere.
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
              Elite athletes are held accountable every day. Performance is
              measured, mistakes are reviewed, and improvement is expected. The
              best athletes learn to own their results and focus on what they
              can control. Great leaders operate the same way.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Real-World Leadership Example
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/65">
              In operations environments, accountability appears when leaders
              address issues directly, own performance metrics, follow through
              on action items, and take responsibility for results rather than
              shifting blame to people, processes, or circumstances.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Accountability vs Blame
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/65">
              Accountability is not about assigning blame. It is about accepting
              responsibility and focusing on what can be improved moving
              forward. High-performing organizations create accountability
              without creating fear.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Key Takeaway
            </h2>
            <blockquote className="mt-6 rounded-sm border border-gold-500/30 bg-gold-500/5 px-6 py-8 sm:px-8">
              <p className="font-display text-lg font-semibold leading-relaxed text-white/90 sm:text-xl">
                Accountability creates trust because people know they can rely
                on leaders who own their actions, decisions, and results.
              </p>
            </blockquote>
          </section>

          <div className="text-center">
            <Link
              href="/free-framework"
              data-track="accountability_free_framework_cta"
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
