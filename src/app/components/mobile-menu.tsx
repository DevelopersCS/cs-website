import { Moon, Sun } from "@phosphor-icons/react"
import Link from "next/link"

type IMenu = {
    id: number,
    content: string,
    target: string
}


interface MenuMobileTypes {
    isOpen: boolean
    isDarkMode: boolean
    toggleTheme: any
    toggleMenu: any
}


const MENU: IMenu[] = [
    {
        id: 1,
        content: 'Página Inicial',
        target: '/'
    },
    {
        id: 2,
        content: 'Serviços',
        target: 'servicos'
    },
    {
        id: 3,
        content: 'Notícias e Artigos',
        target: '/'
    },
    {
        id: 4,
        content: 'Fale Connosco',
        target: '/fale-connosco'
    }, {
        id: 5,
        content: 'Sobre a Cybersecur',
        target: '/'
    },
]


const MenuMobile = ({ isOpen = false, isDarkMode, toggleTheme, toggleMenu }: MenuMobileTypes) => {
    return (
        <div className={`dark:bg-black bg-white duration-700 lg:hidden absolute left-0 top-[78px] flex gap-8 flex-col transition-all h-dvh overflow-x-scroll py-8 ${isOpen ? 'w-full px-6 pointer-events-auto z-50' : 'w-0 px-0 pointer-events-none z-[-1]'}`}>
            <nav className={`flex flex-col gap-4 lg:hidden duration-1000 delay-75 ${isOpen ? "opacity-100" :"opacity-0"}`}>
                {MENU.map(({ content, id, target }) => (
                    <div
                        // initial={{ opacity: 0, y: 10 }}
                        // animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        // viewport={{ once: true }}
                        // transition={{ duration: 0.4, delay: id / 4 + 0.2 }}
                        key={id}
                        className=""
                    >
                        {/* <ReactScrollLink
                            to={target}
                            spy={true}
                            smooth={true}
                            duration={2000}
                            // onClick={() => { setMenuMobileState(false), target.includes('https://') && openAnotherTab(target) }}
                            className='dark:text-white text-black font-medium text-base cursor-pointer duration-150 hover:text-[#d0d0d0e8] uppercase'
                        >
                            {content}
                        </ReactScrollLink> */}
                        <Link
                            href={target}
                            onClick={toggleMenu}
                            className='dark:text-white py-4 px-2 block w-full h-full text-black font-medium text-base cursor-pointer duration-150 hover:text-[#d0d0d0e8] uppercase'
                        >
                            {content}
                        </Link>
                    </div>
                ))}
            </nav>
            <div className={`flex flex-col gap-4 w-full duration-1000 delay-75 ${isOpen ? " opacity-100" : "opacity-0"}`}>
                {/* <div
                    // initial={{ opacity: 0 }}
                    // animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
                    // viewport={{ once: true }}
                    // transition={{ duration: 0.4, delay: 5 / 4 + 0.2 }}
                    className='w-full  flex justify-center hover:bg-[#5fbfff] bg-[#25A8FF]'
                >
                    <Link className='text-white text-center cursor-pointer px-6 h-fit py-[14px] w-full' href={'/'}>Saiba Mais</Link>
                </div> */}
                <div
                    // initial={{ opacity: 0 }}
                    // animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
                    // viewport={{ once: true }}
                    // transition={{ duration: 0.4, delay: 6 / 4 + 0.2 }}
                    className='w-full flex justify-center'
                >
                    <button
                        onClick={toggleTheme}
                        className='w-full bg-[#0f1018] flex justify-center cursor-pointer duration-150 hover:bg-[#1d1f2f] p-3 items-center gap-1'
                    >
                        {
                            isDarkMode ? (<Moon />) : <Sun />
                        }
                        {
                            isDarkMode ? "Modo Claro" : "Modo Escuro"
                        }

                    </button>
                </div>
            </div>
        </div>
    )
}

export default MenuMobile