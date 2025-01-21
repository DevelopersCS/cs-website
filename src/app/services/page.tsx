"use client"
import { FileLock, Graph, SecurityCamera, UserFocus } from "@phosphor-icons/react";
import ServicesSection from "../components/services.section";
import HeadlineServiceSection from "./headline";
import ServiceGetting from "./service-card";
import { DEFENSIVE_OBJECT, OFENSIVE_OBJECT, SERVICES } from "./data";
import FAQSection from "../components/faq.section";
import TrainingSection from "./training-section";
import ConsultSection from "./consult-section";
import DepoimentsSection from "../components/depoiments.section";
import SmoothScroll from "@/hooks/smooth-scroll";


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
      <ServiceGetting
        cover={OFENSIVE_OBJECT.cover}
        tabs={OFENSIVE_OBJECT.tabs}
        title2={OFENSIVE_OBJECT.title2}
        title={OFENSIVE_OBJECT.title}
        description2={OFENSIVE_OBJECT.description2}
        subTitle={OFENSIVE_OBJECT.subTitle}
        description={OFENSIVE_OBJECT.description}
        items={OFENSIVE_OBJECT.items}
        toLeft={true}
      />
      
      <TrainingSection />
      <ConsultSection />
      <DepoimentsSection />
      <FAQSection />
    </>
  );
}
