import { Supportmainbg, Supportmainbg1 } from "@/assets";
import Container from "@/pages/Shared/Container";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Support3card from "../DynamicComponents/support-3/Support3card";

const Hero = () => {
  return (
    <section className="">
      <Container className='relative pt-[165px]'>
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
        <div className="relative z-50 w-[620px] mx-auto flex justify-center mt-8">
          <input
            type="search"
            name="search"
            placeholder="Search for a topic or feature..."
            className="rounded-full border border-white/20 bg-[#FBFBFF] backdrop-blur-md px-6 py-[13px] text-[#05091D]  outline-none text-[18px] uppercase font-normal h-12 w-[599px]"
          />
          <div className="absolute top-1/2 right-8 -translate-y-1/2 flex gap-x-5 items-center">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z"
                  stroke="#05091D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21 21L16 16"
                  stroke="#05091D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-[151px] relative z-50 w-[1140px] mx-auto">
          <Support3card  Icon={Traingsvg1} heading="rules and regulations"/>
          <Support3card  Icon={Traingsvg2} heading="buying a service"/>
          <Support3card  Icon={Traingsvg3} heading="payment issue"/>
          <Support3card  Icon={Traingsvg4} heading="Raising a ticket"/>
          <Support3card  Icon={Traingsvg5} heading="Other"/>
        </div>
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

const Traingsvg1 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M9.99913 34.1522H25.9998C29.119 34.1522 30.6708 32.5701 30.6708 29.4362V15.7556H19.7622C17.8336 15.7556 16.9298 14.8363 16.9298 12.9077V1.84863H9.99913C6.89541 1.84863 5.32812 3.44549 5.32812 6.58006V29.4362C5.32812 32.5849 6.89541 34.1522 9.99913 34.1522ZM19.8078 13.6913H30.505C30.3996 13.0736 29.9624 12.4706 29.2546 11.7326L20.9373 3.28028C20.2443 2.55706 19.6118 2.11992 18.9786 2.01385V12.8781C18.9786 13.4201 19.2653 13.6913 19.8078 13.6913ZM12.199 22.2799C11.5812 22.2799 11.1441 21.8428 11.1441 21.2552C11.1441 20.667 11.5812 20.2305 12.1983 20.2305H23.8148C24.4178 20.2305 24.8851 20.6676 24.8851 21.2546C24.8851 21.8428 24.4178 22.2793 23.8154 22.2793L12.199 22.2799ZM12.199 28.02C11.5812 28.02 11.1441 27.5828 11.1441 26.9953C11.1441 26.4077 11.5812 25.9706 12.1983 25.9706H23.8148C24.4178 25.9706 24.8851 26.4077 24.8851 26.9953C24.8851 27.5828 24.4178 28.02 23.8154 28.02H12.199Z" fill="#FBFBFF"/>
</svg>
)
const Traingsvg2 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36" fill="none">
  <mask id="mask0_2460_18064" className="mask-type:luminance" maskUnits="userSpaceOnUse" x="3" y="2" width="32" height="32">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.30078 11.25H32.3008L30.8008 31.5H6.80078L5.30078 11.25Z" fill="white" stroke="white" stroke-width="4" stroke-linejoin="round"/>
    <path d="M12.8008 14.25V4.5H24.8008V14.25" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.8008 25.5H24.8008" stroke="black" stroke-width="4" stroke-linecap="round"/>
  </mask>
  <g mask="url(#mask0_2460_18064)">
    <path d="M0.800781 0H36.8008V36H0.800781V0Z" fill="#FBFBFF"/>
  </g>
</svg>
)
const Traingsvg3 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36" fill="none">
  <g clip-path="url(#clip0_2460_18074)">
    <path d="M26.8496 25.23L30.5096 27.345L29.3846 29.295L24.5996 26.535V21H26.8496V25.23ZM36.5996 25.5C36.5996 31.305 31.9046 36 26.0996 36C20.2946 36 15.5996 31.305 15.5996 25.5C15.5996 24.99 15.6446 24.495 15.7196 24H3.59961V6H30.5996V16.02C34.1396 17.715 36.5996 21.315 36.5996 25.5ZM16.6196 21C16.8896 20.46 17.1746 19.95 17.5196 19.455C17.3846 19.5 17.2496 19.5 17.0996 19.5C14.6096 19.5 12.5996 17.49 12.5996 15C12.5996 12.51 14.6096 10.5 17.0996 10.5C19.5896 10.5 21.5996 12.51 21.5996 15C21.5996 15.375 21.5396 15.75 21.4496 16.095C22.8596 15.405 24.4346 15 26.0996 15C26.6096 15 27.1046 15.045 27.5996 15.12V12C26.804 12 26.0409 11.6839 25.4783 11.1213C24.9157 10.5587 24.5996 9.79565 24.5996 9H9.59961C9.59961 10.665 8.26461 12 6.59961 12V18C7.39526 18 8.15832 18.3161 8.72093 18.8787C9.28354 19.4413 9.59961 20.2044 9.59961 21H16.6196ZM33.5996 25.5C33.5996 21.36 30.2396 18 26.0996 18C21.9596 18 18.5996 21.36 18.5996 25.5C18.5996 29.64 21.9596 33 26.0996 33C30.2396 33 33.5996 29.64 33.5996 25.5Z" fill="#FBFBFF"/>
  </g>
  <defs>
    <clipPath id="clip0_2460_18074">
      <rect width="36" height="36" fill="white" transform="translate(0.599609)"/>
    </clipPath>
  </defs>
</svg>
)
const Traingsvg4 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36" fill="none">
  <path d="M29.6504 30.75V33H27.4004V30.75H29.6504ZM26.6504 23.25H24.4004V22.5C24.4004 20.01 26.4104 18 28.9004 18C31.3904 18 33.4004 20.01 33.4004 22.5C33.4004 23.955 32.6504 25.32 31.4654 26.115L31.0154 26.4C30.1604 27 29.6504 27.915 29.6504 28.95V29.25H27.4004V28.95C27.4004 27.165 28.3004 25.5 29.7854 24.525L30.2204 24.24C30.8054 23.85 31.1504 23.205 31.1504 22.5C31.1504 21.255 30.1454 20.25 28.9004 20.25C27.6554 20.25 26.6504 21.255 26.6504 22.5V23.25ZM27.4004 4.5H6.40039C4.75039 4.5 3.40039 5.85 3.40039 7.5V25.5C3.40039 27.15 4.75039 28.5 6.40039 28.5H21.4004V25.5H18.4004V19.5H22.0304C22.5704 18.3 23.4104 17.25 24.4454 16.5H18.4004V10.5H27.4004V15.15C27.8804 15.06 28.3904 15 28.9004 15C29.4104 15 29.9204 15.06 30.4004 15.15V7.5C30.4004 6.70435 30.0843 5.94129 29.5217 5.37868C28.9591 4.81607 28.196 4.5 27.4004 4.5ZM15.4004 25.5H6.40039V19.5H15.4004V25.5ZM15.4004 16.5H6.40039V10.5H15.4004V16.5Z" fill="#FBFBFF"/>
</svg>
)
const Traingsvg5 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36" fill="none">
  <path d="M4.69922 4.5H16.6992V16.5H4.69922V4.5ZM19.6992 4.5H31.6992V16.5H19.6992V4.5ZM4.69922 19.5H16.6992V31.5H4.69922V19.5ZM27.1992 19.5H24.1992V24H19.6992V27H24.1992V31.5H27.1992V27H31.6992V24H27.1992V19.5Z" fill="#FBFBFF"/>
</svg>
)
