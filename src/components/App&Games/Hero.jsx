import { Apphero, Net } from "@/assets";
import Container from "@/pages/Shared/Container";
import React from "react";
import Responsivebg from "../../assets/images/appgames/responsiverbg.png";

const Hero = () => {
  return (
    <section className="">
      <Container className="relative lg:pt-[227px] pt-[200px] lg:pb-[143px] pb-[119px] overflow-hidden lg:px-0 px-5">
        <div className="relative z-50">
          <h5 className="lg:text-[24px] text-[18px] text-[#FBFBFF] uppercase font-semibold text-center">
            Vanguard Boost’s{" "}
          </h5>
          <h2 className="text-center lg:text-[100px] text-[52px] text-[#FBFBFF] font-normal uppercase lg:leading-[90px] leading-[46px] lg:pt-[14px] pt-[7px] pb-[10px] lg:pb-4">
            Apps & <span className="text-primaryColor font-bold">Games </span>
            Hub!
          </h2>
          <p className="lg:text-[28px] text-[18px] font-Manpore font-normal text-center text-[#FBFBFF] lg:leading-[37px] leading-6">
            Be among the first to experience our exciting new features!
          </p>
        </div>
        <img
          src={Apphero}
          alt="Apphero"
          className="absolute top-0 left-0 h-full w-full z-0"
        />
        <img
          src={Responsivebg}
          alt="Responsivebg"
          className="absolute top-0 left-0 h-full w-full z-0 lg:hidden block"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#05091D]/50 to-[#05091D] lg:hidden block"></div>
        <img src={Net} alt="Net" className="absolute -top-24 -right-10 lg:block hidden" />
      </Container>
      <div className="absolute lg:-top-20 lg:right-[35%] -top-32 right-0 size-[200px] bg-primaryColor blur-[200px] lg:opacity-10 z-50" />
    </section>
  );
};

export default Hero;
