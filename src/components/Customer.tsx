import Image from "next/image";
import React from "react";
import SectionContainer from "./SectionContainer";
import Button from "./Button";
import ImageContainer from "./ImageContainer";

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
    <SectionContainer background="bg-[#FFFFFF]">
      <div className="flex items-center justify-between">
        <div className="md:w-120 flex justify-center md:justify-start">
          <Image src="/image/frame.svg" alt="frame" width={391} height={407} />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-[#4D4D4D] body-bold text-justify">
            The unseen of spending three{" "}
            <span className="text-[#4D4D4D]">years at Pixelgrade</span>
          </p>
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
          <div className="flex items-center flex-nowrap">
            <div className="flex items-center gap-[2px]">
              {customers.map((customer, index) => (
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
              ))}
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
