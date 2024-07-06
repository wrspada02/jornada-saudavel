import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PostCard } from "@/components/PostCard";

export default function Home() {
  return (
    <>
      <Header />
      <main className="px-3 py-6">
        <section>
          <h1 className="text-xl font-bold">Confira o que os nutricionistas estão postando</h1>
          <ul className="py-3">
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
