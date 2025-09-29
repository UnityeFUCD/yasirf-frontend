import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

import logo from "@/assets/images/logo/logo.png";
import { ScrollArea } from "@/components/ui/scroll-area";
import { currencyData, navbarData } from "@/lib/StaticData";
import { cn } from "@/lib/utils";
import { FiMinus, FiPlus, FiTrash2, FiX } from "react-icons/fi";

type CurrencyOption = {
  currency: string;
  country: string;
  flag: string;
};

type CartItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
};

const ICONS = {
  menu: "/assets/nav-menu.svg",
  search: "/assets/nav-search.svg",
  currency: "/assets/nav-currency.svg",
  chevron: "/assets/nav-chevron.svg",
  cart: "/assets/nav-cart.svg",
};

const currencyOptions: CurrencyOption[] = (currencyData ?? []) as CurrencyOption[];

const fallbackCurrency: CurrencyOption =
  currencyOptions[0] ?? {
    currency: "USD",
    country: "United States",
    flag: "https://flagcdn.com/w320/us.png",
  };

const catalogMenu = ((navbarData as {
  catalogMenu?: {
    chooseGame?: string[];
    categories?: Record<string, string[]>;
  };
})?.catalogMenu) ?? {
  chooseGame: [],
  categories: {},
};

const catalogGames: string[] = catalogMenu.chooseGame ?? [];
const catalogCategories: Record<string, string[]> = catalogMenu.categories ?? {};

const defaultGame = catalogGames[0] ?? "";

const initialCartItems: CartItem[] = [
  {
    id: "nerubian-conqueror",
    name: "Nerubian Conqueror Bundle",
    description: "Trials of Osiris • PvE raid boost",
    price: 20.99,
    quantity: 1,
  },
  {
    id: "season-pass",
    name: "Season Pass Progression",
    description: "Daily bounties • Reputation farm",
    price: 14.49,
    quantity: 2,
  },
];

const SERVICE_FEE = 1;
const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

const Navbar = () => {
  const [regionOpen, setRegionOpen] = useState<boolean>(false);
  const [activeCurrency, setActiveCurrency] = useState<CurrencyOption>(fallbackCurrency);
  const [catalogOpen, setCatalogOpen] = useState<boolean>(false);
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [promoCode, setPromoCode] = useState<string>("");
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  const [activeGame, setActiveGame] = useState<string>(defaultGame);
  const [hasMounted, setHasMounted] = useState<boolean>(false);

  const regionContainerRef = useRef<HTMLDivElement | null>(null);
  const currencyTriggerRef = useRef<HTMLButtonElement | null>(null);
  const catalogTriggerRef = useRef<HTMLButtonElement | null>(null);
  const catalogPanelRef = useRef<HTMLDivElement | null>(null);
  const cartPanelRef = useRef<HTMLDivElement | null>(null);
  const cartTriggerRef = useRef<HTMLButtonElement | null>(null);
  const previouslyFocusedCart = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    // OG: ensure sticky behaviour is applied once React mounts the navbar
    if (!hasMounted) {
      return;
    }

    if (typeof window === "undefined") {
      return;
    }

    const navbar = document.querySelector(
      "#header, header, nav, .navbar, .site-header"
    ) as HTMLElement | null;

    if (!navbar) {
      return;
    }

    navbar.classList.add("og-navbar");

    let spacer = navbar.nextElementSibling as HTMLElement | null;

    if (!spacer || spacer.getAttribute("aria-hidden") !== "true") {
      spacer = document.createElement("div");
      spacer.style.width = "100%";
      spacer.style.height = "0px";
      spacer.style.pointerEvents = "none";
      spacer.setAttribute("aria-hidden", "true");
      navbar.after(spacer);
    }

    let sentinel = navbar.previousElementSibling as HTMLElement | null;

    const isExistingSentinel =
      !!sentinel &&
      sentinel instanceof HTMLElement &&
      sentinel.style.position === "absolute" &&
      sentinel.style.width === "1px" &&
      sentinel.style.height === "1px";

    if (isExistingSentinel) {
      sentinel!.dataset.ogSticky = "sentinel";
    } else {
      sentinel = document.createElement("div");
      sentinel.dataset.ogSticky = "sentinel";
      sentinel.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;";
      navbar.parentNode?.insertBefore(sentinel, navbar);
    }

    const stick = () => {
      if (!navbar.classList.contains("is-sticky")) {
        navbar.classList.add("is-sticky");
        spacer!.style.height = `${navbar.offsetHeight}px`;
      }
    };

    const unstick = () => {
      if (navbar.classList.contains("is-sticky")) {
        navbar.classList.remove("is-sticky");
        spacer!.style.height = "0px";
      }
    };

    let observer: IntersectionObserver | null = null;
    let resizeObserver: ResizeObserver | null = null;
    let onScroll: (() => void) | null = null;
    let onResize: (() => void) | null = null;

    if ("IntersectionObserver" in window && sentinel) {
      observer = new IntersectionObserver((entries) => {
        if (!entries.length) {
          return;
        }

        if (entries[0]?.isIntersecting) {
          unstick();
        } else {
          stick();
        }
      });
      observer.observe(sentinel);
    } else {
      onScroll = () => {
        const y = window.pageYOffset || document.documentElement.scrollTop || 0;
        if (y > 0) {
          stick();
        } else {
          unstick();
        }
      };

      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }

    if ("ResizeObserver" in window) {
      resizeObserver = new ResizeObserver(() => {
        if (navbar.classList.contains("is-sticky")) {
          spacer!.style.height = `${navbar.offsetHeight}px`;
        }
      });
      resizeObserver.observe(navbar);
    } else {
      onResize = () => {
        if (navbar.classList.contains("is-sticky")) {
          spacer!.style.height = `${navbar.offsetHeight}px`;
        }
      };
      window.addEventListener("resize", onResize);
    }

    return () => {
      observer?.disconnect();
      resizeObserver?.disconnect();
      if (onScroll) {
        window.removeEventListener("scroll", onScroll);
      }
      if (onResize) {
        window.removeEventListener("resize", onResize);
      }
    };
  }, [hasMounted]);

  const closeRegion = useCallback(() => {
    setRegionOpen(false);
    if (typeof window !== "undefined") {
      window.requestAnimationFrame(() => {
        currencyTriggerRef.current?.focus();
      });
    }
  }, []);

  const closeCatalog = useCallback(() => {
    setCatalogOpen(false);
    if (typeof window !== "undefined") {
      window.requestAnimationFrame(() => {
        catalogTriggerRef.current?.focus();
      });
    }
  }, []);

  const openCart = useCallback(() => {
    setCartOpen(true);
  }, []);

  const closeCart = useCallback(() => {
    setCartOpen(false);
  }, []);

  useEffect(() => {
    if (!regionOpen && !catalogOpen) {
      return;
    }

    const handlePointer = (event: MouseEvent) => {
      const target = event.target as Node;

      if (regionOpen && regionContainerRef.current && !regionContainerRef.current.contains(target)) {
        closeRegion();
      }

      if (
        catalogOpen &&
        catalogPanelRef.current &&
        catalogTriggerRef.current &&
        !catalogPanelRef.current.contains(target) &&
        !catalogTriggerRef.current.contains(target)
      ) {
        closeCatalog();
      }
    };

    document.addEventListener("mousedown", handlePointer);

    return () => {
      document.removeEventListener("mousedown", handlePointer);
    };
  }, [regionOpen, catalogOpen, closeRegion, closeCatalog]);

  useEffect(() => {
    if (!regionOpen && !catalogOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }

      if (catalogOpen) {
        closeCatalog();
      }

      if (regionOpen) {
        closeRegion();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [regionOpen, catalogOpen, closeCatalog, closeRegion]);

  useEffect(() => {
    if (!cartOpen) {
      return;
    }

    if (typeof document === "undefined") {
      return;
    }

    // OG: trap focus inside the cart drawer while it is visible
    previouslyFocusedCart.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!cartPanelRef.current) {
        return;
      }

      if (event.key === "Escape") {
        event.preventDefault();
        closeCart();
        return;
      }

      if (event.key === "Tab") {
        const focusable = cartPanelRef.current.querySelectorAll<HTMLElement>(
          FOCUSABLE_SELECTOR
        );

        if (focusable.length === 0) {
          return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const isShift = event.shiftKey;
        const activeElement = document.activeElement;

        if (!isShift && activeElement === last) {
          event.preventDefault();
          first.focus();
        } else if (isShift && activeElement === first) {
          event.preventDefault();
          last.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const frame = window.requestAnimationFrame(() => {
      if (!cartPanelRef.current) {
        return;
      }

      const focusable = cartPanelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);

      if (focusable.length > 0) {
        focusable[0].focus();
      } else {
        cartPanelRef.current.focus();
      }
    });

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
      previouslyFocusedCart.current?.focus();
    };
  }, [cartOpen, closeCart]);

  const subtotal = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cartItems]);

  const total = useMemo(() => {
    if (cartItems.length === 0) {
      return 0;
    }

    return subtotal + SERVICE_FEE;
  }, [cartItems.length, subtotal]);

  const totalItems = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  const formatPrice = useCallback(
    (value: number) => {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
      }).format(value);
    },
    []
  );

  const handleQuantityChange = useCallback((id: string, delta: number) => {
    setCartItems((items) =>
      items
        .map((item) => {
          if (item.id !== id) {
            return item;
          }

          const nextQuantity = Math.max(0, item.quantity + delta);

          return {
            ...item,
            quantity: nextQuantity,
          };
        })
        .filter((item) => item.quantity > 0)
    );
  }, []);

  const handleRemoveItem = useCallback((id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  }, []);

  const handleClearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const handleCurrencySelect = useCallback(
    (option: CurrencyOption) => {
      setActiveCurrency(option);
      closeRegion();
    },
    [closeRegion]
  );

  const handleCatalogToggle = useCallback(() => {
    setCatalogOpen((prev) => {
      if (prev && typeof window !== "undefined") {
        window.requestAnimationFrame(() => {
          catalogTriggerRef.current?.focus();
        });
      }

      return !prev;
    });
  }, []);

  return (
    <header id="header" className="relative z-40 w-full text-surface">
      <div className="pointer-events-none absolute inset-0 bg-navhero" aria-hidden="true" />

      <nav className="relative mx-auto w-full max-w-[1440px] px-4 py-6 sm:px-6 lg:px-[52px] lg:py-[28px]">
        <div className="relative grid w-full gap-4 lg:grid-cols-[auto,1fr,auto] lg:items-center">
          <div className="flex items-center gap-[18px]">
            <a href="/" className="flex items-center" aria-label="Vanguard Boost home">
              <img
                src={logo}
                alt="Vanguard Boost logo"
                className="h-[41px] w-auto"
                loading="lazy"
              />
            </a>
          </div>

          <div className="flex w-full flex-1 flex-col gap-4 sm:flex-row sm:items-center sm:gap-5 lg:flex-row lg:items-center">
            <div className="relative w-full lg:w-auto" ref={catalogPanelRef}>
              <button
                type="button"
                onClick={handleCatalogToggle}
                ref={catalogTriggerRef}
                className="flex h-[48px] w-full items-center gap-[10px] rounded-[8px] border border-[color:var(--nav-border-surface-20)] bg-[color:var(--nav-accent-solid)] px-[14px] font-nav-rajdhani text-[14px] font-bold uppercase tracking-[0.15em] text-ink backdrop-blur-[10px] transition hover:border-[color:var(--nav-border-surface-32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--nav-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent lg:w-auto"
                aria-expanded={catalogOpen}
                aria-controls="catalog-mega-menu"
              >
                <span>catalog</span>
                <img src={ICONS.menu} alt="" aria-hidden="true" className="h-[15px] w-[15px]" />
              </button>

              {catalogOpen && (
                <div
                  id="catalog-mega-menu"
                  role="dialog"
                  aria-label="Catalog menu"
                  className="absolute left-0 right-0 top-[calc(100%+20px)] z-50"
                >
                  <div className="mx-auto max-w-[1240px] rounded-3xl border border-white/20 bg-[rgba(5,9,29,0.92)] p-6 text-left text-white shadow-[0px_24px_56px_-24px_rgba(5,9,29,0.6)] backdrop-blur-[40px]">
                    <div className="grid gap-6 lg:grid-cols-[260px,1fr]">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="font-nav-rajdhani text-xs font-bold uppercase tracking-[0.12em] text-[color:var(--color-accent-lime)]/80">
                          Choose game
                        </p>
                        <ul className="mt-4 flex flex-col gap-2">
                          {catalogGames.map((game) => (
                            <li key={game}>
                              <button
                                type="button"
                                onClick={() => setActiveGame(game)}
                                className={cn(
                                  "flex w-full items-center justify-between rounded-lg px-3 py-2 text-left font-nav-rajdhani text-sm uppercase tracking-[0.08em] transition",
                                  activeGame === game
                                    ? "bg-[color:var(--nav-accent-12)] text-white"
                                    : "text-white/60 hover:text-white"
                                )}
                              >
                                <span>{game}</span>
                                {activeGame === game && (
                                  <span className="text-xs font-semibold text-[color:var(--color-accent-lime)]">active</span>
                                )}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                        {((activeGame === defaultGame || !activeGame) &&
                          Object.keys(catalogCategories).length > 0) ? (
                          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                            {Object.entries(catalogCategories).map(([key, values]) => (
                              <div key={key} className="space-y-3">
                                <p className="font-nav-rajdhani text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--color-accent-lime)]/70">
                                  {key.replaceAll("_", " ")}
                                </p>
                                <ul className="space-y-2">
                                  {values.map((value) => (
                                    <li key={value}>
                                      <a
                                        href="#"
                                        className="flex items-center justify-between text-sm text-white/70 transition hover:text-white"
                                      >
                                        <span>{value}</span>
                                        <span aria-hidden="true">→</span>
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="rounded-2xl border border-dashed border-white/20 bg-black/30 p-10 text-center">
                            <p className="font-nav-rajdhani text-lg font-semibold uppercase tracking-[0.18em] text-white">
                              {(activeGame || "Selected game").toLowerCase()} coming soon
                            </p>
                            <p className="mt-2 text-sm text-white/60">
                              We are polishing the {activeGame || "selected"} catalog. Check back shortly or explore the featured game instead.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <form role="search" className="w-full sm:flex-1">
              <label className="group flex h-[48px] w-full items-center gap-[16px] rounded-[50px] border border-[color:var(--nav-border-surface-20)] bg-[color:var(--nav-surface-05)] px-[20px] backdrop-blur-[10px] transition duration-200 hover:border-[color:var(--nav-border-surface-28)] hover:bg-[color:var(--nav-surface-08)] focus-within:border-[color:var(--nav-border-surface-40)] focus-within:bg-[color:var(--nav-surface-12)] focus-within:outline-none focus-within:ring-2 focus-within:ring-[color:var(--nav-ring)]">
                <span className="sr-only">Search the catalog</span>
                <input
                  type="search"
                  name="nav-search"
                  placeholder="Search"
                  className="flex-1 bg-transparent font-nav-rajdhani text-[18px] uppercase text-surface placeholder:text-white/40 focus:outline-none"
                />
                <img
                  src={ICONS.search}
                  alt=""
                  aria-hidden="true"
                  className="ml-auto h-6 w-6 opacity-80 transition-opacity duration-200 group-hover:opacity-100"
                />
              </label>
            </form>
          </div>

          <div className="flex w-full items-center justify-end gap-3 sm:gap-4 lg:w-auto">
            <div
              ref={regionContainerRef}
              onKeyDown={(event) => {
                if (event.key === "Escape") {
                  closeRegion();
                }
              }}
              className="relative hidden lg:flex"
            >
              <button
                type="button"
                onClick={() => setRegionOpen((open) => !open)}
                ref={currencyTriggerRef}
                className="flex h-12 items-center gap-[10px] rounded-[100px] border border-[color:var(--nav-border-accent-40)] bg-[color:var(--nav-accent-05)] px-[18px] font-nav-rajdhani text-[18px] uppercase text-[color:var(--color-accent-lime)] backdrop-blur-[24px] transition hover:border-[color:var(--nav-border-accent-55)] hover:bg-[color:var(--nav-accent-08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--nav-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                aria-haspopup="true"
                aria-expanded={regionOpen}
                aria-controls="currency-selector"
              >
                <img src={ICONS.currency} alt="" aria-hidden="true" className="h-6 w-6" />
                <span>{activeCurrency?.currency ?? ""}</span>
                <img
                  src={ICONS.chevron}
                  alt=""
                  aria-hidden="true"
                  className={cn(
                    "h-5 w-5 transition-transform duration-200",
                    regionOpen && "rotate-180"
                  )}
                />
              </button>

              {regionOpen && (
                <div
                  id="currency-selector"
                  role="menu"
                  aria-label="Select currency"
                  className="absolute right-0 top-[calc(100%+12px)] min-w-[260px] rounded-2xl border border-[color:var(--nav-border-accent-40)] bg-[rgba(8,13,33,0.96)] p-4 text-left shadow-[0px_16px_40px_-24px_rgba(5,9,29,0.9)] backdrop-blur-[30px]"
                >
                  <p className="mb-3 px-1 font-nav-rajdhani text-xs font-bold uppercase tracking-[0.12em] text-[color:var(--color-accent-lime)]/70">
                    Available currencies
                  </p>
                  <ul className="flex flex-col gap-2">
                    {currencyOptions.map((option) => (
                      <li key={option.currency}>
                        <button
                          type="button"
                          onClick={() => handleCurrencySelect(option)}
                          className={cn(
                            "flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left transition",
                            activeCurrency?.currency === option.currency
                              ? "bg-[color:var(--nav-accent-12)] text-white"
                              : "text-white/65 hover:bg-white/10 hover:text-white"
                          )}
                          role="menuitemradio"
                          aria-checked={activeCurrency?.currency === option.currency}
                        >
                          <img
                            src={option.flag}
                            alt=""
                            aria-hidden="true"
                            className="h-5 w-5 rounded-full object-cover"
                            loading="lazy"
                          />
                          <div className="flex flex-1 items-center justify-between">
                            <span className="font-nav-rajdhani text-sm uppercase tracking-[0.08em]">
                              {option.currency}
                            </span>
                            <span className="text-xs uppercase text-white/40">{option.country}</span>
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <button
              type="button"
              className="flex h-12 items-center justify-center rounded-[31px] border border-transparent bg-[color:var(--nav-accent-15)] px-[20px] font-nav-rajdhani text-[16px] font-bold uppercase tracking-[0.32em] text-surface backdrop-blur-[16px] transition hover:bg-[color:var(--nav-accent-24)] hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--nav-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              sign in
            </button>

            <button
              type="button"
              aria-label="View cart"
              aria-expanded={cartOpen}
              ref={cartTriggerRef}
              onClick={openCart}
              className="relative flex h-[46px] w-[46px] items-center justify-center rounded-full border border-transparent bg-[color:var(--nav-accent-15)] backdrop-blur-[16px] transition hover:bg-[color:var(--nav-accent-24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--nav-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              <img src={ICONS.cart} alt="" aria-hidden="true" className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -right-1 -top-1 inline-flex h-[20px] min-w-[20px] items-center justify-center rounded-full bg-[color:var(--color-accent-lime)] px-1 text-[11px] font-semibold text-ink">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {hasMounted && cartOpen &&
        // OG: cart overlay portal ensures full-height panel and background lock
        createPortal(
          <div className="fixed inset-0 z-[1200] flex items-start justify-end">
            <div
              className="absolute inset-0 bg-black/70"
              onClick={closeCart}
              aria-hidden="true"
            />

            <aside
              ref={cartPanelRef}
              role="dialog"
              aria-modal="true"
              aria-label="Shopping cart"
              tabIndex={-1}
              className="relative z-[1201] flex h-screen w-full max-w-[420px] flex-col bg-[rgba(5,9,29,0.96)] text-white shadow-[0px_40px_70px_-32px_rgba(5,9,29,0.85)]"
            >
              <header className="flex items-start justify-between gap-4 border-b border-white/10 px-6 py-6">
                <div>
                  <p className="font-nav-rajdhani text-lg font-semibold uppercase tracking-[0.24em]">
                    Shopping cart
                  </p>
                  <p className="mt-1 text-sm text-white/60">{totalItems} item{totalItems === 1 ? "" : "s"}</p>
                </div>
                <button
                  type="button"
                  onClick={closeCart}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--nav-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                  aria-label="Close cart"
                >
                  <FiX className="h-5 w-5" aria-hidden="true" />
                </button>
              </header>

              <ScrollArea className="flex-1">
                <div className="space-y-6 px-6 py-6">
                  {cartItems.length === 0 ? (
                    <div className="rounded-2xl border border-dashed border-white/20 bg-white/5 p-10 text-center">
                      <p className="font-nav-rajdhani text-lg font-semibold uppercase tracking-[0.18em]">
                        Your cart is empty
                      </p>
                      <p className="mt-2 text-sm text-white/60">
                        Browse the catalog to add services. Items you add will appear here instantly.
                      </p>
                      <button
                        type="button"
                        onClick={() => setCartItems(initialCartItems)}
                        className="mt-6 inline-flex items-center justify-center rounded-full bg-[color:var(--color-accent-lime)] px-6 py-2 font-nav-rajdhani text-sm font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-[color:var(--color-accent-lime)]/90"
                      >
                        Restore demo items
                      </button>
                    </div>
                  ) : (
                    <ul className="space-y-5">
                      {cartItems.map((item) => (
                        <li
                          key={item.id}
                          className="rounded-2xl border border-white/10 bg-white/5 p-5"
                        >
                          <div className="flex flex-col gap-4">
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <p className="font-nav-rajdhani text-base font-semibold uppercase tracking-[0.16em] text-white">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/50">
                                  {item.description}
                                </p>
                              </div>
                              <button
                                type="button"
                                onClick={() => handleRemoveItem(item.id)}
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:text-white"
                                aria-label={`Remove ${item.name}`}
                              >
                                <FiTrash2 className="h-4 w-4" aria-hidden="true" />
                              </button>
                            </div>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <button
                                  type="button"
                                  onClick={() => handleQuantityChange(item.id, -1)}
                                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/80 transition hover:bg-white/10"
                                  aria-label={`Decrease ${item.name} quantity`}
                                  disabled={item.quantity <= 1}
                                >
                                  <FiMinus className="h-4 w-4" aria-hidden="true" />
                                </button>
                                <span className="min-w-[32px] text-center font-nav-rajdhani text-base font-semibold uppercase tracking-[0.18em]">
                                  {item.quantity}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => handleQuantityChange(item.id, 1)}
                                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--color-accent-lime)] bg-[color:var(--color-accent-lime)]/20 text-[color:var(--color-accent-lime)] transition hover:bg-[color:var(--color-accent-lime)]/30"
                                  aria-label={`Increase ${item.name} quantity`}
                                >
                                  <FiPlus className="h-4 w-4" aria-hidden="true" />
                                </button>
                              </div>
                              <span className="font-nav-rajdhani text-base font-semibold uppercase tracking-[0.18em] text-white">
                                {formatPrice(item.price * item.quantity)}
                              </span>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </ScrollArea>

              <footer className="space-y-4 border-t border-white/10 px-6 py-6">
                <div className="flex items-center justify-between gap-3">
                  <label className="flex-1">
                    <span className="sr-only">Apply promo code</span>
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(event) => setPromoCode(event.target.value.toUpperCase())}
                      placeholder="Promo code"
                      className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-3 font-nav-rajdhani text-sm uppercase tracking-[0.18em] text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[color:var(--nav-ring)]"
                    />
                  </label>
                  <button
                    type="button"
                    className="rounded-full bg-white/10 px-4 py-3 font-nav-rajdhani text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/15"
                  >
                    apply
                  </button>
                </div>

                <div className="space-y-3 text-sm uppercase tracking-[0.16em] text-white/70">
                  <div className="flex items-center justify-between">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  {cartItems.length > 0 && (
                    <div className="flex items-center justify-between">
                      <span>Service fee</span>
                      <span>{formatPrice(SERVICE_FEE)}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between text-white">
                    <span className="font-semibold text-sm">Total due</span>
                    <span className="font-nav-rajdhani text-lg font-semibold tracking-[0.18em]">
                      {formatPrice(total)}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <button
                    type="button"
                    className="h-[52px] rounded-full bg-[color:var(--color-accent-lime)] font-nav-rajdhani text-base font-semibold uppercase tracking-[0.2em] text-ink transition hover:bg-[color:var(--color-accent-lime)]/90"
                  >
                    proceed to checkout
                  </button>
                  {cartItems.length > 0 && (
                    <button
                      type="button"
                      onClick={handleClearCart}
                      className="h-[46px] rounded-full border border-white/20 bg-transparent font-nav-rajdhani text-xs font-semibold uppercase tracking-[0.24em] text-white/60 transition hover:text-white"
                    >
                      clear cart
                    </button>
                  )}
                </div>
              </footer>
            </aside>
          </div>,
          document.body
        )}
    </header>
  );
};

export default Navbar;
