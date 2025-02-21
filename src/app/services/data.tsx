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
            title: "Proteção local",
            slides: [
                {
                    image: '/assets/images/girl-tablet.jpg',
                    title: 'Checkpoint',
                    description: 'Monitora o tráfego de rede em tempo real, analisando pacotes de dados para garantir o tratamento seguro e eficaz de informações críticas.'
                },
                {
                    image: '/assets/images/girl-tablet.jpg',
                    title: 'Sophos firewall',
                    description: 'Fornece protecção abrangente com aprendizado profundo e segurança sincronizada, identificando riscos ocultos e respondendo automaticamente a incidentes.'
                },
                {
                    image: '/assets/images/girl-tablet.jpg',
                    title: 'Fortigate',
                    description: 'Combina firewall, VPN, prevenção de intrusões e filtragem de conteúdo para proteger a rede contra ameaças e garantir conectividade segura.'
                },
                {
                    image: '/assets/images/girl-tablet.jpg',
                    title: 'Delinea',
                    description: 'Gestão centralizada de credenciais e palavras-passe críticas. Elimine pontos fracos locais com controlo total.'
                },
                {
                    image: '/assets/images/girl-tablet.jpg',
                    title: 'Commvault',
                    description: 'Solução líder em backup e recuperação de dados. Os seus dados protegidos e sempre disponíveis para recuperação.'
                }
            ]
        },
        {
            id: 2,
            title: "Proteção Web",
            slides: [
                {
                    image: '/assets/images/girl-tablet.jpg',
                    title: 'Imperva',
                    description: 'Uma solução projetada para monitorar, filtrar e bloquear o tráfego de rede direccionado às aplicações web.'
                },
                {
                    image: '/assets/images/girl-tablet.jpg',
                    title: 'Cloudflare',
                    description: 'Oferece segurança protegendo activos da internet contra actividades maliciosas.'
                },
                {
                    image: '/assets/images/girl-tablet.jpg',
                    title: 'Fortiweb',
                    description: 'Defende aplicativos e APIs da web contra ameaças do OWASP, ataques DDoS e bots maliciosos.'
                }
            ]
        },
        {
            id: 3,
            title: "Proteção Endpoint",
            slides: [
                {
                    image: '/assets/images/girl-tablet.jpg',
                    title: 'Harmony Endpoint',
                    description: 'Criada para proteger a força de trabalho ao complexo cenário de ameaças actual e evitar as ameaças mais iminentes ao endpoint. Sua defesa abrangente bloqueia ataques antes que afetem os usuários, garantindo a continuidade do trabalho sem interrupções.'
                },
                {
                    image: '/assets/images/girl-tablet.jpg',
                    title: 'Sophos Intercept X Advance with XDR',
                    description: 'Desenvolvido para operações de segurança de TI e caça a ameaças, o Intercept X detecta e investiga actividades suspeitas com análise direccionada por IA. Revela ameaças ocultas e corrige vulnerabilidades antes que se transformem em crises de segurança.'
                },
                {
                    image: '/assets/images/girl-tablet.jpg',
                    title: 'CS Locker',
                    description: 'Com foco na abordagem de Zero Trust, o CS Locker coloca a segurança no centro das operações, permitindo apenas o que é necessário e rejeitando o desconhecido.'
                }
            ]
        },
        {
            id: 4,
            title: "SIEM",
            slides: [
                {
                    image: '/assets/images/girl-tablet.jpg',
                    title: 'Seceon',
                    description: 'Uma plataforma de cibersegurança alimentada por inteligência artificial, projetada para detectar, prevenir e eliminar ameaças em tempo real. Com sua abordagem proativa e automatizada, a Seceon capacita organizações a manterem-se um passo à frente dos cibercriminosos, reduzindo riscos e custos operacionais'
                },
                {
                    image: '/assets/images/girl-tablet.jpg',
                    title: 'Splunk',
                    description: 'Recolhe e analisa registos para detectar e responder a incidentes de segurança. Transforma dados em informações acionáveis.'
                },
                {
                    image: '/assets/images/girl-tablet.jpg',
                    title: 'Darktrace',
                    description: 'Monitora ameaças em tempo real com IA autoaprendente. Protecção contínua e adaptável para ambientes modernos.'
                },
                {
                    image: '/assets/images/girl-tablet.jpg',
                    title: 'Rapid7 Metasploit',
                    description: 'Identifica e explora vulnerabilidades com precisão. Esteja sempre um passo à frente dos cibercriminosos.'
                }
            ]
        }
    ],
    items: [
        {
            id: 1,
            Icon: <SecurityCamera size={24} color="#010400" />,
            title: "Monitoramento e Detecção de Ameaças",
            description: "Monitorização contínua para identificar vulnerabilidades críticas e agir rapidamente, prevenindo riscos antes que se tornem ameaças. "
        },
        {
            id: 2,
            Icon: <Graph size={24} color="#010400" />,
            title: "Resposta a Incidentes",
            description: "Implementação imediata de planos de resposta para restaurar operações críticas com o mínimo de interrupção. "
        },
        {
            id: 3,
            Icon: <UserFocus size={24} color="#010400" />,
            title: "Gestão de Identidade e Acessos",
            description: "Gestão inteligente de acessos com monitoramento centralizado para prevenir violações e garantir conformidade."
        },
        {
            id: 4,
            Icon: <FileLock size={24} color="#010400" />,
            title: "Protecção de Dados",
            description: "Protecção avançada com firewalls, criptografia de ponta a ponta e backups resilientes contra perda de dados."
        }
    ]
}

const OFENSIVE_OBJECT = {
    title2: "Soluções para Segurança Ofensiva",
    title: "CyberSecur SOC",
    cover: "/assets/images/hacker-server.jpg",
    description2: "Ferramentas líderes no mercado para proteger sua organização contra ameaças digitais.",
    subTitle: "Teste e Exploração de Vulnerabilidades",
    description: "Protegemos activamente sistemas de informação contra ameaças, detectamos e mitigamos incidentes de segurança, através de soluções de segurança, estruturas e processos de segurança à sua medida A integração inteligente entre tecnologias permite identificar vulnerabilidades antes que se transformem em incidentes, assegurando a protecção contínua do ambiente corporativo.",
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