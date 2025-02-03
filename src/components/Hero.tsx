import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="relative w-full flex items-center justify-center py-[144px] px-[96px] bg-[#F5F7FA]">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center">
        <h1 className="bold-64 text-[#4D4D4D] py-5 px-7">
          Lessons and insight{" "}
          <span className="text-[#4CAF4F]">from 8 years</span>
        </h1>
        <br />
        <p className="bold-18 text-[#717171] mt-4">
          Where to grow your business as a photographer: site or social media?
        </p>{" "}
        <br />
        <Button variant="primary" title="Register" />
      </div>

      <div className="flex justify-center">
        <Image
          src="/Illustration.svg"
          alt="Illustration"
          width={391}
          height={407}
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
        <Image src="/Dot.svg" alt="Dot" width={45} height={50} />
      </div>
    </section>
  );
};

export default Hero;
