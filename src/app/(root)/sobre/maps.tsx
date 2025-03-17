"use client"
import { MapPinSimple } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

const MapsSection = () => {
    const [cookieConsent, setCookieConsent] = useState("rejected");

    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");
        if (consent) {
            setCookieConsent(consent);
            console.log("cookieConsent", consent);
        }
    }, []);
    if (cookieConsent === "rejected") {
        return (
            <section className="w-full  h-full dark:bg-black py-24 bg-[#F9F9F9] items-center flex flex-col">
                <div id="video-container" className="w-full bg-slate-700 lg:rounded-xl max-w-[1216px] aspect-video mx-auto relative overflow-hidden flex items-center justify-center flex-col">
                    <MapPinSimple className="text-white text-6xl" />
                    <p>Para ver o mapa, por favor, aceite os cookies.</p>
                    <button onClick={() => setCookieConsent("accepted")} className="bg-[#25A8FF] text-white p-3 rounded-lg mt-5">Aceitar Cookies</button>
                </div>
            </section>
        )
    }
    return (
        <section
            className="dark:bg-[#06070A] bg-white px-6 dark:text-[#A4B1CD] h-full w-full relative py-[140px] pb-[100px] flex justify-center lg:items-center items-start flex-col overflow-hidden"
        >
            <div className="flex flex-col gap-4 items-center w-full">
                <div className="w-full lg:max-w-[596px] flex flex-col gap-4">
                    <h1 className="font-bold xl:text-4xl text-2xl dark:text-white text-black lg:text-center">Onde Estamos</h1>
                    {/* <p className="font-medium text-[#5E5E5F] text-base dark:text-[#A4B1CD] lg:text-center">
                        Veja nossa localização no mapa abaixo e venha tomar um café para falarmos sobre segurança digital.
                    </p> */}
                </div>
                <div className="w-full max-w-[1000px] bg-orange-300 mt-6 rounded-lg">
                    {/* <MapProvider>
                        <MapComponent />
                    </MapProvider> */}
                    <iframe
                        className="rounded-lg"
                        title="google map"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15764.877822767583!2d13.1937308!3d-8.9519151!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f37a01538079%3A0x24ab3ab040650ef2!2sCyberSecur!5e0!3m2!1spt-PT!2sao!4v1741789089340!5m2!1spt-PT!2sao"
                        width="100%"
                        height="500"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default MapsSection;
