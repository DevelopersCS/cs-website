import Image from "next/image";
import Link from "next/link";
import { getAllPosts, Post, searchPosts } from "@/lib/posts";
import CardPost from "@/app/components/blog/card-post";

const API_ITEMS_PER_PAGE = 20;
const UI_ITEMS_PER_PAGE = 6;

interface Props {
    searchParams: Promise<{ page: string; search?: string }>
}

export default async function BlogArtigos({ searchParams }: Props) {
  const currentPage = Number((await searchParams)?.page) || 1;
  const searchTerm = (await searchParams)?.search || "";

  if (isNaN(currentPage)) return null; // Evita erro se "page" não for um número válido

  const startIndex = (currentPage - 1) * UI_ITEMS_PER_PAGE;
  const endIndex = startIndex + UI_ITEMS_PER_PAGE;
  const startApiPage = Math.floor(startIndex / API_ITEMS_PER_PAGE) + 1;
  const endApiPage = Math.floor((endIndex - 1) / API_ITEMS_PER_PAGE) + 1;

  let allPosts: Post[] = [];

  if (startApiPage === endApiPage) {
    allPosts = searchTerm
      ? await searchPosts(searchTerm, startApiPage)
      : await getAllPosts(startApiPage);
  } else {
    const response1 = searchTerm
      ? await searchPosts(searchTerm, startApiPage)
      : await getAllPosts(startApiPage);
    allPosts = [...response1];

    if (allPosts.length < endIndex) {
      const response2 = searchTerm
        ? await searchPosts(searchTerm, endApiPage)
        : await getAllPosts(endApiPage);
      allPosts = [...allPosts, ...response2];
    }
  }

  const paginatedPosts = allPosts.slice(
    startIndex % API_ITEMS_PER_PAGE,
    (startIndex % API_ITEMS_PER_PAGE) + UI_ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(100 / UI_ITEMS_PER_PAGE); // Definir baseado na resposta real da API

  return (
    <div className="max-w-[1216px] mx-auto w-full mt-24 text-white">
      <h1 className="text-2xl font-bold my-6">
        {searchTerm ? `Resultados para "${searchTerm}"` : "Nossos últimos artigos"}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedPosts.length > 0 ? (
          paginatedPosts.map((post: any) => <CardPost post={post} key={post.id} />)
        ) : (
          <p className="text-gray-400">Nenhum artigo encontrado.</p>
        )}
      </div>

      {/* Paginação */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {/* Botão Anterior */}
        <Link
          href={currentPage > 1 ? `/blog/artigos?page=${currentPage - 1}${searchTerm ? `&search=${searchTerm}` : ""}` : ""}
          className={`px-8 py-3 uppercase bg-blue-600 text-white rounded-sm ${currentPage > 1 ? "hover:bg-blue-700" : "cursor-not-allowed opacity-40"}`}
          aria-disabled={currentPage <= 1}
        >
          Anterior
        </Link>

        {/* Números das Páginas */}
        {Array.from({ length: totalPages }, (_, index) => {
          const pageNumber = index + 1;
          return (
            <Link
              key={pageNumber}
              href={`/blog/artigos?page=${pageNumber}${searchTerm ? `&search=${searchTerm}` : ""}`}
              className={`px-4 py-3 rounded-sm ${currentPage === pageNumber ? "bg-blue-700 text-white font-bold" : "bg-gray-300 text-gray-800 hover:bg-gray-400"}`}
            >
              {pageNumber}
            </Link>
          );
        })}

        {/* Botão Próximo */}
        <Link
          href={currentPage < totalPages ? `/blog/artigos?page=${currentPage + 1}${searchTerm ? `&search=${searchTerm}` : ""}` : ""}
          className={`px-8 py-3 uppercase rounded-sm ${currentPage < totalPages ? "bg-blue-600 hover:bg-blue-700 text-white" : "cursor-not-allowed opacity-40 text-gray-200"}`}
          aria-disabled={currentPage >= totalPages}
        >
          Próximo
        </Link>
      </div>
    </div>
  );
}
