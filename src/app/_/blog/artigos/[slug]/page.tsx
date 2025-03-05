import CardPost from "@/app/components/blog/card-post";
import { RecentPosts } from "@/app/components/blog/recentPosts";
import EditorRender from "@/app/components/editorRender";
import SEO from "@/app/components/SEO";
import { getAllPosts, getPostBySlug, Post } from "@/lib/posts";
import Output from "editorjs-react-renderer"
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import sanitizeHtml from "sanitize-html";
// import { getPostBySlug } from "@/lib/posts";

type Props = {
  params: Promise<{ slug: string }>
}

// ✅ Geração de páginas estáticas (SSG)
// export async function generateStaticParams() {
//   const posts = await getAllPosts();

//   return posts
//     .filter((post: Post) => typeof post.slug === "string" && post.slug.trim() !== "") // Remove inválidos
//     .map((post: Post) => ({ slug: post.slug }));
// }



// ✅ Configuração de metadados dinâmicos
export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const slug = (await params).slug
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post não encontrado | Cybersecur",
      description: "O post que você está procurando não existe.",
    };
  }

  return {
    title: `${post.title} | Cybersecur`,
    description: post.excerpt || "Artigo sobre segurança cibernética.",
    keywords: ["Blog Cyber Security", "Proteção Digital", "Segurança na Internet", post.title],
    openGraph: {
      title: post.title,
      description: post.excerpt || "Artigo sobre segurança cibernética.",
      url: `https://cybersecur.co.ao/blog/artigos/${slug}`,
      images: [
        {
          url: sanitizeHtml(post.coverImage),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
};

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug((await params).slug);
  
  if (!post) {
    return <p className="text-white text-center mt-10">Post não encontrado.</p>;
  }

  return (
    <div className="mt-24 mx-auto w-full text-white">
      <SEO title={post.title} description="Descrição do post" />
      <div className="max-w-[1216px] mx-auto px-4 w-full">
        <div className="flex gap-4 flex-col">
          <h1 className="text-4xl font-extrabold leading-tight">{post.title}</h1>
          <div className="flex items-center space-x-4 w-fit p-0">
            <Image
              className="w-10 object-contain h-10 rounded-full border-2 border-gray-600"
              src={
                post.author.fullName === "Administrador" ? "/assets/brands/cyber-profile.svg":
                sanitizeHtml(post.author.avatarUrl)
              }
              alt={sanitizeHtml(post.author.fullName)}
              width={40}
              height={40}
            />
            <div className="border-l-2 border-slate-800 pl-4">
              {
                post.author.fullName === "Administrador" ? (
                  <>
                    <p className="text-base font-semibold">Cybersecur</p>
                  </>
                ):
                (
                  <>
                    <p className="text-base font-semibold">{sanitizeHtml(post.author.avatarUrl)}</p>
                    <p className="text-sm text-orange-400">{sanitizeHtml(post.author.function)}</p>
                  </>
                )
              }
            </div>
          </div>
        </div>
        <div className="mt-6 rounded-lg flex items-center justify-center">
          <Image
            alt={sanitizeHtml(post.title)}
            src={sanitizeHtml(post.coverImage)}
            width={800}
            height={400}
            className="rounded-lg shadow-lg object-cover w-full aspect-video max-h-[509px]"
          />
        </div>
        <div className="mt-8 text-gray-300 max-w-[90%] mx-auto leading-relaxed">
          {/* <EditorRender data={JSON.parse(post.content).content} /> */}
        </div>
        {/* <RecentPosts /> */}

      </div>
    </div>
  );
}

// 🔄 Atualiza os posts a cada 1 hora sem precisar rebuildar o site
export const revalidate = 3600;