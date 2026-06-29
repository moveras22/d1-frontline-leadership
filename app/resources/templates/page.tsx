import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../components/Footer";
import InteriorPageNav from "../../components/InteriorPageNav";

export const metadata: Metadata = {
  title: "Supervisor Templates | D1 Frontline Leadership",
  description:
    "Free supervisor templates including one-on-one meeting guides, interview scorecards, and the D1 Leadership Framework download.",
};

const templates = [
  {
    title: "One-on-One Meeting Template",
    description:
      "A structured guide for productive supervisor check-ins — covering performance, development, and accountability conversations.",
    href: "/one-on-one-meeting-template",
    label: "Download Template",
  },
  {
    title: "Supervisor Interview Scorecard",
    description:
      "Evaluate frontline leadership candidates with behavioral interview questions aligned to the D1 Framework pillars.",
    href: "/supervisor-interview-scorecard",
    label: "Download Scorecard",
  },
  {
    title: "D1 Leadership Framework",
    description:
      "The complete scorecard for identifying, hiring, and developing high-performance frontline leaders on the plant floor.",
    href: "/free-framework",
    label: "Download Framework",
  },
];

export default function TemplatesPage() {
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
                { label: "Resources", href: "/resources" },
                { label: "Templates" },
              ]}
            />

            <div className="mx-auto max-w-3xl text-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-gold-500/25 bg-gold-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                Free Tools
              </p>
              <h1 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl">
                Supervisor Templates
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/65 lg:text-xl">
                Ready-to-use tools for frontline leaders — download, print, and
                put them to work on your next shift.
              </p>
            </div>
          </div>
        </section>

        <section className="relative pb-24 lg:pb-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {templates.map((template) => (
                <article
                  key={template.href}
                  className="flex flex-col rounded-sm border border-white/8 bg-navy-800/50 p-6 transition-all hover:border-gold-500/30 sm:p-8"
                >
                  <h2 className="font-display text-xl font-bold">
                    {template.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55">
                    {template.description}
                  </p>
                  <Link
                    href={template.href}
                    className="mt-6 inline-flex text-sm font-semibold uppercase tracking-wider text-gold-400 transition-colors hover:text-gold-300"
                  >
                    {template.label} →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
