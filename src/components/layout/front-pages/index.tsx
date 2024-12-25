// src/components/layout/front-pages/index.tsx


// Type Imports
import type { ChildrenType } from '@core/types'

// Component Imports
import Footer from './Footer'
import Header from './Header'
import BottomNav from './BottomNav'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

// Util Imports
import { frontLayoutClasses } from '@layouts/utils/layoutClasses'

const FrontLayout = ({ children }: ChildrenType) => {
  // Vars
  const mode = getServerMode() // Fetch the current system mode (light/dark)

  return (
    <div className={frontLayoutClasses.root}>
      <Header mode={mode} />
      {children}
      <BottomNav mode={mode} /> {/* Pass mode to BottomNav */}
    </div>
  )
}

export default FrontLayout



