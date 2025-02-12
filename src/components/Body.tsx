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
    <SectionContainer background="bg-sub max-container padding-container flex flex-col-reverse md:flex-row items-center py-10 px-6 md:py-20">
      <div className="md:flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        <motion.div
          className="md:w-120 hidden md:flex justify-center md:justify-start"
          variants={columnVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.5 }}
        >
          <ImageContainer
            imageSrc="/image/frame.svg"
            imageAlt="frame"
            imageHeight={921}
            imageWidth={937}
            title=""
            description=""
            containerHeight="h-[300px] md:h-[450px]"
            containerWidth="w-[300px] md:w-[450px]"
          />
        </motion.div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-[#4D4D4D] body-bold text-justify">
            The unseen of spending three{" "}
            <span className="text-[#4D4D4D]">years at Pixelgrade</span>
          </p>
          <p className="mt-4 text-[#717171] bold-18 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <br />
          <div className="flex justify-center md:justify-start w-full">
            <Button variant="primary" title="Learn More" />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Body;
