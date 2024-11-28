import Image from "next/image";
import Link from "next/link";
import BaseSection from "./base.section";
import ItemCard from "./item.card";

const ITEMS = [
  {
    id:1,
    icon: {
      src: "/assets/icons/UsersThree.svg",
      alt:"Icone de Equipe Especializada",
    },
    title:"Equipe Especializada",
    description:"Profissionais certificados com experiência em proteger empresas de vários setores.",
  },
  {
    id:2,
    icon: {
      src: "/assets/icons/Cpu.svg",
      alt:"Icone de CPU",
    },
    title:"Tecnologia de Ponta",
    description:"Ferramentas e soluções de última geração para uma segurança completa.",
  },
  {
    id:3,
    icon: {
      src: "/assets/icons/ShieldCheckered.svg",
      alt:"Icone de Escudo",
    },
    title:"Atendimento",
    description:"Estratégias de segurança feitas sob medida para atender às necessidades do seu negócio.",
  }
]
const WhyUsSection = () => {

  return (
    <BaseSection rootStyle="bg-white" title="Por Que Escolher Nossa Empresa?" titleStyle="md:max-w-[50%] max-w-[100%] md:text-4xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4 h-full">
      {
        ITEMS.map(({id, description,icon, title})=>(
          <ItemCard title={title} icon={{
            alt: icon.alt,
            src: icon.src
          }} description={description} key={id}/>
        ))
      }
      </div>
    </BaseSection>
  );
};

export default WhyUsSection;
