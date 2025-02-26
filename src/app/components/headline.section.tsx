import Image from "next/image";
import Link from "next/link";
import { BrandsSection } from "./brands.section";
import {motion} from "framer-motion"


const BRANDS = [
  {
    id:1,
    img: "/assets/brands/logo-bai.svg",
    dark: "/assets/brands/dark/logo-bai.svg",
    alt:"Logotipo oficial do Banco BAI",
  },
  {
    id:2,
    img: "/assets/brands/logo-bpc.svg",
    dark: "/assets/brands/dark/logo-bpc.svg",
    alt:"Logotipo oficial do Banco BAI",
  },
  {
    id:3,
    img: "/assets/brands/logo-sic.svg",
    dark: "/assets/brands/dark/logo-sic.svg",
    alt:"Logotipo oficial do SIC",
  },
  {
    id:4,
    img: "/assets/brands/logo-banco-sol.svg",
    dark: "/assets/brands/dark/logo-banco-sol.svg",
    alt:"Logotipo oficial do Banco SOL",
    isLittle: true,

  },
  {
    id:5,
    img: "/assets/brands/logo-apd.svg",
    dark: "/assets/brands/dark/logo-apd.svg",
    alt:"Logotipo oficial da APD",
    isLittle: true,
  }
]
const HeadlineSection = () => {

  return (
    <section
      className={"dark:bg-[#06070A] dark:text-[#A4B1CD] bg-white relative pt-[140px] mx-auto pb-4 w-full flex justify-center items-center flex-col lg:px-8 px-6"}
    >
      <div className="absolute inset-0 z-10">
        <Image
          src="/assets/images/background.webp"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={70}
        />
      </div>
      <div className="w-full flex max-w-[1216px]  z-20 gap-10 justify-between items-center flex-col lg:flex-row">
        <div className="text-white flex gap-6  minMobile:max-w-[600px] lg:max-w-[520px] w-full flex-col minMobile:justify-center  minMobile:items-center lg:items-start minMobile:text-center lg:text-start">
          <motion.span 
            className="text-[#25A8FF] text-base xl:text-lg font-bold"
            initial={{ translateY: 10, opacity: 0, }}
            whileInView={{ translateY: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              translateY: { duration: 0.1, delay: 0.5, ease: "easeOut" },
              opacity: { duration: 1, delay: 0.5 * 1, ease: "easeInOut" }
            }}
            >
              Proteja Seu Negócio com Segurança de Alto Nível
          </motion.span>
          <motion.h1 
            className="font-bold dark:text-white text-black lg:text-5xl md:text-4xl text-[32px] leading-[120%]"
            initial={{ translateY: 10, opacity: 0, }}
            whileInView={{ translateY: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              translateY: { duration: 0.1, delay: 0.5, ease: "easeOut" },
              opacity: { duration: 1.3, delay: 0.5 * 2, ease: "easeInOut" }
            }}
          >
              Proteja o Futuro do Seu Negócio com Segurança de Confiança.
            </motion.h1>
          <motion.p 
            className="lg:text-lg text-base font-normal leading-[150%] dark:text-white text-[#333232] text-opacity-70"
            initial={{ translateY: 10, opacity: 0, }}
            whileInView={{ translateY: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              translateY: { duration: 0.1, delay: 0.5, ease: "easeOut" },
              opacity: { duration: 1.1, delay: 0.5 * 3, ease: "easeInOut" }
            }}
          >
              Soluções de cibersegurança para empresas que priorizam a segurança dos seus dados e a confiança dos seus clientes.
          </motion.p>
          <Link className="button-animate md:w-[300px] max-w-full text-center text-lg font-medium text-black bg-[#25A8FF] duration-300 border border-opacity-20 border-[#25A8FF] px-6 py-4 rounded-xl hover:scale-95 transition-all hover:bg-opacity-80" href="/contato">
            Solicitar Serviços
          </Link>
        </div>
        <div className="max-w-[346px] lg:max-w-[446px] ">
          <Image width={500} height={500} alt="Headline" priority src={"/assets/images/headline-image.webp"}/>
        </div>
      </div>

      <BrandsSection title={"Confiado pelos melhores!".toUpperCase()} brands={BRANDS} />
      {/* <Image width={1440} height={1007} className="absolute -z-2 w-full object-cover" alt="Headline" src={"/assets/images/background.webp"}/> */}
    </section>
  );
};

export default HeadlineSection;
