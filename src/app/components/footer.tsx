import { link } from "fs";
import Link from "next/link";

type MenuType = {
    id: string,
    isContact: boolean,
    title: string,
    links: {
        id: string,
        href: string,
        text: string,
        email?: string,
        phone?: string
    }[]
}
let MENU:MenuType[] = [
    {
      id: "menu-1",
      isContact: false,
      title: "Empresa e equipe",
      links: [
        {
          id: "menu-1-link-1",
          href: "#",
          text: "Política De Privacidade",
        },
        {
          id: "menu-1-link-2",
          href: "#",
          text: "Termos De Serviços",
        },
        {
          id: "menu-1-link-3",
          href: "#",
          text: "Carreiras",
        },
      ],
    },
    {
      id: "menu-2",
      isContact: false,
      title: "Links Úteis",
      links: [
        {
          id: "menu-2-link-1",
          href: "#",
          text: "Página Inicial",
        },
        {
          id: "menu-2-link-2",
          href: "#",
          text: "Sobre Nós",
        },
        {
          id: "menu-2-link-3",
          href: "#",
          text: "Serviços",
        },
        {
          id: "menu-2-link-4",
          href: "#",
          text: "Carreiras",
        },
      ],
    },
    {
      id: "menu-3",
      title: "Serviços",
      isContact: false,
      links: [
        {
          id: "menu-3-link-1",
          href: "#",
          text: "Segurança Defensiva",
        },
        {
          id: "menu-3-link-2",
          href: "#",
          text: "Segurança Ofensiva",
        },
        {
          id: "menu-3-link-3",
          href: "#",
          text: "Consultoria",
        },
        {
          id: "menu-3-link-4",
          href: "#",
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
          email: "info@cybersecur.co.ao",
          phone: "+244 924 101 146",
        },
      ],
    },
  ];
  

export function Footer () {
    return (
        <footer 
            className="w-full h-[500px] flex items-center justify-center bottom-0 relative mx-auto bg-black"
            style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
            }}
        >
            {/* <div className="fixed max-w-[1216px] mx-auto h-[calc(100vh+800px)] -top-[100vh] w-full bottom-0 bg-black"> */}
                <div className="fixed w-full bottom-0 h-[500px] max-w-[1216px] mx-auto flex flex-col gap-[129px]">
                    <div className="max-w-[481px] w-full">
                        <h2 className="text-4xl font-bold text-white">CYBERSECUR</h2>
                        <p className="text-[#AEAEAE] font-medium text-sm">
                            Protegemos o futuro digital da sua empresa com soluções inovadoras e confiáveis em cibersegurança. Segurança que você pode confiar, 24/7.
                        </p>
                    </div>
                    <div className="">
                        <ul className="flex justify-between">
                            {
                                MENU.map((item)=>(
                                    <li key={item.id}>
                                        <div className="flex flex-col max-w-[298px]">
                                            <h3 className="text-white mb-3 font-semibold text-lg">{item.title}</h3>
                                            {
                                                item.links.map((link)=>(
                                                    <div key={link.id}>
                                                        {
                                                            link.href != "" ? 
                                                            <Link href={link.href} className="text-[#949494] underline font-medium text-base">{link.text}</Link> :
                                                            <span className="text-[#949494] font-medium text-base">{link.text}</span>
                                                        }
                                                        {link.phone && <span className="text-[#25A8FF]"><br /><span className="text-white">Telefone: </span>{link.phone}</span>}
                                                        {link.email && <span className="text-[#25A8FF]"><br /><span className="text-white">E-Mail: </span>{link.email}</span>}
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