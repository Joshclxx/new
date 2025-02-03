import { NAV_LINKS } from "../../constants";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#F5F7FA] relative z-30 py-5">
      <div className="max-w-[1440px] mx-auto flex padding-container">
        <Link href="/">
          <Image src="/Logo.svg" alt="Logo" width={111} height={21} />
        </Link>

        <ul className="hidden h-full gap-9 lg:flex text-[#263238]">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="py-28 px-30 bg-F5F7FA"
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
