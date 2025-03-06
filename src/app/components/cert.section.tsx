"use client";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

const BRANDS = [
  { id: 1, img: "/assets/brands/logo-bai.svg", dark: "/assets/brands/dark/logo-bai.svg", alt: "Logotipo oficial do Banco BAI" },
  { id: 2, img: "/assets/brands/logo-bpc.svg", dark: "/assets/brands/dark/logo-bpc.svg", alt: "Logotipo oficial do Banco BAI" },
  { id: 3, img: "/assets/brands/logo-sic.svg", dark: "/assets/brands/dark/logo-sic.svg", alt: "Logotipo oficial do SIC" },
  { id: 4, img: "/assets/brands/logo-banco-sol.svg", dark: "/assets/brands/dark/logo-banco-sol.svg", alt: "Logotipo oficial do Banco SOL", isLittle: true },
  { id: 5, img: "/assets/brands/logo-apd.svg", dark: "/assets/brands/dark/logo-apd.svg", alt: "Logotipo oficial da APD", isLittle: true }
];

interface Brand {
  id: number;
  img: string;
  dark: string;
  alt: string;
  isLittle?: boolean;
  isFlare?: boolean;
}

interface BrandsSectionProps {
  title: string;
  className?: string;
  brandsStyle?: string;
  titleStyle?: string;
  brands: Brand[];
}
export function CertsSection({
  title,
  brands,
  className,
  brandsStyle,
  titleStyle,
}: BrandsSectionProps) {
  const { isDarkMode } = useContext(ThemeContext) || {};

  return (
    <section
      className={twMerge(
        "w-full flex flex-col items-center gap-4 pt-[56px] mx-auto",
        className
      )}
    >
      <div className="w-full max-w-[1216px]">
        <span className={twMerge("text-white mix-blend-difference", titleStyle)}>
          {title}
        </span>
        <div className={twMerge("flex w-full", brandsStyle)}>
          <div className="overflow-hidden w-full relative flex items-center justify-start h-[140px] perspective-[1000px]">
            <div className="flex gap-14 absolute transform-style-3d">
              {brands.map(({ alt, id, img, dark, isLittle, isFlare }) => (
                <Image
                  key={id}
                  width={200}
                  height={100}
                  alt={alt}
                  src={isDarkMode ? dark : img}
                  className={twMerge(
                    "transition-transform duration-75 ease-out scale-90",
                    isFlare
                      ? "max-w-[130px]"
                      : isLittle
                        ? "max-w-[180px]"
                        : "max-w-[120px]"
                  )}
                />
              ))}
              {brands.map(({ alt, id, img, dark, isLittle, isFlare }) => (
                <Image
                  key={id}
                  width={200}
                  height={100}
                  alt={alt}
                  src={isDarkMode ? dark : img}
                  className={twMerge(
                    "transition-transform duration-500 ease-out",
                    "transform translate3d(0px, 0px, 50px) scale3d(1,1,1) rotateX(10deg) rotateY(-10deg) rotateZ(0deg)",
                    isFlare
                      ? "max-w-[130px]"
                      : isLittle
                        ? "max-w-[180px]"
                        : "max-w-[120px]"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}