import React from "react";

const Supportcard = ({ Icon, heading, subheading, paragraph }) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <Icon />
        <h2 className="text-[56px] font-normal uppercase text-[#FBFBFF] leading-[50px]">
          {heading} <span className="font-bold">{subheading}</span>
        </h2>
        <p className="text-[18px] font-normal text-[#FBFBFF] opacity-50 py-4 leading-[27px] w-[500px]">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default Supportcard;
