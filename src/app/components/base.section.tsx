import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type BaseSectionTypes = {
  title: string,
  description?: string
  titleStyle?: string
  descriptionStyle?: string
  rootStyle?: string
  children: ReactNode
}
const BaseSection = ({title,description, children,titleStyle,descriptionStyle, rootStyle}:BaseSectionTypes) => {

  return (
    <section
      className={twMerge("pt-[140px] pb-20 mx-auto w-full flex justify-center items-center flex-col lg:px-8 px-6", rootStyle)}
    >
      <div className="w-full flex max-w-[1216px] gap-10 items-center flex-col pb-[56px]">
        <h2 className={twMerge("font-bold text-center text-3xl", titleStyle)}>{title}</h2>
        {description && <p className={twMerge("text-base text-[#4F4F4F] text-center font-normal max-w-[604px]", descriptionStyle)}>{description}</p>}
      </div>
      <div className="w-full flex max-w-[1216px]">
        {children}
      </div>
    </section>
  );
};

export default BaseSection;
