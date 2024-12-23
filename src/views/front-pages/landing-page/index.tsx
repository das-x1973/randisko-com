// src/views/front-pages/landing-page/index.tsx

'use client'

// React Imports
import { useEffect } from 'react'

// Next Imports
import Link from 'next/link'

// Type Imports
import type { Mode } from '@core/types'

// MUI Imports
import { Box, Button, Container, Typography, Grid, useTheme } from '@mui/material'
import { styled } from '@mui/material/styles'

// Hooks Import
import { useSettings } from '@core/hooks/useSettings'

// Styled Components
const StyledBox = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: theme.palette.background.default
}))

const SectionBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  textAlign: 'center'
}))

const IconBox = styled(Box)(({ theme }) => ({
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  backgroundColor: theme.palette.primary.lighterOpacity,
  color: theme.palette.primary.main
}))

const LandingPageWrapper = ({ mode }: { mode: Mode }) => {
  const theme = useTheme()
  const { updatePageSettings } = useSettings()

  useEffect(() => {
    return updatePageSettings({ skin: 'default' })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <StyledBox>
      {/* Hero Section */}
      <SectionBox>
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
          Join a community of conscious individuals seeking authentic relationships rooted in personal growth and well-being.
        </Typography>
        <Link href="/register" passHref>
          <Button variant="contained" color="primary" size="large">
            Start Your Journey
          </Button>
        </Link>
      </SectionBox>

      {/* Value Props Section */}
      <SectionBox>
        <Grid container spacing={6}>
          {valueProps.map((prop, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box sx={{ textAlign: 'center' }}>
                <IconBox>{prop.icon}</IconBox>
                <Typography variant="h5" sx={{ mb: 2, color: 'text.primary' }}>
                  {prop.title}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  {prop.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </SectionBox>

      {/* Why Choose Section */}
      <SectionBox>
        <Typography variant="h2" sx={{ mb: 8, color: 'primary.main' }}>
          Why Choose Randisko
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box sx={{ display: 'flex', gap: 3, textAlign: 'left' }}>
                <IconBox>{feature.icon}</IconBox>
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
      </SectionBox>

      {/* CTA Section */}
      <SectionBox>
        <Typography variant="h3" sx={{ mb: 2, color: 'primary.main' }}>
          Ready to Begin Your Journey?
        </Typography>
        <Typography variant="h6" sx={{ mb: 6, color: 'text.secondary', maxWidth: '800px', mx: 'auto' }}>
          Join Randisko today and discover meaningful connections with people who share your values.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
          <Link href="/register" passHref>
            <Button variant="contained" color="primary" size="large">
              Create Your Profile
            </Button>
          </Link>
          <Link href="/pricing" passHref>
            <Button variant="outlined" color="primary" size="large">
              Learn More
            </Button>
          </Link>
        </Box>
      </SectionBox>
    </StyledBox>
  )
}

const valueProps = [
  { title: 'Mindful Matching', description: 'Connect with others who share your values.', icon: '💡' },
  { title: 'Growth Together', description: 'Build supportive, growth-oriented relationships.', icon: '🌱' },
  { title: 'Authentic Connections', description: 'Experience meaningful and genuine dating.', icon: '🤝' }
]

const features = [
  { title: 'Conscious Community', description: 'Join individuals committed to mindful living.', icon: '🌍' },
  { title: 'Meaningful Conversations', description: 'Engage in deep discussions on growth.', icon: '💬' }
]

export default LandingPageWrapper


