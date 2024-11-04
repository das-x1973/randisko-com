// src/views/front-pages/landing-page/index.tsx
'use client'

// React Imports
import { useEffect } from 'react'

// MUI Imports
import { Box, Button, Container, Typography, Grid, useTheme } from '@mui/material'
import { styled } from '@mui/material/styles'

// Type Imports
import type { Mode } from '@core/types'

// Hooks Import
import { useSettings } from '@core/hooks/useSettings'

// Styled Components
const StyledBox = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: theme.palette.background.default
}))

const FeatureBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  marginBottom: theme.spacing(4)
}))

const IconBox = styled(Box)(({ theme }) => ({
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2)
}))

const LandingPageWrapper = ({ mode }: { mode: Mode }) => {
  // Hooks
  const theme = useTheme()
  const { updatePageSettings } = useSettings()

  // For Page specific settings
  useEffect(() => {
    return updatePageSettings({
      skin: 'default'
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <StyledBox>
      {/* Hero Section */}
      <Container sx={{ pt: 20, pb: 15, textAlign: 'center' }}>
        <Typography
          variant="h1"
          sx={{
            mb: 2,
            fontSize: { xs: '2rem', sm: '3rem', md: '3.5rem' },
            color: 'text.primary'
          }}
        >
          Find Meaningful Connections<br />
          Through Mindful Dating
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mb: 6,
            color: 'text.secondary',
            maxWidth: '800px',
            mx: 'auto'
          }}
        >
          Join a community of conscious individuals seeking authentic relationships rooted
          in personal growth and well-being
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            px: 6,
            py: 2,
            fontSize: '1rem'
          }}
        >
          Start Your Mindful Journey
        </Button>
      </Container>

      {/* Value Props Section */}
      <Container sx={{ py: 10 }}>
        <Grid container spacing={6}>
          {valueProps.map((prop, index) => (
            <Grid item xs={12} md={4} key={index}>
              <FeatureBox>
                <IconBox sx={{
                  bgcolor: index % 2 ? 'primary.lighterOpacity' : 'secondary.lighterOpacity',
                  color: index % 2 ? 'primary.main' : 'secondary.main'
                }}>
                  {prop.icon}
                </IconBox>
                <Typography variant="h5" sx={{ mb: 2, color: 'text.primary' }}>
                  {prop.title}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  {prop.description}
                </Typography>
              </FeatureBox>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Why Choose Section */}
      <Container sx={{ py: 10 }}>
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 8,
            color: 'primary.main'
          }}
        >
          Why Choose Randisko
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box sx={{ display: 'flex', gap: 3, mb: 4 }}>
                <IconBox sx={{
                  bgcolor: index % 2 ? 'primary.lighterOpacity' : 'secondary.lighterOpacity',
                  color: index % 2 ? 'primary.main' : 'secondary.main'
                }}>
                  {feature.icon}
                </IconBox>
                <Box>
                  <Typography variant="h6" sx={{ mb: 1, color: 'text.primary' }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {feature.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Container sx={{ py: 10, textAlign: 'center' }}>
        <Typography variant="h3" sx={{ mb: 2, color: 'primary.main' }}>
          Ready to Begin Your Journey?
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mb: 6,
            color: 'text.secondary',
            maxWidth: '800px',
            mx: 'auto'
          }}
        >
          Join Randisko today and discover meaningful connections with people
          who share your values and commitment to personal growth.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ px: 4, py: 1.5 }}
          >
            Create Your Profile
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            sx={{ px: 4, py: 1.5 }}
          >
            Learn More
          </Button>
        </Box>
      </Container>
    </StyledBox>
  )
}

// Content Data
const valueProps = [
  {
    title: 'Mindful Matching',
    description: 'Connect with others who share your commitment to personal growth and conscious living',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3L4 9l8 6 8-6-8-6zM4 9v6l8 6 8-6V9" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: 'Growth Together',
    description: 'Build relationships that support your wellness journey and personal development',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L8 6h8l-4-4zM12 22V6M4 12l8 4 8-4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: 'Authentic Connections',
    description: 'Experience dating that values depth, authenticity, and genuine human connection',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="none"/>
      </svg>
    )
  }
]

const features = [
  {
    title: 'Conscious Community',
    description: 'Join a carefully curated community of individuals committed to mindful living and authentic relationships.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: 'Meaningful Conversations',
    description: 'Engage in deep discussions about personal growth, wellness, and shared values.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
]

export default LandingPageWrapper
