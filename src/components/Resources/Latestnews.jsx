import { Acumsan1, Acumsan2, Latestbgresource } from "@/assets";
import Container from "@/pages/Shared/Container";
import React from "react";

const Latestnews = () => {
  return (
    <section>
      <Container className="relative lg:pt-[309px] xl:pt-[205px] pt-[180px] xl:px-[350px] px-7 xl:my-[120px] my-[80px]">
        <img
          src={Latestbgresource}
          alt=""
          className="w-full h-full absolute top-0 left-0 z-0"
        />
        <div className=" relative z-50 flex justify-center">
          <div className="">
            <h2 className="lg:text-[72px] text-[44px] text-[#FBFBFF] font-normal uppercase lg:leading-[64px] leading-10 text-center pb-[34px]">
              say updated with{" "}
              <span className="font-bold text-primaryColor">latest</span> news/
              guides!
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <input
                type="email"
                placeholder="enter email"
                className="p-5 bg-transparent text-[16px] text-[#FBFBFF] font-medium uppercase border border-[#FBFBFF] outline-none lg:w-[296px] w-[197px] h-[50px]"
              />
              <button
                type="button"
                className="text-[#000] border bg-primaryColor border-none text-[16px] font-bold uppercase lg:w-[126px] w-[103px] h-[50px]"
              >
                get started
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Latestnews;
