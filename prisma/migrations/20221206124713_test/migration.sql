/*
  Warnings:

  - Added the required column `homeTeam` to the `match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `visitingTeam` to the `match` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "match" ADD COLUMN     "homeTeam" TEXT NOT NULL,
ADD COLUMN     "visitingTeam" TEXT NOT NULL;
