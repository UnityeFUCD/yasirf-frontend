import React from "react";
import { Revolutionbg } from "@/assets";
import { HiCurrencyDollar } from "react-icons/hi2";
import { Mail } from "lucide-react";
import { Network } from "lucide-react";
import { Gem } from "lucide-react";
import { RiSecurePaymentFill } from "react-icons/ri";
import Container from "@/pages/Shared/Container";

const Revolution = () => {
  return (
    <section className="lg:pt-[125px] lg:pb-[170px]  pt-[84px] pb-[114px] relative">
      <Container className='lg:px-[150px] px-4 '>
        <div className="relative z-50">
          <h2 className="lg:text-[100px] xs:text-[60px] text-[40px] lg:leading-[100%] leading-[54px] text-[#FBFBFF] font-normal uppercase w-full">
            join the
            <span className="font-bold text-primaryColor"> revolution!</span>
          </h2>
          <div className="flex flex-wrap lg:gap-x-[51px] gap-6 mt-[54px]">
            <div className="">
              <div className="flex gap-x-6 items-center">
                <div className="h-[44px] w-[44px] rounded-full bg-primaryColor flex justify-center items-center">
                  <HiCurrencyDollar className="h-[30px] w-[30px]" />
                </div>
                <h3 className="lg:text-[24px] text-[18px] text-[#FBFBFF] uppercase font-medium">
                  transparent pricing
                </h3>
              </div>
              <div className="flex gap-x-6 items-center lg:mt-[35px] mt-5">
                <div className="h-[44px] w-[44px] rounded-full bg-primaryColor flex justify-center items-center">
                  <RiSecurePaymentFill className="w-[30px] h-[30px]" />
                </div>
                <h3 className="lg:text-[24px] text-[18px] text-[#FBFBFF] uppercase font-medium">
                  flexible payment options
                </h3>
              </div>
            </div>
            <div className="">
              <div className="flex gap-x-6 items-center ">
                <div className="h-[44px] w-[44px] rounded-full bg-primaryColor flex justify-center items-center">
                  <Mail className="h-[30px] w-[30px]" />
                </div>
                <h3 className="lg:text-[24px] text-[18px] text-[#FBFBFF] uppercase font-medium">
                  automated payouts
                </h3>
              </div>
              <div className="flex gap-x-6 items-center lg:mt-[35px] mt-5">
                <div className="h-[44px] w-[44px] rounded-full bg-primaryColor flex justify-center items-center">
                  <Gem className="h-[30px] w-[30px]" />
                </div>
                <h3 className="lg:text-[24px] text-[18px] text-[#FBFBFF] uppercase font-medium">
                  supports USDT
                </h3>
              </div>
            </div>
          </div>
          <button className="lg:h-[69px] h-[66px] lg:w-[181px] w-[153px] bg-[#C8FF00] text-[#000] text-[24px] font-bold uppercase  mt-[73px]">
            get started
          </button>
        </div>
        
      </Container>
      <img
          src={Revolutionbg}
          alt="Revolutionbg"
          className="w-full absolute top-0 left-0 z-0 h-full object-cover"
        />
    </section>
  );
};

export default Revolution;
