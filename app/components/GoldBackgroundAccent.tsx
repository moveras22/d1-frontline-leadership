type Particle = {
  top: string;
  left: string;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  mobile?: boolean;
  soft?: boolean;
};

const particles: Particle[] = [
  { top: "5%", left: "6%", size: 3, opacity: 0.38, duration: 32, delay: 0, mobile: true, soft: true },
  { top: "11%", left: "20%", size: 2, opacity: 0.32, duration: 28, delay: 4, mobile: true },
  { top: "16%", left: "44%", size: 2, opacity: 0.28, duration: 34, delay: 6, mobile: true },
  { top: "20%", left: "72%", size: 3, opacity: 0.36, duration: 36, delay: 2, mobile: true, soft: true },
  { top: "26%", left: "88%", size: 2, opacity: 0.3, duration: 30, delay: 8, mobile: true },
  { top: "14%", left: "58%", size: 2, opacity: 0.26, duration: 31, delay: 3, mobile: true },
  { top: "34%", left: "12%", size: 2, opacity: 0.24, duration: 38, delay: 10 },
  { top: "38%", left: "52%", size: 3, opacity: 0.22, duration: 26, delay: 3, soft: true },
  { top: "44%", left: "78%", size: 2, opacity: 0.28, duration: 33, delay: 12 },
  { top: "50%", left: "8%", size: 2, opacity: 0.22, duration: 29, delay: 5 },
  { top: "54%", left: "36%", size: 2, opacity: 0.2, duration: 35, delay: 14 },
  { top: "58%", left: "64%", size: 3, opacity: 0.26, duration: 31, delay: 7, soft: true },
  { top: "62%", left: "90%", size: 2, opacity: 0.2, duration: 27, delay: 9 },
  { top: "68%", left: "18%", size: 2, opacity: 0.24, duration: 36, delay: 11 },
  { top: "72%", left: "48%", size: 2, opacity: 0.22, duration: 30, delay: 4 },
  { top: "78%", left: "70%", size: 3, opacity: 0.25, duration: 34, delay: 16, soft: true },
  { top: "84%", left: "28%", size: 2, opacity: 0.2, duration: 28, delay: 8 },
  { top: "90%", left: "56%", size: 2, opacity: 0.18, duration: 32, delay: 13 },
];

const glowSpots = [
  {
    className:
      "absolute -right-24 top-12 h-[28rem] w-[28rem] rounded-full bg-gold-500/[0.11] blur-3xl sm:-right-16 sm:top-16",
  },
  {
    className:
      "absolute -left-20 top-[8%] h-56 w-56 rounded-full bg-gold-400/[0.07] blur-3xl sm:h-72 sm:w-72",
  },
  {
    className:
      "absolute left-[38%] top-[36%] h-80 w-80 -translate-x-1/2 rounded-full bg-gold-500/[0.06] blur-3xl",
  },
  {
    className:
      "absolute -left-16 top-[58%] h-72 w-72 rounded-full bg-gold-400/[0.085] blur-3xl",
  },
  {
    className:
      "absolute -right-12 top-[78%] h-64 w-64 rounded-full bg-gold-500/[0.08] blur-3xl",
  },
];

export default function GoldBackgroundAccent() {
  return (
    <div
      aria-hidden="true"
      className="gold-bg-accent pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {glowSpots.map((spot) => (
        <div key={spot.className} className={spot.className} />
      ))}

      {particles.map((particle, index) => (
        <span
          key={`${particle.top}-${particle.left}-${index}`}
          className={`gold-particle absolute rounded-full bg-gold-400 ${
            particle.soft ? "gold-particle--soft" : ""
          } ${particle.mobile ? "" : "hidden sm:block"}`}
          style={{
            top: particle.top,
            left: particle.left,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
