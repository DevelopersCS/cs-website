"use client"
import { useState } from "react";

const milestones = [
    { year: "2019", title: "Fundação da CyberSecur", description: "A empresa foi fundada para oferecer segurança digital de alto nível." },
    { year: "2020", title: "Aplicação da solução Darktrace no Banco BAI", description: "CyberSecur implementou uma solução inovadora de segurança cibernética." },
    { year: "2021", title: "1.ª edição do CyberSecur Summit", description: "Organizamos o primeiro grande evento de segurança digital em Angola." },
    { year: "2021", title: "1.ª edição do CyberSecur CTF", description: "Nos tornamos referência global em segurança digital com competições de hacking ético." },
    { year: "2022", title: "Implementação da solução Imperva no BPC", description: "Fortalecemos a segurança do sistema bancário com tecnologias avançadas." },
    { year: "2022", title: "Lançamento do projecto SecLab", description: "Criamos um laboratório especializado para pesquisa em cibersegurança." },
    { year: "2022", title: "Caminhada contra o cancro da próstata 'Estou nesta caminhada contigo'", description: "Participamos de ações sociais em prol da saúde masculina." },
    { year: "2023", title: "3.ª edição do CyberSecur Summit", description: "Expandimos o evento com palestrantes internacionais e mais participantes." },
    { year: "2024", title: "5.º aniversário da CyberSecur", description: "Celebramos cinco anos de inovação e segurança digital." },
    { year: "2025", title: "5.ª edição do CyberSecur Summit", description: "Projectamos um evento ainda maior e mais impactante." },
];

export default function Timeline() {
    const [selected, setSelected] = useState(null);

    return (
        <div className="py-16 bg-gray-100 dark:bg-black">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8 text-black dark:text-white">Nossa História</h2>
                <div className="relative flex flex-col items-center">
                    {milestones.map((milestone, index) => (
                        <div
                            key={index}
                            className="group flex w-full items-center py-6 relative"
                        >
                            {/* <div className="w-1 bg-red-500 absolute left-1/2 transform -translate-x-1/2 h-full"></div>
                            <div className="w-10 h-10 bg-orange-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div> */}
                            <div className="w-full flex flex-col items-center md:items-start md:flex-row md:space-x-6">
                                <div className="text-blue-500 font-semibold text-lg w-20 text-center">{milestone.year}</div>
                                <div className="bg-white dark:bg-[#06070A] p-6 rounded-lg w-fit transition duration-300 transform">
                                    <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{milestone.title}</h3>
                                    <p className="text-gray-500 dark:text-gray-400">{milestone.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
