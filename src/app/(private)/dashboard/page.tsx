// src/app/(private)/dashboard/page.tsx

// Next Imports
import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

// MUI Imports
import Typography from '@mui/material/Typography'

// Server Action Import
import { getUserById } from '@/app/actions/userActions'

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

const Dashboard = async () => {
  // Retrieve user ID from the session (replace with actual session retrieval)
  const userId = 'your_session_user_id_here'; // You'll need to replace this line with proper session management

  // Check if user is onboarded
  if (userId) {
    const user = await getUserById(userId);
    if (user && !user.profile?.isOnboarded) {
      redirect('/onboarding');
    }
  }

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
