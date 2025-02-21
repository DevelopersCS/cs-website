"use client"
import ServicesSection from "../components/services.section";
import HeadlineServiceSection from "./headline";
import ServiceGetting from "./service-card";
import { DEFENSIVE_OBJECT } from "./data";
import FAQSection from "../components/faq.section";
import TrainingSection from "./training-section";
import ConsultSection from "./consult-section";
import SmoothScroll from "@/hooks/smooth-scroll";
import SOCSection from "./soc-section";


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
      {/* <DepoimentsSection /> */}
      <FAQSection />
    </>
  );
}
