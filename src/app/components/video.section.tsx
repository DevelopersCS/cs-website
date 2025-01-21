"use client";
import { useRef, useEffect, useState } from "react";

export function VideoSection() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            { threshold: 0.5 }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (videoRef.current) {
            if (isVisible) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    }, [isVisible]);

    const handleVideoClick = async () => {
        if (videoRef.current) {
            // Ativar som e controles
            videoRef.current.muted = false;
            videoRef.current.controls = true;

            // Solicitar tela cheia
            if (videoRef.current.requestFullscreen) {
                await videoRef.current.requestFullscreen();
            } 

            // Reproduzir vídeo
            videoRef.current.play();
        }
    };

    return (
        <section className="w-full dark:bg-black py-24 bg-[#F9F9F9] items-center flex">
            <div className="w-full max-w-[1216px] aspect-video rounded-xl mx-auto relative overflow-hidden">
                <video
                    ref={videoRef}
                    muted
                    className="absolute top-0 left-0 w-full h-full rounded-xl object-fill cursor-pointer"
                    src="/assets/videos/cybersecur.mp4"
                    onClick={handleVideoClick}
                >
                    <track src="captions_pt.vtt" kind="captions" srcLang="pt" label="portuguese_captions" />
                </video>
            </div>
        </section>
    );
}
