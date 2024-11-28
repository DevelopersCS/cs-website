import Image from "next/image";
import Link from "next/link";
import BaseSection from "./base.section";
import ItemCard from "./item.card";
import DepoimentCard from "./depoiment.card";

const ITEMS = [
  {
    id:1,
    avatar: {
      src: "/assets/images/depoiments/1.jpg",
      alt:"Alexandre Cipriano",
    },
    name:"Alexandre Cipriano",
    role: "DataGroup - IT",
    depoiments:"A CyberSecur é uma empresa parceira da nossa distribuição, que tem demonstrado compromentimento e empenho nas suas funções de empresa de consultoria de Segurança e TI. Como parceiros de negócios temos...",
  },
  {
    id:2,
    avatar: {
      src: "/assets/images/depoiments/3.jpg",
      alt:"Icone de Equipe Especializada",
    },
    name:"Feras Al Taoam",
    role: "PINKERTON",
    depoiments:"Escrevo para expressar o nosso apreço pela qualidade dos serviços prestados. A eficiência, o foco no cliente e responsabilidade demonstrada pela vossa empresa, vão de acordo com os padrões da Pinkerton. Recomendo e recomendarei os vossos serviços aos nossos colegas e escritórios da Pinkerton espalhados pelo mundo. Estou ansioso para trabalhar com a vossa equipa.",
  },
  {
    id:3,
    avatar: {
      src: "/assets/images/depoiments/2.jpg",
      alt:"Icone de Equipe Especializada",
    },
    name:"Felipe Batista Retke",
    role: "ETIC",
    depoiments:"A CyberSecur é uma parceira importante na execução de projectos que colaboram de forma construtiva para a evolução do clientes. Como parceiro, posso dizer que o compromentimento com a resposta é um dos principais valores.",
  },
  
]
const DepoimentsSection = () => {

  return (
    <BaseSection rootStyle="bg-white" title="Depoimentos" description="Empresas em Angola que confiam na nossa expertise para proteger seus dados e garantir a continuidade dos negócios." titleStyle="md:max-w-[50%] max-w-[100%] md:text-4xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:max-h-[394px] h-full  w-full gap-4">
      {
        ITEMS.map(({id, depoiments,name, avatar, role})=>(
          <DepoimentCard name={name} depoiments={depoiments} role={role} avatar={{
            alt: avatar.alt,
            src: avatar.src
          }} key={id}/>
        ))
      }
      </div>
    </BaseSection>
  );
};

export default DepoimentsSection;
