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
        "flex flex-col items-center justify-center py-50 px-22 md:px-10 max-w-[1600px] mx-auto",
        background
      )}
    >
      {children}
    </section>
  );
};

export default SectionContainer;
