import Image from "next/image"
import { twMerge } from "tailwind-merge"

type TeamCardTypes = {
  name: string,
  role: string,
  description: string,
  avatar: {
    alt: string,
    src: string,
  },
  isFirst?: boolean
}


export function MemberCard({name,description,role,avatar}:TeamCardTypes){
  return (
    <div className="lg:max-w-[483.12px] w-full flex flex-col relative">
      <div className="w-full bg-[#25a8ff] overflow-hidden dark:bg-[#101117] bg-opacity-10 relative h-[350px] px-7">
        <div className="flex flex-col items-center justify-center gap-1 absolute z-20 dark:bg-[#00000092] dark:border-[#8F8C8C] dark:border-opacity-30 border-[0.5px] bg-[#ffffffb5] w-[90%] right-[50%] bottom-5 rounded-3xl translate-x-[50%] px-6 py-4 boder-[#8F8C8C] border-opacity-10 backdrop-blur-xl">
            <h3 className="font-semibold text-base text-[#25A8FF]">{name}</h3>
            <p className="text-[#4D4D4D] font-medium text-sm dark:text-white">{role}</p>
          </div>
        <Image width={300} height={300} src={avatar?.src} draggable={false} className="translate-x-[-50%] left-[50%] max-h-[85%] h-full object-contain bottom-0 absolute w-full scale-100 hover:scale-125 duration-500 ease-out" alt={avatar?.alt} />
      </div>
      
    </div>
  )
}

