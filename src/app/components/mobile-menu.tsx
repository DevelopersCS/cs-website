import { Moon, Sun } from "@phosphor-icons/react"
import { motion } from "motion/react"
import Link from "next/link"
import { Link as ReactScrollLink } from 'react-scroll'

type IMenu = {
    id: number,
    content: string,
    target: string
}


interface MenuMobileTypes {
    isOpen: boolean
    isDarkMode: boolean
    toggleTheme: any
}


const MENU: IMenu[] = [
    {
        id: 1,
        content: 'Página Inicial',
        target: 'home'
    },
    {
        id: 2,
        content: 'Serviços',
        target: 'services'
    },
    {
        id: 3,
        content: 'Notícias e Artigos',
        target: 'news'
    },
    {
        id: 4,
        content: 'Contacte-nos',
        target: 'contacts'
    }, {
        id: 5,
        content: 'Cybersecur',
        target: 'about'
    },
]


const MenuMobile = ({ isOpen = false, isDarkMode, toggleTheme }: MenuMobileTypes) => {
    return (
        <div className={`dark:bg-black bg-white duration-300 lg:hidden absolute left-0 top-[78px] flex gap-8 flex-col transition-all h-dvh overflow-x-scroll py-8 ${isOpen ? 'w-full px-6 pointer-events-auto z-50' : 'w-0 px-0 pointer-events-none z-[-1]'}`}>
            <nav className='flex flex-col gap-4 lg:hidden'>
                {MENU.map(({ content, id, target }) => (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: id / 4 + 0.2 }}
                        key={id}
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
                            className='dark:text-white text-black font-medium text-base cursor-pointer duration-150 hover:text-[#d0d0d0e8] uppercase'
                        >
                            {content}
                        </Link>
                    </motion.div>
                ))}
            </nav>
            <div className="flex flex-col gap-4 w-full">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 5 / 4 + 0.2 }}
                    className='w-full  flex justify-center hover:bg-[#5fbfff] bg-[#25A8FF] duration-150'
                >
                    <Link className='text-white text-center cursor-pointer px-6 h-fit py-[14px] w-full' href={'/'}>Saiba Mais</Link>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 6 / 4 + 0.2 }}
                    className='w-full flex justify-center duration-150'
                >
                    <button
                        onClick={toggleTheme}
                        className='w-full bg-[#0f1018] flex justify-center cursor-pointer duration-150 hover:bg-[#1d1f2f] p-3 items-center gap-1 transition-all'
                    >
                        {
                            isDarkMode ? (<Moon />) : <Sun />
                        }
                        {
                            isDarkMode ? "Modo Claro" : "Modo Escuro"
                        }

                    </button>
                </motion.div>
            </div>
        </div>
    )
}

export default MenuMobile