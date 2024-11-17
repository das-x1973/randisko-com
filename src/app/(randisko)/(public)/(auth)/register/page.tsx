// src/app/(randisko)/(public)/(auth)/register/page.tsx


// Component Imports
import RegisterV1 from '@/views/randisko/auth/RegisterV1'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

const RegisterV1Page = () => {
  // Vars
  const mode = getServerMode()

  return <RegisterV1 mode={mode} />
}

export default RegisterV1Page
