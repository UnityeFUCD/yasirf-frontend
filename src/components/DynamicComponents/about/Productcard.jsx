import React from "react";

const Productcard = ({ Icon, para,parawidth="w-[151px]" }) => {
  return (
    <>
      <div className="">
      {Icon && <Icon className="mr-12" />}
        <h4 className={`text-[16px] text-[#FBFBFF] font-normal font-Manpore leading-6 opacity-70 text-start ${parawidth}`}>
          {para}
        </h4>
      </div>
    </>
  );
};

export default Productcard;
