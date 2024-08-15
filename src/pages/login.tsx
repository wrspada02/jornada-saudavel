import { useCallback, useEffect } from "react";
import { SignedOut, SignInButton, useAuth } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/router";
import { Loading } from "@/components/Loading";

export default function Login() {
    const { sessionId } = useAuth();
    const router = useRouter();
    
    const handleRouteLoggedUser = useCallback(() => {
        if (!sessionId) return;

        router.push('/');
    }, [sessionId]);

    useEffect(() => {
        handleRouteLoggedUser();
    }, [sessionId]);

    return (
        <main className="px-3 py-6 bg-login h-screen flex flex-col justify-center items-center gap-5">
            <h1 className="text-center text-white text-6xl">Jornada Saudável</h1>
            <SignedOut>
                <SignInButton>
                    <button 
                        className="mt-10 cursor-pointer hover:-translate-y-1 hover:opacity-80 transition duration-500"
                        type="submit"
                    >
                        <figure className="flex items-center gap-x-3 text-white bg-[#4285f4]">
                            <Image src={'/google-icon.png'} alt="Google icon" width={50} height={50} />
                            <figcaption className="px-2 font-medium text-xl mobile:text-lg">Sign up with Google</figcaption>
                        </figure>
                    </button>
                </SignInButton>
            </SignedOut>
            {sessionId && <Loading />}
        </main>
    );
}