// src/views/pages/auth/RegisterV1.tsx
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

const RegisterV1 = ({ mode }: { mode: Mode }) => {
  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  // Hooks
  const { lang: locale } = useParams()
  const router = useRouter()

  // Vars
  const darkImg = '/images/pages/auth-v1-mask-dark.png'
  const lightImg = '/images/pages/auth-v1-mask-light.png'
  const authBackground = useImageVariant(mode, lightImg, darkImg)

  const handleSocialRegister = async (provider: string) => {
    if (!agreedToTerms) {
      setError('Please agree to the Terms and Privacy Policy')
      return
    }

    try {
      setIsLoading(true)
      setError(null)

      const result = await signIn(provider, {
        redirect: false,
        callbackUrl: '/onboarding'
      })

      if (result?.error) {
        setError(result.error)
      } else if (result?.url) {
        router.push(result.url)
      }
    } catch (error) {
      setError('An error occurred during registration. Please try again.')
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
                Join Randisko! 🧘
              </Typography>
              <Typography className='mbs-1' align='center'>
                Start your mindful dating journey
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
                onClick={() => handleSocialRegister('google')}
                disabled={isLoading}
              >
                <i className='ri-google-fill text-[20px]' />
              </IconButton>
              <IconButton
                size='small'
                className='text-facebook hover:bg-gray-100'
                onClick={() => handleSocialRegister('facebook')}
                disabled={isLoading}
              >
                <i className='ri-facebook-fill text-[20px]' />
              </IconButton>
              <IconButton
                size='small'
                className='text-pink-500 hover:bg-gray-100'
                onClick={() => handleSocialRegister('instagram')}
                disabled={isLoading}
              >
                <i className='ri-instagram-line text-[20px]' />
              </IconButton>
              <IconButton
                size='small'
                className='text-black hover:bg-gray-100'
                onClick={() => handleSocialRegister('twitter')}
                disabled={isLoading}
              >
                <i className='ri-twitter-x-fill text-[20px]' />
              </IconButton>
            </div>

            {isLoading && <CircularProgress size={24} className='mx-auto' />}

            <Divider className='gap-3'>or use email</Divider>

            <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()} className='flex flex-col gap-5'>
              <TextField fullWidth label='Email' type='email' />
              <TextField
                fullWidth
                label='Password'
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
              <FormControlLabel
                control={<Checkbox checked={agreedToTerms} onChange={e => setAgreedToTerms(e.target.checked)} />}
                label={
                  <span>
                    I agree to the{' '}
                    <Link href='/terms' className='text-primary'>
                      Terms
                    </Link>{' '}
                    and{' '}
                    <Link href='/privacy' className='text-primary'>
                      Privacy Policy
                    </Link>
                  </span>
                }
              />
              <Button fullWidth variant='contained' type='submit'>
                Sign Up
              </Button>
            </form>

            <div className='flex justify-center items-center flex-wrap gap-2'>
              <Typography>Already have an account?</Typography>
              <Typography component={Link} href={'/login'} color='primary'>
                Sign in instead
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>
      <Illustrations maskImg={{ src: authBackground }} />
    </div>
  )
}

export default RegisterV1
