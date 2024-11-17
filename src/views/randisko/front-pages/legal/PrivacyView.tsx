// src/views/randisko/front-pages/legal/PrivacyView.tsx


import { Container, Typography, Paper, Box, Breadcrumbs, Link } from '@mui/material'
import { privacyData } from '@/configs/privacyData'

const PrivacyView = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Breadcrumbs sx={{ mb: 4 }}>
        <Link href="/" color="inherit">
          Home
        </Link>
        <Typography color="text.primary">{privacyData.title}</Typography>
      </Breadcrumbs>

      <Paper elevation={0} sx={{ p: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {privacyData.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Last updated: {privacyData.lastUpdated}
        </Typography>

        <Box sx={{ mt: 4 }}>
          {privacyData.sections.map((section, index) => (
            <Box key={index} sx={{ mb: 4 }}>
              <Typography variant="h5" gutterBottom>
                {section.heading}
              </Typography>
              <Typography
                component="div"
                paragraph
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </Box>
          ))}
        </Box>
      </Paper>
    </Container>
  )
}

export default PrivacyView
