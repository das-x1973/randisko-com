'use client'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import MuiButton from '@mui/material/Button'
import type { ButtonProps } from '@mui/material/Button'

// Component Imports
import UpgradePlan from '@/components/_template/dialogs/upgrade-plan'
import OpenDialogOnElementClick from '@/components/_template/dialogs/OpenDialogOnElementClick'

const Button = styled(MuiButton)<ButtonProps>(() => ({
  backgroundColor: 'var(--mui-palette-common-white) !important',
  color: 'var(--mui-palette-primary-main) !important'
}))

const CustomerPlan = () => {
  // Vars
  const buttonProps: ButtonProps = {
    variant: 'contained',
    children: 'Upgrade To Premium'
  }

  return (
    <Card>
      <CardContent className='flex flex-col gap-2 bg-primary'>
        <div className='flex justify-between'>
          <div className='flex flex-col gap-4'>
            <Typography variant='h5' color='common.white'>
              Upgrade to premium
            </Typography>
            <Typography color='common.white'>Upgrade customer to premium membership to access pro features.</Typography>
          </div>
          <img src='/images/apps/ecommerce/3d-rocket.png' height={108} />
        </div>
        <OpenDialogOnElementClick element={Button} elementProps={buttonProps} dialog={UpgradePlan} />
      </CardContent>
    </Card>
  )
}

export default CustomerPlan
