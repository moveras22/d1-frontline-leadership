import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import EmailCapture from "../components/EmailCapture";

export const metadata: Metadata = {
  title: "Free Download: The D1 Leadership Framework | D1 Frontline Leadership",
  description:
    "Download the D1 Leadership Framework scorecard for identifying, hiring, and developing high-performance frontline leaders.",
};

const includedItems = [
  "The 7 D1 traits of high-performance frontline leaders",
  "A simple leadership scorecard",
  "Interview questions for spotting coachability, discipline, resilience, and accountability",
  "A practical way to evaluate supervisors, leads, and future managers",
];

export default function FreeFrameworkPage() {
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
                Free PDF Download
              </p>
              <h1 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl">
                The D1 Leadership{" "}
                <span className="gold-gradient-text">Framework</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/65 lg:text-xl">
                A practical scorecard for identifying, hiring, and developing
                high-performance frontline leaders using traits proven in elite
                athletics and operations.
              </p>
            </div>
          </div>
        </section>

        <section className="relative pb-8 lg:pb-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl rounded-sm border border-white/10 bg-navy-800/50 p-8 sm:p-10">
              <h2 className="font-display text-2xl font-bold sm:text-3xl">
                What You&apos;ll Get
              </h2>
              <p className="mt-4 text-white/60">
                Everything you need to assess and develop frontline leadership
                talent on your plant floor.
              </p>
              <ul className="mt-8 space-y-4">
                {includedItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-400">
                      <svg
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </span>
                    <span className="text-sm leading-relaxed text-white/75 sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <EmailCapture
          eyebrow="Get Your Copy"
          title="Download the Free Framework"
          description="Enter your details below and we'll send the D1 Leadership Framework PDF straight to your inbox."
          submitLabel="Get the Free Framework"
          submittingLabel="Sending..."
          submittedMessage="Check your inbox. Your D1 Leadership Framework PDF is on its way."
          submitTrackId="free_framework_submit"
        />
      </main>
      <Footer />
    </>
  );
}
