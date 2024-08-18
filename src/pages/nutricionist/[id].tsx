import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import { Nutricionista } from "@prisma/client";
import prisma from "@/lib/prisma";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

interface NutricionistProfileProps {
  nutricionist: Nutricionista | null;
};

export const getStaticProps = (async ({ params }) => {
  const nutricionist = await prisma.nutricionista
    .findFirst({ where: { id: params?.id as string }, include: { especialidade: true }});

  return { props: { nutricionist: JSON.parse(JSON.stringify(nutricionist)) ?? null } };
}) satisfies GetStaticProps<NutricionistProfileProps>;

export const getStaticPaths = (async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}) satisfies GetStaticPaths<{ id: string }>;

export default function NutricionistProfile({ nutricionist }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main className="flex flex-col h-screen">
      <Header />
      <section className="flex-1 p-3">
        <figure className="flex items-center gap-x-5 mobile:justify-between tablet:justify-between">
          <figcaption className="text-xl font-bold">
            {nutricionist?.nome}
          </figcaption>
          <Image src={nutricionist?.imagem_url || ''} width={70} height={70} className="rounded-full" alt="Nutricionista profile picture" />
        </figure>

        <section className="mt-5 max-w-full break-all">
          <h2 className="mb-6 text-xl font-bold">Sobre</h2>
          <p className="text-base">{nutricionist?.sobre}</p>
        </section>

        <section className="mt-5 max-w-full break-all">
          <h2 className="mb-6 text-xl font-bold">Especialidade</h2>
          <p className="text-base">{nutricionist?.especialidade.nome}</p>
        </section>
        
        <section className="mt-5 max-w-full break-all">
          <h2 className="mb-6 text-xl font-bold">Tempo de Experiência</h2>
          <p className="text-base">{nutricionist?.tempo_exp} anos</p>
        </section>

        <section className="mt-5 max-w-full break-all">
          <h2 className="mb-6 text-xl font-bold">CRN</h2>
          <p className="text-base">{nutricionist?.crn}</p>
        </section>

        <section className="mt-5 max-w-full break-all">
          <h2 className="mb-6 text-xl font-bold">Idade</h2>
          <p className="text-base">{new Date().getFullYear()-new Date(nutricionist?.data_nasc).getFullYear()} anos</p>
        </section>
      </section>
      <Footer />
    </main>
  );
}