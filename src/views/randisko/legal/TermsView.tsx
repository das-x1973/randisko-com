// src/views/randisko/legal/TermsView.tsx

'use client'

import { useEffect, useState } from 'react'
import { Container, Typography, Paper, Box, Breadcrumbs, Link } from '@mui/material'
import type { Mode } from '@core/types'
import { getLegalDocument } from '@/app/actions/legal'

interface TermsViewProps {
  mode: Mode
  region: string
  language: string
}

const TermsView = ({ mode, region, language }: TermsViewProps) => {
  const [termsContent, setTermsContent] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState<string>('')

  useEffect(() => {
    const fetchTerms = async () => {
      const document = await getLegalDocument('terms', region, language)
      if (document) {
        setTermsContent(document.content as string)
        setLastUpdated(
          document.publishedAt ? new Date(document.publishedAt).toLocaleDateString(language) : 'N/A'
        )
      }
    }
    fetchTerms()
  }, [region, language])

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Breadcrumbs sx={{ mb: 4 }}>
        <Link href="/" color="inherit">
          Home
        </Link>
        <Typography color="text.primary">Terms of Service</Typography>
      </Breadcrumbs>

      <Paper elevation={0} sx={{ p: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Terms of Service
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Last updated: {lastUpdated}
        </Typography>

        <Box sx={{ mt: 4 }}>
          {termsContent ? (
            <div dangerouslySetInnerHTML={{ __html: termsContent }} />
          ) : (
            <Typography>Loading...</Typography>
          )}
        </Box>
      </Paper>
    </Container>
  )
}

export default TermsView
