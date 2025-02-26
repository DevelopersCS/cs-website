
import { Inter } from 'next/font/google'
import "../globals.css";
import { ThemeProvider } from '@/app/context/ThemeContext';
import Header from '@/app/components/header';
import { Footer } from '@/app/components/footer';
import HeaderBlog from './components/header';
const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {



    return (
        <>
            <ThemeProvider>
                <main className="bg-[#06070A] relative">
                    <HeaderBlog />
                    <div className="flex flex-col pb-20 relative min-h-screen">
                        {children}
                        <Footer />
                    </div>
                </main>
            </ThemeProvider>
        </>
    );
}
