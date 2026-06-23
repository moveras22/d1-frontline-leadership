"use client";

import { useState } from "react";

const navLinks = [
  { label: "The Problem", href: "#problem" },
  { label: "D1 Framework", href: "#framework" },
  { label: "Workshop", href: "#workshop" },
  { label: "About", href: "#about" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-navy-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-gold-500/40 bg-navy-800 font-display text-sm font-bold tracking-wider text-gold-400">
            D1
          </span>
          <span className="hidden text-sm font-medium tracking-wide text-white/90 sm:block">
            Frontline Leadership
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 transition-colors hover:text-gold-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#early-access"
            data-track="header_early_access"
            className="rounded-sm bg-gold-500 px-5 py-2.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-400"
          >
            Early Access
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/5 bg-navy-900 px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base text-white/80"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#early-access"
              data-track="header_early_access_mobile"
              className="mt-2 rounded-sm bg-gold-500 px-5 py-3 text-center text-sm font-semibold text-navy-950"
              onClick={() => setOpen(false)}
            >
              Early Access
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
