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
    <SectionContainer background="bg-sub py-6 sm:py-12 px-4 sm:px-8 md:px-16">
      <div className="text-center -mt-4">
        {/* title */}
        <h1 className="text-[24px] sm:text-[50px] text-title semi-bold">
          Manage your entire community
          <br />
          in a single system
        </h1>
        <p className="text-sub bold-18">Who is Nextcent suitable for?</p>

        <div className="mt-9">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.5,
                },
              },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 mt-8"
          >
            {community.map((community, index) => (
              <motion.div
                className="semi-bold flex flex-col items-center rounded-lg p-6 bg-[#F5F7FA] shadow-lg w-full sm:w-[320px] md:w-[400px]"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                key={index}
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
      </div>
    </SectionContainer>
  );
};

export default Community;
