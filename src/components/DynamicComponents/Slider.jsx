import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import PropTypes from "prop-types";
import { NextIcon, PrevIcon } from "../Icons/SelectedGameIcon";
import { offerCardPhoto } from "@/assets";
import OffersCard from "../HomePageComponents/Offers/OffersCard";
import { cn } from "@/lib/utils";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const offersCardData = [
  {
    name: "AWAKENED RAISED BUNDLE",
    status: {
      primary: "EXPIRING",
      secondary: "NEW LAUNCH",
    },
    contents: {
      bundle_type: "Season & Awakened Bundle",
      features: [
        "Season 4 Awakened Bundle",
        "Full runs with all rewards",
        "493-515 ilvl gear",
      ],
    },
    pricing: {
      current_price: 20.99,
      from_text: "FROM",
    },
    image: <img src={offerCardPhoto} alt="image" />,
  },
  {
    name: "AWAKENED RAISED BUNDLE",
    status: {
      primary: "LIMITED",
      secondary: "WEEKLY ROTATION",
    },
    contents: {
      bundle_type: "Season & Awakened Bundle",
      features: ["Full runs with all rewards", "493-515 ilvl gear"],
    },
    pricing: {
      current_price: 20.99,
      original_price: 26.0,
      from_text: "FROM",
    },
    image: <img src={offerCardPhoto} alt="image" />,
  },
  {
    name: "AWAKENED RAISED BUNDLE",
    status: {
      primary: "LIMITED",
      secondary: "WEEKLY ROTATION",
    },
    contents: {
      bundle_type: "Season & Awakened Bundle",
      features: ["Full runs with all rewards", "493-515 ilvl gear"],
    },
    pricing: {
      current_price: 20.99,
      original_price: 26.0,
      from_text: "FROM",
    },
    image: <img src={offerCardPhoto} alt="image" />,
  },
  {
    name: "AWAKENED RAISED BUNDLE",
    status: {
      primary: "LIMITED",
      secondary: "WEEKLY ROTATION",
    },
    contents: {
      bundle_type: "Season & Awakened Bundle",
      features: ["Full runs with all rewards", "493-515 ilvl gear"],
    },
    pricing: {
      current_price: 20.99,
      original_price: 26.0,
      from_text: "FROM",
    },
    image: <img src={offerCardPhoto} alt="image" />,
  },
  {
    name: "AWAKENED RAISED BUNDLE",
    status: {
      primary: "LIMITED",
      secondary: "WEEKLY ROTATION",
    },
    contents: {
      bundle_type: "Season & Awakened Bundle",
      features: ["Full runs with all rewards", "493-515 ilvl gear"],
    },
    pricing: {
      current_price: 20.99,
      original_price: 26.0,
      from_text: "FROM",
    },
    image: <img src={offerCardPhoto} alt="image" />,
  },
  {
    name: "AWAKENED RAISED BUNDLE",
    status: {
      primary: "LIMITED",
      secondary: "WEEKLY ROTATION",
    },
    contents: {
      bundle_type: "Season & Awakened Bundle",
      features: ["Full runs with all rewards", "493-515 ilvl gear"],
    },
    pricing: {
      current_price: 20.99,
      original_price: 26.0,
      from_text: "FROM",
    },
    image: <img src={offerCardPhoto} alt="image" />,
  },
  {
    name: "AWAKENED RAISED BUNDLE",
    status: {
      primary: "LIMITED",
      secondary: "WEEKLY ROTATION",
    },
    contents: {
      bundle_type: "Season & Awakened Bundle",
      features: ["Full runs with all rewards", "493-515 ilvl gear"],
    },
    pricing: {
      current_price: 20.99,
      original_price: 26.0,
      from_text: "FROM",
    },
    image: <img src={offerCardPhoto} alt="image" />,
  },
];
export const Slider = ({ data: feedbackData, gameSectionProps }) => {
  return (
    <div
      className={cn(
        "relative  overflow-visible z-20",
        gameSectionProps && " px-[130px]"
      )}
    >
      <div
        className={cn(
          " !hidden lg:!flex swiper-button-prev !w-[50px] !h-[50px] !bg-[#1E1F25] hover:!bg-primaryColor !rounded-full !transition-all !duration-300 group",
          gameSectionProps && "absolute ml-5  p-3 group"
        )}
      >
        {gameSectionProps ? (
          <IoIosArrowBack className="text-white group-hover:text-black" />
        ) : (
          <PrevIcon />
        )}
      </div>

      <div
        className={cn(
          "swiper-button-next !w-[50px] !h-[50px] !bg-[#1E1F25] hover:!bg-primaryColor !rounded-full !transition-all !duration-300",
          gameSectionProps && "absolute mr-5  p-3 group"
        )}
      >
        {gameSectionProps ? (
          <IoIosArrowForward className="text-white group-hover:text-black" />
        ) : (
          <NextIcon />
        )}
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={gameSectionProps ? 4 : 3}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 0 }, // Mobile
          640: { slidesPerView: 2, spaceBetween: gameSectionProps ? 24 : 0 }, // Small tablets
          768: { slidesPerView: 3, spaceBetween: gameSectionProps ? 24 : 0 }, // Tablets
          1024: { slidesPerView: gameSectionProps ? 4 : 3, spaceBetween: gameSectionProps ? 24 : 0 }, // Desktops
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {gameSectionProps ? (
          <div>
            {offersCardData?.map((data, idx) => (
              <SwiperSlide key={`index - ${idx}`}>
                <OffersCard data={data} />
              </SwiperSlide>
            ))}
          </div>
        ) : (
          <>
            {feedbackData?.map((data, idx) => (
              <SwiperSlide key={idx}>
                <div className="border border-gray-700 p-6 md:p-12 lg:p-[80px] w-full h-full">
                  <div className="flex items-center gap-4">
                    <img src={data?.profile_image?.props?.src} alt="" />
                    <div>
                      <h3 className="text-xl">{data?.name}</h3>
                      <p className="text-gray-300">@{data?.username}</p>
                    </div>
                  </div>
                  <div className="pt-5">
                    <p className="bg-primaryColor/30 text-primaryColor w-fit px-[10px] flex items-center gap-2 rounded-md">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="17"
                          viewBox="0 0 16 17"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13.8162 4.94627C14.0701 5.21295 14.0597 5.63493 13.793 5.88879L6.08929 13.2221C5.95773 13.3474 5.78078 13.4135 5.59933 13.4052C5.41788 13.397 5.24766 13.315 5.12803 13.1784L2.16506 9.79377C1.92254 9.51673 1.95052 9.09555 2.22755 8.85303C2.50459 8.61051 2.92577 8.63849 3.16829 8.91552L5.67342 11.7772L12.8737 4.92306C13.1404 4.6692 13.5624 4.67959 13.8162 4.94627Z"
                            fill="#C8FF00"
                          />
                        </svg>
                      </span>
                      Verified Purchase
                    </p>
                    <p className="pt-1 pr-10 md:pr-0">{data?.review}</p>
                    <button className="flex items-center gap-2  text-primaryColor">
                      Show more{" "}
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.5893 13.8282C10.2638 14.1536 9.73618 14.1536 9.41074 13.8282L5.24408 9.66152C4.91864 9.33608 4.91864 8.80845 5.24408 8.48301C5.56951 8.15757 6.09715 8.15757 6.42259 8.48301L10 12.0604L13.5774 8.48301C13.9028 8.15757 14.4305 8.15757 14.7559 8.48301C15.0814 8.80845 15.0814 9.33608 14.7559 9.66152L10.5893 13.8282Z"
                            fill="#C8FF00"
                          />
                        </svg>
                      </span>{" "}
                    </button>
                    <p className="pt-1">{data?.date}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </>
        )}
      </Swiper>
    </div>
  );
};

Slider.propTypes = {
  data: PropTypes.array,
  gameSectionProps: PropTypes.string,
};
