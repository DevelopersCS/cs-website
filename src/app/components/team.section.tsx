import { CardCEO, MemberCard } from "./team.card"

type TeamCardTypes = {
    id: number,
    name: string,
    role: string,
    description: string,
    avatar: {
      alt: string,
      src: string,
    }
}

const MEMBERS:TeamCardTypes[] = [
    {
        id: 1,
        name: "Edison Pereira",
        role: "Director Administrativo",
        description: "Edison garante que todas as operações internas da Cybersecur funcionem com eficiência e transparência. Com uma abordagem orientada a resultados, ele mantém os processos financeiros e administrativos em perfeita ordem para apoiar nosso crescimento sustentável.",
        avatar: {
            alt: "Edison Pereira",
            src: "/assets/images/team/1.png",
        }
    },
    {
        id: 2,
        name: "Irina Gama",
        role: "Directora Comercial",
        description: "Irina é responsável por construir e fortalecer parcerias estratégicas na Cybersecur. Com uma visão voltada para o cliente, ela lidera a equipe comercial, garantindo que cada cliente receba um atendimento personalizado e soluções que agreguem valor ao negócio.",
        avatar: {
            alt: "Irina Gama",
            src: "/assets/images/team/2.png",
        }
    },
    {
        id: 3,
        name: "Alberto Afonso",
        role: "Director De Segurança & TI",
        description: "Com ampla experiência em cibersegurança e infraestrutura tecnológica, Alberto lidera as operações de segurança e TI da Cybersecur. Ele garante que nossos sistemas estejam sempre protegidos contra ameaças e prontos para atender às demandas tecnológicas dos clientes.",
        avatar: {
            alt: "Alberto Afonso",
            src: "/assets/images/team/3.png",
        }
    },
    {
        id: 4,
        name: "Alberto Afonso",
        role: "Director De Segurança & TI",
        description: "Com ampla experiência em cibersegurança e infraestrutura tecnológica, Alberto lidera as operações de segurança e TI da Cybersecur. Ele garante que nossos sistemas estejam sempre protegidos contra ameaças e prontos para atender às demandas tecnológicas dos clientes.",
        avatar: {
            alt: "Alberto Afonso",
            src: "/assets/images/team/4.png",
        }
    }
]

export function TeamSection() {
    return (
        <section className="w-full py-10 h-auto lg:px-8 bg-white">
            <div className="max-w-[1216px] w-full mx-auto">
                <div className="w-full flex max-w-[1216px] gap-3 items-center flex-col pb-[56px]">
                    <h2 className={"font-bold text-center text-3xl"}>Liderança Que Inspira Segurança</h2>
                    <p className={"text-base text-[#4F4F4F] text-center font-normal max-w-[604px]"}>Conheça as mentes por trás da nossa missão de proteger o seu negócio</p>
                </div>
                <div className="">
                    {MEMBERS[0] && (
                        <CardCEO
                            name={MEMBERS[0].name}
                            description={MEMBERS[0].description}
                            role={MEMBERS[0].role}
                            avatar={MEMBERS[0].avatar}
                        />
                    )}
                </div>
                <div className="flex justify-between flex-col lg:flex-row py-12 px-6 xl:px-0">
                    <h2 className="font-bold text-[32px] w-full">Conselho de Diretores</h2>
                    <p className="leading-[150%] text-[#4d4d4d] font-medium text-left">Nosso conselho é formado por profissionais com ampla experiência e visão estratégica, comprometidos em levar a Cybersecur a novos patamares de excelência.</p>
                </div>
                <div className="gap-6 grid grid-cols-1 lg:grid-cols-3">
                    {MEMBERS.slice(1).map(({ id, avatar, description, name, role }) => (
                        <div key={id} className="w-full">
                            <MemberCard
                                name={name}
                                description={description}
                                role={role}
                                avatar={avatar}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}



