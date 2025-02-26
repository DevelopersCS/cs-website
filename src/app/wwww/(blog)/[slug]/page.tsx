import EditorRender from "@/app/components/editorRender";
import SEO from "@/app/components/SEO";
import { getPostBySlug } from "@/lib/posts";
import Output from "editorjs-react-renderer"
import Image from "next/image";
// import { getPostBySlug } from "@/lib/posts";

const test = {
  "id": "123",
  "title": "A Evolução do Desenvolvimento Web",
  "content": {
    "time": 1678901234567,
    "blocks": [
      {
        "type": "header",
        "data": {
          "text": "<span style='font-size: 36px; color: #FF5733;'>A Evolução do Desenvolvimento Web</span>",
          "level": 1
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "<span style='font-size: 20px; color: #333;'>A tecnologia está evoluindo rapidamente, e novas tendências surgem a cada ano.</span>"
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "<span style='font-size: 18px; color: blue;'>O uso de <strong>Inteligência Artificial</strong> e <em>automação</em> já está transformando a forma como construímos aplicações.</span>"
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": "<span style='font-size: 24px; color: green; font-weight: bold;'>Next.js e Server Components estão revolucionando o desenvolvimento web!</span>"
        }
      },
      {
        "type": "image",
        "data": {
          "file": {
            "url": "/assets/images/hacker-server.webp"
          },
          "caption": "<span style='font-size: 14px; color: gray;'>A tecnologia moldando o futuro.</span>"
        }
      },
      {
        "type": "quote",
        "data": {
          "text": "<span style='font-size: 22px; color: #E74C3C; font-style: italic;'>O desenvolvimento web nunca foi tão empolgante!</span>",
          "caption": "<span style='font-size: 16px; color: gray;'>— Desenvolvedor anônimo</span>"
        }
      },
      {
        "type": "list",
        "data": {
          "style": "",
          "items": [
            "<span style='font-size: 18px; color: purple;'>Frameworks mais performáticos</span>",
            "<span style='font-size: 18px; color: orange;'>Integração com IA</span>",
            "<span style='font-size: 18px; color: teal;'>Web3 e descentralização</span>",
            "<span style='font-size: 18px; color: darkblue;'>Design responsivo e acessível</span>"
          ]
        }
      }
    ],
    "version": "2.27.0"
  },
  "createdAt": "2025-02-19T16:02:29.201Z"
}



export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return <p className="text-white text-center mt-10">Post não encontrado.</p>;
  }

  return (
    <div className="mt-24 mx-auto w-full text-white">
      <SEO title={post.title} description="Descrição do post" />

      {/* 📢 Anúncio */}
      <div className="bg-orange-500 text-white text-center py-4 mb-6 shadow-lg">
        <p className="font-semibold">
          🚀 <b>O PREÇO VAI SUBIR!</b> Garanta sua assinatura com até <b>35% OFF</b> antes do reajuste.
          <a href="#" className="underline ml-2 hover:text-gray-900 transition">Quero aproveitar</a>
        </p>
      </div>

      <div className="max-w-[1216px] mx-auto px-4 w-full">
        <div className="flex gap-4 flex-col">
          {/* 📝 Título */}
          <h1 className="text-4xl font-extrabold leading-tight">{post.title}</h1>

          {/* 👤 Autor */}
          <div className="flex items-center space-x-4 w-fit p-0">
            <Image
              className="w-10 h-10 rounded-full object-cover border-2 border-gray-600"
              src={post.author.avatarUrl}
              alt={post.author.fullName}
              width={40}
              height={40}
            />
            <div className="border-l-2 border-slate-800 pl-4">
              <p className="text-base font-semibold">{post.author.fullName}</p>
              <p className="text-sm text-orange-400">{post.author.function}</p>
            </div>
          </div>
        </div>

        {/* 🖼️ Imagem de capa */}
        <div className="mt-6 rounded-lg flex items-center justify-center">
          <Image
            alt={post.title}
            src={post.coverImage}
            width={800}
            height={400}
            className="rounded-lg shadow-lg object-cover w-full aspect-video max-h-[509px]"
          />
        </div>

        {/* 📄 Conteúdo do post */}
        <div className="mt-8 text-gray-300 max-w-[90%] mx-auto leading-relaxed">
          <EditorRender data={JSON.parse(post.content).content} />
        </div>
      </div>
    </div>
  );
}