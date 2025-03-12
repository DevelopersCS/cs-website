import { SecurityCamera, Graph, UserFocus, FileLock, Detective, FlagCheckered, User } from "@phosphor-icons/react/dist/ssr";

const DEFENSIVE_OBJECT = {
    title2: "Soluções para Segurança Defensiva",
    title: "Segurança Defensiva",
    cover: "/assets/images/girl-tablet.webp",
    description2: "Ferramentas líderes no mercado para proteger sua organização contra ameaças digitais.",
    subTitle: "Construindo Barreiras Intransponíveis",
    description: "Defenda seus sistemas contra ameaças cibernéticas com soluções robustas que garantem proteção contínua e resiliência organizacional.",
    tabs: [
        {
            id: 1,
            title: "Proteção local (On Primeses Security)",
            slides: [
                {
                    image: '/assets/images/checkpoint.jpg',
                    title: 'Checkpoint Next Generation Firewall',
                    description: 'Monitora o tráfego de rede em tempo real, analisando pacotes de dados para garantir o tratamento seguro e eficaz de informações críticas.'
                },
                {
                    image: '/assets/images/sophos.jpg',
                    title: 'Sophos Next Generation Firewall',
                    description: 'Fornece protecção abrangente com aprendizado profundo e segurança sincronizada, identificando riscos ocultos e respondendo automaticamente a incidentes.'
                },
                {
                    image: '/assets/images/fortinet.jpg',
                    title: 'Fortigate',
                    description: 'Combina firewall, VPN, prevenção de intrusões e filtragem de conteúdo para proteger a rede contra ameaças e garantir conectividade segura.'
                },
                {
                    image: '/assets/images/commvault.jpg',
                    title: 'Commvault',
                    description: 'Solução líder em backup e recuperação de dados. Os seus dados protegidos e sempre disponíveis para recuperação.'
                }
            ]
        },
        {
            id: 2,
            title: "Proteção Web (Cloud Security)",
            slides: [
                {
                    image: '/assets/images/imperva.jpg',
                    title: 'Imperva WAF',
                    description: 'Solução projectada para monitorar, filtrar e bloquear o tráfego de rede direccionado às aplicações web.'
                },
                {
                    image: '/assets/images/cloudflare.jpg',
                    title: 'Cloudflare',
                    description: 'Oferece segurança protegendo activos da internet contra actividades maliciosas.'
                },
                {
                    image: '/assets/images/fortinet.jpg',
                    title: 'Fortiweb',
                    description: 'Defende aplicativos e APIs da web contra ameaças do OWASP, ataques DDoS e bots maliciosos.'
                }
            ]
        },
        {
            id: 3,
            title: "Endpoint Security",
            slides: [
                {
                    image: '/assets/images/harmony.jpg',
                    title: 'Harmony Endpoint',
                    description: 'Criada para proteger a força de trabalho ao complexo cenário de ameaças actual e evitar as ameaças mais iminentes ao endpoint. Sua defesa abrangente bloqueia ataques antes que afetem os usuários, garantindo a continuidade do trabalho sem interrupções.'
                },
                {
                    image: '/assets/images/sophos.jpg',
                    title: 'Sophos Intercept X Advance with XDR',
                    description: 'Desenvolvido para operações de segurança de TI e Threat Hunting, investiga actividades suspeitas com análise direccionada por IA, e e corrige vulnerabilidades antes que se transformem em crises de segurança.'
                },
                {
                    image: '/assets/images/girl-tablet.webp',
                    title: 'CS Locker',
                    description: 'Com foco na abordagem de Zero Trust, o CS Locker coloca a segurança no centro das operações, permitindo apenas o que é necessário e rejeitando o desconhecido.'
                }
            ]
        },
        {
            id: 4,
            title: "Seceon aiSIEM",
            slides: [
                {
                    image: '/assets/images/seceon.jpg',
                    title: 'Seceon',
                    description: 'Uma plataforma de cibersegurança alimentada por inteligência artificial, projetada para detectar, prevenir e eliminar ameaças em tempo real. Com sua abordagem proativa e automatizada, a Seceon capacita organizações a manterem-se um passo à frente dos cibercriminosos, reduzindo riscos e custos operacionais'
                },
                {
                    image: '/assets/images/splunk.jpg',
                    title: 'Splunk',
                    description: 'Recolhe e analisa registos para detectar e responder a incidentes de segurança.'
                },
                {
                    image: '/assets/images/Darktrace.jpg',
                    title: 'Darktrace',
                    description: 'Utiliza inteligência artificial para monitorizar ameaças em tempo real, detectar e responder a comportamentos anómalos de forma autónoma e proactiva. Proporciona uma protecção contínua e adaptável, que reforça a segurança em ambientes dinâmicos e modernos.'
                },
                {
                    image: '/assets/images/rapid7.jpg',
                    title: 'Rapid7 Metasploit',
                    description: 'permite a identificação de vulnerabilidades, simulação de ataques e validação da eficácia dos controlos de segurança. de forma estratégica facilita a automação de testes e a formação de equipas em técnicas de exploração.'
                }
            ]
        }
    ],
    items: [
        {
            id: 1,
            Icon: <SecurityCamera size={24} color="#010400" />,
            title: "Monitoramento e Detecção de Ameaças",
            description: "Identificamos e mitigamos vulnerabilidades em tempo real, prevenindo riscos."
        },
        {
            id: 2,
            Icon: <Graph size={24} color="#010400" />,
            title: "Resposta a Incidentes",
            description: "Implementamos planos proativos para restaurar operações críticas com mínimo impacto."
        },
        {
            id: 3,
            Icon: <UserFocus size={24} color="#010400" />,
            title: "Gestão de Identidade e Acessos",
            description: "Controlamos acessos para proteger dados e prevenir acessos indevidos."
        },
        // {
        //     id: 4,
        //     Icon: <FileLock size={24} color="#010400" />,
        //     title: "Protecção de Dados",
        //     description: "Protecção avançada com firewalls, criptografia de ponta a ponta e backups resilientes contra perda de dados."
        // }
    ]
}

const OFENSIVE_OBJECT = {
    title2: "Soluções para Segurança Ofensiva",
    title: "CyberSecur SOC",
    cover: "/assets/images/hacker-server.webp",
    description2: "Ferramentas líderes no mercado para proteger sua organização contra ameaças digitais.",
    subTitle: "Teste e Exploração de Vulnerabilidades",
    description: "Protegemos activamente sistemas de informação contra ameaças, detectamos e mitigamos incidentes de segurança, através de soluções de segurança, estruturas e processos de segurança à sua medida A integração inteligente entre tecnologias permite identificar vulnerabilidades antes que se transformem em incidentes, assegurando a protecção contínua do ambiente corporativo.",
    tabs: [
        {
            id: 1,
            title: "Firewall",
            slides: [
                {
                    image: '/assets/images/girl-tablet.webp',
                    title: 'ThreatLocker',
                    description: 'Controle granular de permissões para evitar execuções não autorizadas de software e reduzir a superfície de ataque.'
                },
                {
                    image: '/assets/images/girl-tablet.webp',
                    title: 'CyberSecurity',
                    description: 'Soluções completas para proteger seus dados contra ameaças cibernéticas.'
                },
                {
                    image: '/assets/images/girl-tablet.webp',
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
                    image: '/assets/images/girl-tablet.webp',
                    title: 'Team Collaboration',
                    description: 'Ferramentas para aumentar a produtividade e colaboração entre equipes.'
                },
                {
                    image: '/assets/images/girl-tablet.webp',
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
    cover: "/assets/images/hacker-server.webp",
    description2: "Ferramentas líderes no mercado para proteger sua organização contra ameaças digitais.",
    subTitle: "Teste e Exploração de Vulnerabilidades",
    description: "Descubra vulnerabilidades antes que elas sejam exploradas. Nossa abordagem ofensiva permite que sua empresa esteja sempre um passo à frente dos hackers.",
    tabs: [
        {
            id: 1,
            title: "Firewall",
            slides: [
                {
                    image: '/assets/images/girl-tablet.webp',
                    title: 'ThreatLocker',
                    description: 'Controle granular de permissões para evitar execuções não autorizadas de software e reduzir a superfície de ataque.'
                },
                {
                    image: '/assets/images/girl-tablet.webp',
                    title: 'CyberSecurity',
                    description: 'Soluções completas para proteger seus dados contra ameaças cibernéticas.'
                },
                {
                    image: '/assets/images/girl-tablet.webp',
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
                    image: '/assets/images/girl-tablet.webp',
                    title: 'Team Collaboration',
                    description: 'Ferramentas para aumentar a produtividade e colaboração entre equipes.'
                },
                {
                    image: '/assets/images/girl-tablet.webp',
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