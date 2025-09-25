import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { currencyData } from "@/lib/StaticData";

export function SelectCurrency() {
  return (
    <Select className="uppercase" defaultValue={currencyData[0]?.currency}>
      <SelectTrigger className="w-[120px] h-[48px] rounded-[100px] bg-primaryColor/10 text-primaryColor border-primaryColor/50 focus:ring-offset-0  ">
        <SelectValue
          placeholder="Select currency"
          className="uppercase"
          value={currencyData[0]}
        />
      </SelectTrigger>
      <SelectContent className="bg-primaryColor/10 backdrop-blur-sm border-primaryColor/50 text-primaryColor/50 rounded-2xl mt-2 -ml-2 flex">
        <SelectGroup className="">
          {currencyData?.map((data, idx) => (
            <SelectItem
              key={`index + ${idx}`}
              value={data?.currency}
              className="uppercase group hover:bg-transparent focus:bg-none focus:ring-offset-0 outline-none hover:text-primaryColor hover:bg-none cursor-pointer flex items-center gap-[6px] opacity-40 hover:opacity-100 transition-all duration-300 "
            >
              <span className="flex items-center gap-1">
                <img
                  src={data?.flag}
                  alt="country flag"
                  className="w-[25px] h-[25px] rounded-full "
                />
                <span></span>
                <span className="text-lg">{data?.currency}</span>
              </span>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
