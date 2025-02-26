import ContentWithImageSection from "./ContentWithImageSection";

const sectionData = {
    id: 1,
    imageSrc: '/assets/images/team-working-postit.webp',
    imageAlt: 'Equipe trabalhando',
    title: 'Por que escolher o nosso serviço Cybersecur SOC?',
    listItems: [
        { title: 'Monitoramento 24/7'},
        { title: 'Visibilidade de Ameaças'},
        { title: 'Dashboards'},
        { title: 'Remediação'},
        { title: 'Planos e Subscrição'},
        
    ],
    reverse: false
}

const SOCSection = () => {

    return (
        <section
            className="dark:bg-[#06070A] py-10 dark:text-[#A4B1CD] w-full bg-white text-black relative min-h-screen flex items-start"
        >
            <div className="max-w-[1216px] mx-auto w-full flex flex-col gap-10">
                <div className="flex flex-col items-center py-6 max-w-[70%] gap-6 mx-auto">
                    <h1 className="font-bold dark:text-white text-black text-[32px] leading-[120%] text-center">
                        CyberSecur SOC
                    </h1>
                    <p className="dark:text-[#A4B1CD] text-[#5E5E5F] text-[18px] text-center leading-[120%] font-medium">
                        Protegemos activamente sistemas de informação contra ameaças, detectamos e mitigamos incidentes de segurança, através de soluções de segurança, estruturas e processos de segurança à sua medida A integração inteligente entre tecnologias permite identificar vulnerabilidades antes que se transformem em incidentes, assegurando a protecção contínua do ambiente corporativo. 
                    </p>
                </div>
                <div className="flex flex-col gap-32">
                    <ContentWithImageSection
                        index={1}
                        imageAlt={sectionData.imageAlt}
                        imageSrc={sectionData.imageSrc}
                        listItems={sectionData.listItems}
                        subtitle={sectionData.title}
                        reverse={true}
                        key={sectionData.id}
                    />
                </div>
                {/* <div className="flex flex-col items-start py-6 gap-10">
                    <h1 className="font-bold text-white text-[32px] w-full text-center leading-[120%]">
                        Por Que Escolher Nossas <br /> Consultorias?
                    </h1>
                    <div className="grid xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-2 px-6">
                        <BoxItem
                            index={1}
                            title="Análise Precisa"
                            Icon={<Star color="#E5E90F" width={24} weight="fill" />}
                            color="#fff"
                            description="Avaliação detalhada dos riscos e lacunas de segurança."
                        />
                        <BoxItem
                            index={2}
                            title="Expertise Reconhecida"
                            Icon={<Star color="#E5E90F" width={24} weight="fill" />}
                            color="#fff"
                            description="Aplicação de metodologias baseadas em normas internacionais."
                        />
                        <BoxItem
                            index={3}
                            title="Resultados Mensuráveis"
                            Icon={<Star color="#E5E90F" width={24} weight="fill" />}
                            color="#fff"
                            description="Relatórios claros que orientam ações estratégicas."
                        />
                        <BoxItem
                            index={4}
                            title="Adaptabilidade"
                            Icon={<Star color="#E5E90F" width={24} weight="fill" />}
                            color="#fff"
                            description="Consultorias personalizadas e adaptadas às necessidades."
                        />
                    </div>
                </div> */}
            </div>
        </section>

    );
};

export default SOCSection;
