import { Ourstorybg } from "@/assets";
import Container from "@/pages/Shared/Container";
import React from "react";

const Ourstory = () => {
  return (
    <section className="">
      <Container className='bg-[#05091D] lg:py-[140px] lg:pl-[150px]'>
        <div className="relative">
          <img src={Ourstorybg} alt="Ourstorybg" className="w-full" />
          <h2 className="lg:text-[100px] text-[52px] font-normal text-[#FBFBFF] uppercase  leading-[61px] absolute lg:bottom-14 left-1/2 -translate-x-1/2 bottom-0 text-nowrap">
            our <span className="font-bold"> story</span>
          </h2>
        </div>
        <div className="lg:flex justify-between gap-x-10 lg:mt-[41px] mt-7 lg:w-[1138px] w-full lg:px-0 px-4">
        <p className="text-[18px] text-[#FBFBFF] font-normal leading-[27px] opacity-50 lg:w-[362px] w-full">We grew up together with World of Warcraft. The game gave us friends and partners, adrenaline, fun and of course loads of nerves. The game taught us to set goals and achieve them. Taught us to work in a team and think tactically.</p>
        <p className="text-[18px] text-[#FBFBFF] font-normal leading-[27px] opacity-50 lg:w-[352px] lg:py-0 py-6 w-full">We earned our first significant money thanks to WoW back in the times we were teens. Our marketing director worked in McDonald's in the daytime, and in the evenings he boosted people to Gladiator. At some moment it became clear that selling burgers was useless since his monthly salary could be earned in 3 evenings of playing arena! :</p>
        <p className="text-[18px] text-[#FBFBFF] font-normal leading-[27px] opacity-50 lg:w-[352px] w-full">From simple boosters, we transformed then to shop owners: since 2013 the members of our team have had a chance to work with 6 boosting websites - as partners, developers and/or marketers.
        </p>
        </div>
      </Container>
    </section>
  );
};

export default Ourstory;
