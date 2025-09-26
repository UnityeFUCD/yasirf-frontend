import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ItemCard from "./ItemCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CiCircleQuestion } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import { CartIcon } from "@/components/Icons/NavbarIcons";

export function CartModal() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild onClick={() => setMenuOpen(true)}>
        <Button
          className="grid h-10 w-10 place-items-center rounded-full border border-navring/80 bg-navneutral text-textondark transition hover:bg-navneutral/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accentneon md:h-12 md:w-12"
          aria-label="Open cart"
        >
          <CartIcon className="h-5 w-5" />
        </Button>
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
