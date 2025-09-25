import { Pipe } from "@/assets";
import Container from "@/pages/Shared/Container";
import React from "react";

const Metrics = () => {
  return (
    <section className="">
      <Container className="relative bg-[#05091D] pt-[123px] pb-[71px]">
        <h2 className=" text-[#FBFBFF] text-[56px] leading-[50px] font-bold uppercase text-center">
          Easy Resolution for your Issues
        </h2>
        <div className="flex justify-between  mt-[112px] leading-[50px] px-[150px] relative">
          <div className="pr-24">
            <h2 className="text-[56px] font-normal uppercase text-[#FBFBFF] w-[421px]">
              our <span className="font-bold">verification</span> process
            </h2>
            <p className="text-[18px] font-normal text-[#FBFBFF] opacity-50 py-4 leading-[27px] w-[500px]">
              At tempor aliquam quis mus ornare. Sapien velit magna dui lorem
              id. Turpis ultricies facilisis nec leo.
            </p>
            <button
              type="button"
              className="text-black border border-primaryColor bg-primaryColor text-[16px] font-bold uppercase w-[126px] h-[50px]"
            >
              get started
            </button>
          </div>
          <div className="flex flex-col gap-[56px] ml-12">
            <div className="">
              <h3 className="text-[#FBFBFF] text-[32px] font-bold uppercase w-[492px] leading-[28px]">
                interview for communication and skills
              </h3>
              <p className="text-[18px] font-normal text-[#FBFBFF] opacity-50 pt-[6px] leading-[27px] w-[500px]">
                At tempor aliquam quis mus ornare. Sapien velit magna dui lorem
                id. Turpis ultricies facilisis nec leo.
              </p>
            </div>
            <div className="">
              <h3 className="text-[#FBFBFF] text-[32px] font-bold uppercase w-[492px] leading-[28px]">
                verification of identity via passport/ documents
              </h3>
              <p className="text-[18px] font-normal text-[#FBFBFF] opacity-50 pt-[6px] leading-[27px] w-[500px]">
                At tempor aliquam quis mus ornare. Sapien velit magna dui lorem
                id. Turpis ultricies facilisis nec leo.
              </p>
            </div>
            <div className="">
              <h3 className="text-[#FBFBFF] text-[32px] font-bold uppercase w-[492px] leading-[28px]">
                immediate ban for Any suspicious activity
              </h3>
              <p className="text-[18px] font-normal text-[#FBFBFF] opacity-50 pt-[6px] leading-[27px] w-[500px]">
                At tempor aliquam quis mus ornare. Sapien velit magna dui lorem
                id. Turpis ultricies facilisis nec leo.
              </p>
            </div>
          </div>
          <img src={Pipe} alt="Pipe" className="h-[361px] absolute top-0 left-[53%] -translate-x-[53%]" />
        </div>
        <div className="w-[300px] h-[373px] rounded-[399px] opacity-25 bg-[#C8FF00] blur-[150px] absolute bottom-24 left-0 z-10"></div>
    
      </Container>
    </section>
  );
};

export default Metrics;
