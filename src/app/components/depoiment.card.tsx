import Image from "next/image";

type ItemCardTypes = {
  name: string,
  role: string,
  depoiments: string,
  avatar: {
    alt: string,
    src: string,
  }
}
const DepoimentCard = ({name,role, avatar,depoiments}:ItemCardTypes) => {
  return (
   <div className="p-6 w-full h-full flex flex-col gap-4 bg-[#25A8FF] bg-opacity-10">
      <div className="flex gap-5 items-center">
        <Image alt={avatar?.alt} src={avatar?.src} className="rounded-full" width={56} height={56} />
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-sm">{name}</p>
          <p className="font-medium text-sm">{role}</p>
        </div>
      </div>
    <div className="d">
      <p className="text-[#4D4D4D] text-base leading-[150%] font-normal">{depoiments}</p>
    </div>
   </div>
  );
};

export default DepoimentCard;
