import { Gamecard } from "@/assets";
import React from "react";

const Votecard = () => {
  return (
    <div className="w-[200px] h-[233px] relative px-[17px]  pt-[166px] pb-[21px] cursor-pointer">
      <div className="relative z-50">
        <p className="text-[12px] uppercase text-primaryColor font-semibold">
          1.1K requests
        </p>
        <h3 className="text-[20px] uppercase font-bold text-[#FBFBFF] ">
          path of exile 2
        </h3>
      </div>
      <img
        src={Gamecard}
        alt="Gamecard"
        className="absolute top-0 left-0 h-full w-full z-0 rounded-lg hover:border hover:border-primaryColor border-opacity-10"
      />
    </div>
  );
};

export default Votecard;
