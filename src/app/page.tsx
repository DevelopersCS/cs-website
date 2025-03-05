"use client"
import { BrandsSection } from "./components/brands.section";
import FAQSection from "./components/faq.section";
import { Footer } from "./components/footer";
import HeadlineSection from "./components/headline.section";
import ProtectYourInvestSection from "./components/protect-investi.section";
import { SecurityForYourBussinessSection } from "./components/securityForYourBussiness.section";
import ServicesSection from "./components/services.section";
import { TeamSection } from "./components/team.section";
import { VideoSection } from "./components/video.section";
import WhyUsSection from "./components/why-us.section";
import { ThemeContext } from "./context/ThemeContext";
import Lenis from "lenis";
import SmoothScroll from "@/hooks/smooth-scroll";
import SEO from "./components/SEO";
import { getAllPosts, getPostBySlug, Post } from "@/lib/posts";
import { RecentPosts } from "./components/blog/recentPosts";
import { NextSeo } from "next-seo";
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
    img: "/assets/brands/paloalto.svg",
    dark: "/assets/brands/dark/paloalto.svg",
    alt:"Logotipo oficial da paloalto",
    isLittle: true,
  },
  {
    id:6,
    img: "/assets/brands/commvault.svg",
    dark: "/assets/brands/dark/commvault.svg",
    alt:"Logotipo oficial da commvault",
    isLittle: true,
  }
]

const CERTS = [
  {
    id:1,
    img: "/assets/icons/certifications/iso.png",
    dark: "/assets/icons/certifications/iso.png",
    alt:"Logotipo oficial da splunk",

  },
  {
    id:2,
    img: "/assets/icons/certifications/nse.png",
    dark: "/assets/icons/certifications/nse.png",

    alt:"Logotipo oficial da cloudflare",

  },
  {
    id:3,
    img: "/assets/icons/certifications/iasc.png",
    dark: "/assets/icons/certifications/iasc.png",

    alt:"Logotipo oficial da sophos",

  },
  {
    id:4,
    img: "/assets/icons/certifications/idsc.png",
    dark: "/assets/icons/certifications/idsc.png",

    alt:"Logotipo oficial da crowdstrike",

  },
  {
    id:5,
    img: "/assets/icons/certifications/dark-trace.png",
    dark: "/assets/icons/certifications/dark-trace.png",

    alt:"Logotipo oficial da paloalto",
  },
  {
    id:6,
    img: "/assets/icons/certifications/ccsa.png",
    dark: "/assets/icons/certifications/ccsa.png",

    alt:"Logotipo oficial da commvault",
  }
]


export default function Home() {
  
  return (
    <>
      <SmoothScroll />
      <HeadlineSection />
      <WhyUsSection />
      <ProtectYourInvestSection />
      <BrandsSection title="Soluções ao seu dispor" brands={BRANDS} className="flex-wrap px-[24px] py-24 bg-white dark:bg-black" brandsStyle="flex-wrap" />
      <ServicesSection title="Proteção Inteligente para Seu Negócio" description="Serviços avançados de cibersegurança para fortalecer a segurança e a confiança digital da sua empresa." />
      <VideoSection />
      {/* <DepoimentsSection /> */}
      <BrandsSection titleStyle="text-center" title="Reconhecimento e certificação em padrões globais de segurança" brands={CERTS} className="flex-wrap px-[24px] bg-white dark:bg-black py-20" brandsStyle="flex-wrap scale-[.7]" />
      <TeamSection />
      <SecurityForYourBussinessSection/>
      {/* <div className="max-w-[1216px] mx-auto px-4 w-full">
        <RecentPosts />
      </div> */}
      <FAQSection />
    </>
  );
}
