// src/views/randisko/front-pages/pricing/Plans.tsx

// Data import
import { pricingData } from '@/configs/pricingData'

// MUI Imports
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

// Third-party Imports
import classnames from 'classnames'

// Styles Imports
import styles from './styles.module.css'
import tableStyles from '@core/styles/table.module.css'

function Plans() {
  // Get a unique list of all benefits across all plans
  const allBenefits = Array.from(
    new Set(pricingData.plans.flatMap((plan) => plan.planBenefits))
  );

  return (
    <section className='md:plb-[100px] plb-[50px] bg-backgroundPaper'>
      <div className='flex flex-col text-center gap-2 mbe-6'>
        <Typography variant='h4'>Pick a plan that works best for you</Typography>
        <Typography>Love it or leave it, no strings attached—just like speed dating, but with a refund!</Typography>
      </div>
      <div className='overflow-x-auto border rounded'>
        <table className={tableStyles.table}>
          <thead className={classnames('border-be', styles.tableHead)}>
            <tr>
              <th>Plan</th>
              {pricingData.plans.map((plan) => (
                <th key={plan.planId}>
                  <Typography variant='body1' className='capitalize'>
                    {plan.title}
                  </Typography>
                  <Typography variant='body2'>
                    £{plan.monthlyPrice}/month
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={classnames('border-be', styles.tableBody)}>
            {allBenefits.map((benefit, benefitIndex) => (
              <tr key={benefitIndex}>
                <td>{benefit}</td>
                {pricingData.plans.map((plan) => (
                  <td key={plan.planId}>
                    {plan.planBenefits?.includes(benefit) ? (
                      <i className='ri-checkbox-circle-line text-primary' />
                    ) : (
                      <i className='ri-close-circle-line' />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              {pricingData.plans.map((plan) => (
                <td key={plan.planId} className='text-center plb-[9px]'>
                  <Button variant={plan.planId === 'free' ? 'outlined' : 'contained'}>
                    {plan.planId === 'free' ? 'Choose Free' : 'Choose Plan'}
                  </Button>
                </td>
              ))}
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  )
}

export default Plans
