import { Women } from "@/assets";
import { ChevronDown } from "lucide-react";

const Marqueeitem = () => {
  return (
    <>
      <div className="w-[364px] mx-2 h-[277px] border border-gray-50 border-opacity-30 p-8">
        <p className="text-[16px] text-[#FBFBFF]  font-Manpore font-normal overflow-ellipsis">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna.
        </p>
        <a
          href="#"
          className="text-[14px] text-[#C8FF00] font-semibold flex gap-x-1 items-center mt-1"
        >
          Show more
          <ChevronDown className="h-5 w-5" />
        </a>
        <p className="text-[12px]  font-Manpore font-normal text-[#FBFBFF] mt-[17px]">
          23 Nov 2021
        </p>
        <div className="flex gap-4 mt-2">
          <img
            src={Women}
            alt="man"
            className="h-[61.74px] w-[61.74px] rounded-full"
          />
          <div className="">
            <h4 className="text-[24px] text-[#FBFBFF] font-medium capitalize">
              Arlenia arsum
            </h4>
            <p className="text-[16px] text-[#FBFBFF] font-normal uppercase">
              @arlene
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marqueeitem;
