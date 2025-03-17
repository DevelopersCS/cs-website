// "use client"
import { BrandsSection } from "./components/brands.section";
import FAQSection from "./components/faq.section";
import HeadlineSection from "./components/headline.section";
import ProtectYourInvestSection from "./components/protect-investi.section";
import { SecurityForYourBussinessSection } from "./components/securityForYourBussiness.section";
import ServicesSection from "./components/services.section";
import { TeamSection } from "./components/team.section";
import { VideoSection } from "./components/video.section";
import WhyUsSection from "./components/why-us.section";
import SmoothScroll from "@/hooks/smooth-scroll";
import { CertsSection } from "./components/cert.section";
import { Metadata } from "next";



const BRANDS = [
  {
    id:1,
    img: "/assets/brands/splunk.svg",
    dark: "/assets/brands/dark/splunk.svg",
    alt:"Logotipo oficial da splunk",
    isLittle: true,

  },
  {
    id:2,
    img: "/assets/brands/cloudflare.svg",
    dark: "/assets/brands/dark/cloudflare.svg",
    alt:"Logotipo oficial da cloudflare",
    isLittle: true,
    // isFlare: true,

  },
  {
    id:3,
    img: "/assets/brands/sophos.svg",
    dark: "/assets/brands/dark/sophos.svg",
    alt:"Logotipo oficial da sophos",
    isLittle: true,

  },
  {
    id:4,
    img: "/assets/brands/crowdstrike.svg",
    dark: "/assets/brands/dark/crowdstrike.svg",
    alt:"Logotipo oficial da crowdstrike",
    isLittle: true,

  },
  {
    id:5,
    img: "/assets/brands/imperva.svg",
    dark: "/assets/brands/dark/imperva.svg",
    alt:"Logotipo oficial da paloalto",
    isLittle: true,
  },
  {
    id:6,
    img: "/assets/brands/commvault.svg",
    dark: "/assets/brands/dark/commvault.svg",
    alt:"Logotipo oficial da commvault",
    isLittle: true,
  },
  {
    id: 7,
    img: "/assets/brands/seceon.svg",
    dark: "/assets/brands/dark/seceon.svg",
    alt: "Logotipo oficial da Seceon",
    isLittle: true,
  },
  {
    id: 8,
    img: "/assets/brands/fortinet.svg",
    dark: "/assets/brands/dark/fortinet.svg",
    alt: "Logotipo oficial da fortinet",
    isLittle: true,
  },
  {
    id: 9,
    img: "/assets/brands/darktrace.svg",
    dark: "/assets/brands/dark/darktrace.svg",
    alt: "Logotipo oficial da darktrace",
    isLittle: true,
  },
  {
    id: 10,
    img: "/assets/brands/rapid7.svg",
    dark: "/assets/brands/dark/rapid7.svg",
    alt: "Logotipo oficial da rapid7",
    isLittle: true,
  },
  // {
  //   id: 11,
  //   img: "/assets/brands/harmony.svg",
  //   dark: "/assets/brands/dark/harmony.svg",
  //   alt: "Logotipo oficial da harmony",
  //   isLittle: false,
  // },
  {
    id: 12,
    img: "/assets/brands/check-point.svg",
    dark: "/assets/brands/dark/check-point.svg",
    alt: "Logotipo oficial da Check Point",
    isLittle: true,
  }
]

const CERTS = [
  {
    id:1,
    img: "/assets/icons/certifications/iso.svg",
    dark: "/assets/icons/certifications/iso.svg",
    alt:"Logotipo oficial da splunk",

  },
  {
    id:2,
    img: "/assets/icons/certifications/nse.svg",
    dark: "/assets/icons/certifications/nse.svg",

    alt:"Logotipo oficial da Fortinet NSE 4",

  },
  {
    id:3,
    img: "/assets/icons/certifications/iasc.svg",
    dark: "/assets/icons/certifications/iasc.svg",

    alt:"Logotipo oficial da certificação Imperva IASC",

  },
  {
    id:4,
    img: "/assets/icons/certifications/idsc.svg",
    dark: "/assets/icons/certifications/idsc.svg",

    alt:"Logotipo oficial da certificação Imperva IDSC",

  },
  {
    id:5,
    img: "/assets/icons/certifications/dark-trace.png",
    dark: "/assets/icons/certifications/dark-trace.png",
    alt:"Logotipo oficial da Dark Trace",
  },
  {
    id:6,
    img: "/assets/icons/certifications/ccsa.svg",
    dark: "/assets/icons/certifications/ccsa.svg",

    alt:"Logotipo oficial da CCSA",
  },
  {
    id: 7,
    img: "/assets/icons/certifications/azure.svg",
    dark: "/assets/icons/certifications/azure.svg",
    alt: "Logotipo oficial da azure",
  }
]


export const generateMetadata = (): Metadata => {
  return {
    title: "Início | Cybersecur",
    description: "A Cybersecur oferece soluções avançadas em segurança digital para proteger sua empresa contra ameaças cibernéticas.",
    keywords: ["Cyber Security", "Pentest", "Segurança Digital", "Proteção de Dados"],
    openGraph: {
      title: "Início | Cybersecur",
      description: "A Cybersecur oferece soluções avançadas em segurança digital para proteger sua empresa contra ameaças cibernéticas.",
      url: "https://cybersecur.co.ao",
      images: [
        {
          url: "https://cybersecur.co.ao/home-og.jpg",
          width: 1200,
          height: 630,
          alt: "Cybersecur - Segurança Digital",
        },
      ],
    },
  };
};

export default function Home() {

  return (
    <>
      <SmoothScroll />
      <HeadlineSection />
      <WhyUsSection />
      <ProtectYourInvestSection />
      <BrandsSection title="Soluções ao seu dispor" brands={BRANDS} className="flex-wrap px-[24px] py-24 bg-white dark:bg-black" brandsStyle="flex-wrap" />
      <ServicesSection title="Protecção Inteligente para o Seu Negócio" description="Serviços avançados de cibersegurança para fortalecer a segurança e a confiança digital da sua empresa." />
      <VideoSection />
      {/* <DepoimentsSection /> */}
      <CertsSection 
        title="Reconhecimento e certificação em padrões globais de segurança" 
        brands={CERTS} 
        className="flex-wrap px-[24px] py-24 bg-white dark:bg-black" 
        brandsStyle="flex-wrap " 
      />
      <TeamSection />
      <SecurityForYourBussinessSection/>
      {/* <div className="max-w-[1216px] mx-auto px-4 w-full">
        <RecentPosts />
      </div> */}
      <FAQSection />
    </>
  );
}
