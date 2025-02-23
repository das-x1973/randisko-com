// src/components/layout/front-pages/index.tsx

// Type Imports
import type { ChildrenType } from '@core/types'

// Component Imports
import Footer from '@/components/_template/layout/front-pages/Footer'
import Header from '@/components/_template/layout/front-pages/Header'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

// Util Imports
import { frontLayoutClasses } from '@layouts/utils/layoutClasses'

const FrontLayout = ({ children }: ChildrenType) => {
  // Vars
  const mode = getServerMode()

  return (
    <div className={frontLayoutClasses.root}>
      <Header mode={mode} />
      {children}
      <Footer />
    </div>
  )
}

export default FrontLayout
