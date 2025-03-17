"use client";

import { createContext, useContext, useState, useEffect } from "react";

type CookieContextType = {
    showCookieBanner: boolean;
    setShowCookieBanner: (value: boolean) => void;
};

const CookieContext = createContext<CookieContextType | undefined>(undefined);

export function CookieProvider({ children }: { children: React.ReactNode }) {
    const [showCookieBanner, setShowCookieBanner] = useState(true);

    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");
        if (consent) {
            setShowCookieBanner(false);
        }
    }, []);

    return (
        <CookieContext.Provider value={{ showCookieBanner, setShowCookieBanner }}>
            {children}
        </CookieContext.Provider>
    );
}

export function useCookieBanner() {
    const context = useContext(CookieContext);
    if (!context) {
        throw new Error("useCookieBanner must be used within a CookieProvider");
    }
    return context;
}
