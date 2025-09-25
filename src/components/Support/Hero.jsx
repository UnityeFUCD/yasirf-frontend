import { Boostingbg1, Supportmainbg, Supportmainbg1 } from "@/assets";
import Container from "@/pages/Shared/Container"; 
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StarIcon2 } from "../Icons/HomeIcon";
import { IoStar } from "react-icons/io5";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="">
      <Container className="relative pt-[165px]">
        <Tabs
          defaultValue="account"
          className="relative z-50 w-[468px] mx-auto"
        >
          <TabsList className="border-b-[1px] border-[rgba(251,251,255,0.23)] rounded-none flex gap-x-4 w-[468px]">
            <TabsTrigger
              value="account"
              className="text-[14px] capitalize font-Manpore font-medium data-[state=active]:text-primaryColor w-[144px] border-b-[1px] border-transparent relative after:absolute after:h-[1px] after:w-0 after:bg-primaryColor after:top-[35px] after:left-0 after:content-['']  rounded-none data-[state=active]:after:w-full text-[#FBFBFF]"
            >
              Guarantees
            </TabsTrigger>
            <TabsTrigger
              value="password1"
              className="text-[14px] capitalize  font-Manpore font-medium data-[state=active]:text-primaryColor w-[177px] border-b-[1px] border-transparent relative after:absolute after:h-[1px] after:w-0 after:bg-primaryColor after:top-[35px] after:left-0 after:content-['']  rounded-none data-[state=active]:after:w-full  text-[#FBFBFF]"
            >
              Quality control
            </TabsTrigger>
            <TabsTrigger
              value="Help centre"
              className="text-[14px] capitalize font-Manpore font-medium data-[state=active]:text-primaryColor w-[147px] border-b-[1px] border-transparent relative after:absolute after:h-[1px] after:w-0 after:bg-primaryColor after:top-[35px] after:left-0 after:content-['']  rounded-none data-[state=active]:after:w-full text-[#FBFBFF]"
            >
              Help centre
            </TabsTrigger>
          </TabsList>
          <div className="mt-9">
            <TabsContent value="account">
              <h2 className=" text-[#FBFBFF] text-[100px] leading-[90px] text-center font-bold uppercase">
                guarantees
              </h2>
            </TabsContent>
            <TabsContent value="password1">
              <h2 className=" text-[#FBFBFF] text-[100px] leading-[90px] text-center font-bold uppercase ">
                {" "}
                Quality{" "}
              </h2>
            </TabsContent>
            <TabsContent value="Help centre">
              <h2 className=" text-[#FBFBFF] text-[100px] leading-[90px] text-center font-bold uppercase">
                {" "}
                Help{" "}
              </h2>
            </TabsContent>
          </div>
        </Tabs>
        <div className="rounded-md bg-gradient-to-b from-[#1A1D30] via-[#1A1D30]/72 to-[#1A1D30]/0 mt-[148px] p-5 relative z-50 w-[645px]">
          <h2 className=" text-[#FBFBFF] text-[56px] leading-[90px] font-bold uppercase">
            {" "}
            Warranty{" "}
          </h2>
          <p className="text-[18px] font-normal text-[#FBFBFF] opacity-50 py-4">
            WoW The War Within Demonology Warlock is one of the iconic classes
            in the game. In this WoW Demonology Warlock Guide, our team wants to
            tell you all we know about this class specialization: rotation,
            changes, hero talents, builds, and more. Hope we find this article
            interesting and helpful, and if so, we also suggest reading our{" "}
            <span className="font-bold">Gold Farming Guide.</span>
          </p>

          <div className="w-[190px]">
            <div className="">
              <p className="text-[14px] font-normal font-Manpore text-[#FFF] opacity-50 flex gap-1 items-center">
                240+ reviews on{" "}
                <IoStar className="fill-[#00B67A] opacity-100" />
                Trustpilot
              </p>

              <div className="flex justify-between py-1">
                <StarIcon2 />
                <StarIcon2 />
                <StarIcon2 />
                <StarIcon2 />
                <StarIcon2 />
              </div>
            </div>
            <div className="flex gap-x-[66px]">
              <p className="text-[14px] text-[#FBFBFF] uppercase font-bold font-Manpore">
                excellent
              </p>
              <Link
                to=""
                className="text-[14px] text-[#00B67A] font-Manpore font-medium underline"
              >
                See all
              </Link>
            </div>
          </div>
        </div>
        <img
          src={Boostingbg1}
          alt="boosting background"
          className="absolute top-[68%] left-[70%] -translate-x-[70%] z-50"
          style={{
            background: `radial-gradient(
           50% 50% at 50% 50%, 
           rgba(5,9,29,0.00) 0%, 
           rgba(5, 9, 29, 0.27) 34%, 
      
         ), url(<path-to-image>) lightgray -244.672px -43.489px / 169.312% 114.894% no-repeat`,
            mixBlendMode: "lighten",
          }}
        />
        <img
          src={Supportmainbg}
          alt="Supportmainbg"
          className="absolute top-0 left-0 h-full w-full z-0"
        />
        <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-transparent to-black"></div>
        <img
          src={Supportmainbg1}
          alt="Supportmainbg"
          className="absolute bottom-0 left-0 h-full w-full z-10"
        />
      </Container>
    </section>
  );
};

export default Hero;
