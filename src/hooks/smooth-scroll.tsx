"use client"; // Agora é um Client Component
import { useEffect } from "react";
import Lenis from "lenis";

interface SmoothScrollProps {
    lerp?: number; // 'lerp' é a opção correta no Lenis
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ lerp = 0.075 }) => {
    useEffect(() => {
        const lenis = new Lenis({ lerp });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy(); // Remove o efeito ao desmontar
        };
    }, [lerp]);

    return null;
};

export default SmoothScroll;
