"use client";

import React from "react";
import SectionContainer from "./SectionContainer";
import ImageContainer from "./ImageContainer";
import { motion } from "framer-motion";

const Achievements = () => {
  const achievements = [
    {
      imageSrc: "/icon/ach-1.svg",
      imageAlt: "ach-1",
      imageHeight: 65,
      imageWidth: 65,
      title: "2,245,341",
      description: "Members",
    },
    {
      imageSrc: "/icon/ach-3.svg",
      imageAlt: "ach-3",
      imageHeight: 65,
      imageWidth: 65,
      title: "46,328",
      description: "Clubs",
    },
    {
      imageSrc: "/icon/ach-2.svg",
      imageAlt: "ach-2",
      imageHeight: 65,
      imageWidth: 65,
      title: "828,867",
      description: "Event Booking",
    },
    {
      imageSrc: "/icon/ach-4.svg",
      imageAlt: "ach-4",
      imageHeight: 65,
      imageWidth: 65,
      title: "1,926,436",
      description: "Payments",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <SectionContainer background="bg-main py-[10.5px] px-[40px]">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center items-start text-left">
          <h1 className="semi-bold-1 text-[#4D4D4D]">
            Helping a local
            <br />
            <span className="text-[#4CAF4F]">business reinvent itself</span>
          </h1>
          <p className="bold-18 text-[#18191F]">
            We reached here with our hard work and dedication
          </p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          className="mt-8 grid grid-cols-2 gap-10"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              variants={itemVariants}
              key={index}
              className="flex flex-col items-center rounded-lg p-6 bg-[#F5F7FA] shadow-lg w-full"
            >
              <ImageContainer
                imageSrc={achievement.imageSrc}
                imageAlt={achievement.imageAlt}
                imageHeight={achievement.imageHeight}
                imageWidth={achievement.imageWidth}
                title={achievement.title}
                description={achievement.description}
                isTextBeside={true}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default Achievements;
