"use client"

import BaseSection from '@/app/components/base.section';
import ItemCard from '@/app/components/item.card';
import { cardAnimation } from '@/app/components/protect-investi.section';

const ITEMS = [
    {
        id: 1,
        icon: {
            src: "/assets/icons/ShieldCheckered.svg",
            alt: "Icone de Equipe Especializada",
        },
        title: "Missão",
        description: "Oferecer soluções e serviços de qualidade em cibersegurança, capacitando colaboradores através de formações e conscientização, para fortalecer a segurança digital.",
    },
    {
        id: 2,
        icon: {
            src: "/assets/icons/Sword.svg",
            alt: "Icone de CPU",
        },
        title: "Visão",
        description: "Ser uma referência em cibersegurança, impulsionando a inovação e mantendo um compromisso inabalável com a protecção dos dados dos nossos clientes.",
    },
    {
        id: 3,
        icon: {
            src: "/assets/icons/HeadCircuit.svg",
            alt: "Icone de Escudo",
        },
        title: "Valores",
        description: "Actuamos com integridade, excelência, inovação e colaboração, garantindo um serviço de alto nível e confiança.",
    }
]


type ItemsSectionType = {
    title: string
    description: string
}


const ItemsSection = ({ title, description }: ItemsSectionType) => {

    return (
        <BaseSection rootStyle="bg-white" title={title} description={description} titleStyle="md:max-w-[70%] max-w-[100%] md:text-4xl" descriptionStyle='md:max-w-[60%]'>
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 w-full gap-4 h-full">
                {
                    ITEMS.map(({ id, description, icon, title }, index) => (
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

export default ItemsSection;
