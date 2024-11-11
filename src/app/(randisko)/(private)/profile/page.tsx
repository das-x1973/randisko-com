// src/app/(randisko)/(private)/profile/page.tsx

// React Imports
import type { ReactElement } from 'react'

import dynamic from 'next/dynamic'

import type { Data } from '@/types/pages/profileTypes'
import UserProfile from '@views/pages/user-profile'
import { getProfileData } from '@/app/_template/server/actions'

// Dynamic Imports for Tabs
const ProfileTab = dynamic(() => import('@views/pages/user-profile/profile/index'))
const PreferencesTab = dynamic(() => import('@views/pages/user-profile/preferences/index'))
const ConnectionsTab = dynamic(() => import('@views/pages/user-profile/connections/index'))
const ActivityTab = dynamic(() => import('@views/pages/user-profile/activity/index'))

// Updated Tab Content List for Randisko
const tabContentList = (data?: Data): { [key: string]: ReactElement } => ({
  profile: <ProfileTab data={data?.users.profile} />,
  preferences: <PreferencesTab data={data?.users.preferences} />,
  connections: <ConnectionsTab data={data?.users.connections} />,
  activity: <ActivityTab data={data?.users.activity} />
})

const ProfilePage = async () => {
  const data = await getProfileData() // Fetch user profile data
  return <UserProfile data={data} tabContentList={tabContentList(data)} />
}

export default ProfilePage

