"use client";

import { motion } from "framer-motion";
import SectionContainer from "./SectionContainer";
import Button from "./Button";
import ImageContainer from "./ImageContainer";

const heroes = [
  {
    imageSrc: "/image/Illustration.svg",
    imageAlt: "Illustration",
    imageHeight: 450,
    imageWidth: 450,
  },
];

const columnVariants = {
  hidden: { opacity: 0, x: "-100%" },
  visible: { opacity: 1, x: 0 },
};

const Hero = () => {
  return (
    <SectionContainer background="bg-main relative py-24 px-6 md:py-48 md:px-22">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        <motion.div
          className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center"
          variants={columnVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          <div className="flex-1 max-w-[600px] text-center md:text-left">
            <h1 className="bold-64 md:bold-64 text-[#4D4D4D]">
              Lessons and insights{" "}
              <span className="text-[#4CAF4F]">from 8 years</span>
            </h1>
            <p className="bold-16 md:bold-18 text-[#717171] mt-4">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <div className="mt-6">
              <Button variant="primary" title="Register" />
            </div>
          </div>
        </motion.div>

        <div className="flex-1 flex justify-center md:justify-end">
          {heroes.map((hero, index) => (
            <ImageContainer
              key={index}
              imageSrc={hero.imageSrc}
              imageAlt={hero.imageAlt}
              imageHeight={hero.imageHeight}
              imageWidth={hero.imageHeight}
              title=""
              description=""
              containerHeight="h-[440px]"
              containerWidth="w-[440px]"
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
        <div className="w-[8px] h-[8px] bg-[#4CAF4F] rounded-full opacity-100"></div>
        <div className="w-[8px] h-[8px] bg-[#4CAF4F] rounded-full opacity-50"></div>
        <div className="w-[8px] h-[8px] bg-[#4CAF4F] rounded-full opacity-50"></div>
      </div>
    </SectionContainer>
  );
};

export default Hero;
