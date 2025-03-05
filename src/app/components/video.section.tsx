// "use client";
// import { useRef, useEffect, useState } from "react";

// export function VideoSection() {
//     const videoRef = useRef<HTMLVideoElement>(null);
//     const [isVisible, setIsVisible] = useState(false);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setIsVisible(true);
//                 } else {
//                     setIsVisible(false);
//                 }
//             },
//             { threshold: 0.5 }
//         );

//         if (videoRef.current) {
//             observer.observe(videoRef.current);
//         }

//         return () => {
//             if (videoRef.current) {
//                 observer.unobserve(videoRef.current);
//             }
//         };
//     }, []);

//     useEffect(() => {
//         if (videoRef.current) {
//             if (isVisible) {
//                 videoRef.current.play();
//             } else {
//                 videoRef.current.pause();
//             }
//         }
//     }, [isVisible]);

//     const handleVideoClick = async () => {
//         if (videoRef.current) {
//             // Ativar som e controles
//             videoRef.current.muted = false;
//             videoRef.current.controls = true;

//             // Solicitar tela cheia
//             if (videoRef.current.requestFullscreen) {
//                 await videoRef.current.requestFullscreen();
//             } 

//             // Reproduzir vídeo
//             videoRef.current.play();
//         }
//     };

//     return (
//         <section className="w-full dark:bg-black py-24 bg-[#F9F9F9] items-center flex flex-col">
//             <h1 className="text-4xl dark:text-white text-black font-bold pb-5">CyberSecur Summit</h1>
//             <div className="w-full max-w-[1216px] aspect-video rounded-xl mx-auto relative overflow-hidden">
//                 <video
//                     ref={videoRef}
//                     muted
//                     className="absolute top-0 left-0 w-full h-full rounded-xl object-fill cursor-pointer"
//                     src="/assets/videos/cybersecur.mp4"
//                     onClick={handleVideoClick}
//                 >
//                     <track src="captions_pt.vtt" kind="captions" srcLang="pt" label="portuguese_captions" />
//                 </video>
//             </div>
//         </section>
//     );
// }



"use client";

import { useState, useEffect } from "react";

export function VideoSection() {
    // https://www.youtube.com/embed/HPeeat7int0?si=HIpqLl1edAsE2X-z
    const [isVisible, setIsVisible] = useState(false);
    const videoId = "HPeeat7int0"; // Substitua pelo ID do vídeo do YouTube
    const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );

        const videoContainer = document.getElementById("video-container");
        if (videoContainer) {
            observer.observe(videoContainer);
        }

        return () => {
            if (videoContainer) {
                observer.unobserve(videoContainer);
            }
        };
    }, []);

    return (
        <section className="w-full dark:bg-black py-24 bg-[#F9F9F9] items-center flex flex-col">
            <h1 className="text-4xl dark:text-white text-black font-bold pb-5">CyberSecur Summit</h1>
            <div id="video-container" className="w-full max-w-[1216px] aspect-video rounded-xl mx-auto relative overflow-hidden">
                {isVisible && (
                    <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-xl"
                        src={videoUrl}
                        title="CyberSecur Summit Video"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    ></iframe>
                )}
            </div>
        </section>
    );
}