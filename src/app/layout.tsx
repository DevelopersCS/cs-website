import { Inter } from 'next/font/google'
import "./globals.css";
import Header from "./components/header";
import { Footer } from "./components/footer";
import { ThemeProvider } from './context/ThemeContext';
import { Metadata } from 'next';
import CookieBanner from './components/cookie-banner';
import { CookieProvider } from '@/providers/CookieContext';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Cybersecur",
  description: "Protegendo sua presença digital com Cybersecur Angola.",
  keywords: ["Segurança Cibernética", "Proteção Digital", "Cyber Security"],
  authors: [{ name: "Cybersecur Angola" }],
  robots: "index, follow",
  openGraph: {
    title: "Cybersecur",
    description: "Protegendo sua presença digital com Cybersecur Angola.",
    type: "website",
    url: "https://cybersecur.co.ao",
    images: [
      {
        url: "https://cybersecur.co.ao/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cybersecur Angola",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <>
      <ThemeProvider>
        <CookieProvider>
        <html lang="en">
          <body
            className={`${inter.className} antialiased`}
          >
            <main className="bg-[#06070A] relative">
                <Header />
                <div className="flex flex-col pb-20 relative min-h-screen">
                  {children}
                  <Footer />
                </div>
            </main>
              <CookieBanner />
          </body>
        </html>
      </CookieProvider>
      </ThemeProvider>
    </>
  );
}
