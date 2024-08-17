import { GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Pagination } from "@/components/Pagination";
import { PostCard } from "@/components/PostCard";
import prisma from "@/lib/prisma";
import { useSearchParams } from "next/navigation";
import { Post } from "@prisma/client";
import useSWR from "swr";
import { Skeleton } from "@/components/ui/skeleton";
import { ITEMS_PER_PAGE } from "@/global/pagination";

interface PostListProps {
    postCount: number;
}

const fetcher = (url: string) => fetch(url, {
    method:'GET',
    headers:{ "Content-Type" : "applicaton/json" },
}).then(async res => {
    const { posts } = await res.json();

    return posts;
});

export const getStaticProps = (async () => {
    const postCount = await prisma.post.count();
  
    return { props: { postCount }};
}) satisfies GetStaticProps<PostListProps>;

export default function PostList({ postCount }: InferGetStaticPropsType<typeof getStaticProps>) {
    const queryParam = useSearchParams();
    const { data, error, isLoading } = useSWR<Post[]>
        (`/api/posts?offset=${queryParam?.get('offset') || 0}`, fetcher);
    return (
        <main className="flex flex-col h-screen">
            <Header />
            <section className="px-3 py-6 bg-[#FDFDFD] flex-1">
                {error ? (
                    <h1 className="py-5 text-center text-lg">We are sorry. We could not load the data</h1>
                ) : (
                    <>
                        <h1 className="font-bold text-xl mb-6 pl-3">Publicações</h1>
                        <ul className="break-all min-h-[75vh]">
                        {isLoading ? Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
                                <Skeleton key={index} className="mt-7 w-[400px] h-[80px] rounded-lg ml-3" />
                            )) : data?.map(p => (
                                <li key={p.id} className="cursor-pointer">
                                    <PostCard post={p} />
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </section>
            <Pagination count={postCount} />
            <Footer />
        </main>
    );
}