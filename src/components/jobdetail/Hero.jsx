import { Bar, Dolar, Jobdetailbg, Jobright } from "@/assets";
import React from "react";
import { Clock } from "lucide-react";
import { MapPin } from "lucide-react";
import Container from "@/pages/Shared/Container";

const Hero = () => {
  return (
    <section>
      <Container className="pt-[216px] pb-10 relative lg:px-[150px] px-4">
        <div className="lg:flex justify-between items-center relative z-10">
          <div className=" ">
            <h3 className="text-[#FBFBFF] lg:text-[52px] text-[30px] font-bold uppercase">
              Join as data scientist
            </h3>
            <div className="flex gap-x-4 pt-8 pb-[44px]">
              <div className="flex gap-x-2 items-center">
                <Clock className="h-6 w-6 text-[#FBFBFF] " />
                <p className="text-[#FBFBFF] text-[16px] uppercase font-medium">
                  full time
                </p>
              </div>
              <div className="flex gap-x-2 items-center">
                <MapPin className="h-6 w-6 text-[#FBFBFF] " />
                <p className="text-[#FBFBFF] text-[16px] uppercase font-medium">
                  Los Angeles
                </p>
              </div>
            </div>
            <h4 className="text-[#fff] text-[24px] uppercase font-bold">
              starting $5,000/m
            </h4>
          </div>
          <div className="relative h-[294px] lg:w-[377px] w-full lg:mt-0 mt-[79px]">
            <div className="relative z-10 p-8 py-5 px-4">
              <div className="flex gap-x-2 items-center">
                <Clock className="h-6 w-6 text-[#FBFBFF] " />
                <p className="text-[#FBFBFF] text-[16px] uppercase font-medium">
                  full time
                </p>
              </div>
              <div className="flex gap-x-2 items-center py-5">
                <MapPin className="h-6 w-6 text-[#FBFBFF] " />
                <p className="text-[#FBFBFF] text-[16px] uppercase font-medium">
                  Los Angeles
                </p>
              </div>
              <div className="flex gap-x-2 items-center">
                <img src={Bar} alt="Bar" className="h-6 w-6 text-[#FBFBFF] " />

                <p className="text-[#FBFBFF] text-[16px] uppercase font-medium">
                  Data science and technology
                </p>
              </div>
              <div className="flex gap-x-2 items-center pt-5 pb-6">
                <img
                  src={Dolar}
                  alt="Dolar"
                  className="h-6 w-6 text-[#FBFBFF] "
                />
                <p className="text-[#FBFBFF] text-[16px] uppercase font-medium">
                  $5,000/m
                </p>
              </div>
              <button className="lg:w-[313px] w-full h-[50px]  text-black bg-primaryColor text-[16px] font-bold uppercase">
                get started
              </button>
            </div>
            <img
              src={Jobright}
              alt="Jobright"
              className=" absolute h-full top-0  w-full z-0"
            />
          </div>
        </div>
        <img
          src={Jobdetailbg}
          alt="jobdetailbg"
          className="w-full absolute top-0 left-0 z-0 h-full object-cover"
        />
      </Container>
    </section>
  );
};

export default Hero;
