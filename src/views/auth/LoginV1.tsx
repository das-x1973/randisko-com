// src/views/randisko/auth/LoginV1.tsx


'use client'

// React Imports
import { useState } from 'react'

// Next Imports
// import Link from 'next/link'
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
import Illustrations from '@components/Illustrations'

// Hook Imports
import { useImageVariant } from '@core/hooks/useImageVariant'


const LoginV1 = ({ mode }: { mode: Mode }) => {
  // States
  const [email, setEmail] = useState('');
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Hooks
  const { lang: locale } = useParams()
  const router = useRouter()

  // Vars
  const darkImg = '/images/pages/auth-v1-mask-dark.png'
  const lightImg = '/images/pages/auth-v1-mask-light.png'
  const authBackground = useImageVariant(mode, lightImg, darkImg)

  // Reusable login handler
  const handleLogin = async (provider: string, email?: string) => {
    try {
      setIsLoading(true);
      setError(null);

      const options = provider === 'email' ? { email } : undefined;

      const result = await signIn(provider, {
        ...options,
        redirect: false,
        callbackUrl: '/dashboard',
      });

      if (result?.error) {
        setError(result.error);
      } else if (provider === 'email') {
        alert('Check your email for the login link!');
      }
    } catch {
      setError('An error occurred during login. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClickShowPassword = () => setIsPasswordShown(show => !show)

  return (
    <div className='flex flex-col justify-center items-center min-bs-[100dvh] relative p-6'>
      {/* <Card className='flex flex-col sm:is-[450px]'> */}
        <CardContent className='p-6 sm:!p-12'>
          <div className='flex flex-col gap-5'>
            <div>
              <Typography variant='h4' align='center'>
                Login
              </Typography>
              {/* <Typography className='mbs-1' align='center'>
                Connect with mindful singles
              </Typography> */}
            </div>

            {error && (
              <Alert severity='error' onClose={() => setError(null)} className='mb-4'>
                {error}
              </Alert>
            )}

            {/* Magic Link Login */}
            <form
              noValidate
              autoComplete="off"
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin('email', email);
              }}
              className="flex flex-col gap-5"
            >
              <TextField
                autoFocus
                fullWidth
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                fullWidth
                variant="contained"
                type="submit"
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
                // className='text-googlePlus hover:bg-gray-100'
                onClick={() => handleLogin('google')}
                disabled={isLoading}
              >
                <i className='ri-google-fill text-[30px]' />
              </IconButton>
              <IconButton
                color='primary'
                size='small'
                // className='text-facebook hover:bg-gray-100'
                onClick={() => handleLogin('facebook')}
                disabled={isLoading}
              >
                <i className='ri-facebook-fill text-[30px]' />
              </IconButton>
              {/* <IconButton
                size='small'
                className='text-pink-500 hover:bg-gray-100'
                onClick={() => handleSocialLogin('instagram')}
                disabled={isLoading}
              >
                <i className='ri-instagram-line text-[20px]' />
              </IconButton> */}
              <IconButton
                color='primary'
                size='small'
                // className='text-apple hover:bg-gray-100'
                onClick={() => handleLogin('apple')}
                disabled={isLoading}
              >
                <i className='ri-apple-fill text-[30px]' />
              </IconButton>
            </div>

            {isLoading && <CircularProgress size={24} className='mx-auto' />}

            <div className='flex justify-center items-center flex-wrap gap-2'>
              <Typography>Don‘t have an account yet? </Typography>
              <Typography component={Link} href={'/register'} color='primary'>
                Create an account
              </Typography>
            </div>
          </div>
        </CardContent>
      {/* </Card> */}
      {/* <Illustrations maskImg={{ src: authBackground }} /> */}
    </div>
  )
}

export default LoginV1

