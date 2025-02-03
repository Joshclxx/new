import Image from "next/image";

type ButtonProps = {
  variant: "primary" | "text";
  title: string;
  icon?: string;
  full?: boolean;
};

const Button = ({ variant, title, icon, full }: ButtonProps) => {
  return (
    <button
      className={`flexCenter py-2 px-4 rounded-sm gap-3 ${variant} ${
        full ? "w-full" : "w-fit"
      } ${
        variant === "primary"
          ? "bg-[#4CAF4F] text-white"
          : variant === "text"
          ? "text-[#4CAF4F] bg-transparent"
          : ""
      }`}
      type="button"
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  );
};

export default Button;
