import React from "react";
import Boostercard from "../DynamicComponents/jointeamcard/Boostercard";
import { card1, card2, card3, card4, card5, card6, card7, gamePhoto } from "@/assets";
import { Button } from "../ui/button";
import Container from "@/pages/Shared/Container";

const Booster = () => {
  return (
    <section className='bg-[#05091D] pt-[22px] pb-[115px] relative  px-4'>
      <Container className='lg:px-[150px]'>
      <div className="flex flex-wrap justify-center gap-6 z-20">
          <Boostercard title="value" imgSrc={gamePhoto} />
          <Boostercard title="world of warcraft" imgSrc={card6} />
          <Boostercard title="path of exile 2" imgSrc={card7} />
          <Boostercard title="Wow cataclysm" imgSrc={card2} />
          <Boostercard title="diablo 4" imgSrc={card4} />
          <Boostercard title="marvel rivals" imgSrc={card3} />
          <Boostercard title="call of duty" imgSrc={card1} />
          <Boostercard title="new world" imgSrc={card5} />
        </div>
        <div className="flex justify-center mt-[58px] pb-[46px]">
          <Button className="px-6 bg-[#C8FF00] h-[50px] text-[#000] text-[16px] font-bold uppercase rounded-none cursor-pointer z-50 ">
            get started
          </Button>
        </div>
        <p className="text-[#FBFBFF] text-[24px] text-center font-normal uppercase">
          Scroll down and see why Vanguard Boost is the best choice for
          boosters.
        </p>
      </Container>
    </section>
  );
};

export default Booster;
