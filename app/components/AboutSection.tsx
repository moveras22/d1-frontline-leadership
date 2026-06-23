import Image from "next/image";

const credibilityMetrics = [
  { highlight: "20+", text: "Years in Manufacturing" },
  { text: "Plant Leadership Experience" },
  { text: "Operations, Quality & Continuous Improvement" },
  { highlight: "Hundreds", text: "of Frontline Employees Led" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-lg">
            <div className="relative aspect-square overflow-hidden rounded-full border-2 border-gold-500/30 shadow-2xl shadow-black/50">
              <Image
                src="/images/founder.png"
                alt="Founder of D1 Frontline Leadership, manufacturing Plant Manager"
                fill
                sizes="(max-width: 1024px) 90vw, 512px"
                quality={95}
                priority
                className="object-cover object-[center_20%] scale-[1.08]"
              />
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {credibilityMetrics.map((metric) => (
                <div
                  key={metric.text}
                  className="rounded-sm border border-white/8 bg-navy-800/40 px-4 py-4"
                >
                  <p className="text-sm leading-snug text-white/80">
                    {metric.highlight && (
                      <span className="font-display font-bold text-gold-400">
                        {metric.highlight}{" "}
                      </span>
                    )}
                    {metric.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
              About the Founder
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
              Built by a Plant Manager,{" "}
              <span className="gold-gradient-text">For Plant Managers</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/65">
              D1 Frontline Leadership was created by a manufacturing Plant
              Manager with hands-on experience leading complex operations and
              developing frontline leaders on the shop floor—not from a
              classroom.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-white/65">
              After watching talented employees struggle in supervisory roles
              and seeing promotion decisions made on gut feel alone, the D1
              Framework was built to give leaders a practical, repeatable system
              for identifying and coaching high-performance frontline talent.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {[
                {
                  label: "Operations Leadership",
                  detail: "Plant-level accountability",
                },
                {
                  label: "Frontline Development",
                  detail: "Supervisor coaching systems",
                },
                {
                  label: "Manufacturing Focus",
                  detail: "Built for the shop floor",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border-l-2 border-gold-500/40 pl-4"
                >
                  <p className="text-sm font-semibold text-white/90">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xs text-white/45">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
