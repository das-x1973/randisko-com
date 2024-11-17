// React Imports
import { useState } from 'react'
import type { ChangeEvent } from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Switch from '@mui/material/Switch'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { PricingPlanType } from '@/types/randisko/pricingTypes'

// Component Imports
import PlanDetails from './PlanDetails'
import DirectionalIcon from '@components/DirectionalIcon'

const Pricing = ({ data }: { data?: PricingPlanType[] }) => {
  // States
  const [pricingPlan, setPricingPlan] = useState<'monthly' | 'annually'>('annually')

  // Hooks
  const theme = useTheme()

  const handleChange = (e: ChangeEvent<{ checked: boolean }>) => {
    if (e.target.checked) {
      setPricingPlan('annually')
    } else {
      setPricingPlan('monthly')
    }
  }

  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col justify-center items-center gap-2'>
        <Typography variant='h4'>Your Path to Meaningful Connections</Typography>
          <div className='flex items-center text-center flex-col mbe-[2.8rem]'>
            <Typography>
              Every journey starts with the right tools. Pick the plan that suits your growth and goals.
            </Typography>
          </div>
          <Box mb={2} />
        <div className='flex justify-center items-center relative mbs-0.5'>
          <InputLabel htmlFor='pricing-switch' className='cursor-pointer text-textSecondary'>
            Monthly
          </InputLabel>
          <Switch id='pricing-switch' onChange={handleChange} checked={pricingPlan === 'annually'} />
          <InputLabel htmlFor='pricing-switch' className='cursor-pointer text-textSecondary'>
            Annually
          </InputLabel>

          <div
            className={classnames('flex absolute max-sm:hidden block-start-[-41px] translate-x-[35%]', {
              'right-full': theme.direction === 'rtl',
              'left-1/2': theme.direction !== 'rtl'
            })}
          >
            <DirectionalIcon
              ltrIconClass='ri-corner-left-down-line'
              rtlIconClass='ri-corner-right-down-line'
              className='mbs-2 mie-1 text-textDisabled'
            />
            <Chip label='Save up to 10%' size='small' color='primary' variant='tonal' />
          </div>
        </div>
      </div>
      <Grid container spacing={6}>
        {data?.map((plan, index) => (
          <Grid item xs={12} md={4} key={index}>
            <PlanDetails data={plan} pricingPlan={pricingPlan} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Pricing
