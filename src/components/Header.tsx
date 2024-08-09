"use client";
import Image from "next/image";
import React from "react";

export function Header() {
    const [isOpenHeaderMobile, setIsOpenHeaderMobile] = React.useState<boolean>(false);
    return isOpenHeaderMobile ? (
            <header className="w-screen h-screen bg-mobileHeader p-3 fixed top-0 left-0 z-10 animate-opacity-entrance">
                <nav className="text-black">
                    <ul className="flex items-end flex-col gap-5">
                        <button onClick={() => {
                            setIsOpenHeaderMobile(false);
                        }}>
                            <li className="font-semibold text-3xl cursor-pointer">X</li>
                        </button>
                        <li className="font-semibold text-xl cursor-pointer">Home</li>
                        <li className="font-semibold text-xl cursor-pointer">Publicações</li>
                        <li className="font-semibold text-xl cursor-pointer">Nutricionistas</li>
                    </ul>
                </nav>
            </header>
        ) : (
            <header className="flex items-center justify-between p-3 tablet:p-5 desktop:p-6 bg-[#C3E9D2]">
                <Image src={'/logo.svg'} width={30} height={30} alt="Logo jornada saudável, uma imagem cartoon colorida de um copo de água com detalhes em branco e a água quase até a borda do copo, cheio, na cor azul." />
                <nav>
                    <ul className="flex items-center gap-x-5">
                        <li className="mobile:block hidden">
                            <button onClick={() => {
                                setIsOpenHeaderMobile(true);
                            }}>
                            <Image src={'/button_hamburger.svg'} width={30} height={30} alt="Botão hamburguer para abrir o menu de opções do cabeçalho." />
                            </button>
                        </li>
                        <li className="mobile:hidden font-medium text-xl cursor-pointer">Home</li>
                        <li className="mobile:hidden font-medium text-xl cursor-pointer">Publicações</li>
                        <li className="mobile:hidden font-medium text-xl cursor-pointer">Nutricionistas</li>
                    </ul>
                </nav>
            </header>
        );
}