import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { ComumUser } from "../../interfaces/ComumUser";

const FormSchema = z.object({
    altura: z.string({
        required_error: 'O campo altura é obrigatório',
    }),
    peso: z.string({
        required_error: 'O campo peso é obrigatório',
    }),
    data_nasc: z.string({
        required_error: 'O campo data de nascimento é obrigatório',
    }),
});

interface FirstStageProps {
    onSubmit(values: Pick<ComumUser, 'altura' | 'data_nasc' | 'peso'>): void;
}

export function FirstStage({ onSubmit }: FirstStageProps) {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            altura: '',
            data_nasc: '',
            peso: '',
        }
    });

    function onSubmitForm(values: z.infer<typeof FormSchema>) {
        const data: Pick<ComumUser, 'altura' | 'data_nasc' | 'peso'> = {
            ...values,
            altura: parseInt(values.altura),
            peso: parseInt(values.peso),
        };

        onSubmit(data);
    }

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmitForm)} className="flex flex-col p-14 justify-center h-screen bg-create animate-opacity-entrance">
                <h1 className="font-bold text-3xl text-[#5A5454]">Insira seus dados de cadastro</h1>
                <FormField
                    control={form.control}
                    name="altura"
                    render={({ field }) => (
                        <FormItem className="my-5">
                            <FormLabel>Altura</FormLabel>
                            <FormControl>
                                <Input className="max-w-[500px]" placeholder="Digite sua altura" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="peso"
                    render={({ field }) => (
                        <FormItem className="mb-5">
                            <FormLabel>Peso</FormLabel>
                            <FormControl>
                                <Input className="max-w-[500px]" placeholder="Digite seu peso" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="data_nasc"
                    render={({ field }) => (
                        <FormItem className="mb-5">
                            <FormLabel>Data de nascimento</FormLabel>
                            <FormControl>
                                <Input className="max-w-[500px]" placeholder="Insira sua data de nascimento" {...field} />
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