/*
  Warnings:

  - Added the required column `idChampionship` to the `classification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idTeam` to the `classification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idChampionship` to the `match` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "classification" ADD COLUMN     "idChampionship" TEXT NOT NULL,
ADD COLUMN     "idTeam" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "match" ADD COLUMN     "idChampionship" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "classification" ADD CONSTRAINT "classification_idChampionship_fkey" FOREIGN KEY ("idChampionship") REFERENCES "championship"("idChampionship") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match" ADD CONSTRAINT "match_idChampionship_fkey" FOREIGN KEY ("idChampionship") REFERENCES "championship"("idChampionship") ON DELETE RESTRICT ON UPDATE CASCADE;
