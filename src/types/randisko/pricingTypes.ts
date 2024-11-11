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
  adFree: boolean
  planBenefits: string[]
  yearlyPlan: {
    monthly: number
    annually: number
  }
}
