import Image from "next/image";
import Link from "next/link";
import { getAllPosts, searchPosts } from "@/lib/posts";
import CardPost from "@/app/components/blog/card-post";

const API_ITEMS_PER_PAGE = 20; // A API retorna 20 itens por página
const UI_ITEMS_PER_PAGE = 6; // Exibir apenas 6 itens no frontend

export default async function BlogArtigos({ searchParams }: { searchParams: { page?: string; search?: string } }) {
    const currentPage = Number(searchParams.page) || 1;
    const searchTerm = searchParams.search || "";

    // Índice inicial e final baseado na UI (considerando 6 itens por página)
    const startIndex = (currentPage - 1) * UI_ITEMS_PER_PAGE;
    const endIndex = startIndex + UI_ITEMS_PER_PAGE;

    // Página inicial e final que a API precisa buscar
    const startApiPage = Math.floor(startIndex / API_ITEMS_PER_PAGE) + 1;
    const endApiPage = Math.floor((endIndex - 1) / API_ITEMS_PER_PAGE) + 1;

    let allPosts: any[] = [];

    if (startApiPage === endApiPage) {
        // Se os dados necessários estão em uma única página da API
        const response = searchTerm ? await searchPosts(searchTerm, startApiPage) : await getAllPosts(startApiPage);
        allPosts = response.data;
    } else {
        // Se precisar pegar dados de múltiplas páginas da API
        const response1 = searchTerm ? await searchPosts(searchTerm, startApiPage) : await getAllPosts(startApiPage);
        allPosts = [...response1.data]; // Primeiro, guardamos os dados da página inicial

        // Só busca a segunda página da API se não houver dados suficientes
        if (allPosts.length < endIndex) {
            const response2 = searchTerm ? await searchPosts(searchTerm, endApiPage) : await getAllPosts(endApiPage);
            allPosts = [...allPosts, ...response2.data]; // Junta os dados da segunda página
        }
    }

    // Depuração para verificar quantos itens foram carregados
    console.log("Total items fetched:", allPosts.length);

    // Pegamos apenas os 6 itens necessários para exibir na UI
    const paginatedPosts = allPosts.slice(startIndex % API_ITEMS_PER_PAGE, (startIndex % API_ITEMS_PER_PAGE) + UI_ITEMS_PER_PAGE);
    console.log("Total items paginatedPosts:", paginatedPosts.length);

    // Estimativa do total de páginas
    const totalItems = (endApiPage - 1) * API_ITEMS_PER_PAGE + allPosts.length;
    const totalPages = Math.ceil(totalItems / UI_ITEMS_PER_PAGE);

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
                    href={currentPage > 1 ? `/blog/artigos?page=${currentPage - 1}${searchTerm ? `&search=${searchTerm}` : ""}` : "#"}
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
                    href={currentPage < totalPages ? `/blog/artigos?page=${currentPage + 1}${searchTerm ? `&search=${searchTerm}` : ""}` : "#"}
                    className={`px-8 py-3 uppercase rounded-sm ${currentPage < totalPages ? "bg-blue-600 hover:bg-blue-700 text-white" : "cursor-not-allowed opacity-40 text-gray-200"}`}
                    aria-disabled={currentPage >= totalPages}
                >
                    Próximo
                </Link>
            </div>
        </div>
    );
}
