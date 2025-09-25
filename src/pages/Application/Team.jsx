import { Teambg } from "@/assets";
import { useState } from "react";
import Signlogo from "../../assets/images/signinlogo.png";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { checkedboxIcon } from "@/assets";
import Container from "../Shared/Container";

const Team = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSectionClick = (section) => {
    if (selectedSection === section) {
      setSelectedSection(null);
    } else {
      setSelectedSection(section);
    }
  };
  return (
    <section>
      <Container className="lg:h-screen h-[810px] w-full relative lg:px-0 px-4">
        <img
          src={Teambg}
          alt="teambg"
          className="h-full absolute top-0 left-0 z-0 object-cover"
        />
        <div className="flex justify-center items-center h-full">
          <div className="lg:w-[415px] w-full lg:h-[600px] h-[547px]  bg-[rgba(5,9,29,0.30)] backdrop-blur-[10px] lg:pt-[47px] lg:pb-[52px] lg:px-[59px] p-5">
            <img src={Signlogo} alt="Signlogo" />
            <h4 className="text-[36px] font-semibold text-[#FBFBFF] uppercase py-[25px] leading-[32.4px]">
              welcome to the team!
            </h4>
            <form action="" className="">
              <input
                type="text*"
                placeholder="your nickname**"
                className="h-[61px] lg:w-[300px] w-full bg-transparent outline-none p-6 border border-[#FBFBFF3B] text-[#FBFBFF] text-[16px] font-normal uppercase "
              />
              <input
                type="text"
                placeholder="Email*"
                className="h-[61px] lg:w-[300px] w-full bg-transparent outline-none p-6 border border-[#FBFBFF3B] text-[#FBFBFF] text-[16px] font-normal uppercase my-[22px]"
              />
              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="password*"
                  className="h-[61px] lg:w-[300px] w-full bg-transparent outline-none p-6 border border-[#FBFBFF3B] text-[#FBFBFF] text-[16px] font-normal uppercase"
                />
                {passwordVisible ? (
                  <IoEyeOff
                    onClick={togglePasswordVisibility}
                    className="absolute top-[55%] right-4 transform -translate-y-[55%] cursor-pointer text-[#fff] w-[24px] h-[24px]"
                  />
                ) : (
                  <IoEye
                    onClick={togglePasswordVisibility}
                    className="absolute top-[55%] right-4 transform -translate-y-[55%] cursor-pointer text-[#fff] w-[24px] h-[24px]"
                  />
                )}
              </div>
              <button className="py-[18px] px-6 bg-[#C8FF00] lg:w-[300px] w-full text-[#000] text-[16px] font-bold uppercase my-[22px]">
                get started
              </button>
            </form>
            <div
              className="flex items-center gap-3 pb-[22px] cursor-pointer"
              onClick={() => handleSectionClick("pro")}
            >
              {selectedSection === "pro" ? (
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

              <p className="uppercase text-white text-[14px] text-nowrap">
                Send me email and SMS notifications
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Team;
