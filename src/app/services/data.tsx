import { SecurityCamera, Graph, UserFocus, FileLock, Detective, FlagCheckered, User } from "@phosphor-icons/react";

const DEFENSIVE_OBJECT = {
    title2: "Soluções para Segurança Defensiva",
    title: "Segurança Defensiva",
    cover: "/assets/images/girl-tablet.jpg",
    description2: "Ferramentas líderes no mercado para proteger sua organização contra ameaças digitais.",
    subTitle: "Construindo Barreiras Intransponíveis",
    description: "Defenda seus sistemas contra ameaças cibernéticas com soluções robustas que garantem proteção contínua e resiliência organizacional.",
    tabs: [
        {
            id: 1,
            title: "Firewall",
            slides: [
                {
                    image: '/assets/images/girl-tablet.jpg',
                    title: 'ThreatLocker',
                    description: 'Controle granular de permissões para evitar execuções não autorizadas de software e reduzir a superfície de ataque.'
                },
                {
                    image: '/assets/images/girl-tablet.jpg',
                    title: 'CyberSecurity',
                    description: 'Soluções completas para proteger seus dados contra ameaças cibernéticas.'
                },
                {
                    image: '/assets/images/girl-tablet.jpg',
                    title: 'CyberSecurity3',
                    description: 'Soluções completas para proteger seus dados contra ameaças cibernéticas.'
                }
            ]
        },
        {
            id: 2,
            title: "Endpoint",
            slides: [
                {
                    image: '/assets/images/girl-tablet.jpg',
                    title: 'Team Collaboration',
                    description: 'Ferramentas para aumentar a produtividade e colaboração entre equipes.'
                },
                {
                    image: '/assets/images/girl-tablet.jpg',
                    title: 'Team Collaboration1',
                    description: 'Ferramentas para aumentar a produtividade e colaboração entre equipes.'
                }
            ]
        }
    ],
    items: [
        {
            id: 1,
            Icon: <SecurityCamera size={24} color="#010400" />,
            title: "Monitoramento e Detecção de Ameaças",
            description: "Identificação proativa de vulnerabilidades e mitigação de riscos."
        },
        {
            id: 2,
            Icon: <Graph size={24} color="#010400" />,
            title: "Resposta a Incidentes",
            description: "Suporte rápido e eficiente para restaurar operações críticas."
        },
        {
            id: 3,
            Icon: <UserFocus size={24} color="#010400" />,
            title: "Gestão de Identidade e Acessos",
            description: "Controle e monitoramento de acesso para evitar violações internas e externas."
        },
        {
            id: 4,
            Icon: <FileLock size={24} color="#010400" />,
            title: "Proteção de Dados",
            description: "Implementação de firewalls, criptografia e backup seguro."
        }
    ]
}

const OFENSIVE_OBJECT = {
    title2: "Soluções para Segurança Ofensiva",
    title: "Segurança Ofensiva",
    cover: "/assets/images/hacker-server.jpg",
    description2: "Ferramentas líderes no mercado para proteger sua organização contra ameaças digitais.",
    subTitle: "Teste e Exploração de Vulnerabilidades",
    description: "Descubra vulnerabilidades antes que elas sejam exploradas. Nossa abordagem ofensiva permite que sua empresa esteja sempre um passo à frente dos hackers.",
    tabs: [
        {
            id: 1,
            title: "Firewall",
            slides: [
                {
                    image: '/assets/images/girl-tablet.jpg',
                    title: 'ThreatLocker',
                    description: 'Controle granular de permissões para evitar execuções não autorizadas de software e reduzir a superfície de ataque.'
                },
                {
                    image: '/assets/images/girl-tablet.jpg',
                    title: 'CyberSecurity',
                    description: 'Soluções completas para proteger seus dados contra ameaças cibernéticas.'
                },
                {
                    image: '/assets/images/girl-tablet.jpg',
                    title: 'CyberSecurity3',
                    description: 'Soluções completas para proteger seus dados contra ameaças cibernéticas.'
                }
            ]
        },
        {
            id: 2,
            title: "Endpoint",
            slides: [
                {
                    image: '/assets/images/girl-tablet.jpg',
                    title: 'Team Collaboration',
                    description: 'Ferramentas para aumentar a produtividade e colaboração entre equipes.'
                },
                {
                    image: '/assets/images/girl-tablet.jpg',
                    title: 'Team Collaboration1',
                    description: 'Ferramentas para aumentar a produtividade e colaboração entre equipes.'
                }
            ]
        }
    ],
    items: [
        {
            id: 1,
            Icon: <Detective size={24} color="#010400" />,
            title: "Testes de Penetração (Pentest)",
            description: "Simulação de ataques reais para identificar e corrigir falhas."
        },
        {
            id: 2,
            Icon: <FlagCheckered size={24} color="#010400" />,
            title: "Red Teaming",
            description: "Avaliação profunda e estratégica para medir a prontidão de sua organização contra ataques sofisticados."
        },
        {
            id: 3,
            Icon: <User size={24} color="#010400" />,
            title: "Engenharia Social",
            description: "Teste a resiliência de sua equipe contra ataques baseados em manipulação humana."
        },
    ]
}

const CONSULT = {
    title2: "Soluções para Segurança Ofensiva",
    title: "Segurança Ofensiva",
    cover: "/assets/images/hacker-server.jpg",
    description2: "Ferramentas líderes no mercado para proteger sua organização contra ameaças digitais.",
    subTitle: "Teste e Exploração de Vulnerabilidades",
    description: "Descubra vulnerabilidades antes que elas sejam exploradas. Nossa abordagem ofensiva permite que sua empresa esteja sempre um passo à frente dos hackers.",
    tabs: [
        {
            id: 1,
            title: "Firewall",
            slides: [
                {
                    image: '/assets/images/girl-tablet.jpg',
                    title: 'ThreatLocker',
                    description: 'Controle granular de permissões para evitar execuções não autorizadas de software e reduzir a superfície de ataque.'
                },
                {
                    image: '/assets/images/girl-tablet.jpg',
                    title: 'CyberSecurity',
                    description: 'Soluções completas para proteger seus dados contra ameaças cibernéticas.'
                },
                {
                    image: '/assets/images/girl-tablet.jpg',
                    title: 'CyberSecurity3',
                    description: 'Soluções completas para proteger seus dados contra ameaças cibernéticas.'
                }
            ]
        },
        {
            id: 2,
            title: "Endpoint",
            slides: [
                {
                    image: '/assets/images/girl-tablet.jpg',
                    title: 'Team Collaboration',
                    description: 'Ferramentas para aumentar a produtividade e colaboração entre equipes.'
                },
                {
                    image: '/assets/images/girl-tablet.jpg',
                    title: 'Team Collaboration1',
                    description: 'Ferramentas para aumentar a produtividade e colaboração entre equipes.'
                }
            ]
        }
    ],
    items: [
        {
            id: 1,
            Icon: <Detective size={24} color="#010400" />,
            title: "Testes de Penetração (Pentest)",
            description: "Simulação de ataques reais para identificar e corrigir falhas."
        },
        {
            id: 2,
            Icon: <FlagCheckered size={24} color="#010400" />,
            title: "Red Teaming",
            description: "Avaliação profunda e estratégica para medir a prontidão de sua organização contra ataques sofisticados."
        },
        {
            id: 3,
            Icon: <User size={24} color="#010400" />,
            title: "Engenharia Social",
            description: "Teste a resiliência de sua equipe contra ataques baseados em manipulação humana."
        },
    ]
}

const SERVICES = [
    DEFENSIVE_OBJECT,
    OFENSIVE_OBJECT,
    CONSULT
]
export {
    DEFENSIVE_OBJECT,
    OFENSIVE_OBJECT,
    SERVICES
}