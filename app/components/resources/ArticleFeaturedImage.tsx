import Image from "next/image";

type ArticleFeaturedImageProps = {
  alt: string;
  priority?: boolean;
  variant: "card" | "hero";
  src: string;
};

export default function ArticleFeaturedImage({
  alt,
  priority = false,
  variant,
  src,
}: ArticleFeaturedImageProps) {
  const isHero = variant === "hero";
  const containerClass = isHero
    ? "aspect-[21/9] rounded-sm"
    : "h-[200px] md:h-[220px] lg:h-[260px] rounded-none";

  return (
    <div className={`relative w-full overflow-hidden ${containerClass}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
        sizes={
          isHero
            ? "(max-width: 768px) 100vw, 768px"
            : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        }
        priority={isHero || priority}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/20 to-navy-950/30" />
      <div className="absolute inset-0 bg-navy-950/15 mix-blend-multiply" />
    </div>
  );
}
