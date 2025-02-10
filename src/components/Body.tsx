import React from "react";
import SectionContainer from "./SectionContainer";
import Button from "./Button";
import ImageContainer from "./ImageContainer";

const Body = () => {
  return (
    <SectionContainer background="bg-sub py-[22.5px] px-[40px]">
      <div className="flex items-center justify-between">
        <div className="md:w-120 flex justify-center md:justify-start">
          <ImageContainer
            imageSrc="/image/frame.svg"
            imageAlt="frame"
            imageHeight={921}
            imageWidth={937}
            title=""
            description=""
            containerHeight="h-[450px]"
            containerWidth="w-[450px]"
          />{" "}
        </div>
        <div className="md:w-1/2 text-center md:text-left">
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
          </p>{" "}
          <br />
          <Button variant="primary" title="Learn More" />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Body;
