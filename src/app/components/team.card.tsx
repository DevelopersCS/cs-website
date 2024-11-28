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
    <div className="lg:max-w-[483.12px] w-full flex flex-col">
          <div className="w-full bg-[#25A8FF] bg-opacity-10 relative h-[450px]">
            {/* <span className="bg-white p-8 rounded-[30px] translate-x-[-50%] left-[50%] bottom-[30px] z-10 absolute">{role}</span> */}
            <Image width={300} height={300} src={avatar?.src} draggable={false} className="translate-x-[-50%] left-[50%] max-h-[85%] h-full object-contain bottom-0 absolute w-full" alt={avatar?.alt} />
          </div>
          <div className={twMerge("flex flex-col gap-2 p-6")}>
            <h3 className="font-semibold text-[22px]">{name}</h3>
            <p className="text-[#4D4D4D] font-medium">{description}</p>
          </div>
      </div>
  )
}

export function CardCEO({name,description,role,avatar}:TeamCardTypes){
  return (
    <div className="w-full flex flex-col lg:flex-row justify-between">
          <div className="bg-[#25A8FF] w-full lg:max-w-[500px] relative h-[500px] rounded-lg">
            {/* <span className="bg-white p-8 rounded-[30px] translate-x-[-50%] left-[50%] bottom-[30px] z-10 absolute">{role}</span> */}
            <Image width={300} height={300} src={avatar?.src} draggable={false} className="translate-x-[-50%] left-[50%] max-h-[85%] h-full object-contain bottom-0 absolute w-full" alt={avatar?.alt} />
          </div>
         <div className="flex flex-col w-full lg:max-w-[55%]">
          <div className={"flex flex-col gap-2 p-6 w-full max-w-full"}>
              <h3 className="font-semibold text-[22px]">{name}</h3>
              <p className="text-[#4D4D4D] font-medium">{description}</p>
            </div>
            <div className={"flex flex-col gap-2 p-6 w-full max-w-full"}>
              <h3 className="font-semibold text-[22px]">Experiência de Hélio Pereira</h3>
              <p className="text-[#4D4D4D] font-medium">
                Hélio Pereira lidera a Cybersecur com uma vasta experiência e expertise em cibersegurança e gestão empresarial. Sua trajetória inclui:
                <br />
                <br />
              </p>
                <ul className="flex flex-col gap-3">
                  <li className="flex items-start justify-start w-full gap-1">
                    <Image src={"/assets/icons/SealCheck.svg"} className="max-w-[24px] w-full" alt="" width={32} height={32} />
                    <span>Mais de 20 anos de experiência em segurança da informação</span>
                  </li>
                  <li className="flex items-start justify-start w-full gap-1">
                    <Image src={"/assets/icons/SealCheck.svg"} className="max-w-[24px] w-full" alt="" width={32} height={32} />
                    <span>Especialização em estratégias de segurança digital</span>
                  </li>
                  <li className="flex items-start justify-start w-full gap-1">
                    <Image src={"/assets/icons/SealCheck.svg"} className="max-w-[24px] w-full" alt="" width={32} height={32} />
                    <span>Certificações avançadas (CISSP, CISM, CEH), que comprovam seu profundo conhecimento técnico e capacidade de liderança no setor de cibersegurança.</span>
                  </li>
                </ul>
            </div>
         </div>
      </div>
  )
}

