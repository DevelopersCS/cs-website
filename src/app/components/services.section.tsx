"use client"

import BaseSection from "./base.section";
import ItemCard from "./item.card";
import { useGSAP } from '@gsap/react';
import { cardAnimation } from "./protect-investi.section";


const ITEMS = [
  {
    id:1,
    icon: {
      src: "/assets/icons/ShieldCheckered.svg",
      alt:"Icone de Equipe Especializada",
    },
    title:"Segurança Defensiva",
    description:"Protegemos sistemas contra ameaças, detectámos e mitigamos incidentes com soluções adaptadas às necessidades da sua organização.",
  },
  {
    id:2,
    icon: {
      src: "/assets/icons/Sword.svg",
      alt:"Icone de CPU",
    },
    title:"Segurança Ofensiva",
    description:"Realizamos testes controlados para identificar e corrigir falhas de segurança antes que sejam exploradas.",
  },
  {
    id:3,
    icon: {
      src: "/assets/icons/HeadCircuit.svg",
      alt:"Icone de Escudo",
    },
    title:"Consultoria e Outsourcing",
    description:"Oferecemos orientação especializada e implementamos processos alinhados às normas e legislação de segurança.",
  },
  {
    id:4,
    icon: {
      src: "/assets/icons/Medal.svg",
      alt:"Icone de Escudo",
    },
    title:"Conscientização",
    description:"Capacitamos equipas e utilizadores com formação para reduzir riscos cibernéticos de forma proativa.",
  }
]
type ServicesSectionType = {
  title: string
  description: string
}


const ServicesSection = ({ title, description }: ServicesSectionType) => {

  return (
    <BaseSection rootStyle="bg-white" title={title} description={description} titleStyle="md:max-w-[50%] max-w-[100%] md:text-4xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-4 h-full">
      {
        ITEMS.map(({id, description,icon, title}, index)=>(
            <ItemCard 
              id={index}
              className="box" 
              title={title} 
              icon={{
                alt: icon.alt,
                src: icon.src
              }} 
              description={description} 
              key={index}
            {...cardAnimation(id)}
            />
        ))
      }
      </div>
    </BaseSection>
  );
};

export default ServicesSection;
