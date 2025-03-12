import BaseSection from "../../components/base.section";
import ItemCard from "../../components/item.card";

const ITEMS = [
    {
        id: 1,
        icon: {
            src: "/assets/icons/ShieldCheckered.svg",
            alt: "Icone de Equipe Especializada",
        },
        title: "Segurança Defensiva",
        description: "Fortaleça sua infraestrutura com firewalls e sistemas de detecção de intrusões para bloquear ameaças externas.",
    },
    {
        id: 2,
        icon: {
            src: "/assets/icons/Sword.svg",
            alt: "Icone de CPU",
        },
        title: "Segurança Ofensiva",
        description: "Identificação de vulnerabilidades através de testes de penetração, fortalecendo suas defesas antes que atacantes possam agir.",
    },
    {
        id: 3,
        icon: {
            src: "/assets/icons/HeadCircuit.svg",
            alt: "Icone de Escudo",
        },
        title: "Consultorias",
        description: "Estratégias personalizadas para atender suas necessidades de segurança e garantir conformidade regulatória.",
    },
    {
        id: 4,
        icon: {
            src: "/assets/icons/Medal.svg",
            alt: "Icone de Escudo",
        },
        title: "Treinamentos",
        description: "Treinamentos interativos que educam sua equipe a reconhecer e reagir a ameaças, criando uma cultura de segurança.",
    }
]
const ServicesSection = () => {

    return (
        <BaseSection rootStyle="bg-[#F9F9F9]" title="Serviços oferecidos" titleStyle="md:max-w-[50%] max-w-[100%] md:text-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4 h-full">
                {
                    ITEMS.map(({ id, description, icon, title }) => (
                        <ItemCard id={id} title={title} icon={{
                            alt: icon.alt,
                            src: icon.src
                        }} description={description} key={id} />
                    ))
                }
            </div>
        </BaseSection>
    );
};

export default ServicesSection;
