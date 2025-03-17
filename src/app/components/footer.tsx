"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import CookieBanner from "./cookie-banner";
import { useCookieBanner } from "@/providers/CookieContext";

type MenuType = {
  id: string,
  isContact: boolean,
  title: string,
  links: {
    id: string,
    href: string,
    text: string,
    email?: string,
    target?: string,
    rel?: string,
    phone?: string,
    action?: () => void
  }[]
}

  

export function Footer () {
  const { setShowCookieBanner } = useCookieBanner();

  let MENU: MenuType[] = [
    {
      id: "menu-1",
      isContact: false,
      title: "Empresa e equipe",
      links: [
        {
          id: "menu-1-link-1",
          href: "/assets/docs/Politica_de_Privacidade_e_Protecao_de_Dados.pdf",
          text: "Política De Privacidade",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        {
          id: "menu-1-link-2",
          href: "/termos-de-servico",
          text: "Termos De Serviços",
        },
        {
          id: "menu-1-link-3",
          text: "Alterar preferências de Cookies",
          href: "",
          action: () => {
            setShowCookieBanner(true)
          }
        },
        // {
        //   id: "menu-1-link-3",
        //   href: "#",
        //   text: "Carreiras",
        // },
      ],
    },
    {
      id: "menu-2",
      isContact: false,
      title: "Links Úteis",
      links: [
        {
          id: "menu-2-link-1",
          href: "/",
          text: "Página Inicial",
        },
        {
          id: "menu-2-link-2",
          href: "/sobre",
          text: "Sobre Nós",
        },
        {
          id: "menu-2-link-3",
          href: "/servicos",
          text: "Serviços",
        },
        // {
        //   id: "menu-2-link-4",
        //   href: "#",
        //   text: "Carreiras",
        // },
      ],
    },
    {
      id: "menu-3",
      title: "Serviços",
      isContact: false,
      links: [
        {
          id: "menu-3-link-1",
          href: "/servicos#segura-defensiva",
          text: "Segurança Defensiva",
        },
        {
          id: "menu-3-link-2",
          href: "/servicos#cybersecur-soc",
          text: "Cybersecur SOC",
        },
        {
          id: "menu-3-link-3",
          href: "/servicos#consultorias",
          text: "Consultorias",
        },
        {
          id: "menu-3-link-4",
          href: "/servicos#formacoes",
          text: "Formações",
        },
      ],
    },
    {
      id: "menu-4",
      title: "Escritório",
      isContact: true,
      links: [
        {
          id: "menu-4-link-1",
          href: "",
          text: "Zona Financeira do Patriota Edifício Gorongosa 1º andar Talatona, Luanda, Angola",
        },
        {
          id: "menu-4-link-2",
          href: "mailto:info@cybersecur.co.ao",
          text: "Email: info@cybersecur.co.ao",
        },
        {
          id: "menu-4-link-3",
          href: "tel:+244924101146",
          text: "Telefone: +244924101146",
        },
      ],
    },
  ];

    return (
        <footer 
        className="w-full clear-both h-[800px] mb-[-100px] flex items-center justify-center mx-auto relative dark:bg-[#0E141D] py-24 bottom-0 bg-white"
            // style={{
            //     clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
            // }}
        >
            {/* <div className="fixed max-w-[1216px] mx-auto h-[calc(100vh+800px)] -top-[100vh] w-full bottom-0 bg-black"> */}
                <div className="w-full bottom-0 h-fit max-w-[1216px] px-8 mx-auto flex flex-col gap-[129px]">
                    <div className="max-w-[481px] w-full">
            <h3 className="text-4xl font-bold dark:text-white leading-[130%] text-black">CYBERSECUR</h3>
            <p className="dark:text-[#A4B1CD] text-[#5E5E5F] fon-regular text-sm leading-[130%]">
                            Protegemos o futuro digital da sua empresa com soluções inovadoras e confiáveis em cibersegurança. Segurança que você pode confiar, 24/7.
                        </p>
                    </div>
                    <div className="">
                        <ul className="flex justify-between flex-wrap">
                            {
                                MENU.map((item)=>(
                                    <li key={item.id}>
                                        <div className="flex flex-col max-w-[298px]">
                                            <h2 className="dark:text-white text-black mb-3 font-semibold text-lg">{item.title}</h2>
                                      {
                                        item.links.map((link) => (
                                          <div key={link.id}>
                                            {link.href && !link.action ? (
                                              <Link
                                                href={link.href}
                                                className="text-[#25A8FF] underline font-regular text-base"
                                                target={link.target ?? ""}
                                                rel={link.rel ?? ""}
                                              >
                                                {link.text}
                                              </Link>
                                            ) : link.action ? (
                                              <button
                                                onClick={link.action}
                                                className="text-[#25A8FF] underline font-regular text-base"
                                              >
                                                {link.text}
                                              </button>
                                            ) : (
                                              <span className="dark:text-[#A4B1CD] text-[#5E5E5F] font-regular text-base">
                                                {link.text}
                                              </span>
                                            )}
                                          </div>
                                        ))
                                      }
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            {/* </div> */}
        </footer>
    )
}