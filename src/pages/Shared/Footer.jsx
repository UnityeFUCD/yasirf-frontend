import { footerPayment, logo } from "@/assets";
import { FaDiscord, FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-background mx-auto px-4 md:px-8 xl:px-[165px] z-20">
      <div className="flex flex-row flex-wrap lg:flex-nowrap justify-between md:justify-normal gap-14 lg:gap-[71px] pt-[64px] lg:pt-[75px] text-white border-b border-gray-800 py-12">
        <div>
          <img src={logo} alt="" />
          <p className="mt-4 text-gray-400 max-w-[510px] lg:w-[400px] xl:w-[510px]">
            A well-designed gaming header often incorporates elements such as
            game characters, iconic symbols, vibrant colors, and dynamic visuals
            .
          </p>
          <div className="pt-4 flex items-center gap-3">
            <button className="border p-2 rounded-full hover:bg-primaryColor hover:text-black hover:border-primaryColor transition-all duration-300">
              <FaFacebookF className="text-xl" />
            </button>
            <button className="border p-2 rounded-full hover:bg-primaryColor hover:text-black hover:border-primaryColor transition-all duration-300">
              <FaDiscord className="text-xl" />
            </button>
            <button className="border p-2 rounded-full hover:bg-primaryColor hover:text-black hover:border-primaryColor transition-all duration-300">
              <FaXTwitter className="text-xl" />
            </button>
            <button className="border p-2 rounded-full hover:bg-primaryColor hover:text-black hover:border-primaryColor transition-all duration-300">
              <FaInstagram className="text-xl" />
            </button>
            <button className="border p-2 rounded-full hover:bg-primaryColor hover:text-black hover:border-primaryColor transition-all duration-300">
              <FaTiktok className="text-xl" />
            </button>
            <button className="border p-2 rounded-full hover:bg-primaryColor hover:text-black hover:border-primaryColor transition-all duration-300">
              <IoLogoYoutube className="text-xl" />
            </button>
          </div>
          <div className="mt-[33px] lg:mt-[63.22px] pb-10 lg:pb-0">
            <img src={footerPayment} alt="" />
          </div>
        </div>
        <div>
          <p className="text-xl font-bold uppercase pb-[23px] text-nowrap">
            Vanguard Boost
          </p>
          <div className="flex flex-col cursor-pointer  gap-[23px]">
            <p className="capitalize text-gray-400 hover:text-white transition-all duration-200">about us</p>
            <p className="capitalize text-gray-400 hover:text-white transition-all duration-200">work with us</p>
            <p className="capitalize text-gray-400 hover:text-white transition-all duration-200">contact us</p>
            <p className="capitalize text-gray-400 hover:text-white transition-all duration-200">help</p>
            <div className="lg:-ml-5 w-fit ">
              <p className="capitalize text-gray-400 hover:text-white transition-all duration-200  border border-primaryColor shadow-primaryColor shadow-sm text-center px-4  rounded-full py-1">
                Apps and Games
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-xl font-bold uppercase pb-[23px]">legal</p>
          <div className="flex flex-col cursor-pointer  gap-[23px]">
            <p className="capitalize text-gray-400 hover:text-white transition-all duration-200">terms of service</p>
            <p className="capitalize text-gray-400 hover:text-white transition-all duration-200">privacy policy</p>
            <p className="capitalize text-gray-400 hover:text-white transition-all duration-200">refund policy</p>
            <p className="capitalize text-gray-400 hover:text-white transition-all duration-200">cookies policy</p>
            <p className="capitalize text-gray-400 hover:text-white transition-all duration-200">
              credential on file <br /> agreement
            </p>
          </div>
        </div>
        <div>
          <p className="text-xl font-bold uppercase pb-[23px]">resources</p>
          <div className="flex flex-col cursor-pointer  gap-[23px]">
            <p className="capitalize text-gray-400 hover:text-white transition-all duration-200">YT playlist</p>
            <p className="capitalize text-gray-400 hover:text-white transition-all duration-200">how to- blog </p>
            <p className="capitalize text-gray-400 hover:text-white transition-all duration-200">support</p>
          </div>
        </div>
      </div>
      <div className="text-white">
        <p className="text-center capitalize py-4 md:py-6 text-gray-300">
          copyright @2024 | All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
