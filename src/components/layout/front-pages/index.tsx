// src/components/layout/front-pages/index.tsx


// React Imports
import { useEffect, useState } from 'react'

// Type Imports
import type { ChildrenType } from '@core/types'

// Component Imports
import Header from './Header'
import Footer from './Footer'
import BottomNav from './BottomNav'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

// Util Imports
import { frontLayoutClasses } from '@layouts/utils/layoutClasses'

const FrontLayout = ({ children }: ChildrenType) => {
  // Vars
  const mode = getServerMode()

  return (
    <div className={frontLayoutClasses.root}>
      {/* <Header mode={mode} /> */}
      {children}
      <BottomNav mode={mode} />
      {/* <Footer /> */}
    </div>
  )
}

export default FrontLayout




