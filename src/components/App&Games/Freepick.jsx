import { Freepickbg } from "@/assets";
import Container from "@/pages/Shared/Container";
import React from "react";

const Freepick = () => {
  return (
    <section className="">
      <Container className="relative pt-[604px] pb-[117px]">
        <div className="flex justify-center gap-x-[27.52px] relative z-50">
          <input
            type="text"
            placeholder="enter email*"
            className="p-5 uppercase bg-[#FBFBFF] text-[32px] text-[#05091D] font-medium border border-[#FBFBFF3B] outline-none w-[509px] h-[89px]"
          />
          <button
            type="button"
            className="text-[#05091D] text-[32px] font-bold uppercase w-[238px] h-[89px] bg-primaryColor"
          >
            get started
          </button>
        </div>
        <img
          src={Freepickbg}
          alt="Freepickbg"
          className="absolute top-0 left-0 h-full w-full z-0"
        />
      </Container>
    </section>
  );
};

export default Freepick;
