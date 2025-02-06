import React from "react";
import classNames from "classnames";

type Props = {
  background: string;
  children: React.ReactNode;
};

const SectionContainer = ({ background, children }: Props) => {
  return (
    <section
      className={classNames(
        "flex flex-col items-center justify-center md:px-10 ",
        background
      )}
    >
      <div className="max-w-[1600px] mx-auto">{children}</div>
    </section>
  );
};

export default SectionContainer;
