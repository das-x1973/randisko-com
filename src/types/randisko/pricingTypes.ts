// src/types/randisko/pricingTypes.ts


export type PricingPlanType = {
  title: string
  imgSrc: string
  subtitle: string
  imgWidth?: number
  imgHeight?: number
  currentPlan: boolean
  popularPlan: boolean
  monthlyPrice: number
  speedDatingPrice: number
  planBenefits: string[]
  yearlyPlan: {
    monthly: number
    annually: number
  }
}
