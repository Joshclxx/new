import React from "react";
import Hero from "../components/Hero";
import Clients from "../components/Clients";
import Community from "@/components/Community";
import Body from "@/components/Body";
import Achievements from "@/components/Achievements";
import Tumbnail from "@/components/Tumbnail";
import Customer from "@/components/Customer";
import Marketing from "../components/Marketing";
import Features from "@/components/Features";

const page = () => {
  return (
    <div className="bg-sub">
      <Hero />

      <div className="space-y-[-128px] p-5">
        <Clients />
        <Community />
      </div>

      <Body />

      <Achievements />

      <Tumbnail />

      <Customer />

      <Marketing />

      <Features />
    </div>
  );
};

export default page;
