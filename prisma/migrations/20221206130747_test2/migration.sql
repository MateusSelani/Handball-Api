/*
  Warnings:

  - Made the column `idAdress` on table `stadium` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "stadium" DROP CONSTRAINT "stadium_idAdress_fkey";

-- AlterTable
ALTER TABLE "stadium" ALTER COLUMN "idAdress" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "stadium" ADD CONSTRAINT "stadium_idAdress_fkey" FOREIGN KEY ("idAdress") REFERENCES "adress"("idAdress") ON DELETE RESTRICT ON UPDATE CASCADE;
