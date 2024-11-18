// src/app/(private)/dashboard/page.tsx

// Next Imports
import type { Metadata } from 'next'

// MUI Imports
import Typography from '@mui/material/Typography'

// Metadata for SEO and Social Media
export const metadata: Metadata = {
  title: 'Dashboard | Randisko - Mindful Dating',
  description: 'Access your Randisko dashboard to manage your profile and find new connections.',
  openGraph: {
    title: 'Dashboard | Randisko',
    description: 'Manage your profile and explore new connections through the Randisko dashboard.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dashboard | Randisko',
    description: 'Access your Randisko dashboard to manage your profile and find new connections.'
  }
}

const Dashboard = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="body1">
        Manage your profile and start exploring new connections.
      </Typography>
    </div>
  )
}

export default Dashboard
