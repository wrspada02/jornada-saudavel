import { GetStaticProps, InferGetStaticPropsType } from "next";
import React, { useEffect } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Pagination } from "@/components/Pagination";
import { PostCard } from "@/components/PostCard";
import prisma from "@/lib/prisma";
import { useSearchParams } from "next/navigation";
import { Nutricionista, Post } from "@prisma/client";
import useSWR from "swr";
import { Skeleton } from "@/components/ui/skeleton";
import { ITEMS_PER_PAGE } from "@/global/pagination";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/router";
import { ErrorMessage } from "@/components/ErrorMessage";

interface PostListProps {
    postCount: number;
}

const fetcherPagination = (url: string) => fetch(url, {
    method:'GET',
    headers:{ "Content-Type" : "applicaton/json" },
}).then(async res => {
    const { posts } = await res.json();

    return posts;
});

const fetcherUserNutricionist = (url: string) => fetch(url, {
    method:'GET',
    headers:{ "Content-Type" : "applicaton/json" },
}).then(async res => {
    const { nutricionist } = await res.json();

    return nutricionist;
});

export const getStaticProps = (async () => {
    const postCount = await prisma.post.count();
  
    return { props: { postCount }};
}) satisfies GetStaticProps<PostListProps>;

export default function PostList({ postCount }: InferGetStaticPropsType<typeof getStaticProps>) {
    const { user } = useUser();
    const queryParam = useSearchParams();
    const { toast } = useToast();
    const router = useRouter();
    const { success, type, action } = router.query;
  
    const { data, error, isLoading } = useSWR<Post[]>
        (`/api/post/pagination?offset=${queryParam?.get('offset') || 0}`, fetcherPagination);
    const { data: userDb, mutate } = useSWR<Nutricionista>
        (`/api/nutricionist/getByEmail?email=${user?.primaryEmailAddress?.emailAddress}`, fetcherUserNutricionist);

    useEffect(() => {
        mutate();
    }, [user]);

    useEffect(() => {
        if (!success || !type || !action) return;
    
        toast({
          title: `${success ? 'Successo' : 'Error'} na ${action} ${type}`,
        });
      }, [success, type, action]);

      useEffect(() => {
        console.log(userDb);
      }, [userDb]);
        
    return (
        <main className="flex flex-col h-screen">
            <Header />
            <section className="px-3 py-6 bg-[#FDFDFD] flex-1">
                {error ? (
                    <h1 className="py-5 text-center text-lg">Desculpe. Não conseguimos carregar o conteúdo.</h1>
                ) : (
                    <>
                        <header className="flex items-center gap-x-5 mb-6">
                            <h1 className="font-bold text-xl pl-3">Publicações</h1>
                            {!!userDb && (
                                <Link href={'/post/create'} className="p-3 bg-[#c3e9d2] rounded-md hover:shadow-md hover:transition hover:duration-150 ease-in-out">Criar publicação</Link>
                            )}
                        </header>
                        {data && data.length > 0 ? (
                            <ul className="break-all min-h-[75vh]">
                            {isLoading ? Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
                                    <Skeleton key={index} className="mt-7 w-[400px] h-[80px] rounded-lg ml-3" />
                                )) : data?.map(p => (
                                    <li key={p.id} className="cursor-pointer">
                                        <PostCard post={p} />
                                    </li>
                                ))}
                            </ul>
                        ) : <ErrorMessage />}                   
                    </>
                )}
            </section>
            {data && data?.length > 0 && (
                <Pagination count={postCount} />
            )}
            <Footer />
        </main>
    );
}