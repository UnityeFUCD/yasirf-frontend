import React from "react";

const Resourceherocard = ({ title, number, bgimg, bg,cxustomWidth }) => {
  return (
    <div className={`pt-[35px] pb-[10px] px-[14px] flex gap-x-[10px] items-center relative hover:border  hover:border-primaryColor rounded-[4px] border-opacity-30 duration-300 ease-in-out cursor-pointer border border-transparent ${cxustomWidth} h-[65px]`}>
      <h3 className="text-[14px] font-medium uppercase text-[#FBFBFF]  relative z-50 text-nowrap">
        {title}
      </h3>
      <div
        className={`h-6 w-6 rounded-[24px] ${bg} flex justify-center items-center  relative z-50`}
      >
        <p className="text-[#FBFBFF]">{number}</p>
      </div>
      <img
        src={bgimg}
        alt=""
        className="absolute top-0 left-0 z-0 h-full w-full"
      />
    </div>
  );
};

export default Resourceherocard;
