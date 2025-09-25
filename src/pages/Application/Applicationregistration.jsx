import { Teambg } from "@/assets";
import { useState } from "react";
import Signlogo from "../../assets/images/signinlogo.png";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { checkedboxIcon } from "@/assets";
import { LuEyeClosed } from "react-icons/lu";
import { CiCircleQuestion } from "react-icons/ci";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { Link } from "react-router";
import { X } from "lucide-react";
import Container from "../Shared/Container";

const Applicationregistration = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

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

  const handleGetStartedClick = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <section>
      <Container className='h-screen w-full relative'>
        <img
          src={Teambg}
          alt="teambg"
          className="w-full h-full absolute top-0 left-0 z-0"
        />

        <div className="w-[415px] h-[682px] mx-auto absolute top-[25%] left-[50%] -translate-x-[50%] bg-[rgba(5,9,29,0.30)] backdrop-blur-[10px] py-[22.88px] px-[59px]">
          <img src={Signlogo} alt="Signlogo" />
          <h4 className="text-[36px] font-semibold text-[#FBFBFF] uppercase py-[25px] leading-[32.4px]">
            register yourself
          </h4>
          <form action="" className="">
            <input
              type="text"
              placeholder="Email*"
              className="h-[61px] w-[300px] bg-transparent outline-none p-6 border border-[#FBFBFF3B] text-[#FBFBFF] text-[16px] font-normal uppercase"
            />
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="create password**"
                className="h-[61px] w-[300px] bg-transparent outline-none p-6 border border-[#FBFBFF3B] text-[#FBFBFF] text-[16px] font-normal uppercase my-[22px]"
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
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password*"
                className="h-[61px] w-[300px] bg-transparent outline-none p-6 border border-[#FBFBFF3B] text-[#FBFBFF] text-[16px] font-normal uppercase"
              />

              {showConfirmPassword ? (
                <IoEye
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-[#fff] w-[24px] h-[24px]"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                />
              ) : (
                <LuEyeClosed
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-[#fff] w-[24px] h-[24px]"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                />
              )}
            </div>
            <button
              className="py-[18px] px-6 bg-[#C8FF00] w-[300px] text-[#000] text-[16px] font-bold uppercase my-[22px]"
              onClick={handleGetStartedClick}
            >
              get started
            </button>
          </form>
          <div
            className="flex items-center gap-x-3 cursor-pointer"
            onClick={() => handleSectionClick("pro")}
          >
            {selectedSection === "pro" ? (
              <img
                src={checkedboxIcon}
                alt="Checked"
                className="h-4 w-4 cursor-pointer"
              />
            ) : (
              <input
                className="p-1 h-4 w-4 rounded-full bg-transparent border-2 border-[rgba(200,255,0,1)] appearance-none checked:border-[rgba(200,255,0,1)] cursor-pointer"
                type="checkbox"
                checked={false}
                readOnly
              />
            )}

            <p className="uppercase text-white">i am a pro</p>
          </div>

          <div
            className="flex items-center gap-5 cursor-pointer pt-[12px]"
            onClick={() => handleSectionClick("beginner")}
          >
            {selectedSection === "beginner" ? (
              <img
                src={checkedboxIcon}
                alt="Checked"
                className="h-4 w-4 cursor-pointer"
              />
            ) : (
              <input
                className="p-1 h-4 w-4 rounded-full bg-transparent border-2 border-[rgba(200,255,0,1)] appearance-none checked:border-[rgba(200,255,0,1)] cursor-pointer"
                type="checkbox"
                checked={false}
                readOnly
              />
            )}
            <p className="uppercase   flex items-center gap-2 text-white">
              register as a booster{" "}
              <span>
                <CiCircleQuestion className="text-xl" />
              </span>
            </p>
          </div>
          <div className="flex justify-between items-center w-[300px] pt-[22px]">
            <div className="w-[45%] border border-[#FFFFFF3B]"></div>
            <p className="text-[16px] font-normal text-[#FBFBFF] uppercase ">
              or
            </p>
            <div className="w-[45%] border border-[#FFFFFF3B]"></div>
          </div>
          <div className="flex justify-center items-center w-[300px] gap-x-3 my-[19.35px]">
            <FaGoogle className="text-[#fff] w-[26px] h-[26px] border border-white rounded-full p-1 hover:scale-110 hover:bg-[#C8FF00] hover:text-black transition-transform duration-200 cursor-pointer" />
            <FaFacebookF className="text-[#fff] w-[26px] h-[26px] border border-white rounded-full p-1 hover:scale-110 hover:bg-[#C8FF00] hover:text-black transition-transform duration-200 cursor-pointer" />
            <FaDiscord className="text-[#fff] w-[26px] h-[26px] border border-white rounded-full p-1 hover:scale-110 hover:bg-[#C8FF00] hover:text-black transition-transform duration-200 cursor-pointer" />
          </div>
          <p className="text-[16px] font-normal text-[#FBFBFF] uppercase text-center">
            already have an account?
            <span className="text-[#C8FF00]">
              <Link to="/login"> login</Link>
            </span>
          </p>
        </div>

        {showPopup && (
          <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
            <div className="bg-[rgba(5,9,29,0.30)] backdrop-blur-[10px] w-[695px] h-[410px] px-[60.12px] pt-[125px] pb-[74px] text-center">
              <h2 className="text-[40px] text-[#FBFBFF] uppercase font-semibold">
                email already registered
              </h2>
              <p className="pt-[20px] pb-[32.89px] text-[18px] text-[#FBFBFF] font-normal w-[490px] mx-auto font-Manpore">
                Your email jhon****@gmail.com is already registered with us.
                Please provide your nickname to continue to the dashboard.
              </p>
              <div className="flex items-center gap-x-4 justify-center">
                <input
                  type="text*"
                  placeholder="your nickname**"
                  className="h-[50px] w-[297px] bg-transparent outline-none p-6 border border-[#FBFBFF3B] text-[#FBFBFF] text-[16px] font-normal uppercase "
                />
                <button className="px-6 bg-[#C8FF00] h-[50px] text-[#000] text-[16px] font-bold uppercase">
                  get started
                </button>
                <div className="absolute top-5 right-5" onClick={closePopup}>
                  <X className="w-6 h-6 text-[#FBFBFF] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Applicationregistration;
