import { Fragment, useState } from "react";

import logo from "@/assets/images/logo/logo.png";
import { CartModal } from "@/components/HomePageComponents/cart/CartModal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { currencyData } from "@/lib/StaticData";
import { navbarData } from "@/lib/StaticData";
import { ScrollArea } from "@/components/ui/scroll-area";

const ICONS = {
  menu: "/assets/nav-menu.svg",
  search: "/assets/nav-search.svg",
  currency: "/assets/nav-currency.svg",
  chevron: "/assets/nav-chevron.svg",
  cart: "/assets/nav-cart.svg",
};

const NavCatalog = () => (
  <DropdownMenu modal={false}>
    <DropdownMenuTrigger asChild>
      <button
        type="button"
        className="group ml-[32px] flex items-center gap-[10px] rounded-nav-8 border border-[var(--nav-border-surface-20)] bg-[var(--nav-accent-solid)] px-[14px] py-[10px] font-nav-rajdhani text-[14px] font-bold uppercase leading-[17px] tracking-nav-catalog text-ink backdrop-blur-nav transition-colors duration-200 hover:border-[var(--nav-border-surface-32)] data-[state=open]:border-[var(--nav-border-surface-40)] data-[state=open]:shadow-[0_20px_40px_-24px_rgba(200,255,0,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--nav-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
      >
        <span>catalog</span>
        <img
          src={ICONS.menu}
          alt=""
          aria-hidden="true"
          className="h-[15px] w-[15px] transition-transform group-data-[state=open]:rotate-180"
        />
      </button>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      align="start"
      sideOffset={16}
      className="z-50 mt-[16px] w-[980px] rounded-[32px] border border-[var(--nav-border-surface-32)] bg-[rgba(5,9,29,0.94)] p-6 text-surface shadow-[0_40px_60px_-40px_rgba(0,0,0,0.6)] backdrop-blur-nav"
    >
      <div className="flex gap-8">
        <div className="w-[200px]">
          <p className="text-[11px] font-nav-manrope uppercase tracking-[0.2em] text-surface/60">
            choose game
          </p>
          <ScrollArea className="mt-4 h-[260px] pr-3">
            <div className="space-y-2">
              {navbarData.catalogMenu.chooseGame.map((game) => (
                <DropdownMenuItem
                  key={game}
                  disabled={game !== "DESTINY 2"}
                  className="group flex w-full items-center justify-between rounded-[14px] px-3 py-2 text-[13px] font-nav-rajdhani uppercase tracking-[0.12em] text-surface/50 transition data-[disabled]:cursor-default data-[highlighted]:bg-[var(--nav-accent-08)] data-[highlighted]:text-surface"
                >
                  <span>{game}</span>
                  {game === "DESTINY 2" && (
                    <span className="text-[11px] font-nav-rajdhani text-[var(--color-accent-lime)]">
                      featured
                    </span>
                  )}
                </DropdownMenuItem>
              ))}
            </div>
          </ScrollArea>
        </div>

        <div className="flex-1">
          <p className="text-[11px] font-nav-manrope uppercase tracking-[0.2em] text-surface/60">
            categories
          </p>
          <div className="mt-4 grid grid-cols-5 gap-6">
            {Object.entries(navbarData.catalogMenu.categories).map(
              ([key, items]) => (
                <DropdownMenuGroup key={key} className="space-y-2">
                  {items.map((label, index) => (
                    <DropdownMenuItem
                      key={label}
                      className="group flex items-start rounded-[12px] px-3 py-2 text-[13px] font-nav-rajdhani uppercase tracking-[0.12em] text-surface/60 transition data-[highlighted]:bg-[var(--nav-accent-08)] data-[highlighted]:text-surface"
                    >
                      <span
                        className={
                          index === 0
                            ? "text-surface"
                            : "text-surface/60 group-data-[highlighted]:text-surface"
                        }
                      >
                        {label}
                      </span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              )
            )}
          </div>
        </div>
      </div>
    </DropdownMenuContent>
  </DropdownMenu>
);

const NavCurrencySelector = () => {
  const initialCurrency = currencyData?.[0]?.currency ?? "USD";
  const [value, setValue] = useState(initialCurrency);

  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger
        aria-label="Change currency"
        className="group hidden h-12 w-[111px] items-center justify-between gap-[6px] rounded-nav-100 border border-[var(--nav-border-accent-40)] bg-[var(--nav-accent-05)] px-[12px] py-0 font-nav-rajdhani text-[18px] uppercase text-[color:var(--color-accent-lime)] backdrop-blur-nav-strong transition-[background-color,border-color,color] duration-200 hover:border-[var(--nav-border-accent-55)] hover:bg-[var(--nav-accent-08)] data-[state=open]:border-[var(--nav-border-accent-60)] data-[state=open]:bg-[var(--nav-accent-10)] data-[state=open]:shadow-[0_20px_40px_-24px_rgba(200,255,0,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--nav-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent [&>span]:w-full [&>svg]:hidden lg:flex"
      >
        <span className="flex w-full items-center justify-between">
          <span className="flex items-center gap-[6px]">
            <img
              src={ICONS.currency}
              alt=""
              aria-hidden="true"
              className="h-6 w-6"
            />
            <SelectValue
              placeholder={initialCurrency}
              className="tracking-[0.08em] text-[color:var(--color-accent-lime)]"
            />
          </span>
          <img
            src={ICONS.chevron}
            alt=""
            aria-hidden="true"
            className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180"
          />
        </span>
      </SelectTrigger>
      <SelectContent
        align="end"
        className="z-50 w-[160px] rounded-[20px] border border-[var(--nav-border-accent-40)] bg-[var(--nav-accent-05)] p-1 text-[color:var(--color-accent-lime)] backdrop-blur-nav"
      >
        {currencyData
          ?.map((data) => {
            if (!data?.currency) return null;
            const code = data.currency.toUpperCase();
            return (
              <SelectItem
                key={code}
                value={code}
                className="my-[2px] flex h-10 items-center justify-between rounded-[12px] px-4 text-[14px] font-nav-rajdhani uppercase tracking-[0.12em] text-[color:var(--color-accent-lime)] transition data-[highlighted]:bg-[var(--nav-accent-08)] data-[highlighted]:text-[color:var(--color-accent-lime)] data-[state=checked]:bg-[var(--nav-accent-08)] data-[state=checked]:text-ink"
              >
                <span>{code}</span>
                <span className="text-xs text-surface/50">{data.country}</span>
              </SelectItem>
            );
          })
          .filter(Boolean)}
      </SelectContent>
    </Select>
  );
};

const Navbar = () => {
  return (
    <nav className="flex items-center px-[52px] pt-[28px] pb-[29px] text-surface">
      <a href="/" className="flex items-center" aria-label="Vanguard Boost home">
        <img
          src={logo}
          alt="Vanguard Boost logo"
          className="h-[41px] w-auto"
          loading="lazy"
        />
      </a>

      <NavCatalog />

      <div className="ml-auto flex items-center gap-[8px]">
        <form className="hidden lg:block" role="search">
          <label className="group flex h-12 w-[351px] items-center gap-[16px] rounded-nav-50 border border-[var(--nav-border-surface-20)] bg-[var(--nav-surface-05)] px-[20px] backdrop-blur-nav transition-[border-color,background-color] duration-200 hover:border-[var(--nav-border-surface-28)] hover:bg-[var(--nav-surface-08)] focus-within:border-[var(--nav-border-surface-40)] focus-within:bg-[var(--nav-surface-12)] focus-within:outline-none focus-within:ring-2 focus-within:ring-[color:var(--nav-ring)]">
            <span className="sr-only">Search the catalog</span>
            <input
              type="search"
              name="nav-search"
              placeholder="SEARCH"
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

        <NavCurrencySelector />

        <button
          type="button"
          className="flex h-12 items-center justify-center rounded-nav-31 border border-transparent bg-[var(--nav-accent-15)] px-[20px] font-nav-rajdhani text-[16px] font-bold uppercase tracking-nav-sign-in text-surface backdrop-blur-nav transition-[background-color,color] duration-200 hover:bg-[var(--nav-accent-24)] hover:text-ink focus-visible:bg-[var(--nav-accent-24)] focus-visible:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--nav-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
        >
          sign in
        </button>

        <CartModal
          triggerClassName="h-12 w-12 rounded-nav-100 border border-transparent bg-[var(--nav-accent-15)] backdrop-blur-nav transition-[background-color,border-color] duration-200 hover:bg-[var(--nav-accent-24)] focus-visible:bg-[var(--nav-accent-24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--nav-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          triggerContent={
            <img
              src={ICONS.cart}
              alt=""
              aria-hidden="true"
              className="h-[21px] w-[21px]"
            />
          }
        />
      </div>
    </nav>
  );
};

export default Navbar;
