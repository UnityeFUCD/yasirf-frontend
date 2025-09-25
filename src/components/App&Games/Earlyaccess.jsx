import React from "react";
import {
  appBg,
  appStore,
  apptext,
  googlePlay,
  phone1,
  phone1bg,
  phone2,
  phone2bg,
  qrcode,
} from "@/assets";
import { Button } from "@/components/ui/button";
import Container from "@/pages/Shared/Container";

const Earlyaccess = () => {
  return (
    <section className="">
      <Container className="text-black bg-white relative h-[767px]">
        <img src={apptext} alt="" />
        <div className="absolute top-40 right-80 bg-primaryColor/70 size-[200px] blur-[150px]" />
        <div className="px-[165px] z-20">
          <div>
            <h2 className="text-[56px] font-normal uppercase leading-none mt-7">
              get <span className="font-bold">early access</span> with our{" "}
              <br /> mobile app!
            </h2>
            <p className="mt-[15px]">
              Sign up now for early access to the new features and updates
              through our <br /> mobile app.
            </p>
            <div className="mt-5 ml-10 absolute z-20">
              <Button className="font-semibold rounded-none">
                get started
              </Button>
            </div>
          </div>
          <div className="-ml-40 mt-24 relative">
            <img src={phone1} alt="" />
            <img
              src={phone1bg}
              alt=""
              className="absolute -top-2 mt-5 left-6   "
            />
          </div>
          <div className="absolute top-[40%] left-[45%]">
            <p className="text-[44px] font-bold uppercase">coming soon</p>
            <img src={qrcode} alt="" />
            <div className="flex items-center gap-2.5">
              <img src={googlePlay} alt="" />
              <img src={appStore} alt="" />
            </div>
          </div>
          <div className="absolute top-[17%] right-0">
            <div className="relative">
              <img src={phone2} alt="" className="" />
              <img src={phone2bg} alt="" className="absolute top-3 left-9" />
            </div>
          </div>
        </div>
        <div className="absolute top-0 z-10">
          <img src={appBg} alt="" className="w-full h-full z-10" />
        </div>
      </Container>
    </section>
  );
};
export default Earlyaccess;
