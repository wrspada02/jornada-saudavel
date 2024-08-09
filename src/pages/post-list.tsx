import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PostCard } from "@/components/PostCard";
import React from "react";

export default function PostList() {
    return (
        <main className="h-screen overflow-hidden">
            <Header />
            <section className="px-3 py-6 bg-[#FDFDFD]">
                <h1 className="font-bold text-xl mb-6">Publicações</h1>
                <ul className="overflow-auto h-[calc(73.5dvh)]">
                    <li>
                        <PostCard />
                    </li>
                    <li>
                        <PostCard />
                    </li>
                    <li>
                        <PostCard />
                    </li>
                    <li>
                        <PostCard />
                    </li>
                    <li>
                        <PostCard />
                    </li>
                    <li>
                        <PostCard />
                    </li>
                    <li>
                        <PostCard />
                    </li>
                </ul>
            </section>
            <Footer />
        </main>
    );
}