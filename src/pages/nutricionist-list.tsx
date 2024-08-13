import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Pagination } from "@/components/Pagination";
import prisma from "@/lib/prisma";
import { useSearchParams } from "next/navigation";

interface NutricionistListProps {
    nutricionistCount: number;
}

export const getStaticProps = (async (context) => {
    const nutricionistCount = await prisma.nutricionista.count();
  
    return { props: { nutricionistCount }};
  }) satisfies GetStaticProps<NutricionistListProps>;

export default function NutricionistList({ nutricionistCount }: InferGetStaticPropsType<typeof getStaticProps>) {
    const queryParam = useSearchParams();

    useEffect(() => {
        console.log(queryParam?.get('offset'));
    }, [queryParam]);

    return (
        <main className="h-screen overflow-hidden">
            <Header />
            <section className="px-3 py-6 bg-[#FDFDFD]">
                <h1 className="font-bold text-xl mb-6 pl-3">Nutricionistas</h1>
                <ul className="overflow-auto h-[calc(69dvh)]">
                    <li className="mt-7 cursor-pointer w-fit">
                        <Link href={'/'}>
                            <figure className="flex items-center gap-x-3 w-fit p-3 cursor-pointer hover:border hover:border-[#FDFDFD] hover:shadow-md hover:transition hover:duration-150 ease-in-out">
                                <Image src='/nutricionista_imagem.jpeg' width={70} height={70} className="rounded-full" alt="Nutricionista profile picture" />
                                <figcaption>
                                    <h3 className="font-medium text-base">Raquel de Oliveira Santos</h3>
                                    <p className="mt-1 text-sm max-w-lg">Formada em nutrição em 2015, especializada em perca de peso pela USP, hoje Raquel contabiliza e auxilia mais de 100 clientes mensalmente.</p>
                                </figcaption>
                            </figure>
                        </Link>
                    </li>
                    <li className="mt-7 cursor-pointer w-fit">
                        <Link href={'/'}>
                            <figure className="flex items-center gap-x-3 w-fit p-3 cursor-pointer hover:border hover:border-[#FDFDFD] hover:shadow-md hover:transition hover:duration-150 ease-in-out">
                                <Image src='/nutricionista_imagem.jpeg' width={70} height={70} className="rounded-full" alt="Nutricionista profile picture" />
                                <figcaption>
                                    <h3 className="font-medium text-base">Raquel de Oliveira Santos</h3>
                                    <p className="mt-1 text-sm max-w-lg">Formada em nutrição em 2015, especializada em perca de peso pela USP, hoje Raquel contabiliza e auxilia mais de 100 clientes mensalmente.</p>
                                </figcaption>
                            </figure>
                        </Link>
                    </li>
                    <li className="mt-7 cursor-pointer w-fit">
                        <Link href={'/'}>
                            <figure className="flex items-center gap-x-3 w-fit p-3 cursor-pointer hover:border hover:border-[#FDFDFD] hover:shadow-md hover:transition hover:duration-150 ease-in-out">
                                <Image src='/nutricionista_imagem.jpeg' width={70} height={70} className="rounded-full" alt="Nutricionista profile picture" />
                                <figcaption>
                                    <h3 className="font-medium text-base">Raquel de Oliveira Santos</h3>
                                    <p className="mt-1 text-sm max-w-lg">Formada em nutrição em 2015, especializada em perca de peso pela USP, hoje Raquel contabiliza e auxilia mais de 100 clientes mensalmente.</p>
                                </figcaption>
                            </figure>
                        </Link>
                    </li>
                    <li className="mt-7 cursor-pointer w-fit">
                        <Link href={'/'}>
                            <figure className="flex items-center gap-x-3 w-fit p-3 cursor-pointer hover:border hover:border-[#FDFDFD] hover:shadow-md hover:transition hover:duration-150 ease-in-out">
                                <Image src='/nutricionista_imagem.jpeg' width={70} height={70} className="rounded-full" alt="Nutricionista profile picture" />
                                <figcaption>
                                    <h3 className="font-medium text-base">Raquel de Oliveira Santos</h3>
                                    <p className="mt-1 text-sm max-w-lg">Formada em nutrição em 2015, especializada em perca de peso pela USP, hoje Raquel contabiliza e auxilia mais de 100 clientes mensalmente.</p>
                                </figcaption>
                            </figure>
                        </Link>
                    </li>
                    <li className="mt-7 cursor-pointer w-fit">
                        <Link href={'/'}>
                            <figure className="flex items-center gap-x-3 w-fit p-3 cursor-pointer hover:border hover:border-[#FDFDFD] hover:shadow-md hover:transition hover:duration-150 ease-in-out">
                                <Image src='/nutricionista_imagem.jpeg' width={70} height={70} className="rounded-full" alt="Nutricionista profile picture" />
                                <figcaption>
                                    <h3 className="font-medium text-base">Raquel de Oliveira Santos</h3>
                                    <p className="mt-1 text-sm max-w-lg">Formada em nutrição em 2015, especializada em perca de peso pela USP, hoje Raquel contabiliza e auxilia mais de 100 clientes mensalmente.</p>
                                </figcaption>
                            </figure>
                        </Link>
                    </li>
                    <li className="mt-7 cursor-pointer w-fit">
                        <Link href={'/'}>
                            <figure className="flex items-center gap-x-3 w-fit p-3 cursor-pointer hover:border hover:border-[#FDFDFD] hover:shadow-md hover:transition hover:duration-150 ease-in-out">
                                <Image src='/nutricionista_imagem.jpeg' width={70} height={70} className="rounded-full" alt="Nutricionista profile picture" />
                                <figcaption>
                                    <h3 className="font-medium text-base">Raquel de Oliveira Santos</h3>
                                    <p className="mt-1 text-sm max-w-lg">Formada em nutrição em 2015, especializada em perca de peso pela USP, hoje Raquel contabiliza e auxilia mais de 100 clientes mensalmente.</p>
                                </figcaption>
                            </figure>
                        </Link>
                    </li>
                    <li className="mt-7 cursor-pointer w-fit">
                        <Link href={'/'}>
                            <figure className="flex items-center gap-x-3 w-fit p-3 cursor-pointer hover:border hover:border-[#FDFDFD] hover:shadow-md hover:transition hover:duration-150 ease-in-out">
                                <Image src='/nutricionista_imagem.jpeg' width={70} height={70} className="rounded-full" alt="Nutricionista profile picture" />
                                <figcaption>
                                    <h3 className="font-medium text-base">Raquel de Oliveira Santos</h3>
                                    <p className="mt-1 text-sm max-w-lg">Formada em nutrição em 2015, especializada em perca de peso pela USP, hoje Raquel contabiliza e auxilia mais de 100 clientes mensalmente.</p>
                                </figcaption>
                            </figure>
                        </Link>
                    </li>
                    <li className="mt-7 cursor-pointer w-fit">
                        <Link href={'/'}>
                            <figure className="flex items-center gap-x-3 w-fit p-3 cursor-pointer hover:border hover:border-[#FDFDFD] hover:shadow-md hover:transition hover:duration-150 ease-in-out">
                                <Image src='/nutricionista_imagem.jpeg' width={70} height={70} className="rounded-full" alt="Nutricionista profile picture" />
                                <figcaption>
                                    <h3 className="font-medium text-base">Raquel de Oliveira Santos</h3>
                                    <p className="mt-1 text-sm max-w-lg">Formada em nutrição em 2015, especializada em perca de peso pela USP, hoje Raquel contabiliza e auxilia mais de 100 clientes mensalmente.</p>
                                </figcaption>
                            </figure>
                        </Link>
                    </li>
                    <li className="mt-7 cursor-pointer w-fit">
                        <Link href={'/'}>
                            <figure className="flex items-center gap-x-3 w-fit p-3 cursor-pointer hover:border hover:border-[#FDFDFD] hover:shadow-md hover:transition hover:duration-150 ease-in-out">
                                <Image src='/nutricionista_imagem.jpeg' width={70} height={70} className="rounded-full" alt="Nutricionista profile picture" />
                                <figcaption>
                                    <h3 className="font-medium text-base">Raquel de Oliveira Santos</h3>
                                    <p className="mt-1 text-sm max-w-lg">Formada em nutrição em 2015, especializada em perca de peso pela USP, hoje Raquel contabiliza e auxilia mais de 100 clientes mensalmente.</p>
                                </figcaption>
                            </figure>
                        </Link>
                    </li>
                </ul>
            </section>
            <Pagination count={nutricionistCount} />
            <Footer />
        </main>
    );
}