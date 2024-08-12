import Link from "next/link"

export function PostCard() {
    return (
        <Link href={'/'}>
            <div className="w-fit pl-2 p-5 cursor-pointer hover:border hover:border-[#FDFDFD] hover:shadow-md hover:transition hover:duration-150 ease-in-out">
                <h2 className="text-lg font-medium">Salada de frutas no café da manhã, quais são os benefícios?</h2>
                <article className="py-1 text-xs text-[#6A6A6A]">
                    <p>Veja quais são os benefícios em se alimentar com salada de frutas pela manhã, existem muitos....</p>
                    <p className="pt-4">Jul 02, 2024 - Receitas</p>
                </article>
            </div>
        </Link>
    );
}