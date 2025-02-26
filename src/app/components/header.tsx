"use client"
import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HamburgerButton from './hamburger.button';
import ThemeToggleButton from './ThemeToggleButton';
import { ThemeContext } from '../context/ThemeContext';
import MenuMobile from './mobile-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const themeContext = useContext(ThemeContext);

  const toggleMenu = () => {
    setIsMenuOpen((state)=>!state);
  };

  return (
    <header className="bg-white dark:bg-black dark:bg-opacity-40 bg-opacity-65 backdrop-blur-lg fixed z-50 top-0 left-0 right-0 text-white border-t-[1.5px] border-[#ccc] shadow-sm h-[80px] flex justify-center items-center">
      <div className="max-w-[1216px] mx-auto px-4 w-full">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link className="dark:text-[#A4B1CD] text-black text-opacity-80  dark:hover:text-white hover:text-blue-500" href="/">
              <Image className='max-w-[70%]' src={`${!themeContext?.isDarkMode ? "assets/brands/dark/cybersecur-logo.svg" :"assets/brands/cybersecur-logo.svg"}`} width={200} height={200} alt='Logo CyberSecur' />
            </Link>
            {/* <h1 className="text-xl font-semibold">CyberSecur</h1> */}
          </div>

          {/* Menu para Desktop */}
          <div className="hidden lg:flex gap-4">
            <Link className="dark:text-[#A4B1CD] text-black text-opacity-80  dark:hover:text-white hover:text-blue-500" href="/">
              Página Inicial
            </Link>
            
            <Link className="dark:text-[#A4B1CD] text-black text-opacity-80  dark:hover:text-white hover:text-blue-500" href="/services">
              Serviços
            </Link>
            <Link className="dark:text-[#A4B1CD] text-black text-opacity-80  dark:hover:text-white hover:text-blue-500" href="/about">
              Sobre
            </Link>
            <Link className="dark:text-[#A4B1CD] text-black text-opacity-80  dark:hover:text-white hover:text-blue-500" href="/blog/artigos">
              Notícias e Artigos
            </Link>
            <Link className="dark:text-[#A4B1CD] text-black text-opacity-80  dark:hover:text-white hover:text-blue-500" href="/contact">
              Contacte-nos
            </Link>
            <ThemeToggleButton />

          </div>

          {/* Botão de Menu Hambúrguer (Mobile) */}
          <div className='flex gap-6'>
            <Link className="text-black hover:scale-95 transition-all hover:bg-opacity-80 hover:bg-[#5fbfff] bg-[#25A8FF] duration-300 border border-opacity-20 border-[#25A8FF] px-6 py-2 rounded-lg hidden minMobile:flex" href="/contato">
              Saiba Mais
            </Link>
            <HamburgerButton className={"lg:hidden text-black dark:text-white"} onClick={toggleMenu} isOpen={isMenuOpen}/>
          </div>
        </div>
      </div>

      <MenuMobile isDarkMode={themeContext?.isDarkMode ?? true} toggleTheme={themeContext?.toggleTheme} isOpen={isMenuOpen} />
      {/* Menu Mobile */}
      <div className={`lg:hidden absolute top-[100px] left-0 right-0 h-[500px] ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="space-y-2 py-4 px-4 bg-gray-700 h-full flex flex-col">
            <Link className="dark:text-[#A4B1CD] text-black text-opacity-80  dark:hover:text-white hover:text-blue-500" href="/">
              Página Inicial
            </Link>
            <Link className="dark:text-[#A4B1CD] text-black text-opacity-80  dark:hover:text-white hover:text-blue-500" href="/sobre">
              CyberSecur
            </Link>
            <Link className="dark:text-[#A4B1CD] text-black text-opacity-80  dark:hover:text-white hover:text-blue-500" href="/servicos">
              Soluções
            </Link>
            <Link className="dark:text-[#A4B1CD] text-black text-opacity-80  dark:hover:text-white hover:text-blue-500" href="/contato">
              Notícias e Artigos
            </Link>
            <Link className="dark:text-[#A4B1CD] text-black text-opacity-80  dark:hover:text-white hover:text-blue-500" href="/contato">
              Contacte-nos
            </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
