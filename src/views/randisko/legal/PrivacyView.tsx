// src/views/randisko/legal/PrivacyView.tsx

'use client'

import { useEffect, useState } from 'react'
import { Container, Typography, Paper, Box, Breadcrumbs, Link } from '@mui/material'
import type { Mode } from '@core/types'
import { getLegalDocument } from '@/app/actions/legal'

interface PrivacyViewProps {
  mode: Mode
  region: string
  language: string
}

const PrivacyView = ({ mode, region, language }: PrivacyViewProps) => {
  const [privacyContent, setPrivacyContent] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState<string>('')

  useEffect(() => {
    const fetchPrivacyPolicy = async () => {
      const document = await getLegalDocument('privacy', region, language)
      if (document) {
        setPrivacyContent(document.content as string)
        setLastUpdated(
          document.publishedAt ? new Date(document.publishedAt).toLocaleDateString(language) : 'N/A'
        )
      }
    }
    fetchPrivacyPolicy()
  }, [region, language])

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Breadcrumbs sx={{ mb: 4 }}>
        <Link href="/" color="inherit">
          Home
        </Link>
        <Typography color="text.primary">Privacy Policy</Typography>
      </Breadcrumbs>

      <Paper elevation={0} sx={{ p: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Privacy Policy
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Last updated: {lastUpdated}
        </Typography>

        <Box sx={{ mt: 4 }}>
          {privacyContent ? (
            <div dangerouslySetInnerHTML={{ __html: privacyContent }} />
          ) : (
            <Typography>Loading...</Typography>
          )}
        </Box>
      </Paper>
    </Container>
  )
}

export default PrivacyView
