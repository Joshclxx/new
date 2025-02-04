import Image from "next/image";

type ImageContainerProps = {
  imageSrc: string;
  imageAlt: string;
  imageHeight: number;
  imageWidth: number;
  title: string;
  description: string;
  isTextBeside?: boolean; // Prop to control text placement
};

const ImageContainer: React.FC<ImageContainerProps> = ({
  imageSrc,
  imageAlt,
  imageHeight,
  imageWidth,
  title,
  description,
  isTextBeside = false,
}) => {
  return (
    <div
      className={`${
        isTextBeside
          ? "flex items-center space-x-4"
          : "flex flex-col items-center text-center"
      }`}
    >
      <div className="h-[120px] w-[120px] flex items-center justify-center">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          className="object-contain"
        />
      </div>
      <div className={isTextBeside ? "text-left" : ""}>
        <p className="text-[#4D4D4D] semi-bold-1">{title}</p>
        <p className="text-[#717171] bold-18">{description}</p>
      </div>
    </div>
  );
};

export default ImageContainer;
