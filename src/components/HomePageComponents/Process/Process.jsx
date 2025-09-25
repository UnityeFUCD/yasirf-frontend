import { featuresImage, Line, Net } from "@/assets";
import { processData } from "@/lib/StaticData";
import { cn } from "@/lib/utils";

const Process = () => {
  return (
    <div className="bg-background  mx-auto relative overflow-hidden">
      <div className="bg-[#A10C98]/20 mx-auto">
        <div className="border-b border-[#FBFBFF3A]">
          <div className="border-r border-[#FBFBFF3A] w-fit flex text-sm text-white">
            <p className="py-7 ml-4 md:ml-8 uppercase tracking-[2.38px]">
              [02]
            </p>
            <p className="py-7 mx-[18px] uppercase tracking-[2.38px]">
              process
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-[55px] justify-center pt-10 md:pt-[60px] lg:pt-[88.88px] pb-[88.88px] px-4 md:px-8 lg:px-[165px] z-20 items-stretch">
          <div className="flex flex-col gap-4  z-20">
            {processData?.map((data, idx) => (
              <div
                key={`index - ${idx}`}
                className={cn(
                  "flex items-center justify-center",
                  data?.number === "01" ? "text-white gap-3 lg:gap-6" : "text-gray-500  gap-4 lg:gap-7"
                )}
              >
                <h1 className="text-[52px] lg:text-[72px] font-bold">{data?.number}</h1>
                <div className="border-l border-primaryColor rounded-md ps-[35px] pe-[18px] py-[20.5px] bg-gray-700/30">
                  <p className="text-lg md:text-xl font-bold">{data?.title}</p>
                  <p className="text-base text-[#FBFBFF]/70 ">{data?.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="h-[280px] md:h-[380px] lg:h-full w-full overflow-hidden z-20 border-[8px] border-[#fbfbff1f] rounded-2xl relative">
            <img src={featuresImage} alt="" className="w-full h-full object-top  object-cover absolute" />
          </div>


          <div className="absolute top-20 -right-10 hidden lg:block ">
            <img src={Net} alt="" className="" />
          </div>
          <div className="absolute -bottom-10 left-20 size-[200px] bg-primaryColor z-10 blur-[200px]" />
          <div className="absolute top-20 left-1/2 size-[200px] bg-primaryColor  blur-[150px]" />
          <div className="absolute left-0 bottom-0 hidden lg:block ">
            <img src={Line} alt="" />
          </div>
          <div className="absolute -left-8 bottom-44 rotate-180 hidden lg:block ">
            <p className="uppercase rotate-90 text-white/40 tracking-[5px]">
              AI gaming
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
