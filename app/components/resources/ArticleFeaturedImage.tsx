import Image from "next/image";

type ArticleFeaturedImageProps = {
  alt: string;
  variant: "card" | "hero";
  src: string;
};

export default function ArticleFeaturedImage({
  alt,
  variant,
  src,
}: ArticleFeaturedImageProps) {
  const isHero = variant === "hero";
  const aspectClass = isHero ? "aspect-[21/9]" : "aspect-[16/9]";
  const roundedClass = isHero ? "rounded-sm" : "rounded-none";

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
        priority={isHero}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/20 to-navy-950/30" />
      <div className="absolute inset-0 bg-navy-950/15 mix-blend-multiply" />
    </div>
  );
}
