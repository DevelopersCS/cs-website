import Image from "next/image";

const HeadlineContactusSection = () => {
    return (
        <section
            className="dark:bg-[#06070A] px-6 dark:text-[#A4B1CD] h-full w-full bg-white relative py-[140px] pb-[100px] flex justify-center lg:items-center items-start flex-col overflow-hidden"
        >
            <div className="flex flex-col gap-4 items-center">
                <div className="w-full lg:max-w-[596px] flex flex-col gap-4">
                    <h1 className="font-bold xl:text-5xl text-2xl text-black dark:text-[#fff] lg:text-center">Fale connosco</h1>
                    <p className="font-medium text-base text-black text-opacity-75 dark:text-[#DDE2EE] lg:text-center">
                        Tem dúvidas sobre segurança digital? Gostaria de saber como podemos ajudá-lo a proteger o seu negócio contra ameaças cibernéticas?
                    </p>
                </div>
                <Image priority alt="Homem da linha de atendimento com o headphone" className="rounded-lg" width={1216} height={508} src={"/assets/images/operador.jpg"} />
            </div>
        </section>
    );
};

export default HeadlineContactusSection;
