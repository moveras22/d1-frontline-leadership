import Link from "next/link";

export default function D1USPSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="section-divider mx-auto max-w-7xl" />
      <div className="mx-auto max-w-7xl px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            The Problem Isn&apos;t Knowing What Great Leaders Do.
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-white/60">
            <p>
              Everyone says they want accountable, disciplined, coachable
              leaders.
            </p>
            <p>
              The harder question is: How do you identify those traits before
              you hire or promote someone?
            </p>
            <p>
              The D1 Frontline Leadership Framework helps you evaluate
              leadership potential before the person is in the role — using
              practical traits found in elite athletes and high-performing
              operations leaders.
            </p>
          </div>
          <Link
            href="/free-framework"
            data-track="usp_free_framework_cta"
            className="mt-10 inline-flex items-center justify-center rounded-sm bg-gold-500 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-navy-950 transition-all hover:bg-gold-400 hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]"
          >
            Get the Free Framework
          </Link>
        </div>
      </div>
    </section>
  );
}
