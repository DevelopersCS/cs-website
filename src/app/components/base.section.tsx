import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type BaseSectionTypes = {
  title: string,
  description?: string 
  titleStyle?: string
  headerStyle?: string
  descriptionStyle?: string
  rootStyle?: string
  children: ReactNode
}
const BaseSection = ({title,description, children,titleStyle,descriptionStyle, rootStyle, headerStyle}:BaseSectionTypes) => {

  return (
    <section
      className={twMerge("pt-[140px] dark:bg-[#06070A] dark:text-[#A4B1CD] pb-20 mx-auto w-full flex justify-center items-center flex-col lg:px-8 px-6", rootStyle)}
    >
      <div className={twMerge("w-full flex max-w-[1216px] gap-10 items-center flex-col pb-[56px]", headerStyle)}>
        <h2 className={twMerge("font-bold text-center text-2xl md:text-3xl dark:text-white text-black ", titleStyle)}>{title}</h2>
        {description && <p className={twMerge("text-base dark:text-[#A4B1CD] text-[#5E5E5F] text-center font-normal max-w-[604px]", descriptionStyle)}>{description}</p>}
      </div>
      <div className="w-full flex max-w-[1216px]">
        {children}
      </div>
    </section>
  );
};

export default BaseSection;
