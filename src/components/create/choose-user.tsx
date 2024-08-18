import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

interface ChooseUserProps {
    onSubmit(type: 'c' | 'n'): void;
}

const FormSchema = z.object({
    type: z.enum(["c", "n"], {
        required_error: "Você precisa selecionar um tipo de usuário."
    }),
});

export function ChooseUser({ onSubmit }: ChooseUserProps) {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            type: 'c',
        }
    });

    function onSubmitForm(values: z.infer<typeof FormSchema>) {
        onSubmit(values.type);
    }

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmitForm)} className="flex flex-col p-14 justify-center h-screen bg-create animate-opacity-entrance">
                <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-[#5A5454] text-3xl mb-14 font-bold">Escolha seu tipo de usuário</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    value={field.value}
                                    onValueChange={field.onChange}
                                >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="c" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Comum
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="n" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Nutricionista
                                        </FormLabel>
                                    </FormItem>
                                </RadioGroup>
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
