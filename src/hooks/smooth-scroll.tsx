import { useEffect } from 'react';
import Lenis from 'lenis';

const SmoothScroll = ({ smooth = 0.075 }) => {
    useEffect(() => {
        const lenis = new Lenis({
            smoothWheel: true,
            lerp: smooth
        });

        const raf = (time:number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return null;
};

export default SmoothScroll;