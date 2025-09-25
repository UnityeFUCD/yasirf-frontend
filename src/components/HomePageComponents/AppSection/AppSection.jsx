import {
  appBg,
  appBg1,
  appStore,
  googlePlay,
  phone1,
  phone2,
  qrcode,
} from "@/assets";
import { Button } from "@/components/ui/button"; 

const AppSection = () => {
  return (
    <div className=" text-black bg-white relative mx-auto overflow-hidden">
      <div className="border-b border-borderPrimary">
        <div className="border-r border-borderPrimary w-full flex text-sm">
          <p className="py-7 ml-4 md:ml-8 uppercase tracking-[2.38px]">[06]</p>
          <p className="py-7 mx-[18px] uppercase tracking-[2.38px]">
            download app
          </p>
        </div>
      </div>
      <div className="absolute lg:top-0 lg:bottom-0 lg:left-0 top-1/2 left-1/2 -translate-y-1/2 lg:translate-y-0 -translate-x-1/2 lg:translate-x-0 h-full z-10">
        <img
          src={appBg}
          alt=""
          className="w-full h-full z-10 hidden lg:block"
        />
      </div>
      <img
        src={appBg1}
        alt=""
        className="min-w-[920px] z-10 lg:hidden absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
      />
      <div className="absolute top-40 right-80 bg-primaryColor/70 size-[200px] blur-[150px]" />
      <div className="px-4 md:px-8 lg:px-[165px] z-20 relative">
        <div>
          <h2 className="text-[32px] lg:text-[56px] font-normal uppercase leading-none mt-20 lg:mt-6">
            get <span className="font-bold">early access</span>
            <br className="lg:hidden" /> with our{" "}
            <br className=" hidden lg:block" /> mobile app!
          </h2>
          <p className="mt-3 lg:mt-[15px]">
            Sign up now for early access to the new features and updates through
            our <br className=" hidden lg:block" /> mobile app.
          </p>
          <div className="mt-4 lg:mt-7 z-20">
            <Button className="font-semibold rounded-none">get started</Button>
          </div>
        </div>
        <img
          src={phone1}
          alt=""
          className="w-[220px] md:w-[330px] lg:w-[400px] xl:w-[450px] absolute bottom-0 left-0"
        />
        <div className="flex flex-col items-center mt-20 lg:-mt-8 pb-[280px] lg:pb-[58px] gap-2 lg:gap-3">
          <p className="text-[32px] lg:text-[44px] font-bold uppercase">coming soon</p>
          <img src={qrcode} alt="" className="w-[210px] lg:w-[268px]" />
          <div className="flex items-center gap-2.5 relative z-20">
            <img src={googlePlay} alt="" />
            <img src={appStore} alt="" />
          </div>
        </div>
        <img
          src={phone2}
          alt=""
          className="w-[160px] md:w-[270px] lg:w-[340px] xl:w-[380px] absolute bottom-0 right-4 md:right-8"
        />
      </div>
    </div>
  );
};

export default AppSection;
