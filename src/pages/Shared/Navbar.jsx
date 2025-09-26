import { logo } from "@/assets";
import { Dropdown } from "@/components/HomePageComponents/Dropdown";
import { SelectCurrency } from "@/components/HomePageComponents/SelectCurrency";
import { CartModal } from "@/components/HomePageComponents/cart/CartModal";
import {
  NotificationIcon,
  SearchIcon,
  UserIcon,
} from "@/components/Icons/NavbarIcons";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router";

const BORDERED_ROUTES = new Set([
  "/team",
  "/application-registration",
  "/selected-game",
  "/offer-details",
  "/expanded-offerings",
  "/legal-page",
  "/resource",
  "/about",
  "/join-our-team",
  "/application-form-1",
  "/application-form-2",
  "/job-details",
  "/job-application-form",
  "/app-games",
  "/resource-details",
  "/support",
  "/support-2",
  "/support-3",
]);

const FROSTED_SEARCH_ROUTES = new Set([
  "/support-3",
  "/join-our-team",
  "/selected-game",
]);

const HIDE_UTILITIES_ROUTES = new Set([
  "/selected-game",
  "/about",
  "/resource",
  "/team",
  "/application-registration",
  "/join-our-team",
  "/application-form-1",
  "/application-form-2",
  "/job-details",
  "/job-application-form",
  "/legal-page",
  "/resource-details",
  "/support",
  "/support-2",
  "/support-3",
  "/app-games",
]);

const AUTH_ROUTES = new Set(["/login", "/signup"]);

const NAV_ICON_BUTTON_CLASSES =
  "grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 text-white/90 backdrop-blur-md transition hover:border-white/40 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accentneon md:h-12 md:w-12";

const Navbar = () => {
  const location = useLocation();
  const pathname = location?.pathname ?? "";

  const isBordered = BORDERED_ROUTES.has(pathname);
  const useFrostedSearch = FROSTED_SEARCH_ROUTES.has(pathname);
  const hideUtilities = HIDE_UTILITIES_ROUTES.has(pathname);
  const showAccountCTA = !AUTH_ROUTES.has(pathname);

  return (
    <header
      className={cn(
        "relative z-40 w-full text-textondark",
        isBordered ? "border-b border-white/15 bg-bgdeep" : "bg-transparent"
      )}
    >
      {!isBordered && (
        <div
          className="pointer-events-none absolute inset-0 bg-navhero"
          aria-hidden="true"
        />
      )}

      <nav className="relative mx-auto flex w-full max-w-[1320px] flex-col gap-3 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-6 md:py-6 lg:px-12">
        <div className="flex items-center justify-between gap-3 sm:gap-4 md:w-auto">
          <Link
            to="/"
            className="flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accentneon"
            aria-label="Go to homepage"
          >
            <img
              src={logo}
              alt="Bame logo"
              className="hidden h-11 w-auto md:block"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 45 37"
              fill="none"
              className="h-9 w-auto text-accentneon md:hidden"
              aria-hidden="true"
            >
              <path d="M43.2843 12.3118C43.0186 12.7733 42.7114 13.2017 42.3572 13.5982C39.7425 17.2283 33.8986 25.3818 28.5774 32.7262C24.4041 38.4933 13.894 36.9031 10.2317 28.0004C5.74257 17.8561 0.939849 6.99875 0 4.85542L0.0618743 4.91723L16.9141 22.487L17.0517 22.6341C17.1008 22.6863 17.153 22.7418 17.2085 22.7982C17.6672 23.2821 18.2796 23.9173 18.6242 24.2744L18.6828 24.3362C18.7191 24.3724 18.7511 24.4044 18.7778 24.4343L18.8887 24.5494L17.9457 27.0039C16.5727 30.2312 14.6855 30.7353 12.425 30.0148C12.4186 30.0116 12.4122 30.0084 12.4058 30.0084C12.0356 29.8901 11.6462 29.6418 11.2921 29.3412C14.0305 32.091 18.159 31.8288 19.532 28.9064L20.5113 26.6213L24.5801 17.1196L29.2783 6.15144C29.4426 5.63452 29.6644 5.14319 29.9301 4.67849C31.3361 2.23034 34.0554 0.623106 37.1246 0.829872C40.8957 1.07501 43.9681 4.09337 44.2764 7.85353C44.4044 9.48634 44.0278 11.019 43.2843 12.3118Z" fill="currentColor" />
            </svg>
          </Link>
          <Dropdown />
        </div>

        <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-end sm:gap-4 md:flex-1">
          <div className="relative w-full sm:max-w-[360px] md:max-w-[420px] lg:max-w-[480px]">
            <label htmlFor="global-search" className="sr-only">
              Search
            </label>
            <input
              id="global-search"
              type="search"
              placeholder="Search"
              aria-label="Search"
              className={cn(
                "h-10 w-full rounded-full border border-white/20 bg-white/5 px-5 pr-12 font-manrope text-sm font-medium uppercase tracking-wide2 text-white placeholder:text-white/50 transition md:h-12",
                useFrostedSearch && "bg-white/10 backdrop-blur"
              )}
            />
            <SearchIcon className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/70" />
          </div>

          <div className="flex items-center justify-end gap-2 sm:gap-3 md:gap-4">
            <div className="hidden md:block">
              <SelectCurrency />
            </div>

            {!hideUtilities && (
              <button
                type="button"
                className={NAV_ICON_BUTTON_CLASSES}
                aria-label="View notifications"
              >
                <NotificationIcon className="h-5 w-5" />
              </button>
            )}

            {!hideUtilities && (
              <div className="relative">
                <CartModal triggerClassName={NAV_ICON_BUTTON_CLASSES} />
                <span className="absolute -right-1.5 -top-1.5 grid min-h-[18px] min-w-[18px] place-items-center rounded-full bg-accentneon px-[5px] text-[10px] font-bold uppercase tracking-wide2 text-bgdeep">
                  3
                </span>
              </div>
            )}

            {showAccountCTA && (
              <Link
                to="/login"
                className={cn(
                  NAV_ICON_BUTTON_CLASSES,
                  "bg-accentneon text-bgdeep hover:bg-accentneon/90"
                )}
                aria-label="Account"
              >
                <UserIcon className="h-5 w-5" />
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
