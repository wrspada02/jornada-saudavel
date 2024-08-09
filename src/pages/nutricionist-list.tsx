import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PostCard } from "@/components/PostCard";
import Image from "next/image";
import React from "react";

export default function NutricionistList() {
    return (
        <>
            <Header />
            <main className="px-3 py-6 bg-[#FDFDFD] max-h-screen overflow-auto">
                <h1 className="font-bold text-xl mb-6">Nutricionistas</h1>
                <ul>
                    <li className="mt-7">
                        <figure className="flex items-center gap-x-3">
                            <Image src='/nutricionista_imagem.jpeg' width={70} height={70} className="rounded-full" alt="Nutricionista profile picture" />
                            <figcaption>
                                <h3 className="font-medium text-base">Raquel de Oliveira Santos</h3>
                                <p className="mt-1 text-sm max-w-lg">Formada em nutrição em 2015, especializada em perca de peso pela USP, hoje Raquel contabiliza e auxilia mais de 100 clientes mensalmente.</p>
                            </figcaption>
                        </figure>
                    </li>
                    <li className="mt-7">
                        <figure className="flex items-center gap-x-3">
                            <Image src='/nutricionista_imagem.jpeg' width={70} height={70} className="rounded-full" alt="Nutricionista profile picture" />
                            <figcaption>
                                <h3 className="font-medium text-base">Raquel de Oliveira Santos</h3>
                                <p className="mt-1 text-sm max-w-lg">Formada em nutrição em 2015, especializada em perca de peso pela USP, hoje Raquel contabiliza e auxilia mais de 100 clientes mensalmente.</p>
                            </figcaption>
                        </figure>
                    </li>
                    <li className="mt-7">
                        <figure className="flex items-center gap-x-3">
                            <Image src='/nutricionista_imagem.jpeg' width={70} height={70} className="rounded-full" alt="Nutricionista profile picture" />
                            <figcaption>
                                <h3 className="font-medium text-base">Raquel de Oliveira Santos</h3>
                                <p className="mt-1 text-sm max-w-lg">Formada em nutrição em 2015, especializada em perca de peso pela USP, hoje Raquel contabiliza e auxilia mais de 100 clientes mensalmente.</p>
                            </figcaption>
                        </figure>
                    </li>
                    <li className="mt-7">
                        <figure className="flex items-center gap-x-3">
                            <Image src='/nutricionista_imagem.jpeg' width={70} height={70} className="rounded-full" alt="Nutricionista profile picture" />
                            <figcaption>
                                <h3 className="font-medium text-base">Raquel de Oliveira Santos</h3>
                                <p className="mt-1 text-sm max-w-lg">Formada em nutrição em 2015, especializada em perca de peso pela USP, hoje Raquel contabiliza e auxilia mais de 100 clientes mensalmente.</p>
                            </figcaption>
                        </figure>
                    </li>
                    <li className="mt-7">
                        <figure className="flex items-center gap-x-3">
                            <Image src='/nutricionista_imagem.jpeg' width={70} height={70} className="rounded-full" alt="Nutricionista profile picture" />
                            <figcaption>
                                <h3 className="font-medium text-base">Raquel de Oliveira Santos</h3>
                                <p className="mt-1 text-sm max-w-lg">Formada em nutrição em 2015, especializada em perca de peso pela USP, hoje Raquel contabiliza e auxilia mais de 100 clientes mensalmente.</p>
                            </figcaption>
                        </figure>
                    </li>
                    <li className="mt-7">
                        <figure className="flex items-center gap-x-3">
                            <Image src='/nutricionista_imagem.jpeg' width={70} height={70} className="rounded-full" alt="Nutricionista profile picture" />
                            <figcaption>
                                <h3 className="font-medium text-base">Raquel de Oliveira Santos</h3>
                                <p className="mt-1 text-sm max-w-lg">Formada em nutrição em 2015, especializada em perca de peso pela USP, hoje Raquel contabiliza e auxilia mais de 100 clientes mensalmente.</p>
                            </figcaption>
                        </figure>
                    </li>
                </ul>
            </main>
            <Footer />
        </>
    );
}