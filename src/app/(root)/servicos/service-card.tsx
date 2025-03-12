
"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {motion} from "framer-motion"
import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";


type ServiceGettingTypes = {
    title?: string,
    title2?: string,
    subTitle?: string, 
    description?: string,
    description2?: string,
    cover?: string,
    toLeft?: boolean,
    items?: {
        id: number,
        Icon: React.ReactElement,
        title: string,
        description: string
    }[],
    tabs?: {
        id: number,
        title: string,
        slides: {
            image: string,
            title: string,
            description: string,
        }[]
    }[]
}


const ServiceGetting = ({ title, description, cover, subTitle, title2, description2, items, tabs, toLeft }: ServiceGettingTypes) => {
    const [activeTab, setActiveTab] = useState(1);
    const [currentSlide, setCurrentSlide] = useState(0);
    const handleTabClick = (tabId: number) => {
        setActiveTab(tabId);
        setCurrentSlide(0);
    };

    const nextSlide = () => {
        const activeTabData = tabs?.find(tab => tab.id === activeTab);
        if (activeTabData) {
            if (currentSlide < activeTabData?.slides.length - 1) {
                setCurrentSlide(currentSlide + 1);
            }
        }
    };

    const prevSlide = () => {

        const activeTabData = tabs?.find(tab => tab.id === activeTab);
        if (activeTabData) {
            if (currentSlide > 0) {
                setCurrentSlide(currentSlide - 1);
            }
        }
    };

    const activeSlides = tabs ? tabs.find(tab => tab.id === activeTab)?.slides : [];
    return (
        <section className="w-full flex items-center justify-center py-12 bg-white dark:bg-[#06070A]">
            <div className="max-w-[1216px] w-full gap-8 mx-auto flex items-center flex-col justify-center">
                <div className="flex flex-col gap-2 lg:max-w-[640px] w-full max-w-[80%] text-center py-4">
                    <div className="flex flex-col">
                        <span className="text-[#4FC0FF] text-base font-bold">{subTitle}</span>
                        <h2 className="text-[32px] dark:text-white text-black font-bold">{title}</h2>
                    </div>
                    <p className="dark:text-[#A4B1CD] text-[#5E5E5F] font-medium">{description}</p>
                </div>
                <div className={`flex px-8 justify-between  gap-14 lg:gap-2 items-center xl:items-start flex-col-reverse lg:flex-row`}>
                    <div className={`flex flex-col gap-8 xl:w-full p-0 xl:p-0 w-full ${toLeft ? 'order-[1] items' : 'order-[-1]'}`}>
                        <div className={`flex  flex-col gap-6 w-full ${toLeft ? 'xl:pl-10':''}`}>
                            {
                                items?.map(({Icon,title,description, id}, index)=>(
                                    <motion.div 
                                        className="flex gap-4 group xl:max-w-[80%] justify-between max-w-full w-full" 
                                        key={id}
                                        initial={{ translateY: 10, opacity: 0, }}
                                        whileInView={{ translateY: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            translateY: { duration: 0.1, delay: 0.5, ease: "easeOut" },
                                            opacity: { duration: 1.5, delay: 0.5 * index, ease: "easeInOut" }
                                        }}
                                    >
                                        <div className="flex w-full gap-2 flex-col lg:flex-row">
                                            <div className="bg-[#4FC0FF] flex items-center justify-center p-2 rounded max-w-12 max-h-12 w-full h-full border-none">
                                                {Icon}
                                            </div>
                                            <div className="flex gap-1 flex-col w-full">
                                                <h3 className="font-bold  w-full dark:text-white text-black text-lg">{title}</h3>
                                                <p className="dark:text-[#A4B1CD]  w-full text-[#5E5E5F] font-medium text-base leading-[150%]">{description}</p>
                                            </div>
                                        </div>
                                        <div className="hidden group-hover:translate-x-3 group-hover:opacity-40 items-center justify-center w-8 h-8">
                                            <CaretRight color="#A4B1CD" weight="bold" size={24} />
                                        </div>
                                    </motion.div>
                                ))
                            }
                        {/* <Link className="flex justify-center md:w-fit px-12 py-3 items-center text-center font-medium text-black bg-[#25A8FF] transition-colors duration-300 border border-opacity-20 border-[#25A8FF] rounded-lg w-full" href="/contato">
                            Saiba Mais
                        </Link> */}
                       </div>
                    </div>
                    {
                        cover && (
                            <div className={`${toLeft ? 'order-[-1]' : 'order-[1]'} h-full w-full xl:w-full`}>
                                <Image 
                                    quality={100} 
                                    src={cover} 
                                    width={500} 
                                    height={320} 
                                    objectFit=" "
                                    priority
                                    className="w-full max-h-[320px] aspect-video! max-w-full xl:max-h-[320px] !object-cover" 
                                    alt="Mulher com tablet na mão" 
                                />
                            </div>
                        )
                    }
                </div>

                <div className="flex flex-col gap-2 max-w-[1216px] w-full text-center py-16">
                    <div className="flex flex-col">
                        <h4 className="lg:text-3xl text-2xl dark:text-white text-black font-bold">{title2}</h4>
                    </div>
                    <p className="text-[#A4B1CD] font-medium text-sm lg:text-base">{description2}</p>
                    {
                        tabs && (
                            <div className="flex justify-center items-center max-w-full px-4 overflow-scroll">
                                <ul className="flex gap-4 w-full p-4">
                                    {tabs.map((tab) => (
                                        <li key={tab.id}>
                                            <button
                                                aria-label="Button"
                                                onClick={() => handleTabClick(tab.id)}
                                                className={`flex justify-center w-fit px-6 py-3 items-center text-center font-medium text-sm transition-colors duration-300 rounded-lg ${activeTab === tab.id ? 'bg-[#25A8FF] text-black' : 'bg-[#0E141D] text-white'}`}>
                                                <p className="whitespace-nowrap"> {tab.title}</p>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    }
                    
                    <div className="flex justify-between items-center pt-12 max-w-[90%] relative mx-auto xl:gap-8">
                        <div className="flex gap-2 items-end justify-end  absolute right-0 top-0">
                            <button
                                // disabled={currentSlide === 0}
                                aria-label="Button"
                                onClick={prevSlide}
                                className={`flex justify-center w-fit px-4 py-3 items-center text-center font-medium text-black transition-colors duration-300 ease-custom border border-opacity-20 rounded-lg ${true ? 'bg-[#25A8FF] border-[#25A8FF]' : 'bg-[#0E141D] border-[#0E141D]'}`}
                            >
                                <CaretLeft size={18} weight={"bold"} />
                            </button>


                            <button
                                // disabled={currentSlide > tabs[activeTab]?.slides.length - 1}
                                aria-label="Button"
                                onClick={nextSlide}
                                className={`flex justify-center w-fit px-4 py-3 items-center text-center font-medium text-black transition-colors duration-150 ease-custom border border-opacity-20  rounded-lg ${true ? 'bg-[#25A8FF] border-[#25A8FF]' : 'bg-[#0E141D] border-[#0E141D]'}`}
                            >
                                <CaretRight size={18} weight={"bold"} />
                            </button>


                        </div>
                        <div className="overflow-hidden w-full relative xl:max-w-[90%] pt-6">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {activeSlides?.map((slide, index) => (
                                    <div className="min-w-full flex items-center flex-col md:flex-row gap-8" key={index}>
                                        <div className="w-full">
                                            <Image
                                                src={slide.image}
                                                className="max-w-[492px] max-h-[295px] w-full h-full object-cover"
                                                width={935.86}
                                                height={580}
                                                priority
                                                
                                                alt={slide.title}
                                            />
                                        </div>
                                        <div className="flex flex-col gap-4 justify-start items-start w-full text-start">
                                            <h2 className="dark:text-white text-black text-[32px]">{slide.title}</h2>
                                            <p className="font-medium dark:text-[#A4B1CD] text-[#5E5E5F] leading-[150%]">{slide.description}</p>
                                            {/* <button aria-label="Button" className="flex justify-center w-fit px-6 py-3 items-center text-center font-medium text-white bg-[#0E141D] transition-colors duration-300 rounded-lg">
                                                Saiba Mais
                                            </button> */}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceGetting;

