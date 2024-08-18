import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { NutricionistUser } from "../../interfaces/NutricionistUser";
import { Dropdown } from "@/components/Dropdown";
import { ObjetivoEspecialidade } from "@prisma/client";

const FormSchema = z.object({
    crn: z.string().regex(/^\d{4}\/[A-Z]$/, { message: 'Deve ser no formato XXXX/P' }),
    especialidade_id: z.string().uuid({ message: 'Deve ser uma especialidade válida' }),
    data_nasc: z.string().regex(/(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/, { message: 'A data deve ser formato DD/MM/YYYY'}),
});

interface FirstStageProps {
    onSubmit(values: Pick<NutricionistUser, 'crn' | 'especialidade_id' | 'data_nasc'>): void;
    goalsEspecialities: ObjetivoEspecialidade[];
}

export function FirstStage({ onSubmit, goalsEspecialities }: FirstStageProps) {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    });

    function onSubmitForm(values: z.infer<typeof FormSchema>) {
        onSubmit(values);
    }

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmitForm)} className="flex flex-col p-14 justify-center h-screen bg-create animate-opacity-entrance">
                <h1 className="font-bold text-3xl text-[#5A5454]">Insira seus dados de cadastro</h1>
                <FormField
                    control={form.control}
                    name="crn"
                    render={({ field }) => (
                        <FormItem className="my-5">
                            <FormLabel>CRN</FormLabel>
                            <FormControl>
                                <Input className="max-w-[500px]" placeholder="Digite seu CRN" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="especialidade_id"
                    render={({ field }) => (
                        <FormItem className="mb-5">
                            <FormLabel className="block">Especialidade</FormLabel>
                            <FormControl>
                                <Dropdown
                                    data={goalsEspecialities} 
                                    value={field.value} 
                                    onChange={(value) => {
                                        form.setValue('especialidade_id', value);
                                    }} 
                                />
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