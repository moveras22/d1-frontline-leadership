import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import ContactForm from "../components/contact/ContactForm";
import ArticleFAQ from "../components/resources/ArticleFAQ";
import { CONTACT_EMAIL, CONTACT_FAQS } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact | D1 Frontline Leadership",
  description:
    "Contact D1 Frontline Leadership about training, supervisor development, hiring support, and organizational leadership programs for manufacturing and operations teams.",
};

export default function ContactPage() {
  return (
    <>
      <main>
        <section className="relative overflow-hidden pt-28 pb-12 lg:pt-36 lg:pb-16">
          <div className="industrial-grid absolute inset-0 opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/95 to-navy-900" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-gold-500/25 bg-gold-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                Contact
              </p>
              <h1 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl">
                Get in Touch with{" "}
                <span className="gold-gradient-text">D1 Frontline Leadership</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/65 lg:text-xl">
                Questions about training, supervisor development, hiring support,
                or organizational programs? Send us a message and we&apos;ll get
                back to you promptly.
              </p>
            </div>
          </div>
        </section>

        <section className="relative pb-16 lg:pb-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <ContactForm />
          </div>
        </section>

        <section className="relative pb-16 lg:pb-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="rounded-sm border border-white/10 bg-navy-800/40 p-6 sm:p-8">
              <h2 className="font-display text-2xl font-bold sm:text-3xl">
                Contact Information
              </h2>
              <p className="mt-4">
                <Link
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-lg font-medium text-gold-400 transition-colors hover:text-gold-300"
                >
                  {CONTACT_EMAIL}
                </Link>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/55 sm:text-base">
                We typically respond within one business day.
              </p>
            </div>
          </div>
        </section>

        <section className="relative pb-16 lg:pb-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
              Why Contact D1?
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
              Stronger Frontline Leaders Start Here
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/65 sm:text-lg">
              D1 helps organizations identify, hire, develop, and retain stronger
              frontline leaders through practical leadership frameworks and
              supervisor development. Whether you need help evaluating leadership
              potential, building accountability on the shop floor, or preparing
              new supervisors for their first management role, we provide tools and
              training built for real operations — not generic corporate
              leadership theory.
            </p>
          </div>
        </section>

        <section className="relative pb-24 lg:pb-32">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <ArticleFAQ faqs={CONTACT_FAQS} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
