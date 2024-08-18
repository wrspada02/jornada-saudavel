import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { NutricionistUser } from "../../interfaces/NutricionistUser";

const FormSchema = z.object({
    sobre: z.string().min(10, { message: 'Mínimo de 10 caracteres' }).max(200, { message: 'Máximo de 200 caracteres' }),
    tempo_exp: z.coerce.number({ message: 'Deve ser número' }).min(1, { message: 'Mínimo 1 ano de experiência' }),
});

interface LastStageProps {
    onSubmit(values: Pick<NutricionistUser, 'sobre' | 'tempo_exp'>): void;
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
                <h1 className="font-bold text-3xl text-[#5A5454]">Estamos quase lá</h1>
                <FormField
                    control={form.control}
                    name="sobre"
                    render={({ field }) => (
                        <FormItem className="my-5">
                            <FormLabel>Sobre</FormLabel>
                            <FormControl>
                                <Input className="max-w-[500px]" placeholder="Digite sobre você..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="tempo_exp"
                    render={({ field }) => (
                        <FormItem className="my-5">
                            <FormLabel>Tempo de experiência</FormLabel>
                            <FormControl>
                                <Input className="max-w-[500px]" placeholder="Digite seu tempo de experiência..." {...field} />
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