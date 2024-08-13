import { Post } from "@prisma/client";
import Link from "next/link"

interface PostCardProps {
    post: Post;
}

export function PostCard({ post }: PostCardProps) {
    return (
        <Link href={'/'}>
            <div className="w-fit min-w-96 p-3 cursor-pointer hover:border hover:border-[#FDFDFD] hover:shadow-md hover:transition hover:duration-150 ease-in-out">
                <h2 className="text-lg font-medium">{post.titulo}</h2>
                <article className="py-1 text-xs text-[#6A6A6A]">
                    <p>{post.subtitulo}</p>
                    <p className="pt-4">{new Date(post.data_publicacao).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })} - {[1].includes(post.tipo) ? 'Receitas' : 'Publicações'}</p>
                </article>
            </div>
        </Link>
    );
}