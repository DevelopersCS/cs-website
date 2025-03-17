"use client";

import { useCookieBanner } from "@/providers/CookieContext";
import { Cookie } from "@phosphor-icons/react";

export default function CookieBanner({ show = true }: { show?: boolean }) {
    const { showCookieBanner, setShowCookieBanner } = useCookieBanner();

    const handleAccept = () => {
        localStorage.setItem("cookieConsent", "accepted");
        setShowCookieBanner(false);
        window.location.reload();
        reloadIframes();

    };

    const handleReject = () => {
        localStorage.setItem("cookieConsent", "rejected");
        setShowCookieBanner(false);
        window.location.reload();
        reloadIframes();
    };

    const reloadIframes = () => {
        const iframes = document.querySelectorAll("iframe");
        iframes.forEach((iframe) => {
            iframe.src = iframe.src;
        });
    };

    if (!showCookieBanner) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-slate-950 text-white p-4 flex justify-between items-center z-50 min-h-44 border-0 border-t-2 border-slate-800 px-6 py-10">
            <div className="max-w-[1216px] w-full h-full mx-auto flex justify-between items-center gap-4 flex-col lg:flex-row">
                <div className="flex flex-col lg:flex-row h-full gap-6 w-full">
                    <div className="flex flex-row-reverse w-full justify-end items-center max-w-fit">
                        <h2 className="text-xl font-bold">
                            Política de <br className="lg:block hidden" /> Cookies
                        </h2>
                        <Cookie size={40} />
                    </div>
                    <p className="font-normal text-sm leading-[130%] text-opacity-20">
                        Utilizamos cookies para melhorar a sua experiência no nosso site. <br />
                        Ao continuar a navegar, você concorda com a nossa política de cookies.
                    </p>
                </div>
                <div className="flex gap-2 lg:flex-col lg:max-w-36 w-full flex-row-reverse">
                    <button
                        onClick={handleAccept}
                        className="bg-[#25A8FF] justify-center items-center px-4 py-2 rounded w-full flex"
                    >
                        Aceitar
                    </button>
                    <button
                        onClick={handleReject}
                        className="text-white border border-[#25A8FF] justify-center items-center px-4 py-2 rounded w-full flex"
                    >
                        Recusar
                    </button>
                </div>
            </div>
        </div>
    );
}
