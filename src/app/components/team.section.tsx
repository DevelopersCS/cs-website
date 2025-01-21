import { MemberCard } from "./team.card"

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
        name: "Hélio Pereira",
        role: "Director Geral",
        description: "Geral garante que todas as operações internas da Cybersecur funcionem com eficiência e transparência. Com uma abordagem orientada a resultados, ele mantém os processos financeiros e administrativos em perfeita ordem para apoiar nosso crescimento sustentável.",
        avatar: {
            alt: "Geral Pereira",
            src: "/assets/images/team/1.png",
        }
    },
    {
        id: 2,
        name: "Edison Pereira",
        role: "Director Administrativo",
        description: "Edison garante que todas as operações internas da Cybersecur funcionem com eficiência e transparência. Com uma abordagem orientada a resultados, ele mantém os processos financeiros e administrativos em perfeita ordem para apoiar nosso crescimento sustentável.",
        avatar: {
            alt: "Edison Pereira",
            src: "/assets/images/team/2.png",
        }
    },
    {
        id: 3,
        name: "Irina Gama",
        role: "Directora Comercial",
        description: "Irina é responsável por construir e fortalecer parcerias estratégicas na Cybersecur. Com uma visão voltada para o cliente, ela lidera a equipe comercial, garantindo que cada cliente receba um atendimento personalizado e soluções que agreguem valor ao negócio.",
        avatar: {
            alt: "Irina Gama",
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
        <section className="w-full py-10 h-auto lg:px-8 bg-white dark:bg-[#06070A]">
            <div className="max-w-[1216px] w-full mx-auto">
                <div className="w-full flex max-w-[1216px] gap-3 items-center justify-between pb-[56px]">
                    <h2 className={"font-bold text-3xl dark:text-white text-black"}>Liderança Que <br /> Inspira Segurança</h2>
                    <p className={"text-base text-[#4F4F4F] dark:text-[#A4B1CD] text-center font-normal max-w-[604px]"}>Conheça as mentes por trás da nossa missão de proteger o seu negócio</p>
                </div>
                <div className="gap-6 grid grid-cols-1 lg:grid-cols-4">
                    {MEMBERS.map(({ id, avatar, description, name, role }) => (
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



