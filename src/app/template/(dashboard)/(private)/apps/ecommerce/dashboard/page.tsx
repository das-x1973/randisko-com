// MUI Imports
import Grid from '@mui/material/Grid'

// Components Imports
import Congratulations from '@/views/_template/dashboards/ecommerce/Congratulations'
import CardStatVertical from '@/components/_template/card-statistics/Vertical'
import TotalProfitStackedBar from '@/views/_template/dashboards/ecommerce/TotalProfitStackedBar'
import TotalSales from '@/views/_template/dashboards/ecommerce/TotalSales'
import LineChartWithShadow from '@/views/_template/dashboards/ecommerce/LineChartWithShadow'
import RadialBarChart from '@/views/_template/dashboards/ecommerce/RadialBarChart'
import Transactions from '@/views/_template/dashboards/ecommerce/Transactions'
import NewVisitors from '@/views/_template/dashboards/ecommerce/NewVisitors'
import WebsiteStatistics from '@/views/_template/dashboards/ecommerce/WebsiteStatistics'
import Table from '@/views/_template/dashboards/ecommerce/Table'
import MeetingSchedule from '@/views/_template/dashboards/ecommerce/MeetingSchedule'

// Data Imports
import { getInvoiceData } from '@/app/template/server/actions'

/**
 * ! If you need data using an API call, uncomment the below API code, update the `process.env.API_URL` variable in the
 * ! `.env` file found at root of your project and also update the API endpoints like `/apps/user-list` in below example.
 * ! Also, remove the above server action import and the action itself from the `src/app/server/actions.ts` file to clean up unused code
 * ! because we've used the server action for getting our static data.
 */

/* const getData = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/apps/invoice`)

  if (!res.ok) {
    throw new Error('Failed to fetch invoice data')
  }

  return res.json()
} */
const DashboardECommerce = async () => {
  // Vars
  const data = await getInvoiceData()

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={8} className='self-end'>
        <Congratulations />
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6}>
            <CardStatVertical
              title='Revenue'
              stats='$95k'
              avatarIcon='ri-money-dollar-circle-line'
              avatarColor='success'
              subtitle='Revenue Increase'
              trendNumber='12%'
              trend='positive'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardStatVertical
              title='Transactions'
              stats='12.1k'
              avatarIcon='ri-bank-card-line'
              avatarColor='info'
              subtitle='Daily Transactions'
              trendNumber='38%'
              trend='positive'
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={8}>
        <TotalProfitStackedBar />
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <TotalSales />
          </Grid>
          <Grid item xs={12} sm={6}>
            <LineChartWithShadow />
          </Grid>
          <Grid item xs={12} sm={6}>
            <RadialBarChart />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Transactions />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6}>
            <CardStatVertical
              title='Logistics'
              stats='$44k'
              avatarIcon='ri-car-line'
              avatarColor='error'
              subtitle='Revenue Increase'
              trendNumber='42%'
              trend='positive'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardStatVertical
              title='Reports'
              stats='268'
              avatarIcon='ri-file-chart-line'
              avatarColor='warning'
              subtitle='System Bugs'
              trendNumber='28%'
              trend='negative'
            />
          </Grid>
          <Grid item xs={12}>
            <NewVisitors />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <WebsiteStatistics />
      </Grid>
      <Grid item xs={12} lg={8} className='order-last lg:order-[unset]'>
        <Table invoiceData={data.slice(0, 8)} />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <MeetingSchedule />
      </Grid>
    </Grid>
  )
}

export default DashboardECommerce
