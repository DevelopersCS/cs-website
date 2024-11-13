"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HamburgerButton from './HamburgerButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((state)=>!state);
  };

  return (
    <header className="bg-black fixed top-0 left-0 right-0 text-white shadow-md h-[100px] flex justify-center items-center">
      <div className="max-w-[1216px] mx-auto px-4 w-full">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image className='max-w-[70%]' src={"assets/brands/cybersecur-logo.svg"} width={200} height={200} alt='Logo CyberSecur' />
            {/* <h1 className="text-xl font-semibold">CyberSecur</h1> */}
          </div>

          {/* Menu para Desktop */}
          <div className="hidden lg:flex gap-4">
            <Link className="text-gray-300 hover:text-white" href="/">
                Página Inicial
            </Link>
            <Link className="text-gray-300 hover:text-white" href="/sobre">
                CyberSecur
            </Link>
            <Link className="text-gray-300 hover:text-white" href="/servicos">
                Soluções
            </Link>
            <Link className="text-gray-300 hover:text-white" href="/contato">
                Notícias e Artigos
            </Link>
            <Link className="text-gray-300 hover:text-white" href="/contato">
                Contacte-nos
            </Link>
          </div>

          {/* Botão de Menu Hambúrguer (Mobile) */}
          <div className='flex gap-6'>
            <Link className="text-white bg-black hover:bg-[#25A8FF] transition-colors duration-300 border border-opacity-20 border-[#25A8FF] px-6 py-4 rounded-full" href="/contato">
                Saiba Mais
            </Link>
            <HamburgerButton className={"lg:hidden"} onClick={toggleMenu} isOpen={isMenuOpen}/>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      <div className={`lg:hidden absolute top-[100px] left-0 right-0 h-[500px] ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="space-y-2 py-4 px-4 bg-gray-700 h-full flex flex-col">
            <Link className="text-gray-300 hover:text-white" href="/">
                Página Inicial
            </Link>
            <Link className="text-gray-300 hover:text-white" href="/sobre">
                CyberSecur
            </Link>
            <Link className="text-gray-300 hover:text-white" href="/servicos">
                Soluções
            </Link>
            <Link className="text-gray-300 hover:text-white" href="/contato">
                Notícias e Artigos
            </Link>
            <Link className="text-gray-300 hover:text-white" href="/contato">
                Contacte-nos
            </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
