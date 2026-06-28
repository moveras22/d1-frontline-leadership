"use client";

import { useState } from "react";

type ArticleShareButtonsProps = {
  title: string;
  url: string;
};

export default function ArticleShareButtons({
  title,
  url,
}: ArticleShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  const shareLinks = [
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      label: "X",
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    },
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
  ];

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
        Share
      </span>

      {shareLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-sm border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/70 transition-all hover:border-gold-500/30 hover:text-gold-400"
        >
          {link.label}
        </a>
      ))}

      <button
        type="button"
        onClick={copyLink}
        className="rounded-sm border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/70 transition-all hover:border-gold-500/30 hover:text-gold-400"
      >
        {copied ? "Copied!" : "Copy Link"}
      </button>
    </div>
  );
}
