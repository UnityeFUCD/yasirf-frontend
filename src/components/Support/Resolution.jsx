import { Resolutionbg } from "@/assets";
import Container from "@/pages/Shared/Container";
import React from "react";

const Resolution = () => {
  return (
    <section className="bg-[#05091D]">
      <Container>
        <div className="flex">
          <img src={Resolutionbg} alt="Resolutionbg" />
          <div className="rounded-md bg-gradient-to-b from-[#1A1D30] via-[#1A1D30]/72 to-[#1A1D30]/0 mt-[120px] p-5 w-[645px] h-[357px]">
            <h2 className=" text-[#FBFBFF] text-[56px] leading-[50px] font-bold uppercase">
            Easy Resolution for your Issues
            </h2>
            <p className="text-[18px] font-normal text-[#FBFBFF] opacity-50 py-4">
            If you encounter any issues with your payment or booster after marking your order as complete, our ticket system is here to help. Simply submit a service ticket detailing your problem, and our dedicated agents will review your case and get in touch to resolve it promptly. We're committed to ensuring your experience is smooth and satisfactory!
            </p>
            <button
              type="button"
              className="text-black border border-primaryColor bg-primaryColor text-[16px] font-bold uppercase w-[126px] h-[50px]"
            >
              get started
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Resolution;
