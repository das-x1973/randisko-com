// src/app/(public)/pricing/page.tsx

// Next Imports
import type { Metadata } from 'next'

// Component Imports
import PricingWrapper from '@/views/front-pages/pricing'

// Import centralized pricing data directly for Phase 1
import { pricingData } from '@/configs/pricingDataCards'

// Metadata for SEO and Social Media
export const metadata: Metadata = {
  title: 'Pricing Plans | Randisko - Mindful Dating',
  description:
    'Explore Randisko’s pricing plans and choose the one that best fits your needs. Join our mindful dating community today.',
  openGraph: {
    title: 'Pricing Plans | Randisko',
    description:
      'Discover the pricing options available for our mindful dating community. Choose from Free, Basic, or Premium plans.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing Plans | Randisko',
    description: 'Check out our pricing options and choose the plan that fits you best. Mindful dating starts here.'
  }
}

const PricingPage = () => {
  // Use centralized pricing data directly
  const data = pricingData.plans

  return <PricingWrapper data={data} />
}

export default PricingPage
