import { JObimg, kotation, Man } from "@/assets";
import Marquee from "react-fast-marquee";
import Marqueeitem from "../DynamicComponents/jointeamcard/Marqueeitem";
import { useState } from "react";
import Container from "@/pages/Shared/Container";

const Job = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <section className="lg:pt-[106px] lg:pb-[101px] px-4 pt-[82px] relative">
      <Container >
        <div className="relative z-50">
          <img
            src={kotation}
            alt="kotation"
            className="absolute top-[120px] left-[220px] lg:block hidden"
          />
          <h2 className="lg:text-[56px] text-[32px] text-[#FBFBFF] font-normal uppercase text-center leading-8">
            perfect job For <span className="font-bold">Gamers</span>
          </h2>
          <div className="lg:py-[64.82px] pt-[10px] lg:w-[688px] w-full mx-auto">
            <h3 className="lg:text-[24px] text-[20px] lg:text-start text-center text-[#FBFBFF] font-Manpore font-normal leading-6">
              Amazing experience! The payouts are super easy and on time.
              Definitely recommended to the skilled gamers!
            </h3>
            <div className="flex lg:justify-start justify-center gap-4 lg:mt-[26.54px] mt-[19px]">
              <img
                src={Man}
                alt="man"
                className="h-[61.74px] w-[61.74px] rounded-full"
              />
              <div>
                <h4 className="text-[24px] text-[#FBFBFF] font-medium capitalize">
                  Arlene McCoy
                </h4>
                <p className="text-[16px] text-[#FBFBFF] font-normal uppercase">
                  current booster level 3
                </p>
              </div>
            </div>
          </div>
        </div>
      
      </Container>
      <img
          src={JObimg}
          alt="JObimg"
          className="w-full absolute top-0 left-0 z-0 h-full object-cover"
        />
        <div className="flex justify-between mt-[64.82px] cursor-pointer">
          <Marquee
            className="space-x-2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            pauseOnHover
            speed={100}
          >
            <Marqueeitem />
            <Marqueeitem />
            <Marqueeitem />
            <Marqueeitem />
            <Marqueeitem />
          </Marquee>
        </div>
    </section>
  );
};

export default Job;
