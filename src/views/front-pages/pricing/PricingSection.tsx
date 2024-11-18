// src/views/randisko/pricing/PricingSection.tsx


// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { PricingPlanType } from '@/types/randisko/pricingTypes'

// Component Imports
import Pricing from '@components/randisko/pricing'

// Styles Imports
import frontCommonStyles from '@views/front-pages/styles.module.css'

const PricingSection = ({ data }: { data: PricingPlanType[] }) => {
  return (
    <section className='plb-[100px] bg-backgroundPaper pbs-[70px] -mbs-[70px]'>
      <div className={classnames('pbs-[50px] md:pbs-[100px]', frontCommonStyles.layoutSpacing)}>
        <Pricing data={data} />
      </div>
    </section>
  )
}

export default PricingSection
