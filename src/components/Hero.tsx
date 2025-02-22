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
    <SectionContainer background="bg-main max-container padding-container  flex flex-col items-center gap-16 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-120">
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start"
          variants={columnVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.5 }}
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
            <div className="mt-6 flex justify-center md:justify-start w-full">
              <Button variant="primary" title="Register" />
            </div>
          </div>
        </motion.div>

        <div className="flex-1 hidden md:flex justify-center md:justify-end">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.4,
                },
              },
            }}
            className="flex items-center gap-[28px] relative"
          >
            {heroes.map((hero, index) => (
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
                  imageSrc={hero.imageSrc}
                  imageAlt={hero.imageAlt}
                  imageHeight={hero.imageHeight}
                  imageWidth={hero.imageHeight}
                  title=""
                  description=""
                  containerHeight="h-[440px]"
                  containerWidth="w-[440px]"
                />
              </motion.div>
            ))}
          </motion.div>
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
