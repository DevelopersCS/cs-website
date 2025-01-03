import Image from "next/image";

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
    <div className="px-6 py-6 w-full flex flex-col gap-4 dark:bg-[#0E141D] bg-white dark:text-[#A4B1CD] dark:border-[#202837] border-[#F3F3F3] border-opacity-5 border-[1.5px] rounded-lg">
    {icon && (
      <div className="bg-[#25A8FF] bg-opacity-10 p-2 rounded flex items-center justify-center max-w-[40px] max-h-[40px]">
        <Image alt={icon?.alt} src={icon?.src} width={32} height={32} />
      </div>
    )}
    <h3 className="font-medium text-2xl dark:text-white text-black">{title}</h3>
      <p className="dark:text-[#A4B1CD] text-base leading-[130%] font-normal text-[#5E5E5F]">{description}</p>
   </div>
  );
};

export default ItemCard;
