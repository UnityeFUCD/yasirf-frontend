import { Supportmainbg, Supportmainbg1 } from "@/assets";
import Container from "@/pages/Shared/Container";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Hero = () => {
  return (
    <section className="">
      <Container className="relative pt-[165px] h-[550px]">
        <Tabs
          defaultValue="account"
          className="relative z-50 w-[720px] mx-auto"
        >
          <TabsList className="border-b-[1px] border-[rgba(251,251,255,0.23)] rounded-none flex gap-x-4 w-[468px] mx-auto">
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
          <div className="mt-9 w-[920px]">
            <TabsContent value="account">
              <h2 className=" text-[#FBFBFF] text-[100px] leading-[90px] text-center font-bold uppercase w-[720px]">
                guarantees
              </h2>
            </TabsContent>
            <TabsContent value="password1">
              <h2 className=" text-[#FBFBFF] text-[100px] leading-[90px] font-bold uppercase w-[750px] text-center">
                Quality Control
              </h2>
            </TabsContent>
            <TabsContent value="Help centre">
              <h2 className=" text-[#FBFBFF] text-[100px] leading-[90px] text-center font-bold uppercase w-[720px]">
                {" "}
                Help Centre
              </h2>
            </TabsContent>
          </div>
        </Tabs>
        <img
          src={Supportmainbg}
          alt="Supportmainbg"
          className="absolute top-0 left-0 h-full w-full z-0"
        />
        {/* <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-transparent to-black"></div> */}
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
