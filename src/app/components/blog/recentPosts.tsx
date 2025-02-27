"use client"; // ✅ Adicione esta linha para garantir que o componente seja client-side

import { useEffect, useState } from "react";
import CardPost from "./card-post";
import { getAllPosts, Post } from "@/lib/posts";
import Link from "next/link";

export const RecentPosts = () => {
    const [recentPosts, setRecentPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await getAllPosts();
                if (!Array.isArray(response.data)) {
                    console.warn("Resposta inválida da API");
                    setRecentPosts([])
                }
                setRecentPosts(response.data.slice(0, 3)); // Pegamos apenas os 3 primeiros posts
            } catch (error) {
                console.warn("Erro ao buscar posts:", error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    return (
        <div className="flex flex-col gap-8 py-14">
            <h2 className="text-2xl font-bold mb-4">Artigos Recomendados</h2>

            {loading ? (
                <p className="text-gray-400">Carregando artigos...</p>
            ) : error ? (
                <p className="text-gray-400">Nenhum artigo encontrado.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {recentPosts.length > 0 ? (
                        recentPosts.map((post) => <CardPost post={post} key={post.id} />)
                    ) : (
                        <p className="text-gray-400">Nenhum artigo encontrado.</p>
                    )}
                </div>
            )}

            {
                recentPosts.length > 0 && (
                    <div className="text-center">
                        <Link
                            href="/blog/artigos"
                            className="bg-blue-600 px-8 py-3 uppercase rounded-sm text-white text-base font-medium hover:bg-blue-700 transition"
                        >
                            Ver Mais
                        </Link>
                    </div>
                )
            }
            
        </div>
    );
};
