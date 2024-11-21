import { twMerge } from "tailwind-merge"

type TeamCardTypes = {
  name: string,
  role: string,
  description: string,
  avatar?: {
    alt: string,
    src: string,
  },
  isFirst: boolean
}


export function TeamCard({name,description,role,avatar, isFirst}:TeamCardTypes){
  return (
      <div className="max-w-[483.12px] w-full">
          <div className="bg-[#25A8FF] bg-opacity-10 w-full relative h-[500px]">
            <span className="bg-white p-8 rounded-[30px] translate-x-[-50%] left-[50%] bottom-[30px] z-10 absolute">{role}</span>
            <img src={avatar?.src} draggable={false} className="translate-x-[-50%] left-[50%] bottom-0 absolute" alt={avatar?.alt} />
          </div>
          <div className={twMerge("flex flex-col gap-2 p-6")}>
            <h3 className="font-semibold text-[22px]">{name}</h3>
            <p className="text-[#4D4D4D] font-medium">{description}</p>
          </div>
      </div>
  )
}
