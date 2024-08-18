import { z } from "zod";
import { ComumUser } from "../../interfaces/ComumUser";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const FormSchema = z.object({
    frequencia_atividade: z.coerce.number({ message: 'Deve ser um número' }).min(0, { message: 'Frequência deve ser maior ou igual a 0' }).max(7, { message: 'Frequência deve ser menor ou igual a 7 '}),
    objetivo_id: z.string().uuid({ message: 'Deve ser um válido objetivo selecionado' }),
    tipo_atividade: z.string().min(1, { message: 'Deve inserir um tipo de atividade' }),
});

interface LastStageProps {
    onSubmit(values: Pick<ComumUser, 'frequencia_atividade' | 'objetivo_id' | 'tipo_atividade'>): void;
}

export function LastStage({ onSubmit }: LastStageProps) {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    });

    function onSubmitForm(values: z.infer<typeof FormSchema>) {
        onSubmit(values);
    };

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmitForm)} className="flex flex-col p-14 justify-center h-screen bg-create animate-opacity-entrance">
                <h1 className="font-bold text-3xl text-[#5A5454]">Insira seus dados de cadastro</h1>
                <FormField
                    control={form.control}
                    name="frequencia_atividade"
                    render={({ field }) => (
                        <FormItem className="my-5">
                            <FormLabel>Frequência de atividade por semana</FormLabel>
                            <FormControl>
                                <Input className="max-w-[500px]" placeholder="Digite sua frequência de atividade" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="objetivo_id"
                    render={({ field }) => (
                        <FormItem className="mb-5">
                            <FormLabel>Objetivo</FormLabel>
                            <FormControl>
                                <Input className="max-w-[500px]" placeholder="Digite seu objetivo id" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="tipo_atividade"
                    render={({ field }) => (
                        <FormItem className="mb-5">
                            <FormLabel>Tipo de atividade que mais gosta de praticar</FormLabel>
                            <FormControl>
                                <Input className="max-w-[500px]" placeholder="Digite o tipo de atividade que mais gosta" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className="mt-10 max-w-[300px] bg-[#C3E9D2]" type="submit">Continuar</Button>
            </form>
        </FormProvider>
    );
}