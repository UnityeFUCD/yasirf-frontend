import React, { useState } from "react";
import Passioncard from "../DynamicComponents/jointeamcard/Passioncard";
import { Line, Net } from "@/assets";
import { X } from "lucide-react";
import Container from "@/pages/Shared/Container";

const Passion = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleGetStartedClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <section className="bg-[#A10C98]/20 mx-auto lg:pt-[132px] lg:pb-[142px] relative overflow-hidden  pt-20 pb-[60px]">
        <Container className='lg:px-[150px]'>
          <h2 className="lg:text-[56px] text-[32px] text-[#FBFBFF] font-normal uppercase leading-[28px] lg:text-start text-center">
            Join with your <span className="font-bold">passion!</span>
          </h2>

          <div className="lg:mt-[62px] mt-[29px] lg:flex flex flex-wrap lg:justify-between justify-center gap-6 relative z-50">
            <div className="" onClick={handleGetStartedClick}>
              <Passioncard
                Icon={Svgicon}
                title="Booster"
                subtitle="Join our team of skilled gamers helping others improve their ranks."
              />
            </div>
            <div className="lg:py-0" onClick={handleGetStartedClick}>
              <Passioncard
                Icon={Svgicon1}
                title="Article Author"
                subtitle="Share your gaming knowledge and tips through engaging articles."
                onClick={handleGetStartedClick}
              />
            </div>
            <div className="relative lg:pt">
              <Passioncard
                Icon={Svgicon3}
                title="influncer"
                subtitle="levarage your social media present to inspire and connect with fellow gamers"
              />
              <div className="absolute top-0 left-0 w-[267px] bg-[#05091D]/70 h-full rounde rounded-[8px]">
                <p className="flex items-center justify-center min-h-full uppercase text-sm font-medium ">
                  <span className="bg-gray-500 text-[#FBFBFF] text-[14px] font-semibold cursor-pointer rounded-2xl border border-gray-400/60 px-2 h-6 flex items-center justify-center">
                    Coming Soon
                  </span>
                </p>
              </div>
            </div>
            <div className="" onClick={handleGetStartedClick}>
              <Passioncard
                Icon={Svgicon2}
                title="Team Member"
                subtitle="Be a vital part of our dynamic team, supporting our mission in various roles."
                onClick={handleGetStartedClick}
              />
            </div>
          </div>

          {showPopup && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 lg:mx-0 mx-4">
              <div className="bg-[#191C2F] lg:pt-[72px] lg:pb-[38px] lg:px-[150px] lg:w-[936px] w-full p-4  shadow-lg text-center relative">
                <h3 className="lg:text-[32px] text-[20px] text-[#FBFBFF] uppercase font-semibold lg:mt-0 mt-8">
                  apply as an article author
                </h3>
                <p
                  className="lg:text-[18px] text-[16px] text-[#FBFBFF] font-normal
               text-center lg:pt-3"
                >
                  Submit the following details and our team will contact you
                  shortly.
                </p>

                <div className="lg:flex flex-wrap justify-between gap-[10px] mt-10">
                  <div className="">
                    <p className="text-[16px] text-[#FBFBFF] uppercase font-semibold text-start pb-3">
                      first name
                    </p>
                    <input
                      type="text"
                      placeholder="john"
                      className="lg:p-5 p-3 bg-transparent text-[16px] text-[#FBFBFF] font-normal border border-[#FBFBFF3B] outline-none lg:w-[308px] w-full"
                    />
                  </div>

                  <div className="">
                    <p className="text-[16px] text-[#FBFBFF] uppercase font-semibold text-start pb-3">
                      last name
                    </p>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="lg:p-5 p-3 bg-transparent text-[16px] text-[#FBFBFF] font-normal border border-[#FBFBFF3B] outline-none lg:w-[308px] w-full"
                    />
                  </div>
                  <div className="">
                    <p className="text-[16px] text-[#FBFBFF] uppercase font-semibold text-start pb-3">
                      email
                    </p>
                    <input
                      type="text"
                      placeholder="Email"
                      className="lg:p-5 p-3 bg-transparent text-[16px] text-[#FBFBFF] font-normal border border-[#FBFBFF3B] outline-none lg:w-[308px] w-full"
                    />
                  </div>
                  <div className="">
                    <p className="text-[16px] text-[#FBFBFF] uppercase font-semibold text-start pb-3">
                      phone
                    </p>
                    <input
                      type="number"
                      placeholder="12345"
                      className="lg:p-5 p-3 bg-transparent text-[16px] text-[#FBFBFF] font-normal border border-[#FBFBFF3B] outline-none lg:w-[308px] w-full"
                    />
                  </div>
                  <div className="relative">
                    <p className="text-[16px] text-[#FBFBFF] uppercase font-semibold text-start pb-3">
                      add cover letter/ resume
                    </p>
                    <textarea
                      type="text"
                      placeholder=""
                      className="lg:p-5 p-3 bg-transparent text-[16px] text-[#FBFBFF] font-normal border border-[#FBFBFF3B] outline-none lg:w-[637px] w-full h-[80px]"
                    />
                    <button
                      type="button"
                      className="text-[#FBFBFF] text-[16px] font-bold uppercase my-[22px]  border border-[#FBFBFF] absolute top-[32px] right-3 w-[126px] h-[42px] "
                    >
                      get started
                    </button>
                  </div>
                </div>

                <button className="w-[126px] h-[50px] bg-[#C8FF00] text-[#000] text-[16px] font-bold uppercase my-[22px]">
                  get started
                </button>
                <div className="absolute top-5 right-5 " onClick={closePopup}>
                  <X className="w-6 h-6 text-[#FBFBFF] cursor-pointer" />
                </div>
              </div>
            </div>
          )}

         
        </Container>
        <div className="absolute lg:-bottom-40 lg:-left-10 bottom-0 left-0  lg:w-[485px] lg:h-[428px] w-[299px] h-[248px] bg-primaryColor blur-[200px] lg:opacity-30 opacity-50 z-0" />
          <div className="absolute lg:top-0 top-28 lg:right-[450px] -right-20 size-[200px] bg-primaryColor blur-[200px]" />
          <div className="absolute top-0 right-0 lg:block hidden">
            <img src={Net} alt="net" />
          </div>
          <div className="absolute bottom-0 left-0 lg:block hidden">
            <img src={Line} alt="line" />
          </div>
          <p className="absolute bottom-[137px] -left-2 transform rotate-90 text-[14px] text-[#FBFBFF] font-normal uppercase lg:block hidden">
            AI gaming
          </p>
    </section>
  );
};

const Svgicon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
  >
    <path
      d="M73.303 26.7169C74.6 26.718 75.8436 27.2338 76.7607 28.1509C77.6778 29.068 78.1936 30.3116 78.1947 31.6086C78.1936 32.9056 77.6778 34.1492 76.7607 35.0663C75.8436 35.9834 74.6 36.4992 73.303 36.5003C72.0056 36.4997 70.7615 35.9842 69.8439 35.067C68.9264 34.1499 68.4104 32.906 68.4092 31.6086C68.4098 30.3109 68.9256 29.0664 69.8432 28.1488C70.7608 27.2312 72.0053 26.7154 73.303 26.7148M35.0988 33.7794H32.4801V31.1607C32.4801 30.3153 32.1443 29.5045 31.5465 28.9068C30.9487 28.309 30.138 27.9732 29.2926 27.9732C28.4472 27.9732 27.6364 28.309 27.0387 28.9068C26.4409 29.5045 26.1051 30.3153 26.1051 31.1607V33.7794H23.4884C22.643 33.7789 21.8321 34.1142 21.2339 34.7115C20.6357 35.3089 20.2994 36.1195 20.2988 36.9648C20.2983 37.8102 20.6336 38.6212 21.231 39.2194C21.8283 39.8175 22.6389 40.1539 23.4842 40.1544H26.1072V42.7732C26.1072 43.6186 26.443 44.4293 27.0408 45.0271C27.6385 45.6249 28.4493 45.9607 29.2947 45.9607C30.14 45.9607 30.9508 45.6249 31.5486 45.0271C32.1463 44.4293 32.4822 43.6186 32.4822 42.7732V40.1544H35.0988C35.9442 40.1544 36.755 39.8186 37.3527 39.2208C37.9505 38.6231 38.2863 37.8123 38.2863 36.9669C38.2863 36.1215 37.9505 35.3108 37.3527 34.713C36.755 34.1153 35.9442 33.7794 35.0988 33.7794ZM62.5842 37.4336C63.8813 37.4347 65.1248 37.9504 66.042 38.8675C66.9591 39.7847 67.4748 41.0282 67.4759 42.3253C67.4748 43.6223 66.9591 44.8658 66.042 45.783C65.1248 46.7001 63.8813 47.2158 62.5842 47.2169C61.2872 47.2158 60.0437 46.7001 59.1265 45.783C58.2094 44.8658 57.6937 43.6223 57.6926 42.3253C57.6937 41.0282 58.2094 39.7847 59.1265 38.8675C60.0437 37.9504 61.2872 37.4347 62.5842 37.4336Z"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M69.2827 16.666H30.716C19.5035 16.666 10.416 25.7556 10.416 36.966C10.416 48.1764 19.5035 57.266 30.716 57.266C35.6577 57.266 40.1827 55.4952 43.7035 52.5598H56.2952C59.9371 55.6054 64.5351 57.2716 69.2827 57.266C80.4952 57.266 89.5827 48.1764 89.5827 36.966C89.5827 25.7556 80.4952 16.666 69.2827 16.666Z"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M43.6836 72.8801C43.6836 72.8801 44.2294 80.1967 52.2003 83.3342C49.1294 77.5197 56.9044 72.3572 56.7086 68.6988C58.2753 71.6384 57.2961 74.9072 57.2961 74.9072C57.2961 74.9072 65.5253 63.9967 52.4628 57.2676C54.5523 61.1217 54.9419 61.253 54.9419 64.9759"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M54.8252 62.5655C54.8252 62.5655 48.9335 66.7405 49.5877 72.228C46.8939 69.4655 46.9731 68.3072 47.1043 64.3217C42.696 64.3134 45.3127 59.7592 47.6252 57.2676C38.4168 60.7301 38.9377 70.5947 42.6627 75.3634C43.5106 72.0967 45.3627 70.9988 45.3627 70.9988"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const Svgicon1 = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="101"
    height="100"
    viewBox="0 0 101 100"
    fill="none"
  >
    <path
      d="M25.5 64.3158H49.3792M25.5 49.822H49.3792M25.5 35.3262H34.8479M79.8833 54.4845V76.2137C79.8833 78.4238 79.0054 80.5434 77.4426 82.1062C75.8797 83.669 73.7601 84.547 71.55 84.547H18.2083C15.9982 84.547 13.8786 83.669 12.3158 82.1062C10.753 80.5434 9.875 78.4238 9.875 76.2137V23.7845C9.875 21.5744 10.753 19.4548 12.3158 17.8919C13.8786 16.3291 15.9982 15.4512 18.2083 15.4512H79.9854M91.125 50.4095V19.5866L64.3458 34.9991L91.125 50.4095Z"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const Svgicon2 = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="101"
    height="100"
    viewBox="0 0 101 100"
    fill="none"
  >
    <circle cx="50.5" cy="31.25" r="20.25" stroke-width="2" />
    <path
      d="M11.5 72C11.5 65.9249 16.4249 61 22.5 61H78.5C84.5751 61 89.5 65.9249 89.5 72V91.5H11.5V72Z"
      stroke-width="2"
    />
    <path
      d="M63.4033 71.8398C63.2474 72.1143 63.067 72.3691 62.8592 72.6049C61.3246 74.7641 57.8949 79.6135 54.7719 83.9818C52.3226 87.412 46.1543 86.4662 44.0049 81.1711C41.3703 75.1374 38.5516 68.6797 38 67.4049L38.0363 67.4417L47.9268 77.8918L48.0075 77.9793C48.0363 78.0103 48.067 78.0433 48.0996 78.0769C48.3688 78.3647 48.7282 78.7425 48.9304 78.9549L48.9648 78.9916C48.9861 79.0132 49.0049 79.0322 49.0206 79.05L49.0857 79.1184L48.5322 80.5783C47.7264 82.4978 46.6189 82.7977 45.2922 82.3692C45.2884 82.3673 45.2846 82.3654 45.2809 82.3654C45.0636 82.295 44.8351 82.1473 44.6272 81.9685C46.2344 83.604 48.6574 83.4481 49.4632 81.7099L50.038 80.3508L52.4259 74.6994L55.1832 68.1758C55.2797 67.8683 55.4099 67.5761 55.5658 67.2997C56.391 65.8436 57.9869 64.8876 59.7882 65.0106C62.0014 65.1564 63.8046 66.9517 63.9855 69.1881C64.0607 70.1593 63.8397 71.0709 63.4033 71.8398Z"
      fill="#FBFBFF"
    />
  </svg>
);
const Svgicon3 = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
  >
    <path
      d="M40.4585 67.6256C38.2961 67.3563 36.2413 66.5279 34.4967 65.2222C32.7522 63.9165 31.3781 62.1786 30.5101 60.1799C29.642 58.1812 29.31 55.9907 29.5467 53.8245C29.7835 51.6584 30.5808 49.5913 31.8601 47.8273C33.1393 46.0632 34.8563 44.6631 36.8417 43.765C38.8271 42.867 41.0123 42.502 43.1818 42.706C45.3513 42.9101 47.4302 43.6762 49.2133 44.9287C50.9964 46.1812 52.4222 47.8769 53.3501 49.8486M26.7168 25.9257L38.2918 22.0527"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M55.1454 72.2091L39.7808 56.8445C36.8766 52.8549 41.4891 49.7737 44.26 52.3654L53.1933 60.6466C52.1912 57.4779 55.4891 52.3008 60.3058 58.6633C59.0787 52.107 64.9579 51.2341 67.6266 55.782C67.0016 50.7654 71.4141 49.8862 74.31 53.0008L86.4475 65.1404C92.8516 71.5299 83.7933 88.6591 69.71 85.8841L48.0954 78.3758C45.5704 77.7466 42.3683 71.3758 54.4975 74.2341C55.3891 74.4445 54.8183 73.9966 55.1454 72.2091Z"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M61.1727 46.6187L50.6436 15.7166C49.5311 12.9374 47.5644 11.1083 42.504 12.7208L14.9186 21.8187C11.3269 23.2833 10.8852 25.3666 11.9956 29.1083L29.8144 82.527C31.8248 88.5583 35.1894 88.427 38.7894 87.2229L46.3581 84.3062"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default Passion;
