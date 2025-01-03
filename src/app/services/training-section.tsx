import { Check, Star } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import ContentWithImageSection from "./ContentWithImageSection";
import BoxItem from "./box-item";

const sectionData = [
    {
        id: 1,
        imageSrc: '/assets/images/team-working.jpg',
        imageAlt: 'Equipe trabalhando',
        title: 'Público-Alvo',
        subtitle: 'Nossos treinamentos são projetados para atender',
        listItems: [
            { title: 'Equipes Técnicas', description: 'Profissionais que atuam diretamente na operação de segurança.' },
            { title: 'C-Levels', description: 'Líderes responsáveis pela implementação de estratégias de segurança.' }
        ],
        reverse: true
    },
    {
        id: 2,
        imageSrc: '/assets/images/team-working-tablet.jpg',
        imageAlt: 'Equipe trabalhando',
        title: 'Formato Personalizado',
        subtitle: 'Oferecemos flexibilidade para atender às necessidades específicas de sua empresa',
        listItems: [
            { title: 'Modalidades', description: 'Treinamentos online e presenciais.' },
            { title: 'Treinamento Sob Demanda', description: 'Conteúdo adaptado às demandas exclusivas de cada equipe ou organização.' }
        ],
        reverse: false
    }
    ,
    {
        id: 3,
        imageSrc: '/assets/images/cybersecur-cert-ilustr.jpg',
        imageAlt: 'Equipe trabalhando',
        title: 'Certificação e Métricas',
        subtitle: 'Nossos treinamentos são projetados para atender',
        listItems: [
            { title: 'Certificação', description: 'Reconhecimento interno como diferencial no mercado.' },
            { title: 'KPIs de Sucesso', description: 'Avaliação contínua da eficácia do treinamento para garantir resultados concretos.' }
        ],
        reverse: true
    }
]



const TrainingSection = () => {

    return (
        <section
            className="dark:bg-[#071324] py-10 dark:text-[#A4B1CD] w-full bg-white text-black relative min-h-screen flex items-start"
        >
            <div className="max-w-[1216px] mx-auto w-full flex flex-col gap-10">
                <div className="flex flex-row items-start py-6">
                    <h1 className="font-bold text-white text-[32px] leading-[120%]">
                        Treinamentos Especializados em Segurança da Informação
                    </h1>
                    <p className="text-[#A4B1CD] text-[18px] leading-[120%] font-medium">
                        Desenvolva competências estratégicas e técnicas para proteger sua organização.
                    </p>
                </div>
                <div className="flex flex-col gap-32">
                    {sectionData.map(({ imageAlt, imageSrc, listItems, reverse, subtitle, title, id }) => (
                        <ContentWithImageSection
                            title={title}
                            imageAlt={imageAlt}
                            imageSrc={imageSrc}
                            listItems={listItems}
                            subtitle={subtitle}
                            reverse={reverse}
                            key={id}
                        />
                    ))}
                </div>
                <div className="flex flex-col items-start py-6 gap-10">
                    <h1 className="font-bold text-white text-[32px] w-full text-center leading-[120%]">
                        Por Que Escolher Nosso <br /> Treinamento?
                    </h1>
                    <div className="grid grid-cols-4 gap-2">
                        <BoxItem
                            Icon={<Star color="#E5E90F" width={24} weight="fill" />}
                            color="#fff"
                            description="Abordagem prática e relevante para o mercado."
                        />
                        <BoxItem
                            Icon={<Star color="#E5E90F" width={24} weight="fill" />}
                            color="#fff"
                            description="Instrutores experientes e dinâmicos."
                        />
                        <BoxItem
                            Icon={<Star color="#E5E90F" width={24} weight="fill" />}
                            color="#fff"
                            description="Flexibilidade para adaptar conteúdos às necessidades."
                        />
                        <BoxItem
                            Icon={<Star color="#E5E90F" width={24} weight="fill" />}
                            color="#fff"
                            description="Flexibilidade para adaptar conteúdos às necessidades específicas."
                        />
                    </div>
                </div>
            </div>
        </section>

    );
};

export default TrainingSection;
