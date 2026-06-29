import type { Metadata } from "next";
import Footer from "../components/Footer";
import EmailCapture from "../components/EmailCapture";
import InteriorPageNav from "../components/InteriorPageNav";

export const metadata: Metadata = {
  title: "Free D1 Leadership Toolkit | D1 Frontline Leadership",
  description:
    "Download the free D1 Leadership Toolkit with practical resources to help you hire, promote, and develop stronger frontline supervisors.",
};

const toolkitItems = [
  "D1 Leadership Framework Guide",
  "15 Leadership Interview Questions",
  "Supervisor Promotion Checklist",
  "One-on-One Meeting Template",
  "Leadership Readiness Assessment",
];

export default function FreeFrameworkPage() {
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
                { label: "D1 Leadership Toolkit" },
              ]}
            />
            <div className="mx-auto max-w-3xl text-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-gold-500/25 bg-gold-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                D1 Leadership Toolkit
              </p>
              <h1 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl">
                The Free{" "}
                <span className="gold-gradient-text">D1 Leadership Toolkit</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/65 lg:text-xl">
                Practical resources built from real frontline leadership
                experience to help you hire, promote, and develop stronger
                supervisors.
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
                Everything in the toolkit is designed for manufacturing and
                operations leaders who need practical tools—not theory.
              </p>
              <ul className="mt-8 space-y-4">
                {toolkitItems.map((item) => (
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
          eyebrow="Free Download"
          title="Get the Free D1 Leadership Toolkit"
          description="Practical resources built from real frontline leadership experience to help you hire, promote, and develop stronger supervisors."
          checklistItems={toolkitItems}
          trustText="Instant access. No spam. Unsubscribe anytime."
          footerNote="Built for manufacturing, operations, and frontline leaders who want practical leadership tools—not theory."
          submitLabel="Get Instant Access"
          submittingLabel="Sending..."
          submittedMessage="Check your inbox. Your D1 Leadership Toolkit is on its way."
          submitTrackId="free_framework_submit"
          redirectTo="/thank-you"
        />
      </main>
      <Footer />
    </>
  );
}
