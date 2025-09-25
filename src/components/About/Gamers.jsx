import { Gamersbg } from "@/assets";
import Container from "@/pages/Shared/Container";
import React from "react";
import { Button } from "../ui/button";

const Gamers = () => {
  return (
    <section className="">
      <Container className='bg-[#05091D] relative xl:pl-[150px] lg:pl-[150px]  lg:pb-0 pb-[100px]'>
        <div className="lg:pt-[153px] pt-[83px] lg:w-[567px] w-full flex flex-col gap-[12px] relative z-50 px-4">
          <h2 className="lg:text-[56px] text-[32px] font-normal text-[#FBFBFF] uppercase  lg:leading-[61px] leading-[35px]">
            From Gamers to <span className="font-bold"> Boosting Pros</span>
          </h2>
          <p className="lg:text-[18px] text-[16px] text-[#FBFBFF] font-normal leading-[27px] opacity-50">
            Boosting can significantly enhance your in-game experience by
            helping you achieve goals faster and access better gear. However, it
            can also impact the sense of accomplishment and progression you get
            from completing challenges on your own.
          </p>
          <p className="lg:text-[18px] text-[16px] text-[#FBFBFF] font-normal leading-[27px] opacity-50">
            Destiny 2 boosting is a service where a professional player helps
            you achieve specific in-game goals, such as leveling up, completing
            difficult missions, acquiring rare gear, or increasing your rank in
            competitive modes.
          </p>
        </div>
        <Button className="bg-[#C8FF00] h-[50px] w-[126px] text-[#000] text-[16px] font-bold uppercase rounded-none cursor-pointer mt-[30px] ml-4 block relative z-50">
          get started
        </Button>
        <img src={Gamersbg} alt="Gamersbg" className="lg:hidden -block mt-4 h-[378px] w-full"/>
        <img
        src={Gamersbg}
        alt="Gamersbg"
        className="absolute top-0 right-0 h-full lg:block hidden"
      />
      </Container>
      
    </section>
  );
};

export default Gamers;
