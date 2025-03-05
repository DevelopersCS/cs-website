import Image from "next/image";
import Link from "next/link";
import sanitizeHtml from "sanitize-html";

type CardPostType = {
    post: {
        id: string
        title: string
        slug: string
        coverImage: string
        createdAt: Date
        author: {
            avatarUrl: string
            fullName: string
        }
    }
}

export default function CardPost({post}: CardPostType){
    return(
        <Link key={post.id} href={`/blog/artigos/${post.slug}`} className="group">
            <div className="bg-[#0c0e14] overflow-hidden h-full rounded-lg shadow-lg transition transform flex flex-col gap-4 hover:bg-[#11141d] pb-8 ease-in duration-150">
                <Image
                    src={sanitizeHtml(post.coverImage)}
                    priority
                    alt={sanitizeHtml(post.title)}
                    width={320}
                    height={200}
                    className="group-hover:scale-[1.1] duration-[.5s] object-cover w-full h-48"
                />
                <h3 className="h-full px-4 text-lg font-semibold line-clamp-3 mt-2 overflow-hidden">
                    {sanitizeHtml(post.title)}
                </h3>

                <div className="flex flex-col gap-3 px-4">
                    <div className="flex items-center space-x-4 w-fit p-0">
                        <Image
                            className="w-10 h-10 rounded-full object-cover border-2 border-gray-600"
                            src={
                                post.author.fullName === "Administrador" ? "/assets/brands/cyber-profile.svg" :
                                    post.author.avatarUrl
                            }
                            alt={sanitizeHtml(post.author.fullName)}
                            width={40}
                            height={40}

                        />
                        <div className="border-l-2 border-slate-800 pl-4">
                            <p className="text-base font-semibold">{post.author.fullName === "Administrador" ? "Cybersecur" : sanitizeHtml(post.author.fullName)}</p>
                        </div>
                    </div>
                    <p className="text-sm text-gray-400">
                        {new Date(post.createdAt).toLocaleDateString()}
                    </p>
                </div>
            </div>
        </Link>
    )
}