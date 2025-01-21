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
      "A Cybersecur é uma empresa especializada em cibersegurança, oferecendo soluções e serviços para proteger sistemas, redes e dados contra ameaças digitais.",
  },
  {
    id: "02",
    question: "Quais serviços a Cybersecur oferece?",
    answer:
      "A Cybersecur oferece serviços como auditoria de segurança, consultoria em cibersegurança, monitoramento de redes, testes de invasão (pentests) e treinamento para equipes.",
  },
  {
    id: "03",
    question: "Como posso contratar os serviços da Cybersecur?",
    answer:
      "Você pode contratar os serviços da Cybersecur entrando em contato através do nosso site, e-mail ou telefone. Nossa equipe está pronta para ajudar!",
  },
  {
    id: "04",
    question: "A Cybersecur atende empresas de quais setores?",
    answer:
      "Atendemos empresas de diversos setores, como financeiro, saúde, tecnologia, educação e governo, personalizando soluções para cada necessidade.",
  },
  {
    id: "05",
    question: "A Cybersecur oferece suporte 24/7?",
    answer:
      "Sim, a Cybersecur possui uma equipe de suporte disponível 24 horas por dia, 7 dias por semana, para garantir a proteção contínua dos nossos clientes.",
  },
  {
    id: "06",
    question: "A Cybersecur realiza testes de invasão (pentests)?",
    answer:
      "Sim, realizamos testes de invasão para identificar vulnerabilidades nos sistemas e ajudar sua empresa a corrigir possíveis falhas de segurança.",
  },
  {
    id: "07",
    question: "Como a Cybersecur garante a confidencialidade dos dados?",
    answer:
      "Seguimos rigorosos padrões de segurança e conformidade, como a ISO 27001, garantindo que todos os dados dos clientes sejam tratados com a máxima confidencialidade.",
  },
  {
    id: "08",
    question: "A Cybersecur oferece treinamentos em cibersegurança?",
    answer:
      "Sim, oferecemos treinamentos personalizados para equipes, ajudando a educar funcionários sobre boas práticas de segurança digital.",
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
            className={`transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            <Image src={"/assets/icons/CaretDown.svg"} className="md:h-[24px] md:w-[24px] h-[16px] w-[16px]" width={24} height={24} alt="Icone de seta" />
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
        <p className="mt-2 text-gray-600 text-start p-4 max-w-[60%]">{answer}</p>
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
