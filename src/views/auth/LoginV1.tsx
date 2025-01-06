// src/views/randisko/auth/LoginV1.tsx


'use client'

// React Imports
import { useState } from 'react'

// Next Imports
import { useParams, useRouter } from 'next/navigation'

// NextAuth Imports
import { signIn } from 'next-auth/react'

// MUI Imports
import Link from '@mui/material/Link'
import Alert from '@mui/material/Alert'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import CircularProgress from '@mui/material/CircularProgress'

// Type Imports
import type { Mode } from '@core/types'

// Hook Imports
import { useImageVariant } from '@core/hooks/useImageVariant'

const isValidEmail = (email: string) => {
  // Simple regex for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const LoginV1 = ({ mode }: { mode: Mode }) => {
  // States
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Hooks
  const { lang: locale } = useParams()
  const router = useRouter()

  // Vars
  const darkImg = '/images/pages/auth-v1-mask-dark.png'
  const lightImg = '/images/pages/auth-v1-mask-light.png'
  const authBackground = useImageVariant(mode, lightImg, darkImg)

  const handleLogin = async (provider: string, email?: string) => {
    if (provider === 'email' && (!email || !isValidEmail(email))) {
      setError('Please provide a valid email address.')
      return
    }

    try {
      setIsLoading(true)
      setError(null)

      const options = provider === 'email' ? { email } : undefined

      const result = await signIn(provider, {
        ...options,
        redirect: false,
        callbackUrl: '/dashboard',
      })

      if (result?.error) {
        setError(result.error)
      } else if (provider === 'email') {
        alert('Check your email for the login link!')
      }
    } catch {
      setError('An error occurred during login. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='flex flex-col justify-center items-center min-bs-[100dvh] relative p-6'>
      <CardContent className='p-6 sm:!p-12'>
        <div className='flex flex-col gap-5'>
          <div>
            <Typography variant='h4' align='center'>
              Login
            </Typography>
          </div>

          {error && (
            <Alert severity='error' onClose={() => setError(null)} className='mb-4'>
              {error}
            </Alert>
          )}

          {/* Email Login Form */}
          <form
            noValidate
            autoComplete='off'
            onSubmit={(e) => {
              e.preventDefault()
              handleLogin('email', email)
            }}
            className='flex flex-col gap-5'
          >
            <TextField
              autoFocus
              fullWidth
              label='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={email !== '' && !isValidEmail(email)} // Highlight error if email is invalid
              helperText={
                email !== '' && !isValidEmail(email) ? 'Invalid email format' : undefined
              } // Show helper text for invalid email
            />
            <Button
              fullWidth
              variant='contained'
              type='submit'
              disabled={isLoading || !email}
            >
              {isLoading ? <CircularProgress size={24} /> : 'Login'}
            </Button>
          </form>

          <Divider className='gap-3'>or login using</Divider>

          {/* Social accounts login */}
          <div className='flex justify-center items-center gap-2'>
            <IconButton
              color='primary'
              size='small'
              onClick={() => handleLogin('google')}
              disabled={isLoading}
            >
              <i className='ri-google-fill text-[30px]' />
            </IconButton>
            <IconButton
              color='primary'
              size='small'
              onClick={() => handleLogin('facebook')}
              disabled={isLoading}
            >
              <i className='ri-facebook-fill text-[30px]' />
            </IconButton>
            <IconButton
              color='primary'
              size='small'
              onClick={() => handleLogin('apple')}
              disabled={isLoading}
            >
              <i className='ri-apple-fill text-[30px]' />
            </IconButton>
          </div>

          {isLoading && <CircularProgress size={24} className='mx-auto' />}

          <div className='flex justify-center items-center flex-wrap gap-2'>
            <Typography>Don‘t have an account yet?</Typography>
            <Typography component={Link} href={'/register'} color='primary'>
              Create an account
            </Typography>
          </div>
        </div>
      </CardContent>
    </div>
  )
}

export default LoginV1

