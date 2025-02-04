import React from "react";

import Hero from "../components/Hero";
import Clients from "../components/Clients";
import Community from "@/components/Community";
import Body from "@/components/Body";

const page = () => {
  return (
    <div className="bg-[#F5F7FA]">
      <Hero />
      <div className="space-y-[-128px]">
        <Clients />
        <Community />
      </div>
      <Body />
    </div>
  );
};

export default page;
