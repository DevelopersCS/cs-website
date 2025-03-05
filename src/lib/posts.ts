import axios from "axios";
import { API } from "./api";

export interface Author {
    userId: string;
    fullName: string;
    function: string;
    bio: string | null;
    linkedinUrl: string | null;
    avatarUrl: string;
}

export interface Category {
    id: string;
    name: string;
}

export interface Post {
    id: string;
    type: string;
    title: string;
    content: string;
    coverImage: string;
    viewsCount: number;
    isActive: boolean;
    isPublished: boolean;
    createdAt: Date;
    updateAt: Date;
    author: Author;
    category: Category[];
    slug: string;
}

export interface postResponse {
    totalItems: number,
    totalPages: number,
    currentPage: number,
    pageSize: number,
    data: Post[]
}
// ✅ Tratamento de erros de requisição
function handleRequestError(error: any) {
    if (axios.isAxiosError(error)) {
        if (!error.response) {
            console.error("🚨 Erro de rede: A API pode estar offline.");
        } else {
            console.error(`❌ Erro HTTP: ${error.response.status} - ${error.response.statusText}`);
        }
    } else {
        console.error("⚠️ Erro inesperado:", error);
    }
    return []; // Retorna um array vazio para evitar erro na UI
}

// ✅ Buscar todos os posts (para gerar páginas estaticamente)
export async function getAllPosts(page: number = 1) {
    try {
        const response = await API.get(`/news?pageNumber=${page}`);

        if (!Array.isArray(response.data.data)) {
            console.warn("Erro: getAllPosts não retornou um array!", response.data);
            return [];
        }

        // Filtra apenas os posts que têm um slug válido
        const filteredPosts = response.data.data.filter((post: Post) =>
            typeof post.slug === "string" && post.slug.trim() !== ""
        );
        // console.log(filteredPosts)
        return filteredPosts;
    } catch (error) {
        console.error("Erro ao buscar posts:", error);
        return [];
    }
}



// ✅ Buscar post por slug
export async function getPostBySlug(slug: string) {
    try {
        const { data } = await API.get(`/news/news/${slug}`);
        return data || null; // Retorna null para tratamento correto na UI
    } catch (error) {
        return handleRequestError(error);
    }
}


export async function searchPosts(searchTerm: string, page: number) {
    try {
        const response = await axios.get(`/news?search=${searchTerm}&page=${page}`);
        return response.data.data;
    } catch (error) {
        console.error("Erro ao buscar posts com termo:", searchTerm, error);
        return { data: [], total: 0 };
    }
}