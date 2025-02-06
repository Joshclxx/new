import React from "react";
import SectionContainer from "./SectionContainer";
import Button from "../../new/src/components/Button";

const Features = () => {
  return (
    <SectionContainer background="bg-main py-[20.5px] px-[40px]">
      <div className="max-w-6xl w-full grid grid-cols-1 gap-10 items-center justify-center mt-4 mb-4">
        <div className="flex flex-col text-center items-center justify-center">
          <h1 className="text-title bold-64">
            Pellentesque suscipit
            <br />
            fringilla libero eu.
          </h1>
          <div className="flex flex-center items-center justify-center mt-4">
            <Button
              variant="primary"
              title="Get a Demo"
              icon="/icon/right-arrow-w.svg"
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Features;
