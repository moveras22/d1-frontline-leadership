import Link from "next/link";
import BackToHomeLink from "./BackToHomeLink";
import Footer from "./Footer";

type ComingSoonPageProps = {
  badge?: string;
  description: string;
  title: string;
};

export default function ComingSoonPage({
  badge = "Coming Soon",
  description,
  title,
}: ComingSoonPageProps) {
  return (
    <>
      <main>
        <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-20">
          <div className="industrial-grid absolute inset-0 opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/95 to-navy-900" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <BackToHomeLink />

            <div className="mx-auto max-w-3xl text-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-gold-500/25 bg-gold-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                {badge}
              </p>
              <h1 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl">
                {title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/65 lg:text-xl">
                {description}
              </p>
            </div>
          </div>
        </section>

        <section className="relative pb-24 lg:pb-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl rounded-sm border border-white/10 bg-navy-800/50 p-8 text-center sm:p-10">
              <p className="text-base leading-relaxed text-white/60">
                This program is being prepared for launch. In the meantime,
                explore our free leadership resources or take the D1 assessment
                to start building stronger frontline leaders today.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/resources"
                  className="inline-flex items-center justify-center rounded-sm border border-gold-500/40 bg-gold-500/10 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-gold-400 transition-all hover:border-gold-500/60 hover:bg-gold-500/15 hover:text-gold-300"
                >
                  Browse Resources
                </Link>
                <Link
                  href="/assessment"
                  className="inline-flex items-center justify-center rounded-sm border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white/75 transition-all hover:border-gold-500/30 hover:text-gold-400"
                >
                  Free Assessment
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
