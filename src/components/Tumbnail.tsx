import Image from "next/image";
import React from "react";
import SectionContainer from "./SectionContainer";
import Button from "./Button";

const Body = () => {
  return (
    <SectionContainer background="bg-[#FFFFFF]">
      <div className="flex items-center justify-between">
        <div className="md:w-120 flex justify-center md:justify-start">
          <Image src="/image/pana.svg" alt="pana" width={391} height={407} />
        </div>
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
          <Button variant="primary" title="Learn More" />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Body;
