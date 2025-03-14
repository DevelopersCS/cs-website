"use client"
import { useContext, useState } from 'react';
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
    <header className="bg-black fixed z-50 top-0 left-0 right-0 text-white border-t-[1.5px] border-[#ccc] shadow-sm h-[80px] flex justify-center items-center">
      <div className="max-w-[1216px] mx-auto px-4 w-full">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link className="text-[#A4B1CD] text-opacity-80 hover:text-blue-500" href="/">
              <Image className='max-w-[70%]' src={"assets/brands/cybersecur-logo.svg"} width={200} height={200} alt='Logo CyberSecur' />
            </Link>
            {/* <h1 className="text-xl font-semibold">CyberSecur</h1> */}
          </div>

          {/* Menu para Desktop */}
          <div className="hidden lg:flex gap-4 items-center">
            <Link className="text-[#A4B1CD] text-opacity-80 hover:text-white" href="/">
              Página Inicial
            </Link>
            
            <Link className="text-[#A4B1CD] text-opacity-80  hover:text-white" href="/servicos">
              Serviços
            </Link>
            <Link className="text-[#A4B1CD] text-opacity-80  hover:text-white" href="/sobre">
              Sobre a Cybersecur
            </Link>
            {/* <Link className="text-[#A4B1CD] text-opacity-80  hover:text-white" href="/">
              Notícias e Artigos
            </Link> */}
            {/* <Link className="text-[#A4B1CD] text-opacity-80  hover:text-white" href="/fale-connosco">
              Fale Connosco
            </Link> */}
            <ThemeToggleButton />

          </div>

          {/* Botão de Menu Hambúrguer (Mobile) */}
          <div className='flex gap-6'>
            <Link className="text-black hover:scale-95 transition-all hover:bg-opacity-80 hover:bg-[#5fbfff] bg-[#25A8FF] duration-300 border border-opacity-20 border-[#25A8FF] px-6 py-2 rounded-lg hidden lg:flex" href="/fale-connosco">
              Fale Connosco
            </Link>
            <HamburgerButton className={"lg:hidden text-black dark:text-white"} onClick={toggleMenu} isOpen={isMenuOpen}/>
          </div>
        </div>
      </div>

      <MenuMobile 
        isDarkMode={themeContext?.isDarkMode ?? true} 
        toggleTheme={themeContext?.toggleTheme} 
        isOpen={isMenuOpen} 
        toggleMenu={() => setIsMenuOpen(false)}
      />
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
            <Link className="dark:text-[#A4B1CD] text-black text-opacity-80  dark:hover:text-white hover:text-blue-500" href="/">
              Notícias e Artigos
            </Link>
            <Link className="dark:text-[#A4B1CD] text-black text-opacity-80  dark:hover:text-white hover:text-blue-500" href="/fale-connosco">
              Fale Connosco
            </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
