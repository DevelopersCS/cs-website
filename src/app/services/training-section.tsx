import { Check, Star } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import ContentWithImageSection from "./ContentWithImageSection";
import BoxItem from "./box-item";

const sectionData = [
    {
        id: 1,
        imageSrc: '/assets/images/3.jpg',
        imageAlt: 'Equipe trabalhando',
        title: 'Público-Alvo',
        subtitle: 'Nossos treinamentos são projetados para atender',
        listItems: [
            { title: 'Equipes Técnicas', description: 'Profissionais que atuam directamente na operação de segurança.' },
            { title: 'C-Levels', description: 'Executivos que precisam tomar decisões estratégicas informadas.' }
        ],
        reverse: true
    },
    {
        id: 2,
        imageSrc: '/assets/images/team-working-tablet.jpg',
        imageAlt: 'Equipe trabalhando',
        title: 'Formato Personalizado',
        subtitle: 'Oferecemos flexibilidade para atender às necessidades específicas da sua empresa',
        listItems: [
            { title: 'Modalidades', description: 'Formações presenciais.' },
            { title: 'Formação Sob Demanda', description: 'Conteúdo adaptado às necessidades exclusivas de cada equipa e organização.' }
        ],
        reverse: false
    }
    ,
    {
        id: 3,
        imageSrc: '/assets/images/cybersecur-cert-ilustr.jpg',
        imageAlt: 'Equipe trabalhando',
        title: 'Certificação e Métricas',
        subtitle: 'Nossas acções de conscientização são projectadas para entregar',
        listItems: [
            { title: 'Certificação', description: 'Reconhecimento interno como diferencial no mercado.' },
            { title: 'KPIs de Sucesso', description: 'Avaliação contínua da eficácia das formações para garantir resultados concretos.' }
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
                <div className="flex xl:flex-row flex-col xl:items-start py-6 items-center justify-between">
                    <h1 className="font-bold dark:text-white text-black text-[32px] leading-[120%]">
                        Conscientização
                    </h1>
                    <p className="dark:text-[#A4B1CD] text-[#5E5E5F] text-[18px] leading-[120%] font-medium">
                        Desenvolvemos competências estratégicas <br /> e técnicas para proteger a sua organização.
                    </p>
                </div>
                <div className="flex flex-col gap-32">
                    {sectionData.map(({ imageAlt, imageSrc, listItems, reverse, subtitle, title, id }, index) => (
                        <ContentWithImageSection
                            index={index}
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
                        Por que escolher o nosso serviço?
                    </h1>
                    <div className="grid xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-2 px-6">
                        <BoxItem
                            index={1}
                            Icon={<Star width={24} weight="fill" />}
                            color="#fff"
                            title="Aprendizado prático e relevante"
                            description="Oferecemos simulações e workshops adaptados à realidade do dia-a- dia da sua equipa."
                        />
                        <BoxItem
                            index={2}
                            Icon={<Star width={24} weight="fill" />}
                            color="#fff"
                            title="Programas personalizados"
                            description="O conteúdo é ajustado às necessidades e desafios específicos da sua organização."
                        />
                        <BoxItem
                            index={3}
                            Icon={<Star width={24} weight="fill" />}
                            color="#fff"
                            title="Certificação de impacto"
                            description="Reforce a credibilidade da sua equipa com certificações reconhecidas no mercado."
                        />
                        <BoxItem
                            index={4}
                            Icon={<Star width={24} weight="fill" />}
                            color="#fff"
                            title="Resultados claros"
                            description="Avaliamos o progresso com métricas para garantir mudanças reais e eficazes."
                        />
                        <BoxItem
                            index={4}
                            Icon={<Star width={24} weight="fill" />}
                            color="#fff"
                            title="Alinhamento às tendências"
                            description="Mantemos as formações sempre actualizadas com as novas ameaças e tecnologias."
                        />
                    </div>
                </div>
            </div>
        </section>

    );
};

export default TrainingSection;
