import Image from "next/image";

export default function Login() {
    
    return (
        <main className="px-3 py-6 bg-login h-screen flex flex-col justify-center items-center gap-5">
            <h1 className="text-center text-white text-6xl">Jornada Saudável</h1>
            <button 
                className="mt-10 cursor-pointer hover:-translate-y-1 hover:opacity-80 transition duration-500"
                type="submit"
            >
                <figure className="flex items-center gap-x-3 text-white bg-[#4285f4]">
                    <Image src={'/google-icon.png'} alt="Google icon" width={50} height={50} />
                    <figcaption className="px-2 font-medium text-xl mobile:text-lg">Sign up with Google</figcaption>
                </figure>
            </button>
        </main>
    );
}