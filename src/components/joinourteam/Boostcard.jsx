import React from "react";
import NotBoostcard from "../DynamicComponents/jointeamcard/NotBoostcard";
import Container from "@/pages/Shared/Container";

const Boostcard = () => {
  return (
    <section className="lg:pt-[133px] lg:pb-[97px] pt-[64px] pb-[107px] px-4 bg-[#05091D] relative overflow-hidden">
      <Container className='lg:pl-[150px] '>
        <h2 className="lg:text-[56px] text-[32px]  text-[#FBFBFF] font-normal uppercase text-center">
          not a <span className="font-bold">booster?</span>
          <p className="text-[16px] text-[#FBFBFF] font-normal font-Manpore pb-[58px]">
            No problem. You can still join us with the skills you mastered at.
          </p>
        </h2>
        <div className="flex flex-wrap xl:justify-start justify-center gap-6 relative z-50">
          <NotBoostcard title="data scientist" />
          <NotBoostcard title="human resources" />
          <NotBoostcard title="human resources" />
          <NotBoostcard title="HR" />
          <NotBoostcard title="HR" />
          <NotBoostcard title="customer service" />
          <NotBoostcard title="customer service" />
        </div>
        <div className="absolute lg:top-[30%]  lg:left-20 top-[375px] left-0  h-[312px] w-[333px] bg-primaryColor blur-[200px] opacity-50 rounded-[333px] z-0" />
      </Container>
    </section>
  );
};

export default Boostcard;
