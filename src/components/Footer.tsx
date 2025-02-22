import Image from "next/image";
import Link from "next/link";
import { FOOTER_LINKS } from "../../constants";
import React from "react";
import Button from "./Button";
import ImageContainer from "./ImageContainer";

const Footer = () => {
  const social = [
    {
      imageSrc: "/icon/social-1.svg",
      imageAlt: "social-1",
      imageHeight: 45,
      imageWidth: 45,
    },
    {
      imageSrc: "/icon/social-2.svg",
      imageAlt: "social-2",
      imageHeight: 45,
      imageWidth: 45,
    },
    {
      imageSrc: "/icon/social-3.svg",
      imageAlt: "social-3",
      imageHeight: 45,
      imageWidth: 45,
    },
    {
      imageSrc: "/icon/social-4.svg",
      imageAlt: "social-4",
      imageHeight: 45,
      imageWidth: 45,
    },
  ];

  return (
    <footer className="w-full bg-footer relative z-30 flex items-center py-[36.5px] px-5 sm:px-[40px]">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-center md:items-start justify-center gap-[10%] md:flex-row text-center md:text-left">
          <Link href="/" className="mb-10"></Link>

          {/* LOGO */}
          <div className="flex flex-col gap-9">
            <div className="w-full flex justify-center md:justify-start">
              <Image
                src="/icon/logo-w.svg"
                alt="logo-w"
                width={284}
                height={239}
                className="mt-[2px]"
              />
            </div>

            {/* SOCIAL */}
            <div className="flex flex-col gap-4">
              <h4 className="bold-18 text-white">
                Copyright @ 2020 Landify UI Kit.
              </h4>
              <h4 className="bold-18 text-white">All rights reserved</h4>

              {/* SOCIAL ICONS */}
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-[15px]">
                {social.map((social, index) => (
                  <div
                    key={index}
                    className="animated-SocIcon flex justify-center items-center w-[55px] h-[55px] rounded-lg shadow-lg"
                  >
                    <ImageContainer
                      key={index}
                      imageSrc={social.imageSrc}
                      imageAlt={social.imageAlt}
                      imageHeight={social.imageHeight}
                      imageWidth={social.imageWidth}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FOOTER LINKS */}
          <div className="flex flex-wrap gap-5 justify-center md:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns, index) => (
              <FooterColumn key={index} title={columns.title}>
                <ul className="regular-14 flex flex-col gap-3 text-gray">
                  {columns.links.map((link) => (
                    <Link href="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
          </div>

          {/* EMAIL */}
          <div className="flex flex-col gap-5 text-center md:text-left">
            <h4 className="bold-18 text-white">Stay Up To Date</h4>
            <div className="flex justify-center md:justify-start">
              <Button
                variant="secondary"
                title="Your email address"
                icon="/icon/send.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col items-center md:items-start gap-5">
      <h4 className="bold-18 text-white">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
