import { Resourcetabs2 } from "@/assets";
import Container from "@/pages/Shared/Container";
import React from "react";

const Miscellaneous = () => {
  return (
    <section className="">
      <Container className='pt-[93px] bg-[#05091D] lg:px-[150px] px-4'>
        <h2 className=" text-[#FBFBFF] lg:text-[56px] text-[32px] leading-[90px] font-semibold uppercase pb-[22px]">
          Miscellaneous
        </h2>
        <div className="xl:flex justify-between">
          <div className="xl:w-[820px] w-full flex flex-col gap-6">
            <div className="w-full py-[27px] pl-[17px] pr-[50px]  bg-gradient-to-b from-[rgba(22,26,49,0)] to-[#161A31]">
              <p className="text-[#C8FF00] text-[12px] uppercase font-semibold">
                sep 01, 2024
                <span className="text-[#FBFBFF]">| 9 min read</span>
              </p>
              <h3 className="py-2 lg:text-[20px] text-[16px] font-bold uppercase text-[#FBFBFF] leading-[38px]">
                here will be the blog title
              </h3>
              <h6 className="text-[14px] text-[#FBFBFF] font-Manpore font-normal leading-6 opacity-80">
                Pharetra facilisis nibh elit ultrices convallis convallis
                molestie id proin. Tincidunt nunc maecenas vestibulum et lacinia
                cras facilisis.
              </h6>
            </div>
            <div className="w-full py-[27px] pl-[17px] pr-[50px]  bg-gradient-to-b from-[rgba(22,26,49,0)] to-[#161A31]">
              <p className="text-[#C8FF00] text-[12px] uppercase font-semibold">
                sep 01, 2024
                <span className="text-[#FBFBFF]">| 9 min read</span>
              </p>
              <h3 className="py-2 lg:text-[20px] text-[16px] font-bold uppercase text-[#FBFBFF] leading-[38px]">
                here will be the blog title
              </h3>
              <h6 className="text-[14px] text-[#FBFBFF] font-Manpore font-normal leading-6 opacity-80">
                Pharetra facilisis nibh elit ultrices convallis convallis
                molestie id proin. Tincidunt nunc maecenas vestibulum et lacinia
                cras facilisis.
              </h6>
            </div>
            <div className="w-full py-[27px] pl-[17px] pr-[50px]  bg-gradient-to-b from-[rgba(22,26,49,0)] to-[#161A31]">
              <p className="text-[#C8FF00] text-[12px] uppercase font-semibold">
                sep 01, 2024
                <span className="text-[#FBFBFF]">| 9 min read</span>
              </p>
              <h3 className="py-2 lg:text-[20px] text-[16px] font-bold uppercase text-[#FBFBFF] leading-[38px]">
                here will be the blog title
              </h3>
              <h6 className="text-[14px] text-[#FBFBFF] font-Manpore font-normal leading-6 opacity-80">
                Pharetra facilisis nibh elit ultrices convallis convallis
                molestie id proin. Tincidunt nunc maecenas vestibulum et lacinia
                cras facilisis.
              </h6>
            </div>
          </div>
          <div className="xl:w-[297px] w-full relative lg:pt-[390px] pt-[304px] pb-5 px-[17px] xl:mt-0 mt-6">
            <div className="relative z-50">
              <p className="text-[#C8FF00] text-[12px] uppercase font-semibold">
                sep 01, 2024{" "}
                <span className="text-[#FBFBFF]">| 9 min read</span>
              </p>
              <h3
                className="py-2 text-[20px] font-bold uppercase text-[#FBFBFF]
                   leading-[38px]"
              >
                here will be the blog title
              </h3>
              <h6 className="text-[16px] text-[#FBFBFF] font-Manpore font-normal leading-6 opacity-80 line-clamp-2">
                Pharetra facilisis nibh elit ultrices convallis convallis
                molestie id proin. Tincidunt nunc maecenas vestibulum et lacinia
                cras facilisis.
              </h6>
            </div>
            <img
              src={Resourcetabs2}
              alt="Resourcetabs1"
              className="absolute top-0 left-0 z-0 h-full w-full object-cover rounded-lg"
            />
            <button className="text-[12px] uppercase font-semibold text-[#C8FF00] absolute top-4 left-4 h-[22px] w-[70px] flex items-center justify-center rounded-[24px] border border-[rgba(251,251,255,0.16)] bg-[rgba(200,255,0,0.24)] backdrop-blur-[5px]">
              wow gold
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-[66px]">
          <button
            type="button"
            className="text-primaryColor border border-primaryColor text-[16px] font-bold uppercase w-[126px] h-[50px] hover:bg-primaryColor hover:text-black duration-300 ease-in-out"
          >
            get started
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Miscellaneous;
