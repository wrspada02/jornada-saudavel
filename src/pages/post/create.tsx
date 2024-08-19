import { z } from "zod";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Nutricionista, Post } from "@prisma/client";
import { useRouter } from "next/router";
import { useUser } from "@clerk/nextjs";
import useSWR from "swr";
import { useEffect } from "react";
import { Dropdown } from "@/components/Dropdown";
import { Button } from "@/components/ui/button";

const FormSchema = z.object({
    titulo: z.string().min(1, { message: 'Não pode ser nulo' }),
    subtitulo: z.string().min(1, { message: 'Não pode ser nulo' }),
    tipo: z.string(),
    conteudo: z.string().min(1, { message: 'Não pode ser nulo' }),
});

const fetcher = (url: string) => fetch(url, {
    method:'POST',
    headers:{ "Content-Type" : "applicaton/json" },
}).then(async res => {
    const { nutricionist } = await res.json();

    return nutricionist;
});

export default function CreatePost() {
    const router = useRouter();
    const { user } = useUser();
    const { data: userDb, mutate } = useSWR<Nutricionista>
        (`/api/nutricionist/getByEmail?email=${user?.primaryEmailAddress?.emailAddress}`, fetcher);
    
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    });

    async function onSubmit(values: z.infer<typeof FormSchema>) {
        if (!userDb) return;

        const data: Pick<Post, 'titulo' | 'subtitulo' | 'conteudo' | 'tipo' | 'nutricionista_id'> = {
            ...values,
            tipo: 1,
            nutricionista_id: userDb.id,
        };

        const createdPost = await fetch('/api/post/create', {
            body: JSON.stringify(data),
            method: 'POST',
        }).then(data => data.json());

        if (createdPost) {
            router.push('/post/list?success=true&type=publicacao&action=criacao');
        } else {
            router.push('/post/list?success=false&type=publicacao&action=criacao');
        }
    }

    useEffect(() => {
        mutate();
    }, [user]);

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col p-14 justify-center h-screen bg-create animate-opacity-entrance">
                <h1 className="font-bold text-3xl text-[#5A5454]">Insira os dados do post</h1>
                <FormField
                    control={form.control}
                    name="titulo"
                    render={({ field }) => (
                        <FormItem className="my-5">
                            <FormLabel>Título</FormLabel>
                            <FormControl>
                                <Input className="max-w-[500px]" placeholder="Digite o título..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="subtitulo"
                    render={({ field }) => (
                        <FormItem className="my-5">
                            <FormLabel>Subtítulo</FormLabel>
                            <FormControl>
                                <Input className="max-w-[500px]" placeholder="Digite o subtítulo" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="tipo"
                    render={({ field }) => (
                        <FormItem className="mb-5">
                            <FormLabel className="block">Tipo de conteúdo</FormLabel>
                            <FormControl>
                                <Dropdown
                                    data={[{ id: '1', nome: 'Receitas' }, { id: '2', nome: 'Publicação' }]} 
                                    value={field.value?.toString()} 
                                    onChange={(value) => {
                                        form.setValue('tipo', value);
                                    }} 
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="conteudo"
                    render={({ field }) => (
                        <FormItem className="my-5">
                            <FormLabel>Conteúdo</FormLabel>
                            <FormControl>
                                <Textarea className="max-w-[500px]" placeholder="Digite o conteúdo..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className="mt-10 max-w-[300px] bg-[#5A5454]" type="submit">Continuar</Button>
            </form>
        </FormProvider>
    );
}