import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import InteriorPageNav from "../components/InteriorPageNav";
import { ORGANIZATION_PROGRAMS } from "@/lib/organizations";

export const metadata: Metadata = {
  title: "Frontline Leadership Solutions for Organizations | D1 Frontline Leadership",
  description:
    "Help your organization hire better supervisors, promote future leaders, develop frontline managers, and deliver custom training built for manufacturing and operations.",
};

export default function ForOrganizationsPage() {
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
                { label: "For Organizations" },
              ]}
            />
            <div className="mx-auto max-w-4xl text-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-gold-500/25 bg-gold-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                For Organizations
              </p>
              <h1 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Build a Frontline Leadership Pipeline That{" "}
                <span className="gold-gradient-text">Scales With You</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/65 lg:text-xl">
                Structured programs for operations leaders, HR teams, and business
                owners who need to hire, promote, and develop supervisors who
                actually succeed on the plant floor.
              </p>
            </div>
          </div>
        </section>

        <section id="programs" className="relative scroll-mt-28 pb-24 lg:pb-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
                Organizational Programs
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
                Solutions for Every Stage of Frontline Leadership
              </h2>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:gap-8">
              {ORGANIZATION_PROGRAMS.map((program) => (
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
                    href={`/for-organizations/${program.slug}`}
                    className="mt-6 inline-flex text-sm font-semibold uppercase tracking-wider text-gold-400 transition-colors hover:text-gold-300"
                  >
                    Learn More →
                  </Link>
                </article>
              ))}
            </div>

            <div className="mx-auto mt-16 max-w-3xl rounded-sm border border-gold-500/20 bg-gold-500/5 p-8 text-center sm:p-10">
              <h2 className="font-display text-2xl font-bold sm:text-3xl">
                Ready to Strengthen Your Frontline Leaders?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/60">
                Download the D1 Framework or reach out to discuss a program built
                for your operation.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/free-framework"
                  className="inline-flex items-center justify-center rounded-sm border border-gold-500/40 bg-gold-500/10 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-gold-400 transition-all hover:border-gold-500/60 hover:bg-gold-500/15 hover:text-gold-300"
                >
                  Explore the D1 Framework
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-sm border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white/75 transition-all hover:border-gold-500/30 hover:text-gold-400"
                >
                  Contact Us
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
