import React from "react";
import { Why } from "@/assets";
import { DollarSign } from "lucide-react";
import { Mail } from "lucide-react";
import { Network } from "lucide-react";
import Container from "@/pages/Shared/Container";

const Whyboost = () => {
  return (
    <>
      <section className="relative lg:pt-[128px] lg:pb-[146px]  px-4 py-[90px]">
        <Container className=' lg:px-[150px]'>
          <div className="relative z-50">
            <h2 className="lg:text-[56px] text-[32px] text-[#FBFBFF] font-normal uppercase text-center">
              Why <span className="font-bold">Vanguard boost?</span>
            </h2>
            <div className="lg:flex justify-between pt-[75px] pb-8">
              <div className="lg:w-[356px] w-full h-[118px]">
                <div className="h-[36px] w-[36px] rounded-full bg-primaryColor flex justify-center items-center">
                  <DollarSign className="" />
                </div>
                <h3 className="pt-[24px] pb-[8px] text-[24px] text-[#FBFBFF] uppercase font-medium">
                  high payouts
                </h3>
                <p className="text-[20px] text-[#FBFBFF] font-normal leading-[24px] font-Manpore">
                  Earn industry-leading percentages.
                </p>
              </div>
              <div className="lg:w-[356px] w-full h-[118px] lg:my-0 mt-10">
                <div className="h-[36px] w-[36px] rounded-full bg-primaryColor flex justify-center items-center">
                  <Mail className="" />
                </div>
                <h3 className="pt-[24px] pb-[8px] text-[24px] text-[#FBFBFF] uppercase font-medium">
                  fast Payments
                </h3>
                <p className="text-[20px] text-[#FBFBFF] font-normal leading-[24px] font-Manpore">
                  Quick and seamless payout process.
                </p>
              </div>
              <div className="lg:w-[356px] w-full h-[118px] lg:mt-0 mt-16">
                <div className="h-[36px] w-[36px] rounded-full bg-primaryColor flex justify-center items-center">
                  <Network className="" />
                </div>
                <h3 className="pt-[24px] pb-[8px] text-[24px] text-[#FBFBFF] uppercase font-medium">
                  Boosting Network
                </h3>
                <p className="text-[20px] text-[#FBFBFF] font-normal leading-[24px] font-Manpore">
                  Build and grow your boosting career with our support.
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-x-9 lg:mt-0 mt-5">
              <button className="h-[50px] w-[126px] bg-[#C8FF00] text-[#000] text-[16px] font-bold uppercase my-[22px]">
                get started
              </button>
              <button className="w-[126px] h-[50px] hover:bg-[#C8FF00] border-2 border-primaryColor text-primaryColor  hover:text-[#000] text-[16px] font-bold uppercase my-[22px]">
                get started
              </button>
            </div>
            <div className="flex flex-col gap-8 mt-[56px]">
              <div className="lg:flex justify-between items-center border-opacity-15 border-b-2 border-gray-50 lg:pb-[68px]">
                <h3 className="lg:text-[44px] text-[28px] font-semibold text-[#FBFBFF]">
                  Automated Processes
                </h3>
                <p className="text-[16px] font-normal lg:w-[508px] w-full leading-[24px] text-[#FBFBFF] lg:py-0 py-6">
                  Our streamlined systems ensure that you spend less time
                  managing tasks and more time doing what you love.
                </p>
              </div>
              <div className="lg:flex justify-between items-center border-opacity-15 border-b-2 border-gray-50 lg:pb-[68px]">
                <h3 className="lg:text-[44px] text-[28px] font-semibold text-[#FBFBFF]">
                  Direct Customer Communication
                </h3>
                <p className="text-[16px] font-normal lg:w-[508px] w-full leading-[24px] text-[#FBFBFF]  lg:py-0 py-6">
                  Connect with clients directly, allowing for personalized
                  service and building lasting relationships.
                </p>
              </div>
              <div className="lg:flex justify-between items-center">
                <h3 className="lg:text-[44px] text-[28px] font-semibold text-[#FBFBFF]">
                  Brand Building
                </h3>
                <p className="text-[16px] font-normal lg:w-[508px] w-full leading-[24px] text-[#FBFBFF]">
                  We help you establish and grow your personal brand within the
                  gaming community, enhancing your visibility and opportunities.
                </p>
              </div>
            </div>
          </div>
        </Container>
        <img
          src={Why}
          alt="why"
          className="w-full absolute top-0 left-0 z-0 h-full object-cover"
        />
      </section>
    </>
  );
};

export default Whyboost;
