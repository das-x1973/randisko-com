// Component Imports
import Payment from '@/views/_template/front-pages/Payment'

// Data Imports
import { getPricingData } from '@/app/template/server/actions'

const PaymentPage = async () => {
  // Vars
  const data = await getPricingData()

  return <Payment data={data} />
}

export default PaymentPage
