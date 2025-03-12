import Image from "next/image";
import Link from "next/link";

const HeadlineAboutSection = () => {
    return (
        <section
            className="dark:bg-[#06070A] gap-4 px-6 dark:text-[#A4B1CD] h-full w-full bg-white relative py-[140px] pb-[100px] flex justify-center lg:items-center items-start flex-col overflow-hidden"
        >
            <div className="flex flex-col gap-4 items-center">
                <div className="w-full lg:max-w-[596px] flex flex-col gap-4">
                    <h1 className="text-2xl dark:text-white text-black font-bold md:text-4xl lg:text-center">Nossa Empresa</h1>
                    <p className="font-medium text-base dark:text-[#A4B1CD] text-[#5E5E5F] lg:text-center">
                        Com anos de experiência no sector, ajudamos organizações a fortalecer a sua segurança cibernética prevenindo, detectando e respondendo a ameaças
                    </p>
                </div>
                <Image alt="Homem da linha de atendimento com o headphone" className="rounded-lg max-h-[508px]" width={1216} height={508} src={"/assets/images/team-work.jpg"} />
            </div>
            <div className="w-full max-w-[1216px]">
                <div className="flex gap-4 flex-col justify-start items-start">
                    <h1 className="text-2xl md:text-4xl dark:text-white text-black font-bold">Como Trabalhamos com <br /> Nossos Clientes</h1>
                    <Link className="flex justify-center md:w-fit px-12 py-3 items-center text-center font-medium text-black bg-[#25A8FF] transition-colors duration-300 border border-opacity-20 border-[#25A8FF] rounded-lg w-full" href="/fale-connosco">
                        Fale Connosco
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeadlineAboutSection;
