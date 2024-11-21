import { TeamCard } from "./team.card"

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
        <section className="w-full max-w-[1216px] gap-6 grid grid-cols-3 mx-auto">
            {MEMBERS.map(({ id, avatar, description, name, role }, index) => (
                <div
                    key={id}
                    className={index === 0 ? "col-span-3" : "col-span-1"}
                >
                    <TeamCard
                        name={name}
                        description={description}
                        role={role}
                        avatar={avatar}
                        isFirst={true}
                    />
                </div>
            ))}
        </section>
    );
}
