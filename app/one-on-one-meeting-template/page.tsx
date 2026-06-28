import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import EmailCapture from "../components/EmailCapture";
import { ONE_ON_ONE_MEETING_TEMPLATE } from "@/lib/resources/downloads";

const resource = ONE_ON_ONE_MEETING_TEMPLATE;

export const metadata: Metadata = {
  title: resource.seo.title,
  description: resource.seo.description,
  openGraph: {
    title: resource.seo.title,
    description: resource.seo.description,
    type: "website",
  },
};

export default function OneOnOneMeetingTemplatePage() {
  return (
    <>
      <main>
        <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-20">
          <div className="industrial-grid absolute inset-0 opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/95 to-navy-900" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <Link
              href="/resources"
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
              Back to Resources
            </Link>
            <div className="mx-auto max-w-3xl text-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-gold-500/25 bg-gold-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                Free PDF Download
              </p>
              <h1 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl">
                {resource.title}
              </h1>
              <p className="mt-4 text-lg font-medium text-gold-400/90 sm:text-xl">
                {resource.subtitle}
              </p>
              <p className="mt-6 text-lg leading-relaxed text-white/65 lg:text-xl">
                {resource.description}
              </p>
            </div>
          </div>
        </section>

        <section className="relative pb-8 lg:pb-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl rounded-sm border border-white/10 bg-navy-800/50 p-8 sm:p-10">
              <h2 className="font-display text-2xl font-bold sm:text-3xl">
                What&apos;s Included
              </h2>
              <p className="mt-4 text-white/60">
                Everything you need to run consistent, productive one-on-one
                meetings with your frontline team.
              </p>
              <ul className="mt-8 space-y-4">
                {resource.includedItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-400">
                      <svg
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                        aria-hidden="true"
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
          eyebrow={resource.emailCapture.eyebrow}
          title={resource.emailCapture.title}
          description={resource.emailCapture.description}
          submitLabel={resource.emailCapture.submitLabel}
          submittingLabel={resource.emailCapture.submittingLabel}
          submittedMessage={resource.emailCapture.submittedMessage}
          submitTrackId={resource.emailCapture.submitTrackId}
          redirectTo="/thank-you"
        />
      </main>
      <Footer />
    </>
  );
}
