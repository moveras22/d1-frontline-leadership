import type { Metadata } from "next";
import Footer from "../components/Footer";
import InteriorPageNav from "../components/InteriorPageNav";
import AssessmentApp from "../components/assessment/AssessmentApp";

export const metadata: Metadata = {
  title: "Free D1 Leadership Assessment | D1 Frontline Leadership",
  description:
    "Evaluate frontline leadership potential with the free D1 Leadership Assessment. Score candidates across six traits and receive a personalized leadership report.",
  openGraph: {
    title: "Free D1 Leadership Assessment | D1 Frontline Leadership",
    description:
      "Evaluate frontline leadership potential with the free D1 Leadership Assessment. Score candidates across six traits and receive a personalized leadership report.",
    type: "website",
  },
};

export default function AssessmentPage() {
  return (
    <>
      <main>
        <section className="relative overflow-hidden pt-28 pb-12 lg:pt-36 lg:pb-16">
          <div className="industrial-grid absolute inset-0 opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/95 to-navy-900" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <InteriorPageNav
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Leadership Assessment" },
              ]}
            />
            <div className="mx-auto max-w-3xl text-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-gold-500/25 bg-gold-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                Free Assessment
              </p>
              <h1 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl">
                D1 Leadership Assessment
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/65 lg:text-xl">
                Answer 30 questions across six leadership traits to receive a
                D1 Leadership Score from 0–100 with personalized development
                recommendations.
              </p>
            </div>
          </div>
        </section>

        <AssessmentApp />
      </main>
      <Footer />
    </>
  );
}
