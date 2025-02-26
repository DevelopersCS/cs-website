"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ThemeToggleButton from "../ThemeToggleButton";

export default function HeaderBlog() {
    const [search, setSearch] = useState("");
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (search.trim()) {
            router.push(`/blog/artigos?search=${encodeURIComponent(search)}`);
        }
    };

    return (
        <header className="bg-[#0c0e14] flex justify-center items-center max-h-[96px] h-full fixed left-0 right-0 z-50">
            <div className="flex max-w-[1216px] w-full mx-auto justify-between items-center">
                <div className="flex-shrink-0">
                    <Link className="dark:text-[#A4B1CD] text-black text-opacity-80 dark:hover:text-white hover:text-blue-500" href="/blog/artigos">
                        <Image className='max-w-[70%] max-h-32' src={"/assets/brands/cyber-blog-logo.svg"} width={300} height={220} alt='Logo CyberSecur 1' />
                    </Link>
                </div>
                <form onSubmit={handleSearch} className="max-w-[400px] w-full h-10 flex">
                    <input
                        type="search"
                        placeholder="Pesquise no blog"
                        className="h-full w-full max-h-14 bg-[#020304] text-white px-4 py-6 rounded-md"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </form>
                <div className="flex gap-3">
                    <Link href={"/"} className="underline">Voltar a Home</Link>
                    <ThemeToggleButton />
                </div>
            </div>
            
        </header>
        
    );
}
