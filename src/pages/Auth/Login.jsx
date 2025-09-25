import { useState } from "react";
import Signlogo from "../../assets/images/signinlogo.png";
import bannerImg from "../../assets/images/auth-banner.svg";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { IoEye, IoEyeOff } from "react-icons/io5";
import BgImg from "../../assets/images/loginmainbg.png";
import { Link } from "react-router";
import { checkedboxIcon, loginbg } from "@/assets";
import { CiCircleQuestion } from "react-icons/ci";
import Container from "../Shared/Container";

const Login = () => {
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
    <>
      <section>
        <Container className="lg:h-screen h-[815px] relative bg-no-repeat bg-center bg-cover">
          <div className="lg:flex justify-between">
            <div className="lg:w-[934px] lg:block hidden">
              <img
                src={bannerImg}
                alt="Logbg"
                className="h-screen w-full object-cover object-center"
              />
            </div>
            <div className="lg:w-[535px] lg:pt-[86px] lg:pl-[56px] lg:pb-[91px] lg:pr-[150px] px-9 py-[132px] relative lg:h-screen h-[810px]">
              <img
                src={loginbg}
                alt="loginbg"
                className="absolute top-0 left-0 lg:h-screen h-[810px] w-full z-0"
              />
              <div className="relative z-50">
                <img src={Signlogo} alt="Signlogo" className=""/>
                <h4 className="lg:text-[36px] text-[32px] font-semibold text-[#FBFBFF] uppercase py-[25px]">
                  welcome back!
                </h4>
                <form action="" className="">
                  <input
                    type="email"
                    placeholder="Email*"
                    className="h-[61px] lg:w-[300px] w-full bg-transparent outline-none p-6 border border-[#FBFBFF3B] text-[#FBFBFF] text-[16px] font-normal uppercase pr-12"
                  />

                  <div className="relative pt-[22px] pb-[9px]">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      placeholder="password*"
                      className="h-[61px] lg:w-[300px] w-full bg-transparent outline-none p-6 border border-[#FBFBFF3B] text-[#FBFBFF] text-[16px] font-normal uppercase pr-12"
                    />
                    {passwordVisible ? (
                      <IoEyeOff
                        onClick={togglePasswordVisibility}
                        className="absolute top-[60%] lg:right-10 right-3 transform -translate-y-[60%] cursor-pointer text-[#fff] w-[24px] h-[24px]"
                      />
                    ) : (
                      <IoEye
                        onClick={togglePasswordVisibility}
                        className="absolute top-[60%] lg:right-10 right-3 transform -translate-y-[60%] cursor-pointer text-[#fff] w-[24px] h-[24px]"
                      />
                    )}
                  </div>
                  <h4 className="text-[16px] text-primaryColor font-normal uppercase">
                    forgot password?
                  </h4>
                  <button className="py-[18px] px-6 bg-[#C8FF00] lg:w-[300px] w-full text-[#000] text-[16px] font-bold uppercase my-[22px]">
                    get started
                  </button>
                </form>
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

                  <p className="uppercase text-white flex items-center gap-2">
                    I have a Booster account
                    <span>
                      <CiCircleQuestion className="text-xl" />
                    </span>
                  </p>
                </div>

                <div className="flex justify-between items-center lgw-[300px] w-full">
                  <div className="w-[45%] border border-[#FFFFFF3B]"></div>
                  <p className="text-[16px] font-normal text-[#FBFBFF] uppercase">
                    or
                  </p>
                  <div className="w-[45%] border border-[#FFFFFF3B]"></div>
                </div>
                <div className="flex justify-center items-center lg:w-[300px] w-full py-[19.35px] gap-3">
                  <FaGoogle className="text-[#fff] w-[26px] h-[26px] border border-white rounded-full p-1 hover:scale-110 hover:bg-[#C8FF00] hover:text-black transition-transform duration-200 cursor-pointer" />
                  <FaFacebookF className="text-[#fff] w-[26px] h-[26px] border border-white rounded-full p-1 hover:scale-110 hover:bg-[#C8FF00] hover:text-black transition-transform duration-200 cursor-pointer" />
                  <FaDiscord className="text-[#fff] w-[26px] h-[26px] border border-white rounded-full p-1 hover:scale-110 hover:bg-[#C8FF00] hover:text-black transition-transform duration-200 cursor-pointer" />
                </div>
                <p className="text-[16px] font-normal text-[#FBFBFF] uppercase  text-center">
                  don’t have an account?
                  <span className="text-[#C8FF00]">
                    <Link to="/signup"> signup</Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
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

export default Login;
