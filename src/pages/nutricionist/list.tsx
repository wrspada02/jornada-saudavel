import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Pagination } from "@/components/Pagination";
import prisma from "@/lib/prisma";
import useSWR from "swr";
import { Nutricionista } from "@prisma/client";
import { ITEMS_PER_PAGE } from "@/global/pagination";
import { Skeleton } from "@/components/ui/skeleton";

interface NutricionistListProps {
    nutricionistCount: number;
}

const fetcher = (url: string) => fetch(url, {
    method:'GET',
    headers:{ "Content-Type" : "applicaton/json" },
}).then(async res => {
    const { nutricionists } = await res.json();

    return nutricionists;
});

export const getStaticProps = (async () => {
    const nutricionistCount = await prisma.nutricionista.count();
  
    return { props: { nutricionistCount }};
}) satisfies GetStaticProps<NutricionistListProps>;

export default function NutricionistList({ nutricionistCount }: InferGetStaticPropsType<typeof getStaticProps>) {
    const queryParam = useSearchParams();
    const { data, error, isLoading } = useSWR<Nutricionista[]>
        (`/api/nutricionist/pagination?offset=${queryParam?.get('offset') || 0}`, fetcher);

    return (
        <main className="flex flex-col h-screen">
            <Header />
            <section className="px-3 py-6 bg-[#FDFDFD] flex-1">
                {error ? (
                    <h1 className="py-5 text-center text-lg">We are sorry. We could not load the data</h1>
                ) : (
                    <>
                        <h1 className="font-bold text-xl mb-6 pl-3">Nutricionistas</h1>
                        <ul className="overflow-auto break-all min-h-[75vh]">
                            {isLoading ? Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
                                <Skeleton key={index} className="mt-7 w-[400px] h-[80px] rounded-lg ml-3" />
                            )) : data?.map(n => (
                                <li key={n.id} className="mobile:w-fit tablet:w-fit p-5 w-[600px] max-w-full desktop:min-w-96 fullscreen:min-w-96 break-words cursor-pointer hover:border hover:border-[#FDFDFD] hover:shadow-md hover:transition hover:duration-150 ease-in-out">
                                    <Link href={`/nutricionist/${n.id}`}>
                                        <figure className="flex items-center gap-x-3">
                                            <Image src={n.imagem_url || ''} width={70} height={70} className="rounded-full" alt="Nutricionista profile picture" />
                                            <figcaption>
                                                <h3 className="font-medium text-base">{n.nome}</h3>
                                                <p className="mt-1 text-sm max-w-lg">
                                                    {n.sobre.length > 100 ? n.sobre.substring(0, 100).concat('...') : n.sobre}
                                                </p>
                                            </figcaption>
                                        </figure>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </section>
            <Pagination count={nutricionistCount} />
            <Footer />
        </main>
    );
}