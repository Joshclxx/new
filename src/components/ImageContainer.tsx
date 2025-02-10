"use client";

import * as motion from "motion/react-client";
import Image from "next/image";
import classNames from "classnames";
import React from "react";

type ImageContainerProps = {
  imageSrc: string;
  imageAlt: string;
  imageHeight: number;
  imageWidth: number;
  title?: string;
  description?: string;
  isTextBeside?: boolean;
  containerHeight?: string;
  containerWidth?: string;
  animationDirection?: "left" | "right";
};

const ImageContainer: React.FC<ImageContainerProps> = ({
  imageSrc,
  imageAlt,
  imageHeight,
  imageWidth,
  title,
  description,
  isTextBeside = false,
  containerHeight,
  containerWidth,
  animationDirection = "right",
}) => {
  const fly = animationDirection === "left" ? -50 : 50;

  return (
    <div
      className={
        isTextBeside
          ? "flex items-center space-x-4"
          : "flex flex-col items-center text-center"
      }
    >
      <div className="image-container col-span-3 p-4">
        <div
          className={classNames(
            "relative flex items-center justify-center",
            containerHeight || "h-[120px]",
            containerWidth || "w-[120px]"
          )}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            className="object-contain"
          />
        </div>
      </div>

      {(title || description) && (
        <div className={isTextBeside ? "text-left" : "text-center"}>
          {title && <p className="text-title font-semibold">{title}</p>}
          {description && <p className="text-sub bold-18">{description}</p>}
        </div>
      )}
    </div>
  );
};

export default ImageContainer;
