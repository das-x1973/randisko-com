// Component Imports
import EmailWrapper from '@/views/_template/apps/email'

const EmailLabelPage = ({ params }: { params: { label: string } }) => {
  return <EmailWrapper label={params.label} />
}

export default EmailLabelPage
