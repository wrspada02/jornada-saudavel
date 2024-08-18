import { ChooseUser } from "@/components/create/choose-user";
import { ComumForm } from "@/components/create/comum-form";
import { ComumUser } from "@/components/create/interfaces/ComumUser";
import React, { useCallback, useEffect, useState } from "react";

interface CreateUserStage {
    level: number;
    type: 'c' | 'n' | null;
}

interface NutricionistUser {
    crn: string;
    nome: string;
    sobre: string;
    email: string;
    data_nasc: string;
}

type UserPayload = | ComumUser | NutricionistUser;

export default function CreateUser() {
    const [stage, setStage] = useState<CreateUserStage>({
        level: 1,
        type: null,
    });
    const [userPayload, setUserPayload] = useState<UserPayload | null>(null);

    const FormUserMap: Record<'c' | 'n', JSX.Element> = {
        'c': <ComumForm onSubmit={(values: ComumUser) => { setUserPayload(values); }} />,
        'n': <></>,
    };

    const CreateUserMap: Record<number, JSX.Element> = {
        1: <ChooseUser onSubmit={onChooseUserSubmit} />,
        2: FormUserMap[stage.type as | 'c' | 'n'],
    };

    function onChooseUserSubmit(type: 'c' | 'n') {
        setStage(prev => ({
            level: prev.level + 1,
            type,
        }));
    };

    function isComumUser(user: ComumUser | NutricionistUser): user is ComumUser {
        return (user as ComumUser).frequencia_atividade !== undefined;
    }

    const handleSubmitCreateComumUser = useCallback(() => {
        if(userPayload && !isComumUser(userPayload)) return;

        // create user
        console.log(userPayload);
    }, [userPayload]);

    useEffect(() => {
        handleSubmitCreateComumUser();
    }, [userPayload]);
    
    return CreateUserMap[stage.level];
}