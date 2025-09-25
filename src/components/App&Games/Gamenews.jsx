import {
  votevector,
  votevector1,
  votevector2,
  votevectorVotemainbg,
  votevectorVotemainbg1,
  votevectorVotemainbg2,
} from "@/assets";
import Container from "@/pages/Shared/Container";
import React, { useState } from "react";
import { X } from "lucide-react";
import Votecard from "../DynamicComponents/app&games/Votecard";

const Gamenews = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleclickpopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <section className="">
      <Container className="bg-[#05091D] px-[160px]">
        <div className="relative">
          <img src={votevector} alt="votevector" />
          <div className="w-[13px] h-[13px] rounded-full  border border-primaryColor absolute -bottom-[13px] -left-[5px] bg-[#05091D]"></div>
          <div className="w-[13px] h-[13px] rounded-full  border border-primaryColor absolute -top-[13px] left-[573px] bg-[#05091D]"></div>
        </div>
        <div className="flex gap-x-[35px] pb-[17px] pt-[30px] items-center">
          <figure className="">
            <img
              src={votevectorVotemainbg}
              alt="votevectorVotemainbg"
              className="w-[593px]"
            />
          </figure>
          <div className="">
            <p className="h-[22px] w-[51px] rounded-[24px] border border-[#FBFBFF] border-opacity-35  text-[12px] uppercase font-semibold text-primaryColor  flex justify-center items-center">
              latest
            </p>
            <h2 className="text-[56px] text-[#FBFBFF] font-normal uppercase leading-[50px] pt-3 pb-[27px] w-[399px]">
              world of <span className="font-bold">warcraft</span>
            </h2>
            <button
              type="button"
              className="text-primaryColor border border-primaryColor text-[16px] font-bold uppercase w-[126px] h-[50px] hover:bg-primaryColor hover:text-black duration-300 ease-in-out"
            >
              get started
            </button>
          </div>
        </div>
        <img src={votevector1} alt="votevector1" className="-ml-4" />
        <div className="flex gap-x-[35px] py-[17px] items-center">
          <div className="w-[593px] relative">
            <img
              src={votevectorVotemainbg1}
              alt="votevectorVotemainbg"
              className="w-full"
            />
            <img
              src={votevectorVotemainbg2}
              alt="votevectorVotemainbg2"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="">
            <p className="h-[22px] w-[84px] rounded-[24px] border border-[#FBFBFF] border-opacity-35  text-[12px] uppercase font-semibold text-primaryColor  flex justify-center items-center">
              coming soon
            </p>
            <h2 className="text-[56px] text-[#FBFBFF] font-normal uppercase leading-[50px] pt-3 pb-[27px] w-[399px]">
              <span className="font-bold">vote</span>
              for your favorite game!
            </h2>
            <button
              type="button"
              onClick={handleclickpopup}
              className="text-primaryColor border border-primaryColor text-[16px] font-bold uppercase w-[126px] h-[50px] hover:bg-primaryColor hover:text-black duration-300 ease-in-out"
            >
              get started
            </button>
          </div>
        </div>
        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
            <div className="bg-[#191C2F] py-[20px] px-[25px] w-[936px]  shadow-lg relative">
              <h3 className="text-[32px] text-[#FBFBFF] uppercase font-semibold">
                vote for your favorite game!
              </h3>
              <p className="text-[18px] text-[#FBFBFF] font-normal pt- 3 opacity-50">
                Click on the game or search your preference which you want
                services for.
              </p>
              <div className="relative">
                <input
                  type="search"
                  name="search"
                  placeholder="Search"
                  className="my-6 rounded-full border border-white/20 bg-white/5 backdrop-blur-md p-3 text-white placeholder-white/60 outline-none text-[18px] uppercase font-normal h-12 w-full"
                />
                <div className="absolute top-1/2 right-[17px] -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z"
                      stroke="#FBFBFF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21 21L16 16"
                      stroke="#FBFBFF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex justify-center flex-wrap  gap-5">
                <Votecard />
                <Votecard />
                <Votecard />
                <Votecard />
                <Votecard />
                <Votecard />
                <Votecard />
                <Votecard />
              </div>

              <div className="absolute top-5 right-5" onClick={closePopup}>
                <X className="w-6 h-6 text-[#FBFBFF] cursor-pointer" />
              </div>
            </div>
          </div>
        )}
        <img src={votevector1} alt="votevector1" className="-ml-4" />
        <div className="flex gap-x-[35px] py-[17px] items-center">
          <div className="w-[593px] relative">
            <img
              src={votevectorVotemainbg1}
              alt="votevectorVotemainbg"
              className="w-full"
            />
            <img
              src={votevectorVotemainbg2}
              alt="votevectorVotemainbg2"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="">
            <p className="h-[22px] w-[84px] rounded-[24px] border border-[#FBFBFF] border-opacity-35  text-[12px] uppercase font-semibold text-primaryColor  flex justify-center items-center">
              coming soon
            </p>
            <h2 className="text-[56px] text-[#FBFBFF] font-normal uppercase leading-[50px] pt-3 pb-[27px] w-[399px]">
              <span className="font-bold">vote</span>
              for your favorite game!
            </h2>
            <button
              type="button"
              onClick={handleclickpopup}
              className="text-primaryColor border border-primaryColor text-[16px] font-bold uppercase w-[126px] h-[50px] hover:bg-primaryColor hover:text-black duration-300 ease-in-out"
            >
              get started
            </button>
          </div>
        </div>
        <div className="relative pt-4">
          <img src={votevector2} alt="votevector" />
          <div className="w-[13px] h-[13px] rounded-full  border border-primaryColor absolute top-1 -left-[6px] bg-[#05091D]"></div>
          <div className="w-[13px] h-[13px] rounded-full  border border-primaryColor absolute bottom-0 left-[573px] bg-[#05091D]"></div>
        </div>
      </Container>
    </section>
  );
};

export default Gamenews;
