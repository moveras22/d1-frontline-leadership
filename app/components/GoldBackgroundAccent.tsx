type Particle = {
  top: string;
  left: string;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  mobile?: boolean;
};

const particles: Particle[] = [
  { top: "6%", left: "8%", size: 2, opacity: 0.22, duration: 32, delay: 0, mobile: true },
  { top: "12%", left: "22%", size: 3, opacity: 0.18, duration: 28, delay: 4, mobile: true },
  { top: "18%", left: "68%", size: 2, opacity: 0.25, duration: 36, delay: 2, mobile: true },
  { top: "24%", left: "84%", size: 2, opacity: 0.16, duration: 30, delay: 8, mobile: true },
  { top: "10%", left: "48%", size: 1, opacity: 0.2, duration: 34, delay: 6 },
  { top: "28%", left: "14%", size: 2, opacity: 0.14, duration: 38, delay: 10 },
  { top: "32%", left: "56%", size: 3, opacity: 0.12, duration: 26, delay: 3 },
  { top: "42%", left: "76%", size: 2, opacity: 0.15, duration: 33, delay: 12 },
  { top: "48%", left: "10%", size: 1, opacity: 0.13, duration: 29, delay: 5 },
  { top: "52%", left: "38%", size: 2, opacity: 0.11, duration: 35, delay: 14 },
  { top: "58%", left: "62%", size: 2, opacity: 0.14, duration: 31, delay: 7 },
  { top: "64%", left: "88%", size: 1, opacity: 0.1, duration: 27, delay: 9 },
  { top: "70%", left: "20%", size: 2, opacity: 0.12, duration: 36, delay: 11 },
  { top: "76%", left: "50%", size: 2, opacity: 0.1, duration: 30, delay: 4 },
  { top: "82%", left: "72%", size: 3, opacity: 0.11, duration: 34, delay: 16 },
  { top: "88%", left: "32%", size: 1, opacity: 0.09, duration: 28, delay: 8 },
];

export default function GoldBackgroundAccent() {
  return (
    <div
      aria-hidden="true"
      className="gold-bg-accent pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <div className="absolute -right-28 top-16 h-[26rem] w-[26rem] rounded-full bg-gold-500/[0.07] blur-3xl sm:-right-20 sm:top-20" />
      <div className="absolute -left-24 top-[48%] h-64 w-64 rounded-full bg-gold-400/[0.045] blur-3xl sm:top-[52%]" />

      {particles.map((particle, index) => (
        <span
          key={`${particle.top}-${particle.left}-${index}`}
          className={`gold-particle absolute rounded-full bg-gold-400 ${
            particle.mobile ? "" : "hidden sm:block"
          }`}
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
