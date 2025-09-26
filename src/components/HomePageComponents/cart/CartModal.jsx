import PropTypes from "prop-types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import ItemCard from "./ItemCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CiCircleQuestion } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import { CartIcon } from "@/components/Icons/NavbarIcons";
import { cn } from "@/lib/utils";

const baseTriggerClass =
  "grid h-10 w-10 place-items-center rounded-full border border-navring/80 bg-navneutral text-textondark transition hover:bg-navneutral/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accentneon md:h-12 md:w-12";

export function CartModal({ triggerClassName = "", triggerContent }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <DropdownMenu modal={false} open={menuOpen} onOpenChange={setMenuOpen}>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className={cn(baseTriggerClass, triggerClassName)}
          aria-label="Open cart"
        >
          {triggerContent ?? <CartIcon className="h-5 w-5" />}
        </button>
      </DropdownMenuTrigger>
      {menuOpen && (
        <DropdownMenuContent
          align="end"
          sideOffset={16}
          className="z-50 mt-4 w-[520px] max-h-[640px] overflow-hidden rounded-[32px] border border-[var(--nav-border-surface-32)] bg-[rgba(5,9,29,0.94)] p-6 text-surface shadow-[0_40px_80px_-40px_rgba(0,0,0,0.65)] backdrop-blur-nav"
        >
          <ScrollArea className="max-h-[420px] pr-2">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[var(--nav-border-surface-28)] pb-4">
                <h2 className="text-[24px] font-nav-rajdhani font-semibold uppercase tracking-[0.16em]">
                  shopping cart (3 items)
                </h2>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="text-surface/60 transition hover:text-surface"
                >
                  <IoCloseOutline size={25} />
                </button>
              </div>
              <div>
                <ItemCard />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[var(--nav-border-surface-28)] pb-4 text-sm uppercase tracking-[0.12em] text-surface/70">
                  <span>Nerubian Conqueror Bundle</span>
                  <span className="font-nav-rajdhani text-base text-surface">$20.99</span>
                </div>
                <div className="flex items-center justify-between border-b border-[var(--nav-border-surface-28)] pb-4 text-sm uppercase tracking-[0.12em] text-surface/70">
                  <span>Payment service fee</span>
                  <span className="font-nav-rajdhani text-base text-surface">$1.00</span>
                </div>
                <div className="flex items-center justify-between border-b border-[var(--nav-border-surface-28)] pb-4 text-sm uppercase tracking-[0.12em] text-surface/70">
                  <span className="flex flex-col gap-1 text-left">
                    Apply Promo
                    <span className="flex items-center gap-2 text-[11px] normal-case">
                      Points you will receive <CiCircleQuestion />
                    </span>
                  </span>
                  <span className="font-medium">
                    <input
                      type="text"
                      className="w-[140px] rounded-[12px] border border-[var(--nav-border-surface-32)] bg-[var(--nav-surface-05)] px-4 py-2 text-right text-surface placeholder:text-surface/40 focus:border-[var(--nav-border-surface-40)] focus:outline-none"
                      placeholder="XXXX-XXXX"
                    />
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-[var(--nav-border-surface-28)] pb-4 text-sm uppercase tracking-[0.12em] text-surface/90">
                  <span>Subtotal</span>
                  <span className="font-nav-rajdhani text-xl text-surface">$21.99</span>
                </div>
              </div>
            </div>
          </ScrollArea>
          <div className="mt-6 flex items-center justify-end">
            <Button className="rounded-[12px] px-6 py-3 font-nav-rajdhani text-base font-bold uppercase tracking-[0.12em] text-ink">
              get started
            </Button>
          </div>
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
}

CartModal.propTypes = {
  triggerClassName: PropTypes.string,
  triggerContent: PropTypes.node,
};
