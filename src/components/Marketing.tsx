"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionContainer from "./SectionContainer";
import ImageContainer from "./ImageContainer";
import Button from "./Button";

const Marketing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  console.log("isInView", isInView);
  const markets = [
    {
      imageSrc: "/image/market-1.svg",
      imageAlt: "market-1",
      imageHeight: 364,
      imageWidth: 468,
      description: "Learn how to create efficient processes with our platform.",
    },
    {
      imageSrc: "/image/market-2.svg",
      imageAlt: "market-2",
      imageHeight: 364,
      imageWidth: 468,
      description:
        "What are your safeguarding responsibilities and how can you manage them?",
    },
    {
      imageSrc: "/image/market-3.svg",
      imageAlt: "market-3",
      imageHeight: 364,
      imageWidth: 468,
      description: "Revamping the Membership Model with Triathlon Australia",
    },
  ];

  return (
    <SectionContainer background="bg-sub py-[33.5px] px-[40px] mb-6">
      <div className="max-w-6xl w-full grid grid-cols-1 gap-10 items-center justify-center">
        <div className="text-center -mt-4">
          <h1 className="text-title semi-bold typewriter">
            Caring is the new marketing
          </h1>
          <p className="text-sub bold-18">
            The Nextcent blog is the best place to read about the latest
            membership insights,
            <br />
            trends and more. See who&lsquoclas joining the community, read about
            how our community
            <br />
            are increasing their membership income and lots more.​
          </p>
        </div>
        <div className="relative flex items-center flex-nowrap">
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
            {markets.map((market, index) => (
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                key={index}
                className="relative flex flex-center justify-center"
              >
                <ImageContainer
                  imageSrc={market.imageSrc}
                  imageAlt={market.imageAlt}
                  imageHeight={market.imageHeight}
                  imageWidth={market.imageWidth}
                  title=""
                  description=""
                  containerHeight="h-[364px]"
                  containerWidth="w-[468px]"
                />

                <div className="absolute bottom-[-8%] flex items-center justify-center w-[80%] h-[40%] bg-main py-4 px-8 rounded-lg shadow-2xl text-sub">
                  <div className="text-center">
                    <p className="bold-18">{market.description}</p>
                    <div className="flex flex-center items-center justify-center">
                      <Button
                        variant="text"
                        title="Readmore"
                        icon="/icon/right-arrow.svg"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Marketing;
