import { useState } from "react";
import sign from "../../assets/images/Signinbg.png";
import Signlogo from "../../assets/images/signinlogo.png";
import { CiCircleQuestion } from "react-icons/ci";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";
import { LuEyeClosed } from "react-icons/lu";
import BgImg from "../../assets/images/signinmainbg.png";
import { X } from "lucide-react";
import { Link } from "react-router";
import { checkedboxIcon, loginbg, Signupbg } from "@/assets";
import Container from "../Shared/Container";

const Signup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);

  const handleSectionClick = (section) => {
    if (selectedSection === section) {
      setSelectedSection(null);
    } else {
      setSelectedSection(section);
    }
  };
  const handleGetStartedClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <section>
        <Container className="relative">
          <div className="lg:flex justify-between">
            <div className="lg:block hidden w-[934px]">
              <img src={sign} alt="sign" className="h-screen w-full" />
            </div>
            <div className="lg:w-[534px] w-full  lg:pt-[86px] lg:pl-[56px] lg:pb-[91px] lg:pr-[150px] px-9 py-[132px] relative">
              <img
                src={Signupbg}
                alt="Signupbg"
                className="absolute top-0 left-0 h-full w-full z-0"
              />
              <div className="relative z-50">
              <img src={Signlogo} alt="Signlogo" />
                <h4 className="lg:text-[36px] text-[32px] font-semibold text-[#FBFBFF] uppercase py-[25px]">
                  register yourself
                </h4>

                <div
                  className="flex items-center gap-5 pb-[22px] cursor-pointer"
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
                <form action="" className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Email*"
                    className="h-[61px] lg:w-[300px] w-full bg-transparent outline-none p-6 border border-[#FBFBFF3B] text-[#FBFBFF] text-[16px] font-normal uppercase"
                  />
                  <div className="relative py-[22px]">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="password"
                      className="h-[61px] lg:w-[300px] w-full bg-transparent outline-none p-6 border border-[#FBFBFF3B] text-[#FBFBFF] text-[16px] font-normal uppercase"
                    />
                    {showPassword ? (
                      <LuEyeClosed
                        className="absolute top-1/2 lg:right-10 right-3 transform -translate-y-1/2 cursor-pointer text-[#fff] w-[24px] h-[24px]"
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    ) : (
                      <IoEye
                        className="absolute top-1/2 lg:right-10 right-3 transform -translate-y-1/2 cursor-pointer text-[#fff] w-[24px] h-[24px]"
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    )}
                  </div>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm password*"
                      className="h-[61px] lg:w-[300px] w-full bg-transparent outline-none p-6 border border-[#FBFBFF3B] text-[#FBFBFF] text-[16px] font-normal uppercase"
                    />

                    {showConfirmPassword ? (
                      <IoEye
                        className="absolute top-1/2 lg:right-10 right-3 transform -translate-y-1/2 cursor-pointer text-[#fff] w-[24px] h-[24px]"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      />
                    ) : (
                      <LuEyeClosed
                        className="absolute top-1/2 lg:right-10 right-3 transform -translate-y-1/2 cursor-pointer text-[#fff] w-[24px] h-[24px]"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      />
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={handleGetStartedClick}
                    className="py-[18px] px-6 bg-[#C8FF00] lg:w-[300px] w-full text-[#000] text-[16px] font-bold uppercase my-[22px]"
                  >
                    get started
                  </button>
                </form>
                <div
                  className="flex items-center gap-5 pb-[22px] cursor-pointer"
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
                <div className="flex lg:justify-between gap-x-2 items-center lg:w-[300px] w-full">
                  <div className="lg:w-[45%] w-full border border-[#FFFFFF3B]"></div>
                  <p className="text-[16px] font-noraml text-[#FBFBFF] uppercase ">
                    or
                  </p>
                  <div className="lg:w-[45%] w-full border border-[#FFFFFF3B]"></div>
                </div>
                <div className="flex justify-center items-center lg:w-[300px] w-full gap-x-3 my-[19.35px]">
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
            </div>
          </div>

          {showPopup && (
            <div className="fixed inset-0  flex justify-center items-center z-50 lg:mx-0 mx-3">
              <div className="bg-blue-950/40 backdrop-blur-[10px] p-6 rounded-lg lg:w-[695px] w-full lg:h-[410px] h-[385px] text-center lg:px-[60px] lg:pt-[125px] px-5 py-[93.5px] lg:border-none border border-white/20">
                <h2 className="lg:text-[40px] text-[32px] text-[#FBFBFF] uppercase font-semibold">
                  verify your email
                </h2>
                <p className="pt-[20px] pb-[38px] lg:text-[18px] text-[16px] text-[#FBFBFF] font-normal lg:w-[510px] w-full mx-auto font-Manpore">
                  An email is sent to your email address. Please click on
                  ‘Verify’ in the email.
                </p>
                <button className=" leading-[50px] px-6 h-[50px] bg-[#C8FF00] text-[#000] text-[16px] font-bold uppercase">
                  get started
                </button>
                <div className="absolute top-5 right-5" onClick={closePopup}>
                  <X className="w-6 h-6 text-[#FBFBFF] cursor-pointer" />
                </div>
              </div>
            </div>
          )}
          <img
            className="w-full absolute top-0 left-0 z-[-2] h-full object-cover"
            src={BgImg}
            alt=""
          />
        </Container>
      </section>
    </>
  );
};

export default Signup;
