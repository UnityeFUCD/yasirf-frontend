import { Jointeambg, Jointeamourhero, Light, Overlay } from "@/assets";
import Container from "@/pages/Shared/Container";

const Hero = () => {
  return (
    <div>
      <section className="relative pt-[263px] pb-[107px] lg:px-0 px-[19px]">
        <Container className="relative z-50">
          <h2 className="lg:block hidden text-[#FBFBFF] text-[100px] leading-[90px] text-center font-normal uppercase lg:w-[1097px] mx-auto">
            Play Your Favorite Games &{" "}
            <span className="text-[#C8FF00] text-[100px] font-bold uppercase leading-[90px]">
              Earn Weekly!
            </span>
          </h2>
          <h2 className="lg:hidden block text-[#FBFBFF] text-[52px] leading-[46px] text-center font-normal uppercase w-full">
            join our<span className="text-[#C8FF00] text-[52px] font-bold uppercase leading-[46px]"> team!</span>
          </h2>
          <p className=" text-[#FBFBFF] lg:text-[28px] lg:px-0 px-8 text-[18px]  text-center font-normal font-Manpore mt-3">
            We’re hiring for the following games:
          </p>
        </Container>
        <img src={Light} alt="Light" className="absolute top-0 right-[238px] z-10" />
        <img
          src={Jointeamourhero}
          alt="Jointeamourhero"
          className="
             w-full h-full absolute top-0 left-0 z-0 object-cover"
        />
      </section>
    </div>
  );
};

export default Hero;
