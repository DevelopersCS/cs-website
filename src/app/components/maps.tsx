'use client'

import { MapPinSimple } from "@phosphor-icons/react";
import { GoogleMap } from "@react-google-maps/api";
import { useEffect, useState } from "react";

const defaultMapContainerStyle = {
    width: '100%',
    height: '100vh',
    borderRadius: '15px 0px 0px 15px',
};

const defaultMapCenter = {
    lat: -8.9519151,
    lng: 13.1937308
}

const defaultMapZoom = 18

const defaultMapOptions = {
    zoomControl: true,
    tilt: 0,
    gestureHandling: 'auto',
    mapTypeId: 'satellite',
};

const MapComponent = () => {
    const [cookieConsent, setCookieConsent] = useState("accepted");
    
    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");
        if (consent) {
            setCookieConsent(consent);
        }
    }, []);
    if (cookieConsent === "accepted") {
        return(
            <section className="w-full  h-full dark:bg-black py-24 bg-[#F9F9F9] items-center flex flex-col">
                <div id="video-container" className="w-full bg-slate-700 lg:rounded-xl max-w-[1216px] aspect-video mx-auto relative overflow-hidden flex items-center justify-center flex-col">
                    <MapPinSimple className="text-white text-6xl"/>
                    <p>Para ver o mapa, por favor, aceite os cookies.</p>
                    <button onClick={() => setCookieConsent("accepted")} className="bg-[#25A8FF] text-white p-3 rounded-lg mt-5">Aceitar Cookies</button>
                </div>
            </section>
        )
    }
    return (
        <div className="w-full">
            <GoogleMap
                mapContainerStyle={defaultMapContainerStyle}
                center={defaultMapCenter}
                zoom={defaultMapZoom}
                options={defaultMapOptions}
            >
            </GoogleMap>
        </div>
    )
};

export { MapComponent };