import Link from "next/link";

export function SecurityForYourBussinessSection() {
    return (
        <section className="w-full relative mx-auto flex items-center  justify-center xl:p-3 dark:bg-[#06070A]  h-[600px] bg-white">
            <div className="flex relative flex-col md:flex-row max-w-[1216px] justify-between items-end md:px-14 px-5 pb-16 pt-52 w-full bg-cover bg-[10%] bg-no-repeat bg-team h-full xl:rounded-3xl">
                <div className="flex flex-col md:max-w-[432px] z-30 w-full gap-4">
                    <h2 className="text-4xl text-white font-bold">Fortaleça a segurança da sua empresa hoje!</h2>
                    <p className="text-xl text-white">Estamos prontos para proteger o seu negócio contra as ameaças cibernéticas.</p>
                </div>
                <Link href={""} className="bg-[#25A8FF] z-30 px-6 py-4 rounded-[30px] text-white  shadow-xl shadow-[#25A8FF]/30">Solicitar serviço</Link>
                <div className="bg-gradient-to-t from-black/40 to-transparent w-full h-full absolute left-0 bottom-0 xl:rounded-[30px] "></div>
            </div>
        </section>
    );
}



