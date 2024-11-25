// Component Imports
import EmailWrapper from '@/views/_template/apps/email'

const EmailFolderPage = ({ params }: { params: { folder: string } }) => {
  return <EmailWrapper folder={params.folder} />
}

export default EmailFolderPage
