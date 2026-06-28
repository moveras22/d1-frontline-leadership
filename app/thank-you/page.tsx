import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "You're All Set | D1 Frontline Leadership",
  description:
    "Your free D1 Leadership Framework has been sent to your inbox. Check your email for the download link.",
};

const checklistItems = [
  "Check your inbox",
  "Check Promotions or Spam",
  "Add info@d1frontlineleadership.com to your contacts",
];

const whileYoureHereCards = [
  {
    title: "Read the latest leadership articles",
    description:
      "Explore practical insights on identifying, hiring, and developing frontline leaders.",
    href: "/pillars/discipline",
  },
  {
    title: "Explore the D1 Leadership Pillars",
    description:
      "Learn the six traits that define elite frontline leadership on the plant floor.",
    href: "/#framework",
  },
  {
    title: "Watch for future D1 tools and assessments",
    description:
      "New resources are on the way to help you evaluate and coach your team.",
    href: "/#early-access",
  },
];

export default function ThankYouPage() {
  return (
    <>
      <Script id="google-ads-conversion" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {
            'send_to': 'AW-18281766130/qKO6CL3li8ccEPK5tolE',
            'value': 1.0,
            'currency': 'USD'
          });
        `}
      </Script>
      <main>
        <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-20">
          <div className="industrial-grid absolute inset-0 opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/95 to-navy-900" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-gold-500/25 bg-gold-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                Download Confirmed
              </p>
              <h1 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl">
                You&apos;re All Set.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/65 lg:text-xl">
                Your free D1 Leadership Framework has been sent to your inbox.
              </p>
            </div>
          </div>
        </section>

        <section className="relative pb-12 lg:pb-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl rounded-sm border border-white/10 bg-navy-800/50 p-8 sm:p-10">
              <p className="text-base leading-relaxed text-white/65 sm:text-lg">
                Check your email for the download link. If you don&apos;t see it
                within a few minutes, check your Promotions or Spam folder.
              </p>
              <ul className="mt-8 space-y-4">
                {checklistItems.map((item) => (
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
                      {item.includes("info@d1frontlineleadership.com") ? (
                        <>
                          Add{" "}
                          <a
                            href="mailto:info@d1frontlineleadership.com"
                            className="font-medium text-gold-400 transition-colors hover:text-gold-300"
                          >
                            info@d1frontlineleadership.com
                          </a>{" "}
                          to your contacts
                        </>
                      ) : (
                        item
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="relative pb-16 lg:pb-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
                  Next Steps
                </p>
                <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
                  While You&apos;re Here
                </h2>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                {whileYoureHereCards.map((card) => (
                  <Link
                    key={card.title}
                    href={card.href}
                    className="group relative overflow-hidden rounded-sm border border-white/8 bg-navy-800/50 p-6 transition-all hover:border-gold-500/30 hover:bg-navy-800/80 sm:p-8"
                  >
                    <span className="absolute -right-2 -top-4 font-display text-7xl font-bold text-gold-500/5 transition-colors group-hover:text-gold-500/10">
                      D1
                    </span>
                    <h3 className="relative font-display text-lg font-semibold leading-snug sm:text-xl">
                      {card.title}
                    </h3>
                    <p className="relative mt-3 text-sm leading-relaxed text-white/55">
                      {card.description}
                    </p>
                    <p className="relative mt-5 text-xs font-semibold uppercase tracking-wider text-gold-400 transition-colors group-hover:text-gold-300">
                      Learn more →
                    </p>
                  </Link>
                ))}
              </div>

              <div className="mt-12 text-center sm:mt-16">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-sm bg-gold-500 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-navy-950 transition-all hover:bg-gold-400 hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]"
                >
                  Back to Home
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
