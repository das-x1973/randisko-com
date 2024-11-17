// src/views/randisko/front-pages/pricing/Faqs.tsx

import { pricingData } from '@/configs/pricingData'
import Typography from '@mui/material/Typography'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import classnames from 'classnames'
import frontCommonStyles from '@views/randisko/front-pages/styles.module.css'

const Faqs = () => {
  return (
    <section className={classnames('md:plb-[100px] plb-[50px]', frontCommonStyles.layoutSpacing)}>
      <div className='flex flex-col text-center gap-2 mbe-6'>
        <Typography variant='h4'>FAQ&apos;s</Typography>
        <Typography>Let us help answer the most common questions.</Typography>
      </div>
      <div>
        {pricingData.faq.map((data) => (
          <Accordion key={data.id}>
            <AccordionSummary aria-controls={`${data.id}-content`} id={`${data.id}-header`} className='font-medium'>
              {data.question}
            </AccordionSummary>
            <AccordionDetails className='text-textSecondary'>{data.answer}</AccordionDetails>
          </Accordion>
        ))}
      </div>
    </section>
  )
}

export default Faqs
