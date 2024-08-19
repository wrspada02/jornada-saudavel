import prisma from "@/lib/prisma";

const main = () => {

    const objetivoEspecialidade = ['Perca de peso', 'Ganho de massa', 'Saúde Nutricional'];

    objetivoEspecialidade.forEach(async (oe) => {
        await prisma.objetivoEspecialidade.create({
            data: {
                nome: oe,
            },
        });
    });
};

main();
