// src/views/randisko/auth/RegisterV1.tsx


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
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import Divider from '@mui/material/Divider'
import CircularProgress from '@mui/material/CircularProgress'

// Type Imports
import type { Mode } from '@core/types'

// Component Imports
import Logo from '@/components/layout/shared/Logo'

// Hook Imports
import { useImageVariant } from '@core/hooks/useImageVariant'

const RegisterV1 = ({ mode }: { mode: Mode }) => {
  // States
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  // Hooks
  const { lang: locale } = useParams()
  const router = useRouter()

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const handleRegister = async (provider: string) => {
    if (!agreedToTerms) {
      setError('You must agree to the Terms and Privacy Policy.')
      return
    }

    if (provider === 'email' && !isValidEmail(email)) {
      setError('Please enter a valid email address.')
      return
    }

    try {
      setIsLoading(true)
      setError(null)

      const result = await signIn(provider, {
        redirect: false,
        callbackUrl: '/dashboard',
        ...(provider === 'email' ? { email } : {}),
      })

      if (result?.error) {
        setError(result.error)
      } else if (provider === 'email') {
        alert('Check your email for the registration link!')
      } else if (result?.url) {
        router.push(result.url)
      }
    } catch {
      setError('An error occurred during registration. Please try again.')
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
              Register
            </Typography>
          </div>

          {error && (
            <Alert severity='error' onClose={() => setError(null)} className='mb-4'>
              {error}
            </Alert>
          )}

          {/* Email Registration */}
          <form
            noValidate
            autoComplete="off"
            onSubmit={(e) => {
              e.preventDefault()
              handleRegister('email')
            }}
            className="flex flex-col gap-5"
          >
            <TextField
              autoFocus
              fullWidth
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={email !== '' && !isValidEmail(email)} // Ensures boolean value
              helperText={email !== '' && !isValidEmail(email) ? 'Invalid email format' : undefined} // String or undefined
            />
            <FormControlLabel
              control={<Checkbox checked={agreedToTerms} onChange={(e) => setAgreedToTerms(e.target.checked)} />}
              label={
                <span>
                  I agree to the{' '}
                  <Link href='/terms' color='primary'>
                    Terms
                  </Link>{' '}
                  and{' '}
                  <Link href='/privacy' color='primary'>
                    Privacy Policy
                  </Link>
                </span>
              }
            />
            <Button
              fullWidth
              variant="contained"
              type="submit"
              disabled={isLoading || !email || !isValidEmail(email) || !agreedToTerms}
            >
              {isLoading ? <CircularProgress size={24} /> : 'Register'}
            </Button>
          </form>

          <Divider className='gap-3'>or register using</Divider>

          {/* Social accounts login */}
          <div className='flex justify-center items-center gap-2'>
            <IconButton
              color='primary'
              size='small'
              onClick={() => handleRegister('google')}
              disabled={isLoading}
            >
              <i className='ri-google-fill text-[30px]' />
            </IconButton>
            <IconButton
              color='primary'
              size='small'
              onClick={() => handleRegister('facebook')}
              disabled={isLoading}
            >
              <i className='ri-facebook-fill text-[30px]' />
            </IconButton>
            <IconButton
              color='primary'
              size='small'
              onClick={() => handleRegister('apple')}
              disabled={isLoading}
            >
              <i className='ri-apple-fill text-[30px]' />
            </IconButton>
          </div>

          {isLoading && <CircularProgress size={24} className='mx-auto' />}

          <div className='flex justify-center items-center flex-wrap gap-2'>
            <Typography>Already have an account?</Typography>
            <Typography component={Link} href={'/login'} color='primary'>
              Login instead
            </Typography>
          </div>
        </div>
      </CardContent>
    </div>
  )
}

export default RegisterV1



