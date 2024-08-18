import { useState } from "react";
import { FirstStage } from "./first-stage";
import { LastStage } from "./last-stage";
import { ObjetivoEspecialidade } from "@prisma/client";
import { NutricionistUser } from "../../interfaces/NutricionistUser";

interface ComumFormProps {
    onSubmit(values: NutricionistUser): void;
    goalsEspecialities: ObjetivoEspecialidade[];
}

interface FormProps {
    stage: number;
    data: NutricionistUser;
}

type FirstStageProps = Pick<NutricionistUser, 'crn' | 'especialidade_id' | 'data_nasc'>;

type LastStageProps = Pick<NutricionistUser, 'sobre' | 'tempo_exp'>;

export function NutricionistForm({ onSubmit, goalsEspecialities }: ComumFormProps) {
    const [form, setForm] = useState<FormProps>({
        data: {
            crn: '',
            data_nasc: '',
            especialidade_id: '',
            nome: '',
            email: '',
            sobre: '',
            tempo_exp: 0,
        },
        stage: 1,
    });

    const NutricionistFormMap: Record<number, JSX.Element> = {
        1: <FirstStage
            onSubmit={(values: FirstStageProps) => {
                 setForm(prev => ({ data: { ...prev.data, ...values }, stage: prev.stage+1 }));
        }} goalsEspecialities={goalsEspecialities} />,
        2: <LastStage onSubmit={(values: LastStageProps) => {
            const data = {
                ...form.data,
                ...values,
            };

            setForm(prev => ({ data, stage: prev.stage+1 }));
            onSubmit(data);
        }} />,
    };

    return NutricionistFormMap[form.stage];
}