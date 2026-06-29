import Link from "next/link";

export default function BackToHomeLink() {
  return (
    <Link
      href="/"
      aria-label="Go to homepage"
      className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-gold-400 transition-colors hover:text-gold-300"
    >
      <svg
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
        />
      </svg>
      Back to Home
    </Link>
  );
}
