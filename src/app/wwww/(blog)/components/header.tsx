"use client"
import { ThemeContext } from "@/app/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

export default function HeaderBlog(){
    const themeContext = useContext(ThemeContext);

    return (
        <header className="bg-[#02090e] flex justify-center items-center max-h-[96px] h-full fixed left-0 right-0 z-50">
            <div className="flex max-w-[1216px] w-full mx-auto justify-between items-center">
                <div className="flex-shrink-0">
                    <Link className="dark:text-[#A4B1CD] text-black text-opacity-80  dark:hover:text-white hover:text-blue-500" href="/">
                        <Image className='max-w-[70%] max-h-16' src={"/assets/cyber-blog-logo.svg"} width={200} height={200} alt='Logo CyberSecur 1' />
                    </Link>
                    {/* <h1 className="text-xl font-semibold">CyberSecur</h1> */}
                </div>
                <div className="max-w-[400px] w-full h-10 ">
                    <input type="search" placeholder="Pesquise no blog" className="h-full w-full max-h-14 bg-[#051621] text-white px-4 py-6 rounded-md" />
                </div>
                <div className="">
                    <Link href={"/"} className="underline">Voltar a Home</Link>
                </div>
            </div>
        </header>
    )
}