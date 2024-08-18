/*
  Warnings:

  - Added the required column `email` to the `Nutricionista` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Nutricionista" ADD COLUMN     "email" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "email" TEXT NOT NULL;
