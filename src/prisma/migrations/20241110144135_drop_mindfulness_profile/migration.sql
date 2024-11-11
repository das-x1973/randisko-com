/*
  Warnings:

  - You are about to drop the `MindfulnessProfile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "MindfulnessProfile" DROP CONSTRAINT "MindfulnessProfile_userId_fkey";

-- DropTable
DROP TABLE "MindfulnessProfile";
