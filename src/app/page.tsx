import { BrandsSection } from "./components/brands.section";
import DepoimentsSection from "./components/depoiments.section";
import FAQSection from "./components/faq.section";
import { Footer } from "./components/footer";
import Header from "./components/header";
import HeadlineSection from "./components/headline.section";
import ProtectYourInvestSection from "./components/protect-investi.section";
import { SecurityForYourBussinessSection } from "./components/securityForYourBussiness.section";
import ServicesSection from "./components/services.section";
import { TeamSection } from "./components/team.section";
import { VideoSection } from "./components/video.section";
import WhyUsSection from "./components/why-us.section";

const BRANDS = [
  {
    id:1,
    img: "/assets/brands/splunk.svg",
    alt:"Logotipo oficial da splunk",
    isLittle: true,

  },
  {
    id:2,
    img: "/assets/brands/cloudflare.svg",
    alt:"Logotipo oficial da cloudflare",
    isLittle: true,
    isFlare: true,

  },
  {
    id:3,
    img: "/assets/brands/sophos.svg",
    alt:"Logotipo oficial da sophos",
    isLittle: true,

  },
  {
    id:4,
    img: "/assets/brands/crowdstrike.svg",
    alt:"Logotipo oficial da crowdstrike",
    isLittle: true,

  },
  {
    id:5,
    img: "/assets/brands/paloalto.svg",
    alt:"Logotipo oficial da paloalto",
    isLittle: true,
  },
  {
    id:6,
    img: "/assets/brands/commvault.svg",
    alt:"Logotipo oficial da commvault",
    isLittle: true,
  }
]

const CERTS = [
  {
    id:1,
    img: "/assets/icons/certifications/iso.png",
    alt:"Logotipo oficial da splunk",

  },
  {
    id:2,
    img: "/assets/icons/certifications/nse.png",
    alt:"Logotipo oficial da cloudflare",

  },
  {
    id:3,
    img: "/assets/icons/certifications/iasc.png",
    alt:"Logotipo oficial da sophos",

  },
  {
    id:4,
    img: "/assets/icons/certifications/idsc.png",
    alt:"Logotipo oficial da crowdstrike",

  },
  {
    id:5,
    img: "/assets/icons/certifications/dark-trace.png",
    alt:"Logotipo oficial da paloalto",
  },
  {
    id:6,
    img: "/assets/icons/certifications/ccsa.png",
    alt:"Logotipo oficial da commvault",
  }
]

export default function Home() {
  return (
    <main className="bg-black">
      <Header />
      <div className="flex flex-col pb-20 relative">
        <HeadlineSection />
        <WhyUsSection />
        <ProtectYourInvestSection />
        <BrandsSection  title="Soluções ao seu dispor" brands={BRANDS} className="flex-wrap px-[24px] bg-white" brandsStyle="flex-wrap" />
        <ServicesSection />
        <VideoSection />
        <DepoimentsSection />
        <BrandsSection titleStyle="text-center" title="Reconhecimento e certificação em padrões globais de segurança" brands={CERTS} className="flex-wrap px-[24px] bg-white" brandsStyle="flex-wrap scale-[.7]" />
        <TeamSection />
        <SecurityForYourBussinessSection/>
        <FAQSection />
        <Footer />
      </div>
    </main>
  );
}
