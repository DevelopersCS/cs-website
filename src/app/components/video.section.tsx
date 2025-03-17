"use client";

import { Video } from "@phosphor-icons/react";
import { useState, useEffect } from "react";

export function VideoSection() {
    const videoId = "HPeeat7int0";
    const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`;

    const [cookieConsent, setCookieConsent] = useState("accepted");

    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");
        if (consent) {
            setCookieConsent(consent);
            console.log("cookieConsent", consent);
        }
    }, []);
    if (!(cookieConsent === "accepted")) {
       return(
           <section className="w-full  h-full dark:bg-black py-24 bg-[#F9F9F9] items-center flex flex-col">
               <h1 className="text-4xl dark:text-white text-black font-bold pb-5">CyberSecur Summit</h1>
               <div id="video-container" className="w-full bg-slate-950 lg:rounded-xl max-w-[1216px] aspect-video mx-auto relative overflow-hidden flex items-center justify-center flex-col">
                    <Video className="text-white text-6xl"/>
                    <p>Para assistir ao vídeo, por favor, aceite os cookies.</p>
                   <button onClick={() => setCookieConsent("accepted")} className="bg-[#25A8FF] text-white p-3 rounded-lg mt-5">Aceitar Cookies</button>
               </div>
           </section>
       )
    }

    return (
        <section className="w-full dark:bg-black py-24 bg-[#F9F9F9] items-center flex flex-col">
            <h1 className="text-4xl dark:text-white text-black font-bold pb-5">CyberSecur Summit</h1>
            <div id="video-container" className="w-full max-w-[1216px] aspect-video mx-auto relative overflow-hidden">
                {/* {isVisible && ( */}
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={videoUrl}
                        title="CyberSecur Summit Video"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    ></iframe>
                {/* )} */}
            </div>
        </section>
    );
}