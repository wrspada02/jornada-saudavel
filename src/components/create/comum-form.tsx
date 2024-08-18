import { useState } from "react";
import { ComumUser } from "./interfaces/ComumUser";
import { FirstStage } from "./comum/components/first-stage";
import { LastStage } from "./comum/components/last-stage";

interface ComumFormProps {
    onSubmit(values: ComumUser): void;
}

interface FormProps {
    stage: number;
    data: ComumUser;
}

type FirstStageProps = Pick<ComumUser, 'altura' | 'data_nasc' | 'peso'>;

type LastStageProps = Pick<ComumUser, 'frequencia_atividade' | 'objetivo_id' | 'tipo_atividade'>;

export function ComumForm({ onSubmit }: ComumFormProps) {
    const [form, setForm] = useState<FormProps>({
        data: {
            altura: 0,
            data_nasc: '',
            email: '',
            frequencia_atividade: 0,
            nome: '',
            objetivo_id: '',
            peso: 0,
            tipo_atividade: '',
        },
        stage: 1,
    });

    const ComumFormMap: Record<number, JSX.Element> = {
        1: <FirstStage 
            onSubmit={(values: FirstStageProps) => {
                 setForm(prev => ({ data: { ...prev.data, ...values }, stage: prev.stage+1 }));
        }} />,
        2: <LastStage onSubmit={(values: LastStageProps) => {
            const data = {
                ...form.data,
                ...values,
            };

            setForm(prev => ({ data, stage: prev.stage+1 }));
            onSubmit(data);
        }} />,
    };

    return ComumFormMap[form.stage];
}