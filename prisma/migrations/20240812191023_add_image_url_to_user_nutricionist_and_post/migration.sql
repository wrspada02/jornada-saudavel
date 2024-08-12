-- CreateTable
CREATE TABLE "ObjetivoEspecialidade" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "ObjetivoEspecialidade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "data_nasc" TIMESTAMP(3) NOT NULL,
    "tipo_atividade" TEXT NOT NULL,
    "altura" DOUBLE PRECISION,
    "peso" DOUBLE PRECISION,
    "imagem_url" TEXT,
    "frequencia_atividade" INTEGER,
    "objetivo_id" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Nutricionista" (
    "id" TEXT NOT NULL,
    "crn" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "sobre" TEXT NOT NULL,
    "data_nasc" TIMESTAMP(3) NOT NULL,
    "imagem_url" TEXT,
    "tempo_exp" INTEGER NOT NULL,
    "especialidade_id" TEXT NOT NULL,

    CONSTRAINT "Nutricionista_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Seguidor" (
    "usuarioId" TEXT NOT NULL,
    "nutricionistaId" TEXT NOT NULL,

    CONSTRAINT "Seguidor_pkey" PRIMARY KEY ("usuarioId","nutricionistaId")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "tipo" INTEGER NOT NULL,
    "titulo" TEXT NOT NULL,
    "subtitulo" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL,
    "data_publicacao" TIMESTAMP(3) NOT NULL,
    "imagem_url" TEXT,
    "qtd_likes" INTEGER NOT NULL,
    "qtd_comentarios" INTEGER NOT NULL,
    "nutricionistaId" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comentario" (
    "id" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,

    CONSTRAINT "Comentario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Comentario_usuarioId_key" ON "Comentario"("usuarioId");

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_objetivo_id_fkey" FOREIGN KEY ("objetivo_id") REFERENCES "ObjetivoEspecialidade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nutricionista" ADD CONSTRAINT "Nutricionista_especialidade_id_fkey" FOREIGN KEY ("especialidade_id") REFERENCES "ObjetivoEspecialidade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Seguidor" ADD CONSTRAINT "Seguidor_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Seguidor" ADD CONSTRAINT "Seguidor_nutricionistaId_fkey" FOREIGN KEY ("nutricionistaId") REFERENCES "Nutricionista"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_nutricionistaId_fkey" FOREIGN KEY ("nutricionistaId") REFERENCES "Nutricionista"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comentario" ADD CONSTRAINT "Comentario_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comentario" ADD CONSTRAINT "Comentario_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
