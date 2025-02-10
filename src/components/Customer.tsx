"use client";

import React from "react";
import SectionContainer from "./SectionContainer";
import Button from "./Button";
import ImageContainer from "./ImageContainer";
import { motion } from "framer-motion";

const Body = () => {
  const customers = [
    {
      imageSrc: "/icon/client-1.svg",
      imageAlt: "client-1",
      imageHeight: 35,
      imageWidth: 35,
    },
    {
      imageSrc: "/icon/client-2.svg",
      imageAlt: "client-2",
      imageHeight: 35,
      imageWidth: 35,
    },
    {
      imageSrc: "/icon/client-3.svg",
      imageAlt: "client-3",
      imageHeight: 35,
      imageWidth: 35,
    },
    {
      imageSrc: "/icon/client-4.svg",
      imageAlt: "client-4",
      imageHeight: 35,
      imageWidth: 35,
    },
    {
      imageSrc: "/icon/client-5.svg",
      imageAlt: "client-5",
      imageHeight: 35,
      imageWidth: 35,
    },
    {
      imageSrc: "/icon/client-6.svg",
      imageAlt: "client-6",
      imageHeight: 35,
      imageWidth: 35,
    },
  ];

  return (
    <SectionContainer background="bg-main py-16 px-4 md:py-24 md:px-12">
      <div className="flex items-center justify-between">
        <div className="md:w-120 flex justify-center md:justify-start">
          <ImageContainer
            imageSrc="/image/customer.svg"
            imageAlt="customer"
            imageHeight={450}
            imageWidth={450}
            title=""
            description=""
            containerHeight="h-[450px]"
            containerWidth="w-[450px]"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <p className="mt-4 text-sub bold-18 text-justify">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>{" "}
          <p className="mt-4 text-green bold-20 text-justify">Tim Smith</p>
          <p className="text-sub bold-18">
            British Dragon Boat Racing Association
          </p>
          <br />
          <div className="flex items-center flex-nowrap gap-1">
            <div className="flex items-center gap-[2px]">
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
                {customers.map((customer, index) => (
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
                      imageSrc={customer.imageSrc}
                      imageAlt={customer.imageAlt}
                      imageHeight={customer.imageHeight}
                      imageWidth={customer.imageWidth}
                      title=""
                      description=""
                      containerHeight="h-[90px]"
                      containerWidth="w-[90px]"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <Button
              variant="text"
              title="Meet all customers"
              icon="/icon/right-arrow.svg"
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Body;
