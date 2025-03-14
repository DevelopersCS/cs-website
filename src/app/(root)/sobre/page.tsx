import { Metadata } from "next";
import FAQSection from "../../components/faq.section";
import SmoothScroll from "@/hooks/smooth-scroll";
import HeadlineAboutSection from "./headline";
import { Calendar, DeviceMobileCamera, Envelope, Headset, MapPinArea } from "@phosphor-icons/react/dist/ssr";
import ItemsSection from "./items";
import MapsSection from "./maps";
import Timeline from "./timeline";
import ContentWithImageSection from "../servicos/ContentWithImageSection";
import Image from "next/image";


export const generateMetadata = (): Metadata => {
  return {
    title: "Fale Connosco | Cybersecur",
    description: "Entre em contato conosco para obter mais informações sobre segurança cibernética e proteção digital.",
    keywords: ["Cyber Security", "Pentest", "Segurança Digital", "Proteção de Dados", "Firewall", "Ataques Cibernéticos"],
    robots: "index, follow",
    openGraph: {
      title: "Fale Connosco | Cybersecur",
      description: "Entre em contato conosco para obter mais informações sobre segurança cibernética e proteção digital.",
      url: "https://cybersecur.co.ao/contact",
      images: [
        {
          url: "https://cybersecur.co.ao/contact-og.jpg",
          width: 1200,
          height: 630,
          alt: "Cybersecur Contact",
        },
      ],
    },
  };
};

const ContactInfo = () => {
  const contactDetails = [
    { icon: DeviceMobileCamera, label: "Telefone", value: "924 101 146" },
    { icon: Envelope, label: "E-mail", value: "info@cybersecur.co.ao" },
    { icon: MapPinArea, label: "Morada", value: "Zona Financeira do Patriota, Edifício Gorongoza." },
    { icon: Calendar, label: "Horário de Atendimento", value: "Segunda a Sexta – 09h às 17h" },
  ];

  return (
    <address className="w-full max-w-[596px] flex flex-col gap-4 not-italic">
      <h1 className="font-bold xl:text-5xl text-2xl dark:text-white text-start">Entre em contato</h1>
      <ul className="flex flex-col gap-4">
        {contactDetails.map(({ icon: Icon, label, value }, index) => (
          <li key={index} className="flex gap-2 items-center">
            <Icon color="#4FC0FF" size={20} aria-hidden="true" />
            <p>
              <b>{label}: </b>
              {value}
            </p>
          </li>
        ))}
      </ul>
    </address>
  );
};

const SupportCard = ({ title, description }: { title: string; description: string }) => (
  <div className="hover:scale-[.96] px-6 py-6 w-full flex flex-col gap-4 dark:bg-[#0E141D] bg-white dark:text-[#A4B1CD] dark:border-[#202837] border-[#F3F3F3] border-opacity-5 border-[1.5px] rounded-lg">
    <div className="bg-[#25A8FF] bg-opacity-10 p-2 rounded flex items-center justify-center max-w-[40px] max-h-[40px]">
      <Headset color="#25A8FF" aria-hidden="true" />
    </div>
    <h3 className="font-medium text-2xl dark:text-white text-black">{title}</h3>
    <p className="dark:text-[#A4B1CD] text-base leading-[130%] font-normal text-[#5E5E5F]">{description}</p>
  </div>
);

export default function AboutPage() {
  return (
    <>
      <SmoothScroll />
      <HeadlineAboutSection />
      <div className="bg-[#25A8FF] dark:white py-12 h-full">
        <div
          className={`flex max-w-[1216px] py-12 mx-auto w-full h-full items-center gap-14 lg:px-6 xl:px-0 flex-col-reverse lg:flex-row-reverse`}

        >
          <div className="order-2 w-full h-full">
            <Image
              src={"/assets/images/2149311504.jpg"}
              className="xl:max-w-[535px] max-w-full object-cover w-full xl:rounded-lg"
              alt={"imageAlt"}
              width={535}
              height={384.98}
            />
          </div>
          <div className="flex flex-col gap-6 order-1 max-w-full w-full px-6 lg:px-0">
            <h1 className=" font-bold text-[30px] leading-[120%]">
              Sobre Nós
            </h1>
            <p className="">
              Na CyberSecur, a segurança cibernética não é apenas um serviço, é a nossa missão. Somos uma empresa 100% focada em Defesa Cibernética e Gestão de Riscos Tecnológicos, protegendo organizações contra ameaças digitais em constante evolução. <br />
              Acreditamos que a melhor defesa é o conhecimento, por isso investimos continuamente na formação das nossas equipas – tanto internas como de outsourcing – para que estejam sempre à frente das últimas tendências e ameaças em segurança cibernética.
             <br /> Na CyberSecur, a segurança não é apenas um requisito, é uma cultura. Mantemos um ambiente de aprendizado contínuo e inovação, assegurando que o negócio dos nossos clientes estejam sempre protegidos com as soluções mais avançadas do mercado.
            </p>
          </div>
        </div>
      </div>
      <ItemsSection 
        title="Nossos Princípios" 
        description="" 
      />
      <Timeline />
      <MapsSection />
      <FAQSection />
    </>
  );
}
