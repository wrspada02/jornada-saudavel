/*
  Warnings:

  - You are about to drop the column `postId` on the `Comentario` table. All the data in the column will be lost.
  - You are about to drop the column `usuarioId` on the `Comentario` table. All the data in the column will be lost.
  - You are about to drop the column `nutricionistaId` on the `Post` table. All the data in the column will be lost.
  - The primary key for the `Seguidor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `nutricionistaId` on the `Seguidor` table. All the data in the column will be lost.
  - You are about to drop the column `usuarioId` on the `Seguidor` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[usuario_id]` on the table `Comentario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `post_id` to the `Comentario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuario_id` to the `Comentario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nutricionista_id` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nutricionista_id` to the `Seguidor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuario_id` to the `Seguidor` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Comentario" DROP CONSTRAINT "Comentario_postId_fkey";

-- DropForeignKey
ALTER TABLE "Comentario" DROP CONSTRAINT "Comentario_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_nutricionistaId_fkey";

-- DropForeignKey
ALTER TABLE "Seguidor" DROP CONSTRAINT "Seguidor_nutricionistaId_fkey";

-- DropForeignKey
ALTER TABLE "Seguidor" DROP CONSTRAINT "Seguidor_usuarioId_fkey";

-- DropIndex
DROP INDEX "Comentario_usuarioId_key";

-- AlterTable
ALTER TABLE "Comentario" DROP COLUMN "postId",
DROP COLUMN "usuarioId",
ADD COLUMN     "post_id" TEXT NOT NULL,
ADD COLUMN     "usuario_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "nutricionistaId",
ADD COLUMN     "nutricionista_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Seguidor" DROP CONSTRAINT "Seguidor_pkey",
DROP COLUMN "nutricionistaId",
DROP COLUMN "usuarioId",
ADD COLUMN     "nutricionista_id" TEXT NOT NULL,
ADD COLUMN     "usuario_id" TEXT NOT NULL,
ADD CONSTRAINT "Seguidor_pkey" PRIMARY KEY ("usuario_id", "nutricionista_id");

-- CreateIndex
CREATE UNIQUE INDEX "Comentario_usuario_id_key" ON "Comentario"("usuario_id");

-- AddForeignKey
ALTER TABLE "Seguidor" ADD CONSTRAINT "Seguidor_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Seguidor" ADD CONSTRAINT "Seguidor_nutricionista_id_fkey" FOREIGN KEY ("nutricionista_id") REFERENCES "Nutricionista"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_nutricionista_id_fkey" FOREIGN KEY ("nutricionista_id") REFERENCES "Nutricionista"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comentario" ADD CONSTRAINT "Comentario_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comentario" ADD CONSTRAINT "Comentario_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
