import Image from "next/image";
import Button from "./Button";
import SectionContainer from "./SectionContainer";

const Hero = () => {
  return (
    <SectionContainer background="bg-main relative py-48 px-22">
      <div className="flex items-center justify-between">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center">
          <div className="text-left">
            <h1 className="bold-64 text-[#4D4D4D]">
              Lessons and insights{" "}
              <span className="text-[#4CAF4F]">from 8 years</span>
            </h1>
            <p className="bold-18 text-[#717171] mt-4">
              Where to grow your business as a photographer: site or social
              media?
            </p>{" "}
            <br />
            <Button variant="primary" title="Register" />
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <Image
            src="/image/Illustration.svg"
            alt="Illustration"
            width={391}
            height={407}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          <div className=" w-[8px] h-[8px] bg-[#4CAF4F] rounded-full text-[#4CAF4F] opacity-100"></div>
          <div className=" w-[8px] h-[8px] bg-[#4CAF4F] rounded-full text-[#4CAF4F] opacity-50"></div>
          <div className=" w-[8px] h-[8px] bg-[#4CAF4F] rounded-full text-[#4CAF4F] opacity-50"></div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Hero;
