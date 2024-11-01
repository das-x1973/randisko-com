// src/views/pages/auth/LoginV1.tsx
'use client'

// React Imports
import { useState } from 'react'

// Next Imports
import Link from 'next/link'
import { useRouter } from 'next/navigation'

// NextAuth Imports
import { signIn } from 'next-auth/react'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Alert from '@mui/material/Alert'
import CircularProgress from '@mui/material/CircularProgress'

// Type Imports
import type { Mode } from '@core/types'

// Component Imports
import Logo from '@components/layout/shared/Logo'
import Illustrations from '@components/Illustrations'

// Hook Imports
import { useImageVariant } from '@core/hooks/useImageVariant'

const LoginV1 = ({ mode }: { mode: Mode }) => {
  // States
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Hooks
  const router = useRouter()

  // Vars
  const darkImg = '/images/pages/auth-v1-mask-dark.png'
  const lightImg = '/images/pages/auth-v1-mask-light.png'
  const authBackground = useImageVariant(mode, lightImg, darkImg)

  const handleSocialLogin = async (provider: string) => {
    try {
      setIsLoading(true)
      setError(null)

      const result = await signIn(provider, {
        redirect: false,
        callbackUrl: '/dashboard'
      })

      if (result?.error) {
        setError(result.error)
      } else if (result?.url) {
        router.push(result.url)
      }
    } catch (error) {
      setError('An error occurred during login. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='flex flex-col justify-center items-center min-bs-[100dvh] relative p-6'>
      <Card className='flex flex-col sm:is-[450px]'>
        <CardContent className='p-6 sm:!p-12'>
          <Link href={'/'} className='flex justify-center items-center mbe-6'>
            <Logo />
          </Link>
          <div className='flex flex-col gap-5'>
            <div>
              <Typography variant='h4'>Welcome to Randisko!</Typography>
              <Typography className='mbs-1'>Connect with mindful singles</Typography>
            </div>

            {error && (
              <Alert severity='error' onClose={() => setError(null)} className='mb-4'>
                {error}
              </Alert>
            )}

            <div className='flex flex-col gap-4'>
              <Button
                fullWidth
                variant='outlined'
                onClick={() => handleSocialLogin('google')}
                disabled={isLoading}
                startIcon={<i className='ri-google-fill' />}
                sx={{ height: 48 }}
              >
                Continue with Google
              </Button>

              <Button
                fullWidth
                variant='outlined'
                onClick={() => handleSocialLogin('facebook')}
                disabled={isLoading}
                startIcon={<i className='ri-facebook-fill' />}
                sx={{ height: 48, color: '#1877F2', borderColor: '#1877F2', '&:hover': { borderColor: '#1877F2' } }}
              >
                Continue with Facebook
              </Button>

              <Button
                fullWidth
                variant='outlined'
                onClick={() => handleSocialLogin('instagram')}
                disabled={isLoading}
                startIcon={<i className='ri-instagram-line' />}
                sx={{ height: 48, color: '#E4405F', borderColor: '#E4405F', '&:hover': { borderColor: '#E4405F' } }}
              >
                Continue with Instagram
              </Button>

              <Button
                fullWidth
                variant='outlined'
                onClick={() => handleSocialLogin('twitter')}
                disabled={isLoading}
                startIcon={<i className='ri-twitter-x-fill' />}
                sx={{ height: 48 }}
              >
                Continue with X
              </Button>
            </div>

            {isLoading && <CircularProgress size={24} className='mx-auto' />}

            <div className='flex justify-center items-center flex-wrap gap-2'>
              <Typography>New to Randisko?</Typography>
              <Typography component={Link} href='/auth/register' color='primary'>
                Create an account
              </Typography>
            </div>

            <Divider className='gap-3'>or</Divider>

            <Button fullWidth variant='outlined' component={Link} href='/auth/email-login' sx={{ height: 48 }}>
              Sign in with email
            </Button>
          </div>
        </CardContent>
      </Card>
      <Illustrations maskImg={{ src: authBackground }} />
    </div>
  )
}

export default LoginV1
