import Image from "next/image";
import Link from "next/link";

const HeadlineServiceSection = () => {

    return (
        <section
            className={"dark:bg-[#06070A] dark:text-[#A4B1CD] w-full bg-black relative pt-[140px] h-full max-h-[700px] mx-auto pb-4 flex justify-center items-center flex-col"}
        >
            <div className="text-white z-10 max-w-[900px] max-h-[700px] flex gap-6 text-center w-full flex-col h-full absolute top-0 items-center justify-center">
                <h1 className="font-bold text-white text-center lg:text-5xl md:text-4xl text-[32px] leading-[120%]">A Proteção que Sua Empresa Precisa para Enfrentar o Mundo Digital</h1>
                <p className="lg:text-lg text-center text-base font-normal leading-[150%] text-white text-opacity-70">Soluções em segurança da informação e conformidade com ISO/IEC 27001, <br /> personalizadas para sua organização</p>
                <div className="h-[70px] flex flex-col md:flex-row gap-6 w-full items-center justify-center">
                    <Link className="md:w-[300px] flex justify-center items-center h-full max-w-full text-center font-medium text-white bg-[#25A8FF] transition-colors duration-300 border border-opacity-20 border-[#25A8FF] px-6 py-4 rounded-lg" href="/contato">
                        Conheça Nossos Serviços
                    </Link>
                    <Link className="md:w-[300px] flex justify-center items-center h-full max-w-full text-center font-medium text-white transition-colors duration-300 border border-opacity-20 border-white px-6 py-4 rounded-lg" href="/contato">
                        Fale com um Especialista
                    </Link>
                </div>
            </div>
            <div className="w-full aspect-video max-h-[580px] mx-auto top-0 overflow-hidden">
                <video
                    muted
                    autoPlay
                    className="absolute object-fill top-0 left-0 w-full h-full brightness-[.3]"
                    src="/assets/videos/hacker.mp4"
                />
            </div>
        </section>
    );
};

export default HeadlineServiceSection;
