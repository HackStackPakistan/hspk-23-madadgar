/*
  Warnings:

  - You are about to drop the column `avaliable_resources` on the `pledges` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "pledges" DROP COLUMN "avaliable_resources",
ADD COLUMN     "available_resources" JSON;
