"use client"; // Agora é um Client Component

import { useEffect } from "react";
import Lenis from "lenis";

const SmoothScroll = ({ smooth = 0.075 }) => {
    useEffect(() => {
        const lenis = new Lenis({ smooth });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy(); // Remove o efeito ao desmontar
        };
    }, [smooth]);

    return null;
};

export default SmoothScroll;
