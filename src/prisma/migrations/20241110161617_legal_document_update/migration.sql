/*
  Warnings:

  - Added the required column `language` to the `LegalDocument` table without a default value. This is not possible if the table is not empty.
  - Added the required column `region` to the `LegalDocument` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "LegalDocument_type_isActive_idx";

-- AlterTable
ALTER TABLE "LegalDocument" ADD COLUMN     "language" TEXT NOT NULL,
ADD COLUMN     "region" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "LegalDocument_type_region_isActive_idx" ON "LegalDocument"("type", "region", "isActive");
