import Image from "next/image";

type ImageContainerProps = {
  imageSrc: string;
  imageAlt: string;
  imageHeight: number;
  imageWidth: number;
  title: string;
  description: string;
};

const ImageContainer: React.FC<ImageContainerProps> = ({
  imageSrc,
  imageAlt,
  imageHeight,
  imageWidth,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center text-center max-w-xs">
      <div className="h-[120px] flex items-center justify-center">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          className="object-contain"
        />
      </div>
      <p className="text-[#4D4D4D] semi-bold text-center mt-2">{title}</p>
      <p className="text-[#717171] bold-18 mt-1">{description}</p>
    </div>
  );
};

export default ImageContainer;
