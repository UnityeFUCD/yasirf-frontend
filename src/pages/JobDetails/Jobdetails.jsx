import Get from "@/components/jobdetail/Get";
import Hero from "@/components/jobdetail/Hero";
import Hiring from "@/components/jobdetail/Hiring";
import Must from "@/components/jobdetail/Must";
import React from "react";

const Jobdetails = () => {
  return (
    <>
      <Hero />
      <Get />
      <Must />
      <Hiring />
    </>
  );
};

export default Jobdetails;
