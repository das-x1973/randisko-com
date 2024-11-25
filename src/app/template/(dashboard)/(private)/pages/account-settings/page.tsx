// React Imports
import type { ReactElement } from 'react'

// Next Imports
import dynamic from 'next/dynamic'

// Component Imports
import AccountSettings from '@/views/_template/pages/account-settings'

const AccountTab = dynamic(() => import('@/views/_template/pages/account-settings/account'))
const SecurityTab = dynamic(() => import('@/views/_template/pages/account-settings/security'))
const BillingPlansTab = dynamic(() => import('@/views/_template/pages/account-settings/billing-plans'))
const NotificationsTab = dynamic(() => import('@/views/_template/pages/account-settings/notifications'))
const ConnectionsTab = dynamic(() => import('@/views/_template/pages/account-settings/connections'))

// Vars
const tabContentList = (): { [key: string]: ReactElement } => ({
  account: <AccountTab />,
  security: <SecurityTab />,
  'billing-plans': <BillingPlansTab />,
  notifications: <NotificationsTab />,
  connections: <ConnectionsTab />
})

const AccountSettingsPage = () => {
  return <AccountSettings tabContentList={tabContentList()} />
}

export default AccountSettingsPage
