import { Heroresourcecard, Heroresourcecard1, Light, Net } from "@/assets";
import Container from "@/pages/Shared/Container";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Resourceherocard from "../DynamicComponents/Resource/Resourceherocard";

const Hero = () => {
  return (
    <section className="">
      <Container className="pt-[141px] bg-[#05091D] relative overflow-hidden lg:px-[150px] px-4">
        <div
          className="flex justify-between lg:w-[539px] w-full mx-auto rounded-lg border border-white/20
         bg-white/5 backdrop-blur-sm py-[13px] px-[17px] items-center relative z-50"
        >
          <h4 className="lg:text-[20px] text-[16px] text-[#FBFBFF] font-bold uppercase">
            subscribe for just $1/week
          </h4>
          <a
            href="#"
            className="lg:text-[16px] text-[14px] text-[#C8FF00] capitalize font-normal xs:block hidden"
          >
            Subscribe now
          </a>
        </div>
        <h2 className=" text-[#FBFBFF] lg:text-[100px] text-[52px] lg:leading-[90px] leading-[46px] text-center font-normal uppercase pt-[38px] pb-4">
          {" "}
          our
          <span className="text-[#C8FF00] lg:text-[100px] text-[52px] font-bold uppercase lg:leading-[90px] leading-[46px]">
            {" "}
            resources
          </span>
        </h2>
        <h5 className="lg:text-[28px] text-[18px] font-normal text-[#FBFBFF] text-center font-Manpore">
          Your ultimate guide to youtube playlists and blogs resources.
        </h5>

        <button
          type="button"
          className="text-[#FFF]  border border-primaryColor text-[16px] font-medium capitalize w-[127px] h-[43px] rounded-[32px] lg:hidden block mx-auto mt-7"
        >
          work with us
        </button>
        <div className="lg:flex gap-4 lg:justify-start justify-center items-center lg:w-[741px] w-full lg:mx-auto mt-[34px] mb-[60px]">
          <button
            type="button"
            className="text-[#FFF]  border border-primaryColor text-[16px] font-medium capitalize w-[127px] h-[43px] rounded-[32px] lg:block hidden"
          >
            work with us
          </button>
          <div className="relative z-50">
            <input
              type="search"
              name="search"
              placeholder="Search for a topic or feature..."
              className="rounded-full border border-white/20 bg-[#FBFBFF] backdrop-blur-md lg:px-6 px-3 py-[13px] text-[#05091D]  outline-none lg:text-[18px] text-[14px] uppercase font-normal h-12 lg:w-[599px] w-full"
            />
            <div className="absolute top-1/2 right-[17px] -translate-y-1/2 flex gap-x-5 items-center">
              <Select>
                <SelectTrigger className="w-[90px] border-none outline-none uppercase">
                  <SelectValue
                    placeholder="Blog"
                    className="text-[18px]  font-normal"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
              <div className="border-black border-l-2 lg:pl-5 pl-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z"
                    stroke="#05091D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21 21L16 16"
                    stroke="#05091D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-3 overflow-x-auto scrollbar-hide w-full">
          {[
            { bgimg: Heroresourcecard, title: "destiny 2", number: "5" },
            {
              bgimg: Heroresourcecard1,
              title: "league of legends",
              number: "3",
            },
            {
              bgimg: Heroresourcecard1,
              title: "wolf of warcraft",
              number: "2",
            },
            {
              bgimg: Heroresourcecard1,
              title: "counter strike 2",
              number: "1",
            },
            { bgimg: Heroresourcecard1, title: "valorant", number: "5" },
            { bgimg: Heroresourcecard1, title: "tarisland", number: "7" },
            { bgimg: Heroresourcecard1, title: "the war within preorders" },
          ].map((card, index) => (
            <Resourceherocard
              key={index}
              bgimg={card.bgimg}
              title={card.title}
              number={card.number}
              bg="bg-[rgba(251,251,255,0.06)]"
              className="min-w-[250px] lg:min-w-0" 
            />
          ))}
        </div>

        <img src={Net} alt="net" className="absolute -top-20 -right-16" />
        <img src={Light} alt="Light" className="absolute top-0 right-[238px]" />
      </Container>
    </section>
  );
};

export default Hero;
