import React, { useState } from "react";
import Container from "../Shared/Container";
import { checkedboxIcon } from "@/assets";

const Jobapplicationform = () => {
  const [useselect, setuseSelect] = useState([]);

  const handleSectionClickselect = (section) => {
    if (useselect === section) {
      setuseSelect(null);
    } else {
      setuseSelect(section);
    }
  };

  return (
    <>
      <section className="pt-[252px] pb-[60px] lg:px-0 px-4 bg-[#05091D] relative">
        <Container>
          <h2 className=" text-[#FBFBFF] lg:text-[56px] text-[40px] leading-9 lg:w-full w-[285px] font-medium text-center uppercase">
            Apply to join our team!
          </h2>
          <div className=" lg:w-[685px] w-full mx-auto bg-gradient-to-b from-[#161A31] to-transparent lg:p-6 p-4 mt-10">
            <h4 className="text-[18px] text-[#FBFBFF] uppercase font-bold">
              Personal details
            </h4>
            <div className="lg:flex flex-wrap justify-between gap-[10px] mt-[20px]">
              <div className="">
                <p className="text-[16px] text-[#FBFBFF] uppercase font-semibold text-start pb-3">
                  first name
                </p>
                <input
                  type="text"
                  placeholder="Jhon"
                  className="p-5 bg-transparent text-[16px] text-[#FBFBFF] font-normal border border-[#FBFBFF3B] outline-none lg:w-[308px] w-full"
                />
              </div>

              <div className="">
                <p className="text-[16px] text-[#FBFBFF] uppercase font-semibold text-start pb-3">
                  last name
                </p>
                <input
                  type="text"
                  placeholder="Doe"
                  className="p-5 bg-transparent text-[16px] text-[#FBFBFF] font-normal border border-[#FBFBFF3B] outline-none lg:w-[308px] w-full"
                />
              </div>
              <div className="">
                <p className="text-[16px] text-[#FBFBFF] uppercase font-semibold text-start pb-3">
                  email
                </p>
                <input
                  type="text"
                  placeholder="example@mail.com"
                  className="p-5 bg-transparent text-[16px] text-[#FBFBFF] font-normal border border-[#FBFBFF3B] outline-none lg:w-[308px] w-full"
                />
              </div>

              <div className="">
                <p className="text-[16px] text-[#FBFBFF] uppercase font-semibold text-start pb-3">
                  phone
                </p>
                <input
                  type="text"
                  placeholder="123456"
                  className="p-5 bg-transparent text-[16px] text-[#FBFBFF] font-normal border border-[#FBFBFF3B] outline-none lg:w-[308px] w-full"
                />
              </div>
            </div>
            <div className="relative mt-5">
              <p className="text-[16px] text-[#FBFBFF] uppercase font-semibold text-start pb-3">
                add cover letter/ resume
              </p>
              <input
                type="text"
                placeholder=""
                className="p-5 bg-transparent text-[16px] text-[#FBFBFF] font-normal border border-[#FBFBFF3B] outline-none lg:w-[637px] w-full h-[80px]"
              />
              <button
                type="button"
                className="h-[42px] lg:w-[126px] w-[108px] text-[#FBFBFF] text-[16px] font-bold uppercase my-[22px]  border border-[#FBFBFF] absolute top-[34px] right-3"
              >
                get started
              </button>
            </div>
          </div>
          <div className=" lg:w-[685px] w-full mx-auto bg-gradient-to-b from-[#161A31] to-transparent lg:p-6 p-4 mt-10">
            <h4 className="text-[18px] text-[#FBFBFF] uppercase font-bold">
              Technical experience
            </h4>
            <p className="text-[16px] text-[#FBFBFF] uppercase font-semibold pt-[20px] pb-3">
              What's your most significant technical achievement?
            </p>
            <input
              type="text"
              placeholder="Provide a brief description "
              className="p-5 bg-transparent text-[16px] text-[#FBFBFF] font-normal border border-[#FBFBFF3B] outline-none w-full"
            />
            <p className="text-[16px] text-[#FBFBFF] uppercase font-semibold pt-[20px] pb-3">
              Where can we see your code?
            </p>
            <input
              type="text"
              placeholder="AProvide a brief description "
              className="p-5 bg-transparent text-[16px] text-[#FBFBFF] font-normal border border-[#FBFBFF3B] outline-none w-full"
            />
          </div>

          <div className=" lg:w-[685px] w-full mx-auto bg-gradient-to-b from-[#161A31] to-transparent lg:p-6 p-4 my-10">
            <h4 className="text-[18px] text-[#FBFBFF] uppercase font-bold">
              Colorado office
            </h4>
            <p className="text-[16px] text-[#FBFBFF] uppercase font-semibold pt-[20px] pb-3">
              Can you work from our Colorado office 3 days a week?
            </p>
            <input
              type="text"
              placeholder="Provide a brief description "
              className="p-5 bg-transparent text-[16px] text-[#FBFBFF] font-normal border border-[#FBFBFF3B] outline-none w-full"
            />
          </div>
          <div className=" lg:w-[685px] w-full mx-auto bg-gradient-to-b from-[#161A31] to-transparent lg:p-6 p-4 my-10">
            <h4 className="text-[18px] text-[#FBFBFF] uppercase font-bold">
              Legal status
            </h4>
            <p className="text-[16px] text-[#FBFBFF] uppercase font-semibold pt-[20px] pb-3">
              Are you authorized to work in the U.S. lawfully?
            </p>
            <input
              type="text"
              placeholder="Provide a brief description"
              className="p-5 bg-transparent text-[16px] text-[#FBFBFF] font-normal border border-[#FBFBFF3B] outline-none w-full"
            />
          </div>

          <div className=" lg:w-[685px] w-full mx-auto bg-gradient-to-b from-[#161A31] to-transparent lg:p-6 p-4 my-10">
            <h4 className="text-[18px] text-[#FBFBFF] uppercase font-bold">
              discovery
            </h4>
            <p className="text-[16px] text-[#FBFBFF] uppercase font-semibold pt-[20px] pb-3">
              How did you hear about us?
            </p>
            <input
              type="text"
              placeholder="Provide a brief description "
              className="p-5 bg-transparent text-[16px] text-[#FBFBFF] font-normal border border-[#FBFBFF3B] outline-none w-full"
            />
          </div>

          <div className=" lg:w-[685px] w-full mx-auto bg-gradient-to-b from-[#161A31] to-transparent lg:p-6 p-4 my-10">
            <h4 className="text-[18px] text-[#FBFBFF] uppercase font-bold">
              Start date and experience:
            </h4>
            <p className="text-[16px] text-[#FBFBFF] uppercase font-semibold pt-[20px] pb-3">
              When can you start?
            </p>
            <input
              type="text"
              placeholder="Provide a brief description "
              className="p-5 bg-transparent text-[16px] text-[#FBFBFF] font-normal border border-[#FBFBFF3B] outline-none w-full"
            />
            <p className="text-[16px] text-[#FBFBFF] uppercase font-semibold pt-[20px] pb-3">
              How many years of experience do you have?
            </p>
            <input
              type="text"
              placeholder="Provide a brief description "
              className="p-5 bg-transparent text-[16px] text-[#FBFBFF] font-normal border border-[#FBFBFF3B] outline-none w-full"
            />
          </div>

          <div className=" lg:w-[685px] w-full mx-auto bg-gradient-to-b from-[#161A31] to-transparent lg:p-6 p-4 mt-10">
            <h4 className="text-[18px] text-[#FBFBFF] uppercase font-bold">
              Equal Employment Opportunity
            </h4>
            <div className="lg:flex flex-wrap justify-between gap-[10px] mt-[20px]">
              <div className="">
                <p className="text-[16px] text-[#FBFBFF] uppercase font-semibold text-start pb-3">
                  gender
                </p>
                <input
                  type="text"
                  placeholder="male"
                  className="p-5 bg-transparent text-[16px] text-[#FBFBFF] font-normal border border-[#FBFBFF3B] outline-none lg:w-[308px] w-full"
                />
              </div>

              <div className="">
                <p className="text-[16px] text-[#FBFBFF] uppercase font-semibold text-start pb-3">
                  race
                </p>
                <input
                  type="text"
                  placeholder="Enter here"
                  className="p-5 bg-transparent text-[16px] text-[#FBFBFF] font-normal border border-[#FBFBFF3B] outline-none lg:w-[308px] w-full"
                />
              </div>
              <div className="">
                <p className="text-[16px] text-[#FBFBFF] uppercase font-semibold text-start pb-3">
                  veteran status
                </p>
                <input
                  type="text"
                  placeholder="Enter here"
                  className="p-5 bg-transparent text-[16px] text-[#FBFBFF] font-normal border border-[#FBFBFF3B] outline-none lg:w-[308px] w-full"
                />
              </div>

              <div className="">
                <p className="text-[16px] text-[#FBFBFF] uppercase font-semibold text-start pb-3">
                  disability status
                </p>
                <input
                  type="text"
                  placeholder="Enter here"
                  className="p-5 bg-transparent text-[16px] text-[#FBFBFF] font-normal border border-[#FBFBFF3B] outline-none lg:w-[308px] w-full"
                />
              </div>
            </div>
          </div>

          <div className=" lg:w-[685px] w-full mx-auto mt-10">
            <button
              type="button"
              className=" lg:w-[126px] w-full h-[50px] text-[#000] text-[16px] font-bold uppercase border bg-primaryColor outline-none border-primaryColor mb-6"
            >
              get started
            </button>

            <div
              className="flex items-center gap-5 cursor-pointer"
              onClick={() => handleSectionClickselect(" Discord")}
            >
              {useselect === " Discord" ? (
                <img
                  src={checkedboxIcon}
                  alt="Checked"
                  className="h-4 w-4 cursor-pointer flex-shrink-0"
                />
              ) : (
                <input
                  className="p-1 h-4 w-4 rounded-full bg-transparent border-2 border-[rgba(200,255,0,1)] appearance-none checked:border-[rgba(200,255,0,1)] cursor-pointer flex-shrink-0"
                  type="checkbox"
                  checked={false}
                  readOnly
                />
              )}
              <h5 className="text-[16px] text-[#FBFBFF] uppercase font-normal leading-[14px] lg:w-full w-[285px]">
                If any form fields are filled out incorrectly or missing, the
                application may be declined without further explanation.
                <span className="text-[16px] font-bold uppercase">
                  I understand.
                </span>
              </h5>
            </div>
          </div>
        </Container>
        <div className="absolute top-0 right-[35%] size-[200px] bg-primaryColor blur-[200px]" />
      </section>
    </>
  );
};

export default Jobapplicationform;
