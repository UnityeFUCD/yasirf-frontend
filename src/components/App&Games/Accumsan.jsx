import { Acumsan1, Acumsan2 } from "@/assets";
import Container from "@/pages/Shared/Container";
import React from "react";

const Accumsan = () => {
  return (
    <section className="">
      <Container className="relative">
        <img
          src={Acumsan1}
          alt="Acumsan1"
          className="h-full w-[1298px] mx-auto"
        />
        <img
          src={Acumsan2}
          alt="Acumsan1"
          className="w-[1330px] absolute top-16 left-1/2 -translate-x-1/2"
        />
        <div className="absolute z-50 top-[550px] left-[158px]">
          <p className="text-primaryColor text-[24px] font-bold uppercase">
            1k+ requests
          </p>
          <h2 className="text-[72px] text-[#FBFBFF] font-normal uppercase leading-[64px] pt-3 pb-[27px] w-[595px]">
            Magna nisi <span className="font-bold">accumsan</span> urna
          </h2>
        </div>
        <div className="absolute z-50 top-[550px] right-[230px]">
        <p className="h-[22px] w-[71px] rounded-[24px] border border-[#FBFBFF] border-opacity-35  text-[12px] uppercase font-semibold text-[#000] bg-primaryColor  flex justify-center items-center">
        app/ game
            </p>
          <h6 className="text-[16px] font-Manpore font-normal w-[389px] text-[#FBFBFF] py-3">Pharetra facilisis nibh elit ultrices convallis convallis molestie id proin. Tincidunt nunc maecenas vestibulum et lacinia cras facilisis.</h6>
          <button
              type="button"
              className="text-primaryColor border border-primaryColor text-[16px] font-bold uppercase w-[126px] h-[50px] hover:bg-primaryColor hover:text-black duration-300 ease-in-out"
            >
              get started
            </button>
        </div>
        <img
        src={Acumsan1}
        alt="Acumsan1"
        className="w-full h-full absolute top-14 left-0 "
      />
      </Container>
      
    </section>
  );
};

export default Accumsan;
