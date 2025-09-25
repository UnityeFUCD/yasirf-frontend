import Boostcard from "@/components/joinourteam/Boostcard";
import Booster from "@/components/joinourteam/Booster";
import Hero from "@/components/joinourteam/Hero";
import Job from "@/components/joinourteam/Job";
import Passion from "@/components/joinourteam/Passion";
import Revolution from "@/components/joinourteam/Revolution";
import Whyboost from "@/components/joinourteam/Whyboost";
import React from "react";

const JoinourTeam = () => {
  return (
    <>
      <Hero />
      <Booster />
      <Passion />
      <Whyboost/>
      <Job/>
      <Revolution/>
      <Boostcard/>
    </>
  );
};

export default JoinourTeam;
