// Component Imports
import TwoStepsV2 from '@/views/_template/pages/auth/TwoStepsV2'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

const TwoStepsV2Page = () => {
  // Vars
  const mode = getServerMode()

  return <TwoStepsV2 mode={mode} />
}

export default TwoStepsV2Page
