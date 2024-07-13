import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PostCard } from "@/components/PostCard";
import React from "react";

export default function NutricionistList() {
    return (
        <>
            <Header />
            <main className="px-3 py-6 bg-[#FDFDFD]">
                <h1 className="font-bold text-xl mb-6">Publicações</h1>
                <ul className="max-h-[78vh] overflow-auto">
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
            </main>
            <Footer />
        </>
    );
}