import { GetStaticProps } from "next";
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

export default function PostList() {
    const queryParam = useSearchParams();
    const { data, error, isLoading } = useSWR<Post[]>
        (`/api/posts?offset=${queryParam?.get('offset') || 0}`, fetcher);
    return (
        <main className="h-screen overflow-hidden">
            <Header />
            <section className="px-3 py-6 bg-[#FDFDFD]">
                <h1 className="font-bold text-xl mb-6 pl-3">Publicações</h1>
                <ul className="overflow-auto h-[calc(69dvh)]">
                {isLoading ? Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
                        <Skeleton key={index} className="mt-7 w-[400px] h-[80px] rounded-lg ml-3" />
                    )) : data?.map(p => (
                        <li key={p.id} className="cursor-pointer w-fit">
                            <PostCard post={p} />
                        </li>
                    ))}
                </ul>
            </section>
            <Pagination count={0} />
            <Footer />
        </main>
    );
}