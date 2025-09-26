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

export function CartModal({ triggerClassName = "", triggerContent }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className={cn(
            "inline-flex items-center justify-center transition focus-visible:outline-none",
            triggerClassName
          )}
          aria-label="Open cart"
        >
          {triggerContent ?? <CartIcon className="h-5 w-5" />}
        </button>
      </DropdownMenuTrigger>
      {menuOpen && (
        <DropdownMenuContent
          className="relative mt-6 w-[848px] border border-strokedark/60 bg-black/80 p-5 text-white backdrop-blur-xl md:-ml-[780px]"
          style={{ border: "1px solid rgba(251, 251, 255, 0.24)" }}
        >
          <ScrollArea className="h-[800px]">
            <div className="p-3">
              <div className="flex items-center justify-between">
                <h2 className="text-[32px] uppercase font-semibold tracking-wide  ">
                  shopping cart (3 items)
                </h2>
                <button onClick={() => setMenuOpen(false)}>
                  <IoCloseOutline size={25} />
                </button>
              </div>
              <div className="py-5">
                <ItemCard />
              </div>
              <div className=" ">
                <h3 className="font-thin flex items-center justify-between py-4 border-b border-gray-700">
                  Nerubian Conqueror Bundle{" "}
                  <span className="font-medium">$20.99</span>
                </h3>
              </div>
              <div className=" ">
                <h3 className="font-thin flex items-center justify-between py-4 border-b border-gray-700">
                  Payment service fee
                  <span className="font-medium">$1.00</span>
                </h3>
              </div>
              <div className=" ">
                <h3 className="font-thin flex items-center justify-between py-4 border-b border-gray-700">
                  <span>
                    Apply Promo <br />
                    <span className="flex items-center gap-2">
                      {" "}
                      Points you will recieve <CiCircleQuestion />{" "}
                    </span>
                  </span>
                  <span className="font-medium">
                    <input
                      type="text"
                      className="px-4 py-2 bg-white/10 backdrop-blur-md outline-none"
                      placeholder="XXXX-XXXX"
                    />
                  </span>
                </h3>
              </div>
              <div className=" ">
                <h3 className="font-thin flex items-center justify-between py-4   border-gray-700">
                  Subtotal
                  <span className="font-medium text-xl">$21.99</span>
                </h3>
              </div>
              <div className="pt-10">
                <Button className="rounded-none px-6 text-black font-bold">
                  get started
                </Button>
              </div>
            </div>
          </ScrollArea>
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
}

CartModal.propTypes = {
  triggerClassName: PropTypes.string,
  triggerContent: PropTypes.node,
};
