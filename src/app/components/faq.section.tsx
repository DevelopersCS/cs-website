"use client"
import { useEffect, useRef, useState } from "react";
import BaseSection from "./base.section";
import ItemCard from "./item.card";
import Image from "next/image";

interface answerType {
  content: string,
  items: {
    title: string,
    description: string,
  }[]
}
interface FAQType {
  id: string,
  question: string,
  content?: string,
  answer?: answerType
}

const FAQS: FAQType[] = [
  {
    id: "01",
    question: "O que é a Cybersecur?",
    content:
      "A CyberSecur é uma empresa 100% focada em Estratégia de Defesa Cibernética e Riscos Corporativos ligados às Novas Tecnologias.",
  },
  {
    id: "02",
    question: "Quais serviços a Cybersecur oferece?",
    answer: {
      content: "A CyberSecur disponibiliza um portfólio completo de serviços, incluindo",
      items: [
        {
          title: "Segurança Defensiva",
          description: ""
        },
        {
          title: "Segurança Ofensiva",
          description: ""
        },
        {
          title: "Consciencialização e Formação",
          description: ""
        },
        {
          title: "Consultoria e Outsourcing",
          description: ""
        }
      ]
    },
  },
  {
    id: "03",
    question: "O que é segurança defensiva e como funciona? ",
    content:
      "A Segurança Defensiva protege sistemas, redes e dados contra ataques cibernéticos por meio de firewalls, monitorização contínua, deteção de ameaças e resposta a incidentes, prevenindo e mitigando riscos antes que comprometam a organização.",
  },
  {
    id: "04",
    question: "Quais são os benefícios dos serviços de segurança ofensiva?",
    answer: {
      content: "Os principais benefícios incluem:",
      items: [
        {
          title: "Identificação de vulnerabilidades antes que sejam exploradas por atacantes.",
          description: ""
        },
        {
          title: "Melhoria das defesas através de relatórios detalhados e planos de mitigação.",
          description: ""
        },
        {
          title: "Conformidade com regulamentos e padrões de segurança.",
          description: ""
        }
      ]
    },
  },
  {
    id: "05",
    question: "Como podem ajudar a minha empresa a implementar um SGSI baseado na ISO 27001?",
    answer: {
      content: "A nossa equipa de consultores certificados acompanha todas as fases da implementação do SGSI (Sistema de Gestão de Segurança da Informação), incluindo:",
      items: [
        {
          title:"Diagnóstico inicial para avaliar o nível de maturidade da segurança da informação da empresa",
          description:"",
        },
        {
          title: "Definição de políticas, procedimentos e controlos alinhados com a ISO 27001",
          description: "",
        },
        {
          title: "Gestão de riscos e identificação de vulnerabilidades",
          description: "",
        },
        {
          title: "Formação para colaboradores e preparação para auditorias de certificação",
          description: "",
        }
      ]
    }
  },
  {
    id: "06",
    question: "A vossa equipa é certificada para prestar consultoria em segurança e conformidade?",
    answer:{
      content:"Os nossos consultores possuem certificações reconhecidas internacionalmente, incluindo:",
      items: [
        {
          title:"CISSP (Certified Information Systems Security Professional)",
          description:""
        },
        {
          title: "ISO 27001 Lead Implementer e Lead Auditor",
          description: ""
        },
        {
          title: "Certified in Cybersecurity (CC) – ISC",
          description: ""
        },
        {
          title: "EXIN DPO",
          description: ""
        },
        {
          title: "EC-Council Network Security Specialist",
          description: ""
        },
        {
          title: "CompTIA Security+",
          description: ""
        }
      ]
    }
  },
  {
    id: "07",
    question: "Quais tecnologias e ferramentas são utilizadas nos serviços?",
    content:
      "A CyberSecur utiliza ferramentas avançadas de cibersegurança, incluindo Soluções SIEM, EDR, firewalls, IDS/IPS, análise de tráfego de rede, inteligência artificial para deteção de ameaças e testes de penetração.",
  },
  {
    id: "08",
    question: "Não encontrei a resposta para a minha questão. Como posso contactar a CyberSecur?",
    answer: {
      content: "Caso a sua dúvida não tenha sido esclarecida, entre em contacto connosco através de:",
      items: [
        {
          title:"telefone: [+244 924 101 146]",
          description: ""
        },
        {
          title: "email: info@cybersecur.co.ao",
          description: ""
        },
      ]
    }
  },
];

const FAQItem = ({
  question,
  answer,
  content,
  id,
}: {
  question: string;
  content?: string;
  answer?: answerType;
  id: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border dark:border-[#A4B1CD]  border-x-0 border-y-0 border-t-[0.5px] dark:border-opacity-20 last:border-b-2 w-full">
      <button
        className="lg:p-4 py-4 !pb-0 transition-all cursor-pointer w-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center w-full py-1">
          <h3 className="text-base md:text-lg font-medium text-left text-black dark:text-white">
            <span className="text-blue-400 pr-2">{id}</span>
            {question}
          </h3>
          <span
            className={`transform transition-transform duration-300 dark:text-white ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            <Image src={"/assets/icons/CaretDown.svg"} className="md:h-[24px] dark:invert md:w-[24px] h-[16px] w-[16px]" width={32} height={32} alt="Icone de seta" />
          </span>
        </div>
      </button>
      <div
        ref={contentRef}
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen" : "max-h-[40px]"
        }`}
        style={{
          maxHeight: isOpen
            ? `${contentRef.current?.scrollHeight || 0}px`
            : "0px",
        }}
      >
        {
          content && <p className="mt-2 text-gray-800 dark:text-gray-300 text-start p-4 lg:max-w-[75%]">
            {
              content
            }
          </p>
        }

        {
          answer && <div className="mt-2 text-gray-800 dark:text-gray-300 text-start p-4 lg:max-w-[75%]">
            {answer.content}
            <ul className="list-disc pl-7">
            {
              answer.items.map(({title})=>(
                <li key={title} className="">{title}</li>
              ))
            }
            </ul>
          </div>
        }
      </div>
    </div>
  );
};



const FAQSection = () => {

  return (
    <BaseSection headerStyle="!items-start pb-[48px] gap-2" rootStyle="flex bg-white" title="FAQ" description="Perguntas e respostas mais frequentes" descriptionStyle="text-start w-full text-2xl" titleStyle="text-start md:max-w-full max-w-[50%]  max-w-[100%] md:text-4xl">
      <div className="w-full h-full">
        <div className="space-y-4 w-full">
          {FAQS.map((faq, index) => (
            <FAQItem key={faq.id} id={faq.id} question={faq.question} answer={faq.answer} content={faq.content} />
          ))}
        </div>
      </div>
    </BaseSection>
  );
};

export default FAQSection;
