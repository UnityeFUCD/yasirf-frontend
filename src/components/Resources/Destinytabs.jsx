import React from "react";
import Container from "@/pages/Shared/Container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Resourcetabsreusable from "../DynamicComponents/Resource/Resourcetabsreusable";

const Destinytabs = () => {
  return (
    <section className="">
      <Container className="pt-[74px] bg-[#05091D] lg:px-[150px] px-4">
        <h2 className=" text-[#FBFBFF] lg:text-[56px] text-[32px] leading-[90px] font-semibold uppercase">
          destiny 2 guidesc
        </h2>
        <Tabs defaultValue="account" className="">
          <TabsList className="flex gap-4 overflow-x-auto scrollbar-hide w-full border-b-[1px] border-[rgba(251,251,255,0.23)] rounded-none pr-0">
            <TabsTrigger
              value="account"
              className="text-[14px] uppercase font-medium data-[state=active]:text-primaryColor border-b-[1px] border-transparent relative after:absolute after:h-[1px] after:w-0 after:bg-primaryColor after:top-[35px] after:left-0 after:content-[''] rounded-none data-[state=active]:after:w-full"
            >
              In game
            </TabsTrigger>
            <TabsTrigger
              value="password1"
              className="text-[14px] uppercase font-medium data-[state=active]:text-primaryColor border-b-[1px] border-transparent relative after:absolute after:h-[1px] after:w-0 after:bg-primaryColor after:top-[35px] after:left-0 after:content-[''] rounded-none data-[state=active]:after:w-full"
            >
              Weapons
            </TabsTrigger>
            <TabsTrigger
              value="password2"
              className="text-[14px] uppercase font-medium data-[state=active]:text-primaryColor border-b-[1px] border-transparent relative after:absolute after:h-[1px] after:w-0 after:bg-primaryColor after:top-[35px] after:left-0 after:content-[''] rounded-none data-[state=active]:after:w-full"
            >
              Power Up
            </TabsTrigger>
            <TabsTrigger
              value="password3"
              className="text-[14px] uppercase font-medium data-[state=active]:text-primaryColor border-b-[1px] border-transparent relative after:absolute after:h-[1px] after:w-0 after:bg-primaryColor after:top-[35px] after:left-0 after:content-[''] rounded-none data-[state=active]:after:w-full"
            >
              Level
            </TabsTrigger>
            <TabsTrigger
              value="password4"
              className="text-[14px] uppercase font-medium data-[state=active]:text-primaryColor border-b-[1px] border-transparent relative after:absolute after:h-[1px] after:w-0 after:bg-primaryColor after:top-[35px] after:left-0 after:content-[''] rounded-none data-[state=active]:after:w-full"
            >
              Pro Tips
            </TabsTrigger>
            <TabsTrigger
              value="password5"
              className="text-[14px] uppercase font-medium data-[state=active]:text-primaryColor border-b-[1px] border-transparent relative after:absolute after:h-[1px] after:opacity-70 after:w-0 after:bg-primaryColor after:top-[35px] after:left-0 after:content-[''] rounded-none data-[state=active]:after:w-full"
            >
              New Releases
            </TabsTrigger>
          </TabsList>

          <div className="mt-9">
            <TabsContent value="account">
              <Resourcetabsreusable />
            </TabsContent>
            <TabsContent value="password1">
              <Resourcetabsreusable />
            </TabsContent>
            <TabsContent value="password2">
              <Resourcetabsreusable />
            </TabsContent>
            <TabsContent value="password3">
              <Resourcetabsreusable />
            </TabsContent>
            <TabsContent value="password4">
              <Resourcetabsreusable />
            </TabsContent>
            <TabsContent value="password5">
              <Resourcetabsreusable />
            </TabsContent>
          </div>
        </Tabs>
      </Container>
    </section>
  );
};

export default Destinytabs;
