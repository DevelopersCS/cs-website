import { Metadata } from "next";
import FAQSection from "../../components/faq.section";
import SmoothScroll from "@/hooks/smooth-scroll";
import HeadlineContactusSection from "./headline";
import { Calendar, DeviceMobileCamera, Envelope, Headset, MapPinArea, Question, Handshake } from "@phosphor-icons/react/dist/ssr";

const content = [
  {
    title: "Suporte ao Cliente",
    description:"A nossa equipa de suporte está disponível para ajudá-lo a resolver qualquer questão e garantir a sua segurança digital.",
    Icon: <Headset color="#25A8FF" aria-hidden="true" />
  },
  {
    title: "Feedback e Sugestões",
    description:"Queremos oferecer o melhor serviço possível. Tem alguma sugestão? Partilhe connosco!",
    Icon: <Question color="#25A8FF" aria-hidden="true" />

  },
  {
    title: "Parcerias e Colaborações",
    description:"Estamos abertos a parcerias que impulsionem a inovação em segurança da informação. Se representas uma empresa ou instituição e desejas explorar oportunidades de colaboração, fale connosco!",
    Icon: <Handshake color="#25A8FF" aria-hidden="true" />
  }
]

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
    { icon: Calendar, label: "Horário", value: "Segunda a Sexta – 08:30h às 17:00h" },
  ];

  return (
    <address className="w-full max-w-[596px] flex flex-col gap-4 not-italic">
      <h2 className="font-bold xl:text-5xl text-2xl dark:text-white text-black text-start">Entre em contacto</h2>
      <ul className="flex flex-col gap-4">
        {contactDetails.map(({ icon: Icon, label, value }, index) => (
          <li key={index} className="flex gap-2 items-center">
            <Icon color="#4FC0FF" size={20} aria-hidden="true" />
            <p className="dark:text-white text-black ">
              <b>{label}: </b>
              {value}
            </p>
          </li>
        ))}
      </ul>
    </address>
  );
};

const SupportCard = ({ title, description, Icon }: { title: string; description: string, Icon: React.ReactNode }) => (
  <div className="hover:scale-[.96] px-6 py-6 w-full flex flex-col gap-4 dark:bg-[#0E141D] bg-white dark:text-[#A4B1CD] dark:border-[#202837] border-[#F3F3F3] border-opacity-5 border-[1.5px] rounded-lg">
    <div className="bg-[#25A8FF] bg-opacity-10 p-2 rounded flex items-center justify-center max-w-[40px] max-h-[40px]">
      {/* <Headset color="#25A8FF" aria-hidden="true" /> */}
      {Icon}
    </div>
    <h3 className="font-medium text-2xl dark:text-white text-black">{title}</h3>
    <p className="dark:text-[#A4B1CD] text-base leading-[130%] font-normal text-[#5E5E5F]">{description}</p>
  </div>
);

export default function ContactPage() {
  return (
    <>
      <SmoothScroll />
      <HeadlineContactusSection />
      <section className="dark:bg-[#05050a] bg-gray-100">
        <div className="flex max-w-[1216px] px-6 py-14 flex-col lg:flex-row w-full mx-auto justify-between gap-4">
          <ContactInfo />
          <div className="w-full xl:max-w-[40%] max-w-full gap-4 flex flex-col">
            {content.map(({ title, description, Icon }, index) => (
              <SupportCard
                key={index}
                title={title}
                description={description}
                Icon={Icon}
              />
            ))}
          </div>
        </div>
      </section>
      <FAQSection />
    </>
  );
}
