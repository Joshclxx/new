"use client";

import React from "react";
import ImageContainer from "./ImageContainer";
import SectionContainer from "./SectionContainer";
import { motion } from "framer-motion";

const Clients = () => {
  const clients = [
    {
      imageSrc: "/icon/client-1.svg",
      imageAlt: "client-1",
      imageHeight: 80,
      imageWidth: 80,
    },
    {
      imageSrc: "/icon/client-2.svg",
      imageAlt: "client-2",
      imageHeight: 80,
      imageWidth: 80,
    },
    {
      imageSrc: "/icon/client-3.svg",
      imageAlt: "client-3",
      imageHeight: 80,
      imageWidth: 80,
    },
    {
      imageSrc: "/icon/client-4.svg",
      imageAlt: "client-4",
      imageHeight: 80,
      imageWidth: 80,
    },
    {
      imageSrc: "/icon/client-5.svg",
      imageAlt: "client-5",
      imageHeight: 80,
      imageWidth: 80,
    },
    {
      imageSrc: "/icon/client-6.svg",
      imageAlt: "client-6",
      imageHeight: 80,
      imageWidth: 80,
    },
    {
      imageSrc: "/icon/client-7.svg",
      imageAlt: "client-7",
      imageHeight: 80,
      imageWidth: 80,
    },
  ];

  return (
    <SectionContainer background="bg-sub py-16 sm:py-32 px-6 sm:px-12 md:px-16">
      <div className="max-w-6xl w-full grid grid-cols-1 gap-10 items-center justify-center">
        <div className="text-center -mt-16 sm:-mt-32">
          <h1 className="text-title semi-bold mb-2 typewriter">Our Clients</h1>
          <p className="text-sub bold-18">
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 md:gap-16 lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
            className="flex flex-wrap justify-center gap-6 sm:gap-12 md:gap-16 lg:gap-20"
          >
            {clients.map((client, index) => (
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                key={index}
                className="relative flex flex-center justify-center"
              >
                <ImageContainer
                  key={index}
                  imageSrc={client.imageSrc}
                  imageAlt={client.imageAlt}
                  imageHeight={client.imageHeight}
                  imageWidth={client.imageWidth}
                  title=""
                  description=""
                  containerWidth="w-16 sm:w-20 md:w-24"
                  containerHeight="h-16 sm:h-20 md:h-24"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Clients;
