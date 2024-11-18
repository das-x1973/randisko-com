// src/views/pages/auth/LoginV1.tsx
'use client'

// React Imports
import { useState } from 'react'

// Next Imports
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'

// NextAuth Imports
import { signIn } from 'next-auth/react'

// MUI Imports
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
import Logo from '@components/layout/shared/Logo'
import Illustrations from '@components/Illustrations'

// Hook Imports
import { useImageVariant } from '@core/hooks/useImageVariant'


const LoginV1 = ({ mode }: { mode: Mode }) => {
  // States
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

  const handleClickShowPassword = () => setIsPasswordShown(show => !show)

  return (
    <div className='flex flex-col justify-center items-center min-bs-[100dvh] relative p-6'>
      <Card className='flex flex-col sm:is-[450px]'>
        <CardContent className='p-6 sm:!p-12'>
          <Link
            href={'/'}
            className='absolute block-start-5 sm:block-start-[38px] inline-start-6 sm:inline-start-[38px]'
          >
            <Logo />
          </Link>
          <div className='flex flex-col gap-5'>
            <div>
              <Typography variant='h4' align='center'>
                Welcome to Randisko! 🧘
              </Typography>
              <Typography className='mbs-1' align='center'>
                Connect with mindful singles
              </Typography>
            </div>

            {error && (
              <Alert severity='error' onClose={() => setError(null)} className='mb-4'>
                {error}
              </Alert>
            )}

            <div className='flex justify-center items-center gap-2'>
              <IconButton
                size='small'
                className='text-googlePlus hover:bg-gray-100'
                onClick={() => handleSocialLogin('google')}
                disabled={isLoading}
              >
                <i className='ri-google-fill text-[20px]' />
              </IconButton>
              <IconButton
                size='small'
                className='text-facebook hover:bg-gray-100'
                onClick={() => handleSocialLogin('facebook')}
                disabled={isLoading}
              >
                <i className='ri-facebook-fill text-[20px]' />
              </IconButton>
              <IconButton
                size='small'
                className='text-pink-500 hover:bg-gray-100'
                onClick={() => handleSocialLogin('instagram')}
                disabled={isLoading}
              >
                <i className='ri-instagram-line text-[20px]' />
              </IconButton>
              <IconButton
                size='small'
                className='text-black hover:bg-gray-100'
                onClick={() => handleSocialLogin('twitter')}
                disabled={isLoading}
              >
                <i className='ri-twitter-x-fill text-[20px]' />
              </IconButton>
            </div>

            {isLoading && <CircularProgress size={24} className='mx-auto' />}

            <Divider className='gap-3'>or use email</Divider>

            <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()} className='flex flex-col gap-5'>
              <TextField autoFocus fullWidth label='Email' />
              <TextField
                fullWidth
                label='Password'
                id='outlined-adornment-password'
                type={isPasswordShown ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        size='small'
                        edge='end'
                        onClick={handleClickShowPassword}
                        onMouseDown={e => e.preventDefault()}
                      >
                        <i className={isPasswordShown ? 'ri-eye-off-line' : 'ri-eye-line'} />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              <div className='flex justify-between items-center gap-x-3 gap-y-1 flex-wrap'>
                <FormControlLabel control={<Checkbox />} label='Remember me' />
                <Typography className='text-end' color='primary' component={Link} href={'/forgot-password'}>
                  Forgot password?
                </Typography>
              </div>
              <Button fullWidth variant='contained' type='submit'>
                Log In
              </Button>
            </form>

            <div className='flex justify-center items-center flex-wrap gap-2'>
              <Typography>New to Randisko?</Typography>
              <Typography component={Link} href={'/register'} color='primary'>
                Create an account
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>
      <Illustrations maskImg={{ src: authBackground }} />
    </div>
  )
}

export default LoginV1

