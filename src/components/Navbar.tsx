"use client";

import { useState } from "react";
import { NAV_LINKS } from "../../constants";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-[#F5F7FA] relative z-30 h-[84px] flex items-center">
      <div className="w-full mx-auto flex justify-between items-center px-10">
        <Link href="/">
          <Image src="/icon/Logo.svg" alt="Logo" width={111} height={21} />
        </Link>

        <ul className="hidden h-full gap-1 lg:flex text-color">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link
                href={link.href}
                className="flexCenter py-4 px-6 transition-colors duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <Button variant="text" title="Login" />
          <Button variant="primary" title="Sign Up" />
        </ul>
        <Image
          src="/icon/menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
          onClick={toggleMenu}
        />
      </div>

      <div
        className={`lg:hidden ${
          isMenuOpen ? "block" : "hidden"
        } absolute left-0 w-full bg-[#F5F7FA] py-5 mt-3 z-20`}
      >
        <ul className="flex flex-col items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="text-[#0A1647] text-xl font-semibold"
              onClick={() => setIsMenuOpen(false)}
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
