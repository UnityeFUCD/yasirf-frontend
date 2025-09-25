import { Boostingbg, Boostingbg1 } from "@/assets";
import Container from "@/pages/Shared/Container";
import React from "react";

const Boosting = () => {
  return (
    <section className="relative">
      <Container className='lg:pr-[152px] overflow-hidden'>
        <div className="lg:flex justify-between items-center gap-x-[92px]">
          <div className="lg:w-1/2 w-full">
            <img src={Boostingbg} alt="boostingbg" />
          </div>
          <div className="lg:w-2/5 w-full lg:px-0 px-4">
            <p className="lg:text-[28px] text-[18px] font-normal text-[#FBFBFF] lg:leading-[37px] leading-6 lg:mt-0 mt-5">
              Boosting can significantly enhance your{" "}
              <span className="text-primaryColor font-bold font-Manpore">
                in-game
              </span>{" "}
              experience by helping you achieve goals faster and access better
              gear. However, it can also impact the sense of accomplishment and{" "}
              <span className="text-primaryColor font-bold font-Manpore">
                progression
              </span>{" "}
              you get from completing challenges on your own.
            </p>
          </div>
        </div>
      </Container>
      <img
        src={Boostingbg1}
        alt="boosting background"
        className="absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 h-full"
        style={{
          background: `radial-gradient(
      50% 50% at 50% 50%, 
      rgba(5,9,29,0.00) 0%, 
      rgba(5, 9, 29, 0.27) 34%, 
 
    ), url(<path-to-image>) lightgray -244.672px -43.489px / 169.312% 114.894% no-repeat`,
          mixBlendMode: "lighten",
        }}
      />
    </section>
  );
};

export default Boosting;
