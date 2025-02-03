import Link from "next/link";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#F5F7FA] w-full relative z-30 py-5">
      <div className="max-w-[1440px] mx-auto flexBetween padding-container">
        <Link href="/"></Link>
        <Image src="\Logo.svg" alt="Logo" h-24 w-154 />
      </div>
    </nav>
  );
};

export default Navbar;
