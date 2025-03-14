"use client"
import { Star } from "@phosphor-icons/react";
import ContentWithImageSection from "./ContentWithImageSection";
import BoxItem from "./box-item";

const sectionData = [
    {
        id: 1,
        imageSrc: '/assets/images/team-working-postit.webp',
        imageAlt: 'Equipe trabalhando',
        title: '',
        subtitle: 'Nossos serviços são projectados para oferecer',
        listItems: [
            { title: 'Identificação e Mitigação de Riscos', description: 'Avaliação precisa de vulnerabilidades e implementação de acções corretivas para minimizar ameaças cibernéticas.' },
            { title: 'Conformidade com Normas e Regulamentos', description: 'Alinhamento com padrões internacionais, como ISO/IEC 27001, garantindo a credibilidade e segurança operacional.' },
            { title: 'Relatórios Estratégicos', description: 'Entregáveis claros que orientam decisões informadas e auxiliam no planeamento de segurança a longo prazo.' },

            { title: 'Melhoria Contínua da Segurança', description: 'Implementação de práticas que promovem a evolução constante da maturidade em segurança da organização.' }
        ],
        reverse: false
    },
    {
        id: 2,
        imageSrc: '/assets/images/1.webp',
        imageAlt: 'Equipe trabalhando',
        title: 'Serviços Oferecidos',
        listItems: [
            { title: "Sistemas de Gestão de Segurança da Informação (SGSI)", description: 'Alinhados com a ISO/IEC 27001 e normas relacionadas.' },
            { title: "Identificação, avaliação e optimização dos processos", description: 'com base nos níveis de maturidade do Capability Maturity Model Integrated.' },
            { title: "Desenvolvimento e implementação de Programas de Segurança da Informação (PSI)", description: 'Para estruturar boas práticas e soluções de segurança.' },
            { title: "Consultoria em Gestão de Riscos de Segurança da Informação", description: 'Para assegurar a identificação e mitigação de riscos.' },
        ],
        reverse: true
    },
    {
        id: 3,
        imageSrc: '/assets/images/2.webp',
        imageAlt: 'Equipe trabalhando',
        title: 'Entregáveis Personalizados',
        listItems: [
            { title: "Relatórios Detalhados", description: 'Diagnósticos claros e acções recomendadas para optimizar a segurança da informação.' },
            { title:"Equipa Técnica Dedicada", description: 'Especialistas focados nas necessidades específicas da sua organização.' },
            { title: "Documentação Estruturada", description: 'Políticas e procedimentos alinhados aos padrões internacionais.' },
        ],
        reverse: false
    }
   
]



const ConsultSection = () => {

    return (
        <section
            id="consultorias"
            className="dark:bg-[#06070A] py-10 dark:text-[#A4B1CD] w-full bg-white text-black relative min-h-screen flex items-start"
        >
            <div className="max-w-[1216px] mx-auto w-full flex flex-col gap-10">
                <div className="flex flex-col w-full items-center py-6 px-4 lg:max-w-[70%] gap-6 mx-auto">
                    <h1 className="font-bold dark:text-white text-black text-3xl leading-[120%] text-center">
                        Consultoria e Outsourcing <br /> em segurança da informação
                    </h1>
                    <p className="dark:text-[#A4B1CD] text-[#5E5E5F] text-base text-center leading-[120%] font-medium">
                        Fortaleça a sua organização com soluções estratégicas e serviços de outsourcing, para garantir conformidade e protecção avançada contra ameaças cibernéticas.
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
                        Por Que Escolher Os Nossos Serviços <br /> de Consultoria e Outsourcing? 
                    </h1>
                    <div className="grid xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-2 px-6">
                        <BoxItem
                            index={1}
                            title="Análise Precisa"
                            Icon={<Star color="#E5E90F" width={24} weight="fill" />}
                            color="#fff"
                            description="Identificamos riscos e criamos estratégias personalizadas para mitigá-los."
                        />
                        <BoxItem
                            index={2}
                            title="Resultados Mensuráveis"
                            Icon={<Star color="#E5E90F" width={24} weight="fill" />}
                            color="#fff"
                            description="Soluções adaptadas ao tamanho e à complexidade da sua organização."
                        />
                        <BoxItem
                            index={3}
                            title="Equipa Capacitada"
                            Icon={<Star color="#E5E90F" width={24} weight="fill" />}
                            color="#fff"
                            description="Profissionais altamente capacitados para atender às suas necessidades operacionais."
                        />
                        <BoxItem
                            index={4}
                            title="Flexibilidade Total"
                            Icon={<Star color="#E5E90F" width={24} weight="fill" />}
                            color="#fff"
                            description="Soluções adaptadas ao tamanho e à complexidade da sua organização. "
                        />
                    </div>
                </div>
            </div>
        </section>

    );
};

export default ConsultSection;
