import { useEffect, useRef, useState } from "react";

import logo from "@/assets/images/logo/logo.png";
import { cn } from "@/lib/utils";

const ICONS = {
  menu: "/assets/nav-menu.svg",
  search: "/assets/nav-search.svg",
  currency: "/assets/nav-currency.svg",
  chevron: "/assets/nav-chevron.svg",
  cart: "/assets/nav-cart.svg",
};

const REGION_OPTIONS = ["usd", "euro", "cad", "jpy", "inr", "cny"] as const;

const Navbar = () => {
  const [regionOpen, setRegionOpen] = useState(false);
  const [activeRegion, setActiveRegion] = useState<(typeof REGION_OPTIONS)[number]>(
    "usd"
  );
  const regionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (regionRef.current && !regionRef.current.contains(event.target as Node)) {
        setRegionOpen(false);
      }
    };

    if (regionOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [regionOpen]);

  return (
    <header className="relative z-40 w-full text-surface">
      <div className="pointer-events-none absolute inset-0 bg-navhero" aria-hidden="true" />

      <nav className="relative mx-auto flex w-full max-w-[1440px] flex-wrap items-center gap-4 px-4 py-6 sm:px-6 lg:flex-nowrap lg:gap-6 lg:px-[52px] lg:py-[28px]">
        <a href="/" className="flex items-center" aria-label="Vanguard Boost home">
          <img
            src={logo}
            alt="Vanguard Boost logo"
            className="h-[41px] w-auto"
            loading="lazy"
          />
        </a>

        <button
          type="button"
          className="flex items-center gap-[10px] rounded-nav-8 border border-[var(--nav-border-surface-20)] bg-[var(--nav-accent-solid)] px-[14px] py-[10px] font-nav-rajdhani text-[14px] font-bold uppercase leading-[17px] tracking-nav-catalog text-ink backdrop-blur-nav transition-colors duration-200 hover:border-[var(--nav-border-surface-32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--nav-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent md:ml-8"
          aria-label="Open catalog"
        >
          <span>catalog</span>
          <img
            src={ICONS.menu}
            alt=""
            aria-hidden="true"
            className="h-[15px] w-[15px]"
          />
        </button>

        <div className="ml-auto flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-end sm:gap-4 md:flex-1 lg:ml-0 lg:w-auto lg:flex-none lg:gap-6">
          <form role="search" className="w-full sm:w-auto">
            <label className="group flex h-[48px] w-full max-w-full items-center gap-[16px] rounded-nav-50 border border-[var(--nav-border-surface-20)] bg-[var(--nav-surface-05)] px-[20px] backdrop-blur-nav transition-[border-color,background-color] duration-200 hover:border-[var(--nav-border-surface-28)] hover:bg-[var(--nav-surface-08)] focus-within:border-[var(--nav-border-surface-40)] focus-within:bg-[var(--nav-surface-12)] focus-within:outline-none focus-within:ring-2 focus-within:ring-[color:var(--nav-ring)] sm:max-w-[351px]">
              <span className="sr-only">Search the catalog</span>
              <input
                type="search"
                name="nav-search"
                placeholder="Search"
                className="flex-1 bg-transparent font-nav-rajdhani text-[18px] font-normal uppercase text-surface placeholder:text-white/50 focus:outline-none"
              />
              <img
                src={ICONS.search}
                alt=""
                aria-hidden="true"
                className="ml-auto h-6 w-6 opacity-80 transition-opacity duration-200 group-hover:opacity-100"
              />
            </label>
          </form>

          <div
            ref={regionRef}
            className="relative hidden lg:flex"
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setRegionOpen(false);
              }
            }}
          >
            <button
              type="button"
              onClick={() => setRegionOpen((open) => !open)}
              className="flex h-12 items-center gap-[6px] rounded-nav-100 border border-[var(--nav-border-accent-40)] bg-[var(--nav-accent-05)] px-[18px] font-nav-rajdhani text-[18px] font-normal uppercase text-[color:var(--color-accent-lime)] backdrop-blur-nav-strong transition-[border-color,background-color,color] duration-200 hover:border-[var(--nav-border-accent-55)] hover:bg-[var(--nav-accent-08)] focus-visible:border-[var(--nav-border-accent-60)] focus-visible:bg-[var(--nav-accent-10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--nav-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              aria-haspopup="true"
              aria-expanded={regionOpen}
            >
              <img src={ICONS.currency} alt="" aria-hidden="true" className="h-6 w-6" />
              <span>{activeRegion.toUpperCase()}</span>
              <img
                src={ICONS.chevron}
                alt=""
                aria-hidden="true"
                className={cn("h-6 w-6 transition-transform duration-200", regionOpen && "rotate-180")}
              />
            </button>

            {regionOpen && (
              <div
                className="absolute right-0 top-[calc(100%+12px)] min-w-[160px] rounded-2xl border border-[var(--nav-border-accent-40)] bg-[var(--nav-accent-05)] p-3 text-left shadow-lg backdrop-blur-nav-strong"
                role="menu"
                aria-label="Select region"
              >
                <p className="mb-3 px-1 font-nav-rajdhani text-xs font-bold uppercase tracking-[0.12em] text-[color:var(--color-accent-lime)] opacity-70">
                  States
                </p>
                <ul className="flex flex-col gap-2">
                  {REGION_OPTIONS.map((region) => (
                    <li key={region}>
                      <button
                        type="button"
                        onClick={() => {
                          setActiveRegion(region);
                          setRegionOpen(false);
                        }}
                        className={cn(
                          "flex w-full items-center gap-2 rounded-lg px-3 py-2 font-nav-rajdhani text-[16px] uppercase transition-colors duration-200",
                          region === activeRegion
                            ? "text-[color:var(--color-accent-lime)]"
                            : "text-[color:var(--color-accent-lime)]/60 hover:text-[color:var(--color-accent-lime)]"
                        )}
                        role="menuitemradio"
                        aria-checked={region === activeRegion}
                      >
                        {region.toUpperCase()}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <button
            type="button"
            className="flex h-12 items-center justify-center rounded-nav-31 border border-transparent bg-[var(--nav-accent-15)] px-[20px] font-nav-rajdhani text-[16px] font-bold uppercase tracking-nav-sign-in text-surface backdrop-blur-nav transition-[background-color,color] duration-200 hover:bg-[var(--nav-accent-24)] hover:text-ink focus-visible:bg-[var(--nav-accent-24)] focus-visible:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--nav-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          >
            sign in
          </button>

          <button
            type="button"
            aria-label="View cart"
            className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-transparent bg-[var(--nav-accent-15)] backdrop-blur-nav transition-[background-color] duration-200 hover:bg-[var(--nav-accent-24)] focus-visible:bg-[var(--nav-accent-24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--nav-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          >
            <img src={ICONS.cart} alt="" aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
