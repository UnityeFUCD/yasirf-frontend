import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { currencyData } from "@/lib/StaticData";
import { ChevronDownIcon, DollarIcon } from "@/components/Icons/NavbarIcons";

export function SelectCurrency() {
  return (
    <Select className="uppercase" defaultValue={currencyData[0]?.currency}>
      <SelectTrigger className="group flex h-12 items-center justify-between gap-2 rounded-full border border-strokedark bg-accentneon px-4 py-0 text-xs font-rajdhani font-bold uppercase tracking-wide2 text-bgdeep transition hover:bg-accentneon/90 focus:ring-0 focus:ring-offset-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accentneon">
        <div className="flex items-center gap-2">
          <span className="flex h-4 w-4 items-center justify-center">
            <DollarIcon className="h-4 w-4" />
          </span>
          <SelectValue placeholder="Select currency" className="uppercase" />
        </div>
        <ChevronDownIcon className="h-4 w-4 transition group-data-[state=open]:rotate-180" />
      </SelectTrigger>
      <SelectContent className="mt-2 -ml-2 rounded-2xl border border-strokedark/60 bg-background/95 text-textondark shadow-lg backdrop-blur-sm">
        <SelectGroup>
          {currencyData?.map((data, idx) => (
            <SelectItem
              key={`index + ${idx}`}
              value={data?.currency}
              className="flex items-center gap-[6px] uppercase opacity-60 transition hover:bg-transparent hover:text-accentneon hover:opacity-100 focus:bg-transparent focus-visible:outline-none"
            >
              <span className="flex items-center gap-1">
                {data?.flag && (
                  <img
                    src={data?.flag}
                    alt=""
                    className="h-[18px] w-[18px] rounded-full"
                  />
                )}
                <span className="text-sm font-medium tracking-wide">{data?.currency}</span>
              </span>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
