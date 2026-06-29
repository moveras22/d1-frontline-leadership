"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  isDropdownActive,
  isNavActive,
  MAIN_NAV,
  type NavItem,
  type NavLink,
} from "@/lib/navigation";

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.25a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function DropdownPanel({
  items,
  onNavigate,
}: {
  items: NavLink[];
  onNavigate?: () => void;
}) {
  return (
    <div className="overflow-hidden rounded-sm border border-white/10 bg-navy-900 shadow-2xl shadow-black/40">
      <ul className="py-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              className="group/item block px-4 py-3 transition-colors hover:bg-gold-500/10"
            >
              <span className="block text-sm font-medium text-white/90 transition-colors group-hover/item:text-gold-400">
                {item.label}
              </span>
              {item.description && (
                <span className="mt-0.5 block text-xs leading-relaxed text-white/45 transition-colors group-hover/item:text-white/60">
                  {item.description}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DesktopNavItem({
  item,
  pathname,
}: {
  item: NavItem;
  pathname: string;
}) {
  if (item.type === "link") {
    const active = isNavActive(pathname, item.href);
    return (
      <Link
        href={item.href}
        className={`inline-flex items-center rounded-sm px-4 py-3 text-sm font-semibold uppercase tracking-wider transition-colors xl:px-5 xl:py-3.5 xl:text-[0.8125rem] ${
          active
            ? "bg-gold-500/10 text-gold-400"
            : "text-white/80 hover:bg-white/5 hover:text-gold-400"
        }`}
        aria-current={active ? "page" : undefined}
      >
        {item.label}
      </Link>
    );
  }

  const active = isDropdownActive(pathname, item.items);

  return (
    <div className="group relative">
      <button
        type="button"
        className={`inline-flex items-center gap-1.5 rounded-sm px-4 py-3 text-sm font-semibold uppercase tracking-wider transition-colors xl:gap-2 xl:px-5 xl:py-3.5 xl:text-[0.8125rem] ${
          active
            ? "bg-gold-500/10 text-gold-400"
            : "text-white/80 hover:bg-white/5 hover:text-gold-400"
        }`}
        aria-haspopup="true"
        aria-expanded="false"
      >
        {item.label}
        <ChevronDown className="h-4 w-4 shrink-0 opacity-70 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
      </button>

      <div className="pointer-events-none absolute left-1/2 top-full z-50 w-[min(100vw-2rem,22rem)] -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
        <DropdownPanel items={item.items} />
      </div>
    </div>
  );
}

function MobileNavSection({
  item,
  pathname,
  isOpen,
  onToggle,
  onNavigate,
}: {
  item: NavItem;
  pathname: string;
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  if (item.type === "link") {
    const active = isNavActive(pathname, item.href);
    return (
      <Link
        href={item.href}
        onClick={onNavigate}
        className={`block rounded-sm px-4 py-3 text-base font-semibold uppercase tracking-wider transition-colors ${
          active ? "bg-gold-500/10 text-gold-400" : "text-white/80 hover:text-gold-400"
        }`}
        aria-current={active ? "page" : undefined}
      >
        {item.label}
      </Link>
    );
  }

  const active = isDropdownActive(pathname, item.items);
  const panelId = `mobile-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className="overflow-hidden rounded-sm border border-white/8 bg-navy-800/40">
      <button
        type="button"
        id={`${panelId}-button`}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className={`flex w-full items-center justify-between px-4 py-3.5 text-left text-base font-semibold uppercase tracking-wider transition-colors ${
          active || isOpen ? "text-gold-400" : "text-white/80 hover:text-gold-400"
        }`}
      >
        {item.label}
        <ChevronDown
          className={`h-5 w-5 shrink-0 opacity-70 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div id={panelId} role="region" aria-labelledby={`${panelId}-button`}>
          <DropdownPanel items={item.items} onNavigate={onNavigate} />
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(
    null,
  );
  const headerRef = useRef<HTMLElement>(null);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setOpenMobileSection(null);
  }, []);

  useEffect(() => {
    closeMobile();
  }, [pathname, closeMobile]);

  useEffect(() => {
    if (!mobileOpen) return;

    function handleClickOutside(event: MouseEvent) {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        closeMobile();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen, closeMobile]);

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-navy-950/90 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-[90rem] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8 lg:py-4">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-3"
          onClick={closeMobile}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-gold-500/40 bg-navy-800 font-display text-sm font-bold tracking-wider text-gold-400 transition-colors group-hover:border-gold-500/60">
            D1
          </span>
          <span className="hidden text-sm font-medium tracking-wide text-white/90 sm:block">
            Frontline Leadership
          </span>
        </Link>

        <nav
          className="hidden flex-1 items-center justify-center gap-0.5 lg:flex xl:gap-1"
          aria-label="Main"
        >
          {MAIN_NAV.map((item) => (
            <DesktopNavItem key={item.label} item={item} pathname={pathname} />
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          className="flex flex-col gap-1.5 p-1 lg:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {mobileOpen && (
        <nav
          className="border-t border-white/5 bg-navy-900 px-4 py-4 lg:hidden"
          aria-label="Main mobile"
        >
          <div className="flex flex-col gap-3">
            {MAIN_NAV.map((item) => (
              <MobileNavSection
                key={item.label}
                item={item}
                pathname={pathname}
                isOpen={openMobileSection === item.label}
                onToggle={() =>
                  setOpenMobileSection((current) =>
                    current === item.label ? null : item.label,
                  )
                }
                onNavigate={closeMobile}
              />
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
