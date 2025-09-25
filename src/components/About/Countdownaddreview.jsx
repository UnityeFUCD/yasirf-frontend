import { Line, Net } from "@/assets";
import Container from "@/pages/Shared/Container";
import React from "react";
import { StarIcon2 } from "../Icons/HomeIcon";
import { IoStar } from "react-icons/io5";
import { Link } from "react-router";

const Countdownaddreview = () => {
  return (
    <>
      <section className="bg-background mx-auto relative overflow-hidden">
        <div className="bg-[#A10C98]/20 mx-auto pt-[103px] pb-[70px]">
          <Container>
            <div className="flex justify-between gap-x-20">
              <div className="">
                <h3
                  className="text-[120px] uppercase font-normal text-[#FBFBFF] leading-[108px]
                    "
                >
                100%
                </h3>
                <p className="text-[24px] uppercase font-semibold text-[#FBFBFF] pt-[22px]">
                service assurance
                </p>
              </div>
              <div className="">
                <h3
                  className="text-[120px] uppercase font-normal text-[#FBFBFF] leading-[108px]
                    "
                >
                  100+
                </h3>
                <p className="text-[24px] uppercase font-semibold text-[#FBFBFF] pt-[22px]">
                verified boosters
                </p>
              </div>
              <div className="">
                <h3
                  className="text-[120px] uppercase font-normal text-[#FBFBFF] leading-[108px]
                    "
                >
                  100%
                </h3>
                <p className="text-[24px] uppercase font-semibold text-[#FBFBFF] pt-[22px]">
                safe
                </p>
              </div>
            
            </div>
            <div className="pt-[96px] w-[350px] mx-auto">
              
              <div className="flex  gap-[12px] pt-[10px]">
                <p className="text-[16px] font-normal font-Manpore text-[#FFF] opacity-50 flex gap-1 items-center">
                <IoStar className="fill-[#00B67A] opacity-100"/> Be the first to leave a review!
                </p>
                <Link to="" className="text-[16px] text-[#00B67A] font-Manpore font-medium underline">Add Review</Link>
              </div>
            </div>
          </Container>
          <div className="absolute bottom-0 left-0 size-[200px] bg-primaryColor blur-[200px]" />
          <div className="absolute -top-36 right-[550px] size-[200px] bg-primaryColor blur-[200px]" />
          <div className="absolute bottom-[120px] right-0 h-full">
            <img src={Net} alt="net" />
          </div>
          <div className="absolute bottom-0 left-0">
            <img src={Line} alt="line" />
          </div>
          <p className="absolute bottom-[137px] -left-2 transform rotate-90 text-[14px] text-[#FBFBFF] font-normal uppercase">
            our stats
          </p>
        </div>
      </section>
    </>
  )
}

export default Countdownaddreview
