import { Post } from "@prisma/client";
import Link from "next/link"

interface PostCardProps {
    post: Post;
}

export function PostCard({ post }: PostCardProps) {
    return (
        <Link href={'/'}>
            <div className="mobile:w-fit tablet:w-fit w-[600px] max-w-full desktop:min-w-96 fullscreen:min-w-96 break-words p-3 cursor-pointer hover:border hover:border-[#FDFDFD] hover:shadow-md hover:transition hover:duration-150 ease-in-out">
                <h2 className="text-lg font-medium">{post.titulo.length > 50 ? post.titulo.substring(0, 50).concat('...') : post.titulo}</h2>
                <article className="py-1 text-xs text-[#6A6A6A]">
                    <p>{post.subtitulo.length > 50 ? post.subtitulo.substring(0, 50).concat('...') : post.subtitulo}</p>
                    <p className="pt-4">{new Date(post.data_publicacao).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })} - {[1].includes(post.tipo) ? 'Receitas' : 'Publicações'}</p>
                </article>
            </div>
        </Link>
    );
}