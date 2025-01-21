import BaseSection from "./base.section";
import ItemCard from "./item.card";
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

const ITEMS = [
  {
    id:1,
    icon: {
      src: "/assets/icons/ShieldCheckered.svg",
      alt:"Icone de Equipe Especializada",
    },
    title:"Segurança Defensiva",
    description:"Fortaleça sua infraestrutura com firewalls e sistemas de detecção de intrusões para bloquear ameaças externas.",
  },
  {
    id:2,
    icon: {
      src: "/assets/icons/Sword.svg",
      alt:"Icone de CPU",
    },
    title:"Segurança Ofensiva",
    description:"Identificação de vulnerabilidades através de testes de penetração, fortalecendo suas defesas antes que atacantes possam agir.",
  },
  {
    id:3,
    icon: {
      src: "/assets/icons/HeadCircuit.svg",
      alt:"Icone de Escudo",
    },
    title:"Consultorias",
    description:"Estratégias personalizadas para atender suas necessidades de segurança e garantir conformidade regulatória.",
  },
  {
    id:4,
    icon: {
      src: "/assets/icons/Medal.svg",
      alt:"Icone de Escudo",
    },
    title:"Treinamentos",
    description:"Treinamentos interativos que educam sua equipe a reconhecer e reagir a ameaças, criando uma cultura de segurança.",
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
            />
        ))
      }
      </div>
    </BaseSection>
  );
};

export default ServicesSection;
