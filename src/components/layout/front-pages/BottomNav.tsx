'use client'

// Next Imports
import Link from 'next/link'

// MUI Imports
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import Paper from '@mui/material/Paper'
import { useTheme } from '@mui/material/styles'

// Type Imports
import type { Mode } from '@core/types'

// Component Imports
import Logo from '../shared/Logo'
import ModeDropdown from '../shared/ModeDropdown'

type BottomNavProps = {
  mode: Mode // Accept mode as a prop
}

const BottomNav = ({ mode }: BottomNavProps) => {
  const theme = useTheme() // Access the current theme

  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        borderRadius: '12px 12px 0 0',
        boxShadow: theme.shadows[3],
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper, // Dynamically use the theme's background color
      }}
      elevation={3}
    >
      <BottomNavigation showLabels sx={{ height: '64px' }}>
        <BottomNavigationAction
          label="Home"
          component={Link}
          href="/"
          sx={{
            textTransform: 'none',
            fontWeight: 500,
            color: theme.palette.text.primary, // Dynamically use the theme's text color
            '&.Mui-selected': {
              color: theme.palette.primary.main, // Use primary color for selected state
              borderBottom: `2px solid ${theme.palette.primary.main}`,
            },
          }}
        />
        <BottomNavigationAction
          label="Login"
          component={Link}
          href="/login"
          sx={{
            textTransform: 'none',
            fontWeight: 500,
            color: theme.palette.text.primary,
            '&.Mui-selected': {
              color: theme.palette.primary.main,
              borderBottom: `2px solid ${theme.palette.primary.main}`,
            },
          }}
        />
        <BottomNavigationAction
          label="Register now"
          component={Link}
          href="/register"
          sx={{
            textTransform: 'none',
            fontWeight: 500,
            color: theme.palette.text.primary,
            '&.Mui-selected': {
              color: theme.palette.primary.main,
              borderBottom: `2px solid ${theme.palette.primary.main}`,
            },
          }}
        />
        <ModeDropdown />
      </BottomNavigation>

    </Paper>
  )
}

export default BottomNav
