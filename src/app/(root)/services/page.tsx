import { Metadata } from "next";
import ServicesSection from "../../components/services.section";
import HeadlineServiceSection from "./headline";
import ServiceGetting from "./service-card";
import { DEFENSIVE_OBJECT } from "./data";
import FAQSection from "../../components/faq.section";
import TrainingSection from "./training-section";
import ConsultSection from "./consult-section";
import SmoothScroll from "@/hooks/smooth-scroll";
import SOCSection from "./soc-section";
import { RecentPosts } from "@/app/components/blog/recentPosts";

export const generateMetadata = (): Metadata => {
  return {
    title: "Serviços | Cybersecur",
    description: "Conheça nossos serviços de segurança cibernética e proteção digital.",
    keywords: ["Cyber Security", "Pentest", "Segurança Digital"],
    openGraph: {
      title: "Serviços | Cybersecur",
      description: "Conheça nossos serviços de segurança cibernética e proteção digital.",
      url: "https://cybersecur.co.ao/services",
      images: [
        {
          url: "https://cybersecur.co.ao/services-og.jpg",
          width: 1200,
          height: 630,
          alt: "Cybersecur Services",
        },
      ],
    },
  };
};

export default function Services() {
  return (
    <>
      <SmoothScroll />
      <HeadlineServiceSection />
      <ServicesSection title="Serviços oferecidos" description="" />
      <ServiceGetting
        cover={DEFENSIVE_OBJECT.cover}
        tabs={DEFENSIVE_OBJECT.tabs}
        title2={DEFENSIVE_OBJECT.title2}
        title={DEFENSIVE_OBJECT.title}
        description2={DEFENSIVE_OBJECT.description2}
        subTitle={DEFENSIVE_OBJECT.subTitle}
        description={DEFENSIVE_OBJECT.description}
        items={DEFENSIVE_OBJECT.items}
        toLeft={false}
      />
      <SOCSection />
      <TrainingSection />
      <ConsultSection />
      {/* <div className="max-w-[1216px] mx-auto px-4 w-full">
        <RecentPosts />
      </div> */}
      <FAQSection />
    </>
  );
}
