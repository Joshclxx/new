import React from "react";
import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";

const page = () => {
  return (
    <div className="bg-[#F5F7FA]">
      <Navbar />
      <Hero />
      <Clients />
    </div>
  );
};

export default page;
