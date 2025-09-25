import { Button } from "@/components/ui/button";
import NewLaunchesSection from "./NewLaunchesSection";
import OffersSection from "./OffersSection";
import { circle } from "@/assets";

const Offers = () => {
  return (
    <div className="bg-background min-h-screen   mx-auto pt-[53.2px]">
      <div className="flex items-start   gap-6  overflow-hidden w-full  px-4 md:px-8 lg:px-[153px] ">
        <div className="w-[267px] hidden lg:block">
          <NewLaunchesSection />
        </div>
        <div className="w-full">
          <OffersSection />
        </div>
      </div>
      <div className="absolute mt-0 right-[480px] z-20">
        <img src={circle} alt="" />
      </div>
      <div className="pt-10 pb-[71px] flex items-center justify-center">
        <Button className="uppercase font-medium border  border-primaryColor bg-transparent hover:bg-primaryColor hover:text-black transition-all duration-300   hover:font-bold rounded-none text-primaryColor px-6 py-[18px]">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Offers;
