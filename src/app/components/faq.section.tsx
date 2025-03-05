"use client"
import { useEffect, useRef, useState } from "react";
import BaseSection from "./base.section";
import ItemCard from "./item.card";
import Image from "next/image";

const FAQS = [
  {
    id: "01",
    question: "O que é a Cybersecur?",
    answer:
      "A CyberSecur é uma empresa 100% focada em Estratégia de Defesa Cibernética e Riscos Corporativos ligados às Novas Tecnologias.O foco principal é fornecer suporte local e em língua portuguesa, garantindo uma comunicação eficiente e um atendimento personalizado aos nossos clientes.A nossa competência em segurança da informação e cibersegurança é baseada em boas práticas alinhadas às principais normas internacionais, para assegurar a excelência na execução de todos os serviços.",
  },
  {
    id: "02",
    question: "Quais serviços a Cybersecur oferece?",
    answer:
      "A Cybersecur oferece serviços como auditoria de segurança, consultoria em cibersegurança, monitoramento de redes, testes de invasão (pentests) e treinamento para equipes.",
  },
  {
    id: "03",
    question: "Em que mercados ou regiões a CyberSecur actua?",
    answer:
      "A CyberSecur actua em Angola, estando localizada em Luanda, onde oferece soluções de cibersegurança para empresas e organizações.",
  },
  {
    id: "04",
    question: "Como posso entrar em contacto com a CyberSecur?",
    answer:
      "Atendemos empresas de diversos setores, como financeiro, saúde, tecnologia, educação e governo, personalizando soluções para cada necessidade.",
  },
  {
    id: "05",
    question: "O que é segurança defensiva e como funciona? ",
    answer:
      "A Segurança Defensiva envolve a implementação de medidas para proteger sistemas, redes e dados contra ataques cibernéticos. Inclui soluções como firewalls, monitorização contínua, detecção de ameaças e resposta a incidentes. O objectivo é prevenir, identificar e mitigar riscos antes que possam comprometer a segurança da organização.",
  },
  {
    id: "06",
    question: "Quais os benefícios dos serviços de segurança ofensiva?",
    answer:
      "A Segurança Ofensiva foca-se em testar a resistência das defesas de uma empresa através de técnicas como testes de intrusão (pentests) e análises de vulnerabilidades.Os principais benefícios incluem: •	Identificação de vulnerabilidades antes que sejam exploradas por atacantes.•	Melhoria das defesas através de relatórios detalhados e planos de mitigação.•	Conformidade com regulamentos e padrões de segurança.",
  },
  {
    id: "07",
    question: "Como funcionam os programas de conscientização e Consultoria?",
    answer:
      "Seguimos rigorosos padrões de segurança e conformidade, como a ISO 27001, garantindo que todos os dados dos clientes sejam tratados com a máxima confidencialidade.",
  },
  {
    id: "08",
    question: "A CyberSecur realiza consultorias personalizadas?",
    answer:
      "Sim, oferecemos treinamentos personalizados para equipes, ajudando a educar funcionários sobre boas práticas de segurança digital.",
  },
  {
    id: "09",
    question: "Quais tecnologias e ferramentas são utilizadas nos serviços?",
    answer:
      "Sim, oferecemos treinamentos personalizados para equipes, ajudando a educar funcionários sobre boas práticas de segurança digital.",
  },
  {
    id: "10",
    question: "Não encontrei a resposta para a minha questão. Como posso contactar a CyberSecur?",
    answer:
      "Caso a sua dúvida não tenha sido esclarecida, entre em contacto connosco através do e-mail info@cybersecur.co.ao, telefone [+244 924 101 146], ou visite o nosso website www.cybersecur.co.ao",
  },
];

const FAQItem = ({
  question,
  answer,
  id,
}: {
  question: string;
  answer: string;
  id: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border dark:border-[#A4B1CD] border-x-0 border-y-0 border-t-[0.5px] darK:border-opacity-20 last:border-b-2 w-full">
      <button
        className="p-4 transition-all cursor-pointer w-full"
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
        <p className="mt-2 text-gray-400 text-start p-4 max-w-[60%]">{answer}</p>
      </div>
    </div>
  );
};



const FAQSection = () => {

  return (
    <BaseSection headerStyle="!items-start pb-[48px] gap-2" rootStyle="flex bg-white" title="FAQ" description="Perguntas e respostas mais frequentes" descriptionStyle="text-start w-full text-2xl" titleStyle="text-start md:max-w-[50%] max-w-[100%] md:text-4xl">
      <div className="w-full h-full">
        <div className="space-y-4 w-full">
          {FAQS.map((faq, index) => (
            <FAQItem key={faq.id} id={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </BaseSection>
  );
};

export default FAQSection;
