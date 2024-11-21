import Image from "next/image";
import { twMerge } from "tailwind-merge";

const BRANDS = [
    {
      id:1,
      img: "/assets/brands/logo-bai.svg",
      alt:"Logotipo oficial do Banco BAI",
    },
    {
      id:2,
      img: "/assets/brands/logo-bpc.svg",
      alt:"Logotipo oficial do Banco BAI",
    },
    {
      id:3,
      img: "/assets/brands/logo-sic.svg",
      alt:"Logotipo oficial do SIC",
    },
    {
      id:4,
      img: "/assets/brands/logo-banco-sol.svg",
      alt:"Logotipo oficial do Banco SOL",
      isLittle: true,
  
    },
    {
      id:5,
      img: "/assets/brands/logo-apd.svg",
      alt:"Logotipo oficial da APD",
      isLittle: true,
    }
]

type BrandsSectionType = {
    title: string,
    className?: string,
    brandsStyle?: string,
    titleStyle?: string,
    brands: {
        id: number
        img: string
        alt: string
        isLittle?: boolean
        isFlare?: boolean
    }[]
}
export function BrandsSection({title, brands, className, brandsStyle, titleStyle}:BrandsSectionType){
    return(
        <section className={twMerge("w-full max-w-[1216px] flex gap-4 flex-col mx-auto pt-[56px]", className)}>
            <h3 className={twMerge("text-white mix-blend-difference", titleStyle)}>{title}</h3>
            <div className={twMerge("flex justify-between flex-row flex-wrap", brandsStyle)}>
                {
                    brands.map(({alt,id,img, isLittle, isFlare})=>(
                        isFlare ? 
                        <Image width={200} height={100} className={"max-w-[130px]"} alt={alt} src={img} key={id}/> :
                        <Image width={200} height={100} className={!isLittle ? ("max-w-[120px]") : "max-w-[180px]"} alt={alt} src={img} key={id}/>
                    ))
                }
            </div>
      </section>
    )
}