// src/app/(randisko)/(public)/pricing/page.tsx

// Component Imports
import PricingWrapper from '@/views/randisko/pricing'

// Import centralized pricing data directly for Phase 1
import { pricingData } from '@/configs/pricingData'

const PricingPage = () => {
  // Use centralized pricing data directly
  const data = pricingData.plans

  return <PricingWrapper data={data} />
}

export default PricingPage
