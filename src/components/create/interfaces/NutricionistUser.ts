export interface NutricionistUser {
    nome: string;
    email: string;
    crn: string;
    especialidade_id: string;
    imagem_url?: string;
    data_nasc: string;
    sobre: string;
    tempo_exp: number;
}