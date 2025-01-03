"use client"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

interface depoimentType {
    name: string
    depoiment: string
    role: string
    image: string
}

const DEPOIMENTS = [
    {
        image: "/assets/images/hacker-server.jpg",
        name: "João Pedro",
        role: "CEO, Empresa X",
        depoiment: "Serviço excelente, recomendo fortemente!",
    },
    {
        image: "/assets/images/hacker-server.jpg",
        name: "Maria Silva",
        role: "CTO, Empresa Y",
        depoiment: "Equipe muito atenciosa e eficiente.",
    },
    {
        image: "/assets/images/hacker-server.jpg",
        name: "Carlos Santos",
        role: "Gerente, Empresa Z",
        depoiment: "A CyberSecur é uma empresa parceira da nossa distribuição, que tem demonstrado compromentimento e empenho nas suas funções de empresa de consultoria de Segurança e TI.Como parceiros de negócios temos...",
    },
];


const DepoimentSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef<HTMLDivElement | null>(null);
    const startX = useRef(0);
    const endX = useRef(0);
    const slideLength = DEPOIMENTS.length;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slideLength);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slideLength - 1 : prev - 1));
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleTouchStart = (e: React.TouchEvent) => {
        startX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        endX.current = e.changedTouches[0].clientX;
        handleSwipe();
    };

    const handleSwipe = () => {
        const distance = startX.current - endX.current;
        if (distance > 50) {
            nextSlide(); 
        } else if (distance < -50) {
            prevSlide();
        }
    };

    return (
        <div
            className="w-full bg-[#222b6b] py-14 rounded-lg relative max-w-[90%] overflow-hidden"
            ref={slideRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {/* <Image
                className="absolute top-[-3%] scale-150 left-[20%] z-50"
                src="/assets/icons/aspa.svg"
                width={24}
                height={24}
                alt="Ícone de aspa"
            /> */}
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {DEPOIMENTS.map((slide, index) => (
                    <div
                        className="min-w-full flex items-center justify-center flex-col gap-8"
                        key={index}
                    >
                        <div className="w-fit flex items-center flex-col gap-1">
                            <Image
                                src={slide.image}
                                className="max-w-[96px] rounded-full bg-black max-h-[96px] object-cover"
                                width={96}
                                height={96}
                                alt={slide.name}
                            />
                            <h2 className="text-[#0098FD] font-semibold text-[14px]">
                                {slide.name}
                            </h2>
                            <span className="text-[#fff] text-[14px]">{slide.role}</span>
                        </div>
                        <div className="flex flex-col gap-4 justify-center max-w-[70%] items-center w-full text-center">
                            <p className="text-[#A4B1CD] leading-[150%]">{slide.depoiment}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex gap-2 justify-center mt-6">
                {DEPOIMENTS.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full cursor-pointer ${currentSlide === index ? "bg-blue-500" : "bg-gray-500"
                            } hover:bg-blue-300`}
                    />
                ))}
            </div>
        </div>
    );
};

export default DepoimentSlider