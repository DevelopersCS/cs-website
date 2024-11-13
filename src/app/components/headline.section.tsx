import Image from "next/image";
import Link from "next/link";

const BRANDS = [
  {
    id:1,
    img: "/assets/brands/logo-bai.svg",
    alt:"Logotipo oficial do Banco BAI",
  },
  {
    id:2,
    img: "/assets/brands/logo-bpc.svg",
    alt:"Logotipo oficial do Banco BAI",
  },
  {
    id:3,
    img: "/assets/brands/logo-sic.svg",
    alt:"Logotipo oficial do SIC",
  },
  {
    id:4,
    img: "/assets/brands/logo-banco-sol.svg",
    alt:"Logotipo oficial do Banco SOL",
    isLittle: true,

  },
  {
    id:5,
    img: "/assets/brands/logo-apd.svg",
    alt:"Logotipo oficial da APD",
    isLittle: true,
  }
]
const HeadlineSection = () => {

  return (
    <section
      className={"bg-black pt-[140px] mx-auto pb-4 w-full flex justify-center items-center flex-col lg:px-8 px-6"}
    >
      <div className="w-full flex max-w-[1216px] gap-10 justify-between items-center flex-col lg:flex-row">
        <div className="text-white flex gap-6  minMobile:max-w-[600px] lg:max-w-[520px] w-full flex-col minMobile:justify-center  minMobile:items-center lg:items-start minMobile:text-center lg:text-start">
          <span className="text-[#25A8FF] text-base xl:text-lg font-bold">Proteja Seu Negócio com Segurança de Alto Nível</span>
          <h1 className="font-bold lg:text-5xl md:text-4xl text-[32px] leading-[120%]"><span className="text-[#cacaca]">Defenda seus dados e operações com</span> nossa expertise.</h1>
          <p className="lg:text-lg text-base font-normal leading-[150%]  text-opacity-70 text-white">Soluções de cibersegurança para empresas que priorizam a segurança dos seus dados e a confiança dos seus clientes.</p>
          <Link className="md:w-[300px] max-w-full text-center text-lg font-medium text-white bg-[#25A8FF] transition-colors duration-300 border border-opacity-20 border-[#25A8FF] px-6 py-4 rounded-full" href="/contato">
            Solicitar Serviços
          </Link>
        </div>
        <div className="max-w-[346px] lg:max-w-[446px] ">
          <Image width={500} height={500} alt="Headline" src={"/assets/images/headline-image.png"}/>
        </div>
      </div>
      <div className="w-full max-w-[1216px] flex gap-4 flex-col m pt-[56px]">
        <h3 className="text-white">CONFIADO PELOS MELHORES</h3>
        <div className="flex justify-between flex-row flex-wrap">
          {
            BRANDS.map(({alt,id,img, isLittle})=>(
              <Image width={200} height={100} className={!isLittle ? ("max-w-[120px]"): "max-w-[180px]"} alt={alt} src={img} key={id}/>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default HeadlineSection;
