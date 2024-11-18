// Component Imports
import NotAuthorized from '@/views/_template/NotAuthorized'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

const Error401 = () => {
  // Vars
  const mode = getServerMode()

  return <NotAuthorized mode={mode} />
}

export default Error401
