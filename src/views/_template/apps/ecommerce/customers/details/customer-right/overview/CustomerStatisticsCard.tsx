// MUI Imports
import Grid from '@mui/material/Grid'

// Types Imports
import type { CardStatsCustomerStatsProps } from '@/types/pages/widgetTypes'

// Component Imports
import CustomerStats from '@/components/_template/card-statistics/CustomerStats'

const CustomerStatisticsCard = ({ customerStatData }: { customerStatData?: CardStatsCustomerStatsProps[] }) => {
  return (
    <Grid container spacing={6}>
      {customerStatData?.map((item, index) => (
        <Grid item xs={12} md={6} key={index}>
          <CustomerStats {...item} />
        </Grid>
      ))}
    </Grid>
  )
}

export default CustomerStatisticsCard
