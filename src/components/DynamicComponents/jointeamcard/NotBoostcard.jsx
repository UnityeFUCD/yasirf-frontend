import React from "react";
import { logo, Teamimg } from "@/assets";
import { Clock4 } from "lucide-react";
import { MapPin } from "lucide-react";
import { ChevronRight } from "lucide-react";
const NotBoostcard = ({ title}) => {
  return (
    <>
      <div className={`lg:h-[250px] lg:w-[267px] w-full bg-gradient-to-t from-[#1b213f] to-transparent shadow-md py-[11px] px-3 rounded-md relative z-50`}>
        <div className="bg-[#FBFBFF0A] rounded-[6px] pt-[17px] px-[16px] pb-[14px] flex justify-between items-center lg:w-[243px] w-full">
          <img
            src={logo}
            alt="logo"
            className="border-r-2 border-gray-100 w-[100px] xs:w-[135px] pr-5"
          />
          <img src={Teamimg} alt="Teamimg" className="xs:w-[51px] w-10"/>
        </div>
        <h3 className="text-[20px] font-bold uppercase text-[#FBFBFF] pt-[17px] text-start">
          {title}
        </h3>
        <div className="flex gap-x-[8px] items-center my-2">
          <Clock4 className="h-6 w-6 text-[#FBFBFF] opacity-[0.75]" />
          <p className="text-[#FBFBFF] text-[16px] uppercase font-medium opacity-[0.75]">
            full time
          </p>
        </div>
        <div className="flex gap-x-[8px] items-center my-2">
          <MapPin className="h-6 w-6 text-[#FBFBFF] opacity-[0.75]" />
          <p className="text-[#FBFBFF] text-[16px] uppercase font-medium opacity-[0.75]">
            Los Angeles
          </p>
        </div>
        <div className="flex justify-end cursor-pointer">
          <div className="h-[35px] w-[35px] rounded-full bg-primaryColor flex justify-center items-center">
            <ChevronRight className="w-[16px] h-[16px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NotBoostcard;
