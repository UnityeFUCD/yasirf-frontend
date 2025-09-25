import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "../Icons/NavbarIcons";
import { Button } from "../ui/button";
import { navbarData } from "@/lib/StaticData";
import { cn } from "@/lib/utils";
import { ScrollArea } from "../ui/scroll-area";

export function Dropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="focus:ring-offset-0 outline-none focus:ring-0 focus-visible:ring-offset-0 focus:outline-none focus:"
      >
        <Button className="font-bold tracking-wider rounded-[8px] p-2 md:px-[14px] md:py-[10px] flex items-center gap-[10px]  ">
          <span className="hidden md:inline">catalog{" "}</span>
          <span className="w-[15px] h-[15px]">
            <MenuIcon />
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[1330px] ml-60 relative bg-backgroundLight border border-primaryColor text-white px-[22px] py-4">
        <div className="flex items-center gap-2">
          <div>
            <p className="text-gray-300 uppercase text-xs font-bold">
              Choose game
            </p>
            <div>
              <ScrollArea className="h-80 w-52">
                <div className="flex flex-col gap-2 mt-2">
                  {navbarData?.catalogMenu?.chooseGame?.map((data, idx) => (
                    <DropdownMenuGroup key={`index + ${idx}`}>
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger
                          className={cn(
                            " hover:text-white text-gray-400",
                            data == "DESTINY 2"
                              ? "hover:cursor-pointer"
                              : " hover:text-gray-400"
                          )}
                          disabled={data !== "DESTINY 2"}
                        >
                          {data}
                        </DropdownMenuSubTrigger>

                        <DropdownMenuPortal>
                          <DropdownMenuSubContent
                            className={cn(
                              "absolute top-0 bg-backgroundLight text-white border-0 ml-10 w-[900px] h-[350px] overflow-hidden",
                              data === "DESTINY 2" && "-mt-8",
                              data === "WORLD OF WARCRAFT" && "-mt-16",
                              data === "PATH OF EXILE 2" && "-mt-[105px]",
                              data === "MARVEL RIVALS" && "-mt-[150px]",
                              data === "NEW WORLD" && "-mt-[190px]",
                              data === "DIABLO 4" && "-mt-[230px]",
                              data === "DELTA FORCE" && "-mt-[265px]",
                              data === "CALL OF DUTY" && "-mt-[305px]"
                            )}
                          >
                            <p className="text-gray-300 uppercase text-xs font-bold pb-2">
                              categories
                            </p>
                            <div className="grid grid-cols-5 gap-20">
                              <div className="flex flex-col gap-0">
                                {navbarData?.catalogMenu?.categories?.TRIALS_OF_OSIRIS?.map(
                                  (category, idx) => (
                                    <DropdownMenuItem
                                      key={`category + ${idx}`}
                                      className={cn(
                                        "text-gray-500 text-nowrap",
                                        category === "TRIALS OF OSIRIS" &&
                                          "text-white"
                                      )}
                                    >
                                      {category}
                                    </DropdownMenuItem>
                                  )
                                )}
                              </div>

                              <div className="flex flex-col gap-0">
                                {navbarData?.catalogMenu?.categories?.RAIDS?.map(
                                  (category, idx) => (
                                    <DropdownMenuItem
                                      key={`category + ${idx}`}
                                      className={cn(
                                        "text-gray-500 text-nowrap",
                                        category === "RAIDS" && "text-white"
                                      )}
                                    >
                                      {category}
                                    </DropdownMenuItem>
                                  )
                                )}
                              </div>
                              <div className="flex flex-col gap-0">
                                {navbarData?.catalogMenu?.categories?.DUNGEONS?.map(
                                  (category, idx) => (
                                    <DropdownMenuItem
                                      key={`category + ${idx}`}
                                      className={cn(
                                        "text-gray-500 text-nowrap",
                                        category === "DUNGEONS" && "text-white"
                                      )}
                                    >
                                      {category}
                                    </DropdownMenuItem>
                                  )
                                )}
                              </div>

                              <div className="flex flex-col gap-0">
                                {navbarData?.catalogMenu?.categories?.PvP?.map(
                                  (category, idx) => (
                                    <DropdownMenuItem
                                      key={`category + ${idx}`}
                                      className={cn(
                                        "text-gray-500 text-nowrap",
                                        category === "PvP" && "text-white"
                                      )}
                                    >
                                      {category}
                                    </DropdownMenuItem>
                                  )
                                )}
                                {navbarData?.catalogMenu?.categories?.PvE?.map(
                                  (category, idx) => (
                                    <DropdownMenuItem
                                      key={`category + ${idx}`}
                                      className={cn(
                                        "text-gray-500 text-nowrap",
                                        category === "PvE" && "text-white"
                                      )}
                                    >
                                      {category}
                                    </DropdownMenuItem>
                                  )
                                )}
                              </div>
                              <div className="flex flex-col gap-0">
                                {navbarData?.catalogMenu?.categories?.WEAPONS?.map(
                                  (category, idx) => (
                                    <DropdownMenuItem
                                      key={`category + ${idx}`}
                                      className={cn(
                                        "text-gray-500 text-nowrap",
                                        category === "WEAPONS" && "text-white"
                                      )}
                                    >
                                      {category}
                                    </DropdownMenuItem>
                                  )
                                )}
                              </div>
                            </div>
                          </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                      </DropdownMenuSub>
                    </DropdownMenuGroup>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
