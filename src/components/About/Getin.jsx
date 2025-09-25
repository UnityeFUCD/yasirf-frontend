import { Getinframe, Light, Lightgt } from "@/assets";
import Container from "@/pages/Shared/Container";
import React from "react";
const Getin = () => {
  return (
    <section className="">
      <Container className="lg:py-[72px] py-[55px] border-b border-[rgba(251,251,255,0.23)] bg-gradient-to-b from-[#05091D] via-[#05091D]/80 to-[#05091D]/0 relative lg:h-[500px] h-full lg:px-[150px] px-9">
        <div className="lg:flex justify-between items-center relative z-50">
          <h2 className="lg:text-[56px] text-[32px] lg:pb-0 pb-8 font-normal text-[#FBFBFF] text-center uppercase">
            get in touch
          </h2>
          <div className="">
            <div className="lg:flex gap-5">
              <div className="">
                <input
                  type="text"
                  placeholder="full name"
                  className="p-5 bg-transparent text-[16px] text-[#FBFBFF] font-normal border border-[#FBFBFF3B] outline-none lg:w-[260px] w-full lg:h-[72px] h-[62px] uppercase"
                />
              </div>

              <div className="">
                <input
                  type="text"
                  placeholder="email*"
                  className="p-5 bg-transparent text-[16px] text-[#FBFBFF] font-normal border border-[#FBFBFF3B] outline-none lg:w-[260px] w-full lg:h-[72px] h-[62px] uppercase lg:mt-0 mt-5"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="subject*"
                className="p-5 bg-transparent text-[16px] text-[#FBFBFF] font-normal border border-[#FBFBFF3B] outline-none lg:w-[541px] w-full lg:h-[72px] h-[62px] uppercase mt-5"
              />
              <input
                type="text"
                placeholder="message*"
                className="p-5 bg-transparent text-[16px] text-[#FBFBFF] font-normal border border-[#FBFBFF3B] outline-none lg:w-[541px] w-full lg:h-[72px] h-[62px] uppercase"
              />
              <button
                type="button"
                className="text-[#000] text-[16px] font-bold uppercase lg:w-[126px] w-full h-[50px] bg-primaryColor"
              >
                get started
              </button>
            </div>
          </div>
        </div>
        <img src={Lightgt} alt="light" className="absolute lg:bottom-0 lg:-left-10 bottom-10 right-0 lg:block hidden " />
        <div className="absolute bottom-0 right-0 lg:hidden block size-[200px] bg-primaryColor blur-[200px] opacity-60" />

        <img src={Getinframe} alt="Getinframe" className="absolute top-0 left-0 h-full w-full z-0"/>
      </Container>
    </section>
  );
};

export default Getin;
