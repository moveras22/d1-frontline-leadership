import Image from "next/image";
import {
  getArticleImageTheme,
  type ArticleImageIcon,
} from "@/lib/articles/image-themes";

type ArticleFeaturedImageProps = {
  slug: string;
  alt: string;
  variant: "card" | "hero";
  src?: string;
};

function ArticleImageIconGraphic({
  icon,
  className,
}: {
  icon: ArticleImageIcon;
  className?: string;
}) {
  const shared = {
    className,
    fill: "none",
    viewBox: "0 0 64 64",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (icon) {
    case "leadership-potential":
      return (
        <svg {...shared}>
          <circle cx="32" cy="18" r="8" />
          <path d="M16 52c0-8.837 7.163-16 16-16s16 7.163 16 16" />
          <path d="M32 26v6" />
          <path d="M38 42l6-6" />
          <path d="M44 36l4 4" strokeWidth={2} />
        </svg>
      );
    case "interview-guide":
      return (
        <svg {...shared}>
          <rect x="14" y="10" width="36" height="44" rx="2" />
          <path d="M22 22h20M22 30h20M22 38h14" />
          <circle cx="46" cy="46" r="10" strokeWidth={1.5} />
          <path d="M43 46h6M46 43v6" strokeWidth={2} />
        </svg>
      );
    case "technician-supervisor":
      return (
        <svg {...shared}>
          <path d="M12 28l20-12 20 12v24H12V28z" />
          <path d="M24 52V36h16v16" />
          <circle cx="32" cy="22" r="4" />
          <path d="M8 52h48" strokeWidth={2} />
          <path d="M48 18l8-4M48 22l8 2" strokeWidth={1.25} />
        </svg>
      );
    case "accountability":
      return (
        <svg {...shared}>
          <path d="M32 8l24 12v16c0 14-10.5 24-24 28C22.5 60 12 50 12 36V20l20-12z" />
          <path d="M24 32l6 6 12-12" strokeWidth={2} />
        </svg>
      );
    case "d1-framework":
      return (
        <svg {...shared}>
          <rect x="8" y="8" width="20" height="20" rx="1" />
          <rect x="36" y="8" width="20" height="20" rx="1" />
          <rect x="8" y="36" width="20" height="20" rx="1" />
          <rect x="36" y="36" width="20" height="20" rx="1" />
          <path d="M18 28v8M28 18h8M46 28v8M28 46h8" strokeWidth={1.25} />
          <circle cx="32" cy="32" r="6" strokeWidth={2} />
        </svg>
      );
    case "manufacturing-floor":
      return (
        <svg {...shared}>
          <path d="M8 48h48" strokeWidth={2} />
          <path d="M14 48V28l8-8h8v28M30 48V20h8l6 8v20" />
          <path d="M12 20h6v8h-6zM46 16h6v12h-6z" />
          <circle cx="22" cy="36" r="3" />
          <circle cx="38" cy="32" r="3" />
        </svg>
      );
  }
}

export default function ArticleFeaturedImage({
  slug,
  alt,
  variant,
  src,
}: ArticleFeaturedImageProps) {
  const theme = getArticleImageTheme(slug);
  const isHero = variant === "hero";

  const aspectClass = isHero ? "aspect-[21/9]" : "aspect-[16/9]";
  const wrapperSizeClass = isHero
    ? "h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28"
    : "h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]";
  const iconSizeClass = isHero
    ? "h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14"
    : "h-8 w-8 sm:h-9 sm:w-9";
  const roundedClass = isHero ? "rounded-sm" : "rounded-none";

  if (src) {
    return (
      <div
        className={`relative w-full overflow-hidden ${aspectClass} ${roundedClass}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes={
            isHero
              ? "(max-width: 768px) 100vw, 768px"
              : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          }
        />
      </div>
    );
  }

  return (
    <div
      className={`relative w-full overflow-hidden ${aspectClass} ${roundedClass}`}
      role="img"
      aria-label={alt}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${theme.gradientFrom} 0%, ${theme.gradientVia} 50%, ${theme.gradientTo} 100%)`,
        }}
      />

      <div className="industrial-grid absolute inset-0 opacity-50" />

      <div
        className="absolute -right-8 -top-8 h-32 w-32 rounded-full blur-2xl sm:h-40 sm:w-40"
        style={{ backgroundColor: theme.glowColor }}
      />
      <div
        className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full blur-2xl sm:h-32 sm:w-32"
        style={{ backgroundColor: theme.glowColor, opacity: 0.6 }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-navy-950/20" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`flex items-center justify-center rounded-full border border-gold-500/25 bg-navy-950/40 text-gold-400/80 shadow-[0_0_40px_rgba(212,175,55,0.08)] backdrop-blur-sm ${wrapperSizeClass}`}
        >
          <ArticleImageIconGraphic
            icon={theme.icon}
            className={`${iconSizeClass} text-gold-400/90`}
          />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
    </div>
  );
}
