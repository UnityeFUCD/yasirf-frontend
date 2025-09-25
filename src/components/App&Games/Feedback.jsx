import { Apphero2 } from "@/assets";
import Container from "@/pages/Shared/Container";
import React from "react";

const Feedback = () => {
  return (
    <section className="">
      <Container className="relative bg-[#05091D] pt-[70px] pb-20 px-[160px]">
        <div className="flex justify-center relative z-0">
          <img src={Apphero2} alt="Apphero2" className="w-full" />
        </div>
        <div className="absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-[70%]">
          <h2 className="text-center text-[40px] text-[#FBFBFF] font-normal font-Manpore leading-[53px] w-[798px]">
            Sign up as a beta tester to{" "}
            <span className="text-primaryColor font-bold">
              receive exclusive updates
            </span>{" "}
            and contribute valuable feedback.{" "}
          </h2>
          <div className="flex gap-x-4 justify-center mt-[51px]">
            <input
              type="text"
              placeholder="enter email"
              className="p-5 bg-transparent text-[16px] text-[#FBFBFF] font-medium uppercase border border-[#FBFBFF] outline-none w-[296px] h-[50px]"
            />
            <button
              type="button"
              className="text-primaryColor border border-primaryColor text-[16px] font-bold uppercase w-[126px] h-[50px] hover:bg-primaryColor  hover:text-black duration-300 ease-in-out"
            >
              get started
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Feedback;
