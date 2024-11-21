import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ItemCardTypes = {
  title: string,
  description?: string
  icon?: {
    alt: string,
    src: string,
  }
}
const ItemCard = ({title,description, icon}:ItemCardTypes) => {
  // max-w-[309px]
  return (
   <div className="px-6 py-14 w-full  flex flex-col gap-4 bg-[#FAFDFF] border-[#3A3939] border-opacity-5 border-2 border-dashed">
    {icon && (
      <div className="bg-[#25A8FF] bg-opacity-10 p-2 flex items-center justify-center max-w-[40px] max-h-[40px]">
        <Image alt={icon?.alt} src={icon?.src} width={32} height={32} />
      </div>
    )}
    <h3 className="font-medium text-2xl ">{title}</h3>
    <p className="text-[#4F4F4F] text-base leading-[130%] font-normal">{description}</p>
   </div>
  );
};

export default ItemCard;
