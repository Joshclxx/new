"use client";

import ImageContainer from "./ImageContainer";
import React from "react";
import SectionContainer from "./SectionContainer";
import { motion } from "framer-motion";

const Community = () => {
  const community = [
    {
      imageSrc: "/icon/icon-1.svg",
      imageAlt: "icon-1",
      imageHeight: 80,
      imageWidth: 80,
      title: "Membership Organization",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      imageSrc: "/icon/icon-3.svg",
      imageAlt: "icon-3",
      imageHeight: 80,
      imageWidth: 80,
      title: "National Association",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      imageSrc: "/icon/icon-2.svg",
      imageAlt: "icon-2",
      imageHeight: 80,
      imageWidth: 80,
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
  ];

  return (
    <SectionContainer background="bg-sub py-[20.5px] px-[40px]">
      <div className="text-center -mt-4">
        <h1 className="text-title semi-bold">
          Manage your entire community
          <br />
          in a single system
        </h1>
        <p className="text-sub bold-18">Who is Nextcent suitable for?</p>
        <motion.div
          className="flex flex-wrap justify-center items-center gap-14 mt-9"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.4,
              },
            },
          }}
        >
          {community.map((community, index) => (
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              key={index}
              className="semi-bold flex flex-col items-center rounded-lg p-6 bg-[#F5F7FA] shadow-lg w-[400px]"
            >
              <ImageContainer
                imageSrc={community.imageSrc}
                imageAlt={community.imageAlt}
                imageHeight={community.imageHeight}
                imageWidth={community.imageWidth}
                title={community.title}
                description={community.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default Community;
