import Link from "next/link";

const HeadlineServiceSection = () => {
    return (
        <section
            className="dark:bg-[#06070A] dark:text-[#A4B1CD] h-full w-full bg-black relative py-[140px] pb-[100px] flex justify-center items-center flex-col overflow-hidden"
        >
            {/* Vídeo de fundo */}
            <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
                <video
                    muted
                    autoPlay
                    loop
                    playsInline
                    tabIndex={-1}
                    className="w-full h-full cursor-none pointer-events-none object-cover brightness-[.3]"
                    src="/assets/videos/hacker.mp4"
                />
            </div>

            {/* Conteúdo por cima do vídeo */}
            <div className="text-white z-10 max-w-[900px] flex gap-6 text-center w-full flex-col items-center justify-center px-6">
                <h1 className="font-bold text-white text-center lg:text-5xl md:text-4xl text-[32px] leading-[120%]">
                    A protecção que a sua empresa precisa para enfrentar o mundo digital
                </h1>
                <p className="lg:text-lg text-center text-base font-normal leading-[150%] text-white text-opacity-70">
                    Soluções em segurança da informação e conformidade com ISO/IEC 27001, <br />
                    personalizadas para sua organização
                </p>
                <div className="min-h-[70px] flex flex-col md:flex-row gap-6 w-full items-center justify-center">
                    <Link
                        className="hover:scale-95 transition-all hover:bg-opacity-80 md:w-[300px] flex justify-center items-center h-full max-w-full text-center font-medium text-black bg-[#25A8FF] duration-300 border border-opacity-20 border-[#25A8FF] px-6 py-4 rounded-lg"
                        href="/fale-connosco"
                    >
                        Fale Connosco
                    </Link>
                    {/* <Link
                        className="md:w-[300px] flex justify-center items-center h-full max-w-full text-center font-medium text-white hover:scale-95 transition-all hover:bg-opacity-80 duration-300 border border-opacity-20 border-white px-6 py-4 rounded-lg"
                        href="/fale-connosco"
                    >
                        Fale Connosco
                    </Link> */}
                </div>
            </div>
        </section>
    );
};

export default HeadlineServiceSection;
