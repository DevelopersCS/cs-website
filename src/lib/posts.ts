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

// ✅ Buscar todos os posts
export async function getAllPosts(pageNumber: number = 1) {
    try {
        const response = await API.get(`/news?pageNumber=${pageNumber}`);
        return response.data ?? [];
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.warn("⚠️ Erro ao buscar posts: API pode estar offline.");
        } else {
            console.warn("⚠️ Erro inesperado ao buscar posts.");
        }
        return []; // Retorna um array vazio para evitar erros no React
    }
}
// ✅ Buscar posts por termo de pesquisa
export async function searchPosts(searchTerm = "", pageNumber = 1) {
    try {
        const { data } = await API.get(`/news/search`, {
            params: { term: searchTerm, pageNumber },
        });
        return data || [];
    } catch (error) {
        return handleRequestError(error);
    }
}

// ✅ Buscar post por slug
export async function getPostBySlug(slug: string) {
    try {
        const { data } = await API.get(`/news/news/${slug}`);
        return data || [];
    } catch (error) {
        return handleRequestError(error);
    }
}
