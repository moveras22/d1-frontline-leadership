import Link from "next/link";

export default function ArticleCTA() {
  return (
    <section className="relative overflow-hidden rounded-sm border border-gold-500/25 bg-gradient-to-br from-gold-500/8 via-navy-800/80 to-navy-900/90 p-8 text-center sm:p-12">
      <div className="industrial-grid absolute inset-0 opacity-30" />
      <div className="relative">
        <h2 className="font-display text-2xl font-bold sm:text-3xl">
          Ready to identify your next great leader?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
          Download the free D1 Leadership Assessment and begin evaluating
          leadership potential with the D1 Framework.
        </p>
        <Link
          href="/free-framework"
          data-track="article_free_assessment_cta"
          className="mt-8 inline-flex items-center justify-center rounded-sm bg-gold-500 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-navy-950 transition-all hover:bg-gold-400 hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]"
        >
          Download Free Assessment
        </Link>
      </div>
    </section>
  );
}
