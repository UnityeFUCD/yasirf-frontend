import logo from "@/assets/images/logo/logo.png";

const ICONS = {
  menu: "/assets/nav-menu.svg",
  search: "/assets/nav-search.svg",
  currency: "/assets/nav-currency.svg",
  chevron: "/assets/nav-chevron.svg",
  cart: "/assets/nav-cart.svg",
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

      <button
        type="button"
        className="ml-[32px] flex items-center gap-[10px] rounded-nav-8 border border-[color:var(--color-surface)] border-opacity-20 bg-[color:var(--color-accent-lime)] px-[14px] py-[10px] font-nav-rajdhani text-[14px] font-bold uppercase leading-[17px] tracking-nav-catalog text-ink backdrop-blur-nav transition-colors duration-200 hover:border-opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--nav-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
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

      <div className="ml-auto flex items-center gap-[8px]">
        <form className="hidden lg:block">
          <label className="group flex h-12 w-[351px] items-center gap-[16px] rounded-nav-50 border border-[color:var(--color-surface)] border-opacity-20 bg-[color:var(--color-surface)] bg-opacity-5 px-[20px] backdrop-blur-nav transition-[border-color,background-color] duration-200 hover:border-opacity-30 hover:bg-opacity-10 focus-within:border-opacity-40 focus-within:bg-opacity-15 focus-within:outline-none focus-within:ring-2 focus-within:ring-[color:var(--nav-ring)]">
            <span className="sr-only">Search the catalog</span>
            <input
              type="search"
              name="nav-search"
              placeholder="SEARCH"
              className="flex-1 bg-transparent font-nav-rajdhani text-[18px] font-normal uppercase tracking-[0px] text-surface placeholder:text-[color:var(--color-surface)] placeholder:opacity-50 focus:outline-none"
            />
            <img
              src={ICONS.search}
              alt=""
              aria-hidden="true"
              className="ml-auto h-6 w-6 opacity-80 transition-opacity duration-200 group-hover:opacity-100"
            />
          </label>
        </form>

        <button
          type="button"
          className="hidden h-12 items-center gap-[6px] rounded-nav-100 border border-[color:var(--color-accent-lime)] border-opacity-40 bg-[color:var(--color-accent-lime)] bg-opacity-5 px-[18px] font-nav-rajdhani text-[18px] font-normal uppercase text-[color:var(--color-accent-lime)] backdrop-blur-nav-strong transition-[border-color,background-color,color] duration-200 hover:border-opacity-60 hover:bg-opacity-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--nav-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent lg:flex"
          aria-haspopup="listbox"
          aria-label="Change currency"
        >
          <img
            src={ICONS.currency}
            alt=""
            aria-hidden="true"
            className="h-6 w-6"
          />
          <span>USD</span>
          <img
            src={ICONS.chevron}
            alt=""
            aria-hidden="true"
            className="h-6 w-6"
          />
        </button>

        <button
          type="button"
          className="flex h-12 items-center justify-center rounded-nav-31 border border-transparent bg-[color:var(--color-accent-lime)] bg-opacity-15 px-[20px] font-nav-rajdhani text-[16px] font-bold uppercase tracking-nav-sign-in text-surface backdrop-blur-nav transition-[background-color,color] duration-200 hover:bg-opacity-25 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--nav-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
        >
          sign in
        </button>

        <button
          type="button"
          aria-label="View cart"
          className="flex h-12 w-12 items-center justify-center rounded-nav-100 border border-transparent bg-[color:var(--color-accent-lime)] bg-opacity-15 backdrop-blur-nav transition-[background-color] duration-200 hover:bg-opacity-25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--nav-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
        >
          <img
            src={ICONS.cart}
            alt=""
            aria-hidden="true"
            className="h-[21px] w-[21px]"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
