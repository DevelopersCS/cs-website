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
export async function getAllPosts(pageNumber = 1) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/news?pageNumber=${pageNumber}`, {
        next: { revalidate: 60 }, // Atualiza a cada 60s para novos posts
    });

    if (!res.ok) throw new Error("Erro ao buscar posts");
    const data = await res.json();
    console.log(data); 
    return data;
}

export async function searchPosts(searchTerm = "", pageNumber = 1) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/news/search?term=${encodeURIComponent(searchTerm)}&pageNumber=${pageNumber}`,
        {
            next: { revalidate: 60 },
        }
    );

    if (!res.ok) throw new Error("Erro ao buscar posts");
    const data = await res.json();
    return data;
}



export async function getPostBySlug(slug: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/news/news/${slug}`, {
        next: { revalidate: 60 },
    });

    if (!res.ok) return null;
    console.log(res.url)

    const data = await res.json();
    return data;
}
