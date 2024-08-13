import { Nutricionista, Post } from "@prisma/client";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PostCard } from "@/components/PostCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import prisma from "@/lib/prisma";

interface HomePageProps {
  posts: Post;
  nutricionists: Nutricionista;
}

export const getStaticProps = (async (context) => {
  const [posts, nutricionists] = await Promise.all(
    [
      prisma.post.findMany({
        orderBy: {
          data_publicacao: 'desc',
        },
        take: 5,
      }),
      prisma.nutricionista.findMany({
        take: 10,
      }),
    ]
  );

  return { props: { posts: JSON.parse(JSON.stringify(posts)), nutricionists: JSON.parse(JSON.stringify(nutricionists)) } };
}) satisfies GetStaticProps<HomePageProps>;

export default function Home({ nutricionists, posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Header />
      <main className="px-3 py-6 bg-[#FDFDFD]">
        <section>
          <h1 className="text-xl font-bold pl-3">Confira o que os nutricionistas estão postando</h1>
          <ul className="py-3">
            {posts.map((p: Post) => (
              <li key={p.id}>
                <PostCard post={p} />
              </li>
            ))}
          </ul>
          <footer className="text-base font-medium text-left mobile:text-right my-4 pl-3">
            <Link href={'/post-list'}>Veja mais...</Link>
          </footer>
        </section>
        <section>
          <h2 className="font-bold text-xl text-center mb-14 mt-12">Conheça nossos especialistas</h2>
          <article className="flex items-center justify-center gap-x-8 overflow-x-hidden">
            <Carousel opts={{
              align: 'start'
            }}>
              <CarouselContent className="p-5">
                {nutricionists.map((n: Nutricionista) => (
                  <CarouselItem key={n.id} className="mobile:basis-1/3 basis-1/5 cursor-pointer hover:-translate-y-1 transition duration-500">
                    <figure className="flex flex-col items-center justify-center">
                      <Image src={String(n.imagem_url)} width={70} height={70} className="rounded-full" alt="Nutricionista profile picture" />
                      <figcaption className="font-medium text-sm text-center">{n.nome}</figcaption>
                    </figure>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
