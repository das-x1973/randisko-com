-- CreateTable
CREATE TABLE "pricing_plans" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "imgSrc" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "imgWidth" INTEGER,
    "imgHeight" INTEGER,
    "currentPlan" BOOLEAN NOT NULL DEFAULT false,
    "popularPlan" BOOLEAN NOT NULL DEFAULT false,
    "monthlyPrice" DOUBLE PRECISION NOT NULL,
    "planBenefits" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "yearlyMonthly" DOUBLE PRECISION NOT NULL,
    "yearlyAnnually" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pricing_plans_pkey" PRIMARY KEY ("id")
);
