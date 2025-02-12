"use client";

import { motion } from "framer-motion";
import React from "react";
import SectionContainer from "./SectionContainer";
import Button from "./Button";
import ImageContainer from "./ImageContainer";

const columnVariants = {
  hidden: { opacity: 0, x: "-100" },
  visible: { opacity: 1, x: 0 },
};

const Body = () => {
  return (
    <SectionContainer background="bg-sub py-16 px-4 md:py-24 md:px-12">
      <div className="flex items-center justify-between">
        <motion.div
          className="md:w-120 hidden md:flex justify-center md:justify-start"
          variants={columnVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.5 }}
        >
          <ImageContainer
            imageSrc="/image/pana.svg"
            imageAlt="pana"
            imageHeight={450}
            imageWidth={450}
            title=""
            description=""
            containerHeight="h-[450px]"
            containerWidth="w-[450px]"
          />
        </motion.div>
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-[#4D4D4D] body-bold text-justify">
            How to design your site footer like{" "}
            <span className="text-[#4D4D4D]">we did</span>
          </p>
          <p className="mt-4 text-[#717171] bold-18 text-justify">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>{" "}
          <br />
          <div className=" flex justify-center md:justify-start w-full">
            <Button variant="primary" title="Learn More" />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Body;
