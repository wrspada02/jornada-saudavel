import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Pagination } from "@/components/Pagination";
import { PostCard } from "@/components/PostCard";
import React from "react";

export default function PostList() {
    return (
        <main className="h-screen overflow-hidden">
            <Header />
            <section className="px-3 py-6 bg-[#FDFDFD]">
                <h1 className="font-bold text-xl mb-6">Publicações</h1>
                <ul className="overflow-auto h-[calc(69dvh)]">
                    <li className="cursor-pointer">
                        <PostCard />
                    </li>
                    <li className="cursor-pointer">
                        <PostCard />
                    </li>
                    <li className="cursor-pointer">
                        <PostCard />
                    </li>
                    <li className="cursor-pointer">
                        <PostCard />
                    </li>
                    <li className="cursor-pointer">
                        <PostCard />
                    </li>
                    <li className="cursor-pointer">
                        <PostCard />
                    </li>
                    <li className="cursor-pointer">
                        <PostCard />
                    </li>
                    <li className="cursor-pointer">
                        <PostCard />
                    </li>
                    <li className="cursor-pointer">
                        <PostCard />
                    </li>
                    <li className="cursor-pointer">
                        <PostCard />
                    </li>
                    <li className="cursor-pointer">
                        <PostCard />
                    </li>
                </ul>
            </section>
            <Pagination />
            <Footer />
        </main>
    );
}