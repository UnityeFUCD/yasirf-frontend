import NotBoostcard from "../DynamicComponents/jointeamcard/NotBoostcard";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Net, Hiringbg, Hiringbg2 } from "@/assets";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Container from "@/pages/Shared/Container";

const Hiring = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section>
      <Container className="pt-[121px] pb-[129px] relative lg:px-[150px] px-[54px] overflow-hidden">
        <h3 className="text-[#FBFBFF] lg:text-[56px] text-[32px] font-medium uppercase relative z-50 text-center">
          Hiring NOW
        </h3>

        <div className="mt-[52px] relative z-50">
          <button
            ref={prevRef}
            className="absolute lg:left-[-72px] top-1/2 -left-12 transform -translate-y-1/2 z-10 text-[#FBFBFF]  h-[35px] w-[35px] bg-[#212634] rounded-full flex justify-center items-center border border-[rgba(200,255,0,0.16)] hover:bg-primaryColor group duration-300"
          >
            <FaChevronLeft className="w-[8px] h-[11px] group-hover:text-black" />
          </button>

          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1} 
            breakpoints={{
              480: { slidesPerView: 1 }, 
              640: { slidesPerView: 2 }, 
              768: { slidesPerView: 2 }, 
              1140: { slidesPerView: 4 }, 
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
          >
            {Array(8)
              .fill()
              .map((_, index) => (
                <SwiperSlide key={index}>
                  <NotBoostcard title="Data Scientist" customWidth="w-full" />
                </SwiperSlide>
              ))}
          </Swiper>
          <button
            ref={nextRef}
            className="absolute lg:right-[-73px] -right-12 top-1/2 transform -translate-y-1/2 z-10  h-[35px] w-[35px] bg-[#212634] rounded-full flex justify-center items-center border border-[rgba(200,255,0,0.16)] hover:bg-primaryColor group duration-300"
          >
            <FaChevronRight className="text-[#FBFBFF] w-[8px] h-[11px] group-hover:text-black" />
          </button>
        </div>
        <img
          src={Net}
          alt="net"
          className="absolute top-0 lg:-right-8 -right-36 z-0"
        />
        <div className="absolute -bottom-48 left-10  w-[485px] h-[428px] bg-primaryColor blur-[200px] lg:opacity-[0.3] opacity-20 z-10" />
        <img
          src={Hiringbg2}
          alt="Hiringbg2"
          className="absolute lg:top-0 lg:left-0 h-full w-full"
        />
      </Container>
    </section>
  );
};

export default Hiring;
