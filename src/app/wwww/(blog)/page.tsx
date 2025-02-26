import { getAllPosts } from "@/lib/posts";
// import Link from "next/link";

export default async function BlogPage() {
    // const posts = await getAllPosts();

    return (
        <div>
            <h1>Blog</h1>
            {/* <ul>
                {posts.data.map((post: any) => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul> */}
        </div>
    );
}
