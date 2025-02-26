
import { Inter } from 'next/font/google'
import "../../../globals.css";
import { ThemeProvider } from '@/app/context/ThemeContext';
import Header from '@/app/components/header';
import { Footer } from '@/app/components/footer';
import HeaderBlog from '../../../components/blog/header';
import ADS from '@/app/components/blog/ads';
const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {



    return (
        <>
            <ThemeProvider>
                <main className="relative bg-[#020304]">
                    <HeaderBlog />
                    <ADS />
                    <div className="flex flex-col pb-20 pt-[130px] relative min-h-screen">
                        {children}
                        {/* <Footer /> */}
                    </div>
                </main>
            </ThemeProvider>
        </>
    );
}
