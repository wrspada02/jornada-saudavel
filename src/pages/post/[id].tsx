import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import { Post } from "@prisma/client";
import prisma from "@/lib/prisma";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

interface PostPublicationProps {
  post: Post | null;
};

export const getStaticProps = (async ({ params }) => {
  const post = await prisma.post
    .findFirst({ where: { id: params?.id as string }, include: { nutricionista: true, comentarios: { include: { usuario: true }} }});

  return { props: { post: JSON.parse(JSON.stringify(post)) ?? null } };
}) satisfies GetStaticProps<PostPublicationProps>;

export const getStaticPaths = (async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}) satisfies GetStaticPaths<{ id: string }>;

export default function PostPublication({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main className="flex flex-col h-screen">
      <Header />
      <section className="flex-1 p-3">
        <figure>
          <Image src={post?.imagem_url || ''} width={100} height={100} className="mobile:w-full tablet:w-full border shadow-md w-[30vw] object-cover hover:-translate-y-1 transition duration-500 rounded-xl" alt="Post picture" />
          <figcaption className="mt-5 font-bold break-all">
            <h1 className="text-xl font-bold">{post?.titulo}</h1>
            <h2 className="mt-3 text-lg font-medium">{post?.subtitulo}</h2>
          </figcaption>
        </figure>

        <section className="mt-5 max-w-full break-all">
          <p className="text-base">{post?.conteudo}</p>
        </section>

        <section className="mt-5 max-w-full break-all">
          <ul className="flex items-center gap-x-5">
            <li className="flex items-center gap-x-2">
              <Image src={'/like-icon.svg'} width={30} height={30} alt="Like icon" />
              <span>{post?.qtd_likes}</span>
            </li>
            <li className="flex items-center gap-x-2">
              <Image src={'/comment-icon.svg'} width={30} height={30} alt="Comment icon" />
              <span>{post?.qtd_comentarios}</span>
            </li>
          </ul>
        </section>

        <section className="mt-5 max-w-full break-all">
          <h3 className="mb-6 text-xl font-bold">Comentários</h3>
          
          <ul>
            {post?.comentarios.map((c: any) => (
              <li key={c.id} className="mt-5">
                <figure className="flex items-center gap-x-5 mobile:justify-between tablet:justify-between">
                  <Image src={c.usuario.imagem_url || ''} width={70} height={70} className="rounded-full" alt="Usuario profile picture" />
                  <figcaption className="text-base max-w-[1200px]">
                    {c.conteudo}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </section>
      </section>
      <Footer />
    </main>
  );
}