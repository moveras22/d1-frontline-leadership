import Link from "next/link";
import type { FreeDownload } from "@/lib/resources/downloads";
import ArticleFeaturedImage from "./ArticleFeaturedImage";

type FreeDownloadCardProps = {
  download: FreeDownload;
};

export default function FreeDownloadCard({ download }: FreeDownloadCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-sm border border-white/8 bg-navy-800/50 transition-all hover:border-gold-500/30 hover:bg-navy-800/80">
      <ArticleFeaturedImage
        alt={download.featuredImageAlt}
        variant="card"
        src={download.featuredImage}
      />

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
          {download.category}
        </p>

        <h2 className="mt-3 font-display text-lg font-semibold leading-snug sm:text-xl">
          <Link
            href={download.href}
            className="transition-colors group-hover:text-gold-400"
          >
            {download.title}
          </Link>
        </h2>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55">
          {download.excerpt}
        </p>

        <div className="mt-5 flex items-center justify-between gap-4">
          <span className="text-xs text-white/40">Free PDF</span>

          <Link
            href={download.href}
            className="text-xs font-semibold uppercase tracking-wider text-gold-400 transition-colors group-hover:text-gold-300"
          >
            Download Template →
          </Link>
        </div>
      </div>
    </article>
  );
}
