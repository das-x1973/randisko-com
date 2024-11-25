// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import ProductAddHeader from '@/views/_template/apps/ecommerce/products/add/ProductAddHeader'
import ProductInformation from '@/views/_template/apps/ecommerce/products/add/ProductInformation'
import ProductImage from '@/views/_template/apps/ecommerce/products/add/ProductImage'
import ProductVariants from '@/views/_template/apps/ecommerce/products/add/ProductVariants'
import ProductInventory from '@/views/_template/apps/ecommerce/products/add/ProductInventory'
import ProductPricing from '@/views/_template/apps/ecommerce/products/add/ProductPricing'
import ProductOrganize from '@/views/_template/apps/ecommerce/products/add/ProductOrganize'

const eCommerceProductsAdd = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <ProductAddHeader />
      </Grid>
      <Grid item xs={12} md={8}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <ProductInformation />
          </Grid>
          <Grid item xs={12}>
            <ProductImage />
          </Grid>
          <Grid item xs={12}>
            <ProductVariants />
          </Grid>
          <Grid item xs={12}>
            <ProductInventory />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <ProductPricing />
          </Grid>
          <Grid item xs={12}>
            <ProductOrganize />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default eCommerceProductsAdd
