import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PostCard } from "@/components/PostCard";
import Image from "next/image";

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
          <footer className="text-base font-medium text-right my-4">Veja mais...</footer>
        </section>
        <section>
          <h2 className="font-bold text-xl text-center mb-14 mt-12">Conheça nossos especialistas</h2>
          <article className="flex items-center justify-center gap-x-8 overflow-x-hidden">
            <Image src={'/arrow-left.svg'} width={20} height={20} alt="Flecha de navegação à esquerda." />
            <div className="max-w-[70%] overflow-hidden">
              <ul className="flex items-center justify-center gap-9 flex-1">
                <li className="min-w-16">
                  <figure>
                    <Image src='/nutricionista_imagem.jpeg' width={70} height={70} className="rounded-full" alt="Nutricionista profile picture" />
                    <figcaption className="font-medium text-sm text-center">Raquel</figcaption>
                  </figure>
                </li>
                <li className="min-w-16">
                  <figure className="flex flex-col justify-center items-center">
                    <Image src='/nutricionista_imagem.jpeg' width={70} height={70} className="rounded-full" alt="Nutricionista profile picture" />
                    <figcaption className="font-medium text-sm text-center">Raquel</figcaption>
                  </figure>
                </li>
                <li className="min-w-16">
                  <figure className="flex flex-col justify-center items-center">
                    <Image src='/nutricionista_imagem.jpeg' width={70} height={70} className="rounded-full" alt="Nutricionista profile picture" />
                    <figcaption className="font-medium text-sm text-center">Raquel</figcaption>
                  </figure>
                </li>
                <li className="min-w-16">
                  <figure className="flex flex-col justify-center items-center">
                    <Image src='/nutricionista_imagem.jpeg' width={70} height={70} className="rounded-full" alt="Nutricionista profile picture" />
                    <figcaption className="font-medium text-sm text-center">Raquel</figcaption>
                  </figure>
                </li>
                <li className="min-w-16">
                  <figure className="flex flex-col justify-center items-center">
                    <Image src='/nutricionista_imagem.jpeg' width={70} height={70} className="rounded-full" alt="Nutricionista profile picture" />
                    <figcaption className="font-medium text-sm text-center">Raquel</figcaption>
                  </figure>
                </li>
                <li className="min-w-16">
                  <figure className="flex flex-col justify-center items-center">
                    <Image src='/nutricionista_imagem.jpeg' width={70} height={70} className="rounded-full" alt="Nutricionista profile picture" />
                    <figcaption className="font-medium text-sm text-center">Raquel</figcaption>
                  </figure>
                </li>
              </ul>
            </div>
            <Image src={'/arrow-right.svg'} width={20} height={20} alt="Flecha de navegação à direita." />
          </article>
          <footer className="flex items-center justify-center gap-x-3 mt-5">
            <div className="w-4 h-4 bg-black rounded-full"></div>
            <div className="w-4 h-4 bg-black rounded-full"></div>
            <div className="w-4 h-4 bg-black rounded-full"></div>
          </footer>
        </section>
      </main>
      <Footer />
    </>
  );
}
