import { Check, Star } from "@phosphor-icons/react";
import Image from "next/image";
import ContentWithImageSection from "./ContentWithImageSection";
import BoxItem from "./box-item";

const sectionData = [
    {
        id: 1,
        imageSrc: '/assets/images/team-working-postit.jpg',
        imageAlt: 'Equipe trabalhando',
        title: 'Vantagens Principais da Consultoria em Segurança da Informação',
        subtitle: 'Nossos treinamentos são projetados para atender',
        listItems: [
            { title: 'Identificação e Mitigação de Riscos', description: 'Avaliação precisa de vulnerabilidades e implementação de ações corretivas para minimizar ameaças cibernéticas.' },
            { title: 'Conformidade com Normas e Regulamentos', description: 'Alinhamento com padrões internacionais, como ISO/IEC 27001, garantindo credibilidade e segurança operacional.' },
            { title: 'Relatórios Estratégicos', description: 'Entregáveis claros que orientam decisões informadas e auxiliam no planejamento de segurança a longo prazo.' },

            { title: 'Melhoria Contínua da Segurança', description: 'Implementação de práticas que promovem a evolução constante da maturidade em segurança da organização.' }
        ],
        reverse: false
    },
    {
        id: 2,
        imageSrc: '/assets/images/team-working-tablet.jpg',
        imageAlt: 'Equipe trabalhando',
        title: 'Serviços Oferecidos',
        listItems: [
            { description: 'Implementação e gestão de SGSI (Sistemas de Gestão de Segurança da Informação).' },
            { description: 'Avaliação de Maturidade em Segurança da Informação.' }
        ],
        reverse: true
    },
    {
        id: 3,
        imageSrc: '/assets/images/team-working-tablet.jpg',
        imageAlt: 'Equipe trabalhando',
        title: 'Entregáveis Personalizados',
        listItems: [
            { description: 'Relatórios técnicos e executivos.' },
            { description: 'Recomendações práticas.' },
            { description: 'Documentação adicional conforme necessidade do cliente.' },
        ],
        reverse: false
    }
   
]



const ConsultSection = () => {

    return (
        <section
            className="dark:bg-[#06070A] py-10 dark:text-[#A4B1CD] w-full bg-white text-black relative min-h-screen flex items-start"
        >
            <div className="max-w-[1216px] mx-auto w-full flex flex-col gap-10">
                <div className="flex flex-col items-center py-6 max-w-[70%] gap-6 mx-auto">
                    <h1 className="font-bold text-white text-[32px] leading-[120%] text-center">
                        Consultorias em Segurança da Informação
                    </h1>
                    <p className="text-[#A4B1CD] text-[18px] text-center leading-[120%] font-medium">
                        Fortaleça sua organização com uma análise estratégica e recomendações práticas em conformidade com os mais altos padrões do mercado.
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
                        Por Que Escolher Nossas <br /> Consultorias?
                    </h1>
                    <div className="grid grid-cols-4 gap-2">
                        <BoxItem
                            title="Análise Precisa"
                            Icon={<Star color="#E5E90F" width={24} weight="fill" />}
                            color="#fff"
                            description="Avaliação detalhada dos riscos e lacunas de segurança."
                        />
                        <BoxItem
                            title="Expertise Reconhecida"
                            Icon={<Star color="#E5E90F" width={24} weight="fill" />}
                            color="#fff"
                            description="Aplicação de metodologias baseadas em normas internacionais."
                        />
                        <BoxItem
                            title="Resultados Mensuráveis"
                            Icon={<Star color="#E5E90F" width={24} weight="fill" />}
                            color="#fff"
                            description="Relatórios claros que orientam ações estratégicas."
                        />
                        <BoxItem
                            title="Adaptabilidade"
                            Icon={<Star color="#E5E90F" width={24} weight="fill" />}
                            color="#fff"
                            description="Consultorias personalizadas e adaptadas às necessidades."
                        />
                    </div>
                </div>
            </div>
        </section>

    );
};

export default ConsultSection;
