import React from "react";

const Ourkeycardright = ({
  heading,
  subheading,
  Icon,
  paragraphwidth = "w-[200px]",
}) => {
  return (
    <>
      <div className="flex gap-x-6">
        <div className="w-[100px] h-[100px] rounded-full flex justify-center items-center border border-[rgba(200,255,0,0.24)] bg-[rgba(174,197,90,0.06)] backdrop-blur-[10px]">
          {Icon && (
            <Icon className="stroke-white group-hover:stroke-primaryColor" />
          )}
        </div>
        <div className="">
          <h4 className="text-[24px] text-[#FBFBFF] font-semibold uppercase">
            {heading}
          </h4>
          <p
            className={`text-[18px] text-[#FBFBFF] font-normal opacity-50 ${paragraphwidth}`}
          >
            {subheading}
          </p>
        </div>
      </div>
    </>
  );
};

export default Ourkeycardright;
