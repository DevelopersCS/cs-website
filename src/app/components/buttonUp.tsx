"use client";
import Image from "next/image";
import React, { useCallback } from "react";

const ButtonUp: React.FC = () => {
    const scrollToTop = useCallback(() => {
        if (window.scrollY > 0) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, []);

    return (
        <button
            className="fixed bottom-4 right-4 z-50 bg-[#25A8FF] text-white p-4 rounded-lg shadow-lg"
            onClick={scrollToTop}
        >
            <Image
                src="/assets/icons/up-arrow.svg"
                alt="Botão para subir"
                width={24}
                height={24}
            />
        </button>
    );
};

export default ButtonUp;
