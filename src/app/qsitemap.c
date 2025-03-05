import { getAllPosts } from "@/lib/posts";
import { MetadataRoute } from "next";

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
    const posts = await getAllPosts();

    return posts.map((post: any) => ({
        url: `https://cybersecur.co.ao/blog/artigos/${post.slug}`,
        lastModified: post.updatedAt || post.publishedAt,
        priority: 0.8,
        changeFrequency: "weekly",
    }));
};

export { sitemap as GET };
