"use client"
import BaseSection from "./base.section";
import ItemCard from "./item.card";
import { cardAnimation } from "./protect-investi.section";

const ITEMS = [
  {
    id:1,
    icon: {
      src: "/assets/icons/UsersThree.svg",
      alt:"Icone de Equipe Especializada",
    },
    title:"Equipa Especializada",
    description:"Profissionais especializados com experiência em proteger empresas de vários sectores.",
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
    title:"Soluções Personalizadas",
    description:"Adaptamos as nossas estratégias às necessidades e desafios específicos do seu negócio.",
  }
]
const WhyUsSection = () => {

  return (
    <BaseSection rootStyle="bg-[#F9F9F9]" title="O que nos diferencia?" titleStyle="md:max-w-[50%] max-w-[100%] md:text-4xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4 h-full">
      {
        ITEMS.map(({id, description,icon, title}, index)=>(
          <ItemCard 
            id={index}
            title={title} 
            {...cardAnimation(id)}
            icon={{
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
