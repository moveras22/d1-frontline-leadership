import type { FreeDownload } from "@/lib/resources/downloads";
import FreeDownloadCard from "./FreeDownloadCard";

type FreeDownloadsSectionProps = {
  downloads: FreeDownload[];
};

export default function FreeDownloadsSection({
  downloads,
}: FreeDownloadsSectionProps) {
  if (downloads.length === 0) return null;

  return (
    <section aria-labelledby="free-downloads-heading" className="mb-16 lg:mb-20">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
        Free Tools
      </p>
      <h2
        id="free-downloads-heading"
        className="mt-3 font-display text-2xl font-bold sm:text-3xl"
      >
        Downloads for Frontline Leaders
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
        Practical templates and tools to help supervisors lead more effectively
        on the plant floor.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {downloads.map((download) => (
          <FreeDownloadCard key={download.slug} download={download} />
        ))}
      </div>
    </section>
  );
}
