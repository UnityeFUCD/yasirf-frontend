import Container from "@/pages/Shared/Container";
import React from "react";
import Jobdetaillist from "../DynamicComponents/Jobdetail/Jobdetaillist";

const Get = () => {
  return (
    <section >
      <Container className="bg-[#05091D] pt-[50px] pb-[39px] lg:px-[150px] px-4">
        <h3 className="text-[#FBFBFF] lg:text-[52px] text-[32px] font-medium  uppercase lg:pb-0 pb-3">What you will get</h3>
        <div className="flex flex-col gap-2">
            <Jobdetaillist listitem="Feugiat lorem turpis massa facilisis pellentesque ut massa."/>
            <Jobdetaillist listitem="Sed euismod sit metus praesent eget in felis tincidunt."/>
            <Jobdetaillist listitem="Cras morbi lorem facilisi venenatis etiam."/>
            <Jobdetaillist listitem="Leo purus sagittis nec turpis venenatis maecenas at molestie eu."/>
            <Jobdetaillist listitem="Etiam odio bibendum leo velit.;"/>
            <Jobdetaillist listitem="Et vestibulum tortor diam fermentum lacus sed rhoncus."/>
        </div>
      </Container>
    </section>
  );
};

export default Get;
