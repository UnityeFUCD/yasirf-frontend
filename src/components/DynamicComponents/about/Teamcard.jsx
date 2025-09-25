import React from "react";
import { Teammate } from "@/assets";
import { FaDiscord } from "react-icons/fa";

const Teamcard = () => {
  return (
    <div className="bg-gradient-to-t from-[#161A31] to-transparent p-3 lg:w-[267px] w-full rounded-lg">
      <div className="flex justify-center">
        <img src={Teammate} alt="teammate" className="w-[134px] h-[134px]"/>
      </div>
      <h3 className="lg:text-[20px] text-[16px] uppercase font-bold text-[#FBFBFF] lg:pt-[46px] pt-6" >
        Cameron Williamson
      </h3>
      <p className="lg:text-[16px] text-[14px] text-[#FBFBFF] uppercase font-medium opacity-60 lg:pt-1 pt-0">
        Product Manager
      </p>
      <div className="flex justify-end">
        <div className="h-[35px] w-[35px] flex justify-center items-center rounded-full bg-primaryColor cursor-pointer">
          <FaDiscord className="w-[17px] h-[13px] " />
        </div>
      </div>
    </div>
  );
};

export default Teamcard;
