import { Line, Net } from "@/assets";
import Container from "@/pages/Shared/Container";
import React from "react";
import { StarIcon2 } from "../Icons/HomeIcon";
import { IoStar } from "react-icons/io5";
import { Link } from "react-router";

const Countdown = () => {
  return (
    <>
      <section>
        <Container className="bg-[#A10C98]/20 mx-auto pt-[103px] pb-[70px] relative lg:px-[150px] px-4 overflow-hidden">
          <div className="flex flex-wrap lg:justify-between justify-center gap-x-20 lg:px-0 xs:px-[102px] px-[50px]">
            <div className="">
              <h3
                className="lg:text-[120px] text-[68px] uppercase font-normal text-[#FBFBFF] leading-[108px]
                    lg:text-start text-center"
              >
                1.6K+
              </h3>
              <p className="lg:text-[24px] text-[20px] uppercase font-semibold text-[#FBFBFF] pt-[22px] text-nowrap">
                Daily Game Users
              </p>
            </div>
            <div className="">
              <h3
                className="lg:text-[120px] text-[68px] uppercase font-normal text-[#FBFBFF] leading-[108px]
                   lg:text-start text-center"
              >
                100%
              </h3>
              <p className="lg:text-[24px] text-[20px] uppercase font-semibold text-[#FBFBFF] pt-[22px] text-nowrap">
                service assurance
              </p>
            </div>
            <div className="">
              <h3
                className="lg:text-[120px] text-[68px] uppercase font-normal text-[#FBFBFF] leading-[108px]
                   lg:text-start text-center "
              >
                100+
              </h3>
              <p className="lg:text-[24px] text-[20px] uppercase font-semibold text-[#FBFBFF] pt-[22px] text-nowrap">
                verified boosters
              </p>
            </div>
            <div className="">
              <h3
                className="lg:text-[120px] text-[68px] uppercase font-normal text-[#FBFBFF] leading-[108px]
                   lg:text-start text-center "
              >
                3+
              </h3>
              <p className="lg:text-[24px] text-[20px] uppercase font-semibold text-[#FBFBFF] pt-[22px] text-nowrap">
                years of love
              </p>
            </div>
          </div>
          <div className="lg:pt-[96px] pt-[58px] flex justify-center">
          <div className="">
            <div className="flex items-center gap-[15px]">
              <p className="text-[16px] text-[#FBFBFF] uppercase font-bold font-Manpore">
                excellent
              </p>
              <div className="flex gap-1">
                <StarIcon2 />
                <StarIcon2 />
                <StarIcon2 />
                <StarIcon2 />
                <StarIcon2 />
              </div>
            </div>
            <div className="flex  gap-[12px] pt-[10px]">
              <p className="text-[16px] font-normal font-Manpore text-[#FFF] opacity-50 flex gap-1 items-center">
                240+ reviews on{" "}
                <IoStar className="fill-[#00B67A] opacity-100" />
                Trustpilot
              </p>
              <Link
                to=""
                className="text-[16px] text-[#00B67A] font-Manpore font-medium underline"
              >
                See all
              </Link>
            </div>
          </div>
          </div>
          <div className="absolute lg:bottom-0 lg:left-0 -bottom-20 left-0 size-[200px] bg-primaryColor blur-[200px]" />
          <div className="absolute lg:-top-36 lg:right-[550px] top-32 -right-20 size-[200px] bg-primaryColor blur-[200px]" />
          <div className="absolute bottom-[120px] right-0 h-full">
            <img src={Net} alt="net" className="lg:block hidden" />
          </div>
          <div className="absolute bottom-0 left-0 lg:block hidden">
            <img src={Line} alt="line" />
          </div>
          <p className="absolute bottom-[137px] -left-2 transform rotate-90 text-[14px] text-[#FBFBFF] font-normal uppercase lg:block hidden">
            our stats
          </p>
        </Container>
      </section>
    </>
  );
};

export default Countdown;
