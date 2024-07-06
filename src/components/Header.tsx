import Image from "next/image";

export function Header() {
    return (
        <header className="flex items-center justify-between p-3 bg-[#C3E9D2]">
            <Image src={'/logo.svg'} width={30} height={30} alt="Logo jornada saudável, uma imagem cartoon colorida de um copo de água com detalhes em branco e a água quase até a borda do copo, cheio, na cor azul." />
            <Image src={'/button_hamburger.svg'} width={30} height={30} alt="Botão hamburguer para abrir o menu de opções do cabeçalho." />
        </header>
    );
}