import { ChooseUser } from "@/components/create/choose-user";
import { ComumForm } from "@/components/create/comum-form";
import { ComumUser } from "@/components/create/interfaces/ComumUser";
import prisma from "@/lib/prisma";
import { useUser } from "@clerk/nextjs";
import { ObjetivoEspecialidade } from "@prisma/client";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
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

interface CreateComumUserProps {
    goalEspecialities: ObjetivoEspecialidade[];
}

type UserPayload = | ComumUser | NutricionistUser;

export const getStaticProps = (async (_) => {
    const goalEspecialities: ObjetivoEspecialidade[] = await prisma.objetivoEspecialidade.findMany({});

    return { props: { goalEspecialities: JSON.parse(JSON.stringify(goalEspecialities)) as ObjetivoEspecialidade[]  } };
  }) satisfies GetStaticProps<CreateComumUserProps>;

export default function CreateUser({ goalEspecialities }: InferGetStaticPropsType<typeof getStaticProps>) {
    const router = useRouter();
    const { user } = useUser();
    const [stage, setStage] = useState<CreateUserStage>({
        level: 1,
        type: null,
    });
    const [userPayload, setUserPayload] = useState<UserPayload | null>(null);
    const postComumUser = async (data: ComumUser) => {
        return await fetch('/api/comum/create', {
            body: JSON.stringify(data),
            method: 'POST',
        }).then(data => data.json());
    };

    const FormUserMap: Record<'c' | 'n', JSX.Element> = {
        'c': <ComumForm goalsEspecialities={goalEspecialities} onSubmit={(values: ComumUser) => { setUserPayload(values); }} />,
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

    const handleSubmitCreateComumUser = useCallback(async () => {
        if (!userPayload || !isComumUser(userPayload)) return;

        const result = await postComumUser({
            ...userPayload,
            email: user?.primaryEmailAddress?.emailAddress || '',
            nome: user?.fullName || '',
            data_nasc: new Date(userPayload.data_nasc).toISOString(),
        });

        if (result) {
            router.push('/?success=true&user');
        } else {
            router.push('/?success=false&user');
        }
    }, [userPayload]);

    useEffect(() => {
        handleSubmitCreateComumUser();
    }, [userPayload]);
    
    return CreateUserMap[stage.level];
}