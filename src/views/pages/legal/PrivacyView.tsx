// src/views/pages/legal/PrivacyView.tsx

import { Container, Typography, Paper, Box, Breadcrumbs, Link } from '@mui/material'

import type { Mode } from '@core/types'

const PrivacyView = ({ mode }: { mode: Mode }) => {
  return (
    <Container maxWidth='lg' sx={{ py: 8 }}>
      <Breadcrumbs sx={{ mb: 4 }}>
        <Link href='/' color='inherit'>
          Home
        </Link>
        <Typography color='text.primary'>Privacy Policy</Typography>
      </Breadcrumbs>

      <Paper elevation={0} sx={{ p: 4 }}>
        <Typography variant='h3' component='h1' gutterBottom>
          Privacy Policy
        </Typography>
        <Typography variant='subtitle1' color='text.secondary' gutterBottom>
          Last updated: {new Date().toLocaleDateString('en-GB')}
        </Typography>

        <Box sx={{ mt: 4 }}>
          <Typography variant='h5' gutterBottom>
            1. Introduction
          </Typography>
          <Typography paragraph>
            Randisko (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our
            mindful dating service. This policy applies to users in the United Kingdom and complies with the UK General
            Data Protection Regulation (UK GDPR).
          </Typography>

          <Typography variant='h5' gutterBottom sx={{ mt: 3 }}>
            2. Information We Collect
          </Typography>
          <Typography paragraph>We collect the following types of information:</Typography>
          <ul>
            <Typography component='li' sx={{ ml: 4 }}>
              Personal Information: such as your name, email address, date of birth, and contact details.
            </Typography>
            <Typography component='li' sx={{ ml: 4 }}>
              Profile Information: including photos, interests, preferences, and other details you provide to create
              your profile.
            </Typography>
            <Typography component='li' sx={{ ml: 4 }}>
              Usage Data: information about your activity on our service, interactions with other users, and
              preferences.
            </Typography>
            <Typography component='li' sx={{ ml: 4 }}>
              Device and Technical Data: IP address, browser type, operating system, and device information.
            </Typography>
            <Typography component='li' sx={{ ml: 4 }}>
              Cookies and Tracking Technologies: data collected through cookies and similar technologies to enhance user
              experience.
            </Typography>
          </ul>

          <Typography variant='h5' gutterBottom sx={{ mt: 3 }}>
            3. How We Use Your Information
          </Typography>
          <Typography paragraph>We use the collected information for the following purposes:</Typography>
          <ul>
            <Typography component='li' sx={{ ml: 4 }}>
              To provide and maintain our service, including creating and managing your account.
            </Typography>
            <Typography component='li' sx={{ ml: 4 }}>
              To facilitate matchmaking and communication with other users.
            </Typography>
            <Typography component='li' sx={{ ml: 4 }}>
              To personalize your experience and provide content relevant to your interests.
            </Typography>
            <Typography component='li' sx={{ ml: 4 }}>
              To monitor and analyze usage and trends to improve our service.
            </Typography>
            <Typography component='li' sx={{ ml: 4 }}>
              To protect the safety and security of our users and services.
            </Typography>
            <Typography component='li' sx={{ ml: 4 }}>
              To comply with legal obligations and enforce our terms and policies.
            </Typography>
          </ul>

          <Typography variant='h5' gutterBottom sx={{ mt: 3 }}>
            4. Legal Basis for Processing
          </Typography>
          <Typography paragraph>We process your personal data based on the following legal grounds:</Typography>
          <ul>
            <Typography component='li' sx={{ ml: 4 }}>
              <strong>Consent:</strong> When you have given explicit consent for processing your data for specific
              purposes.
            </Typography>
            <Typography component='li' sx={{ ml: 4 }}>
              <strong>Contractual Necessity:</strong> To perform the contract we have with you, such as providing our
              dating services.
            </Typography>
            <Typography component='li' sx={{ ml: 4 }}>
              <strong>Legitimate Interests:</strong> To pursue our legitimate interests in improving and securing our
              services, provided these interests are not overridden by your rights.
            </Typography>
            <Typography component='li' sx={{ ml: 4 }}>
              <strong>Legal Obligation:</strong> To comply with legal obligations, such as record-keeping requirements.
            </Typography>
          </ul>

          <Typography variant='h5' gutterBottom sx={{ mt: 3 }}>
            5. Data Retention
          </Typography>
          <Typography paragraph>
            We retain your personal data only as long as necessary to fulfill the purposes outlined in this Privacy
            Policy or as required by law. Once your data is no longer needed, we will securely delete or anonymize it.
          </Typography>

          <Typography variant='h5' gutterBottom sx={{ mt: 3 }}>
            6. Data Sharing and Disclosure
          </Typography>
          <Typography paragraph>
            We may share your information with third parties in the following circumstances:
          </Typography>
          <ul>
            <Typography component='li' sx={{ ml: 4 }}>
              <strong>Service Providers:</strong> Trusted third-party companies that perform services on our behalf,
              such as payment processing and data analysis.
            </Typography>
            <Typography component='li' sx={{ ml: 4 }}>
              <strong>Legal Requirements:</strong> When required to do so by law or in response to valid legal requests.
            </Typography>
            <Typography component='li' sx={{ ml: 4 }}>
              <strong>Business Transfers:</strong> In connection with any merger, sale of company assets, financing, or
              acquisition of all or a portion of our business.
            </Typography>
          </ul>

          <Typography variant='h5' gutterBottom sx={{ mt: 3 }}>
            7. International Data Transfers
          </Typography>
          <Typography paragraph>
            Your information may be transferred to and processed in countries outside the UK. We ensure that appropriate
            safeguards are in place to protect your data in accordance with UK GDPR requirements.
          </Typography>

          <Typography variant='h5' gutterBottom sx={{ mt: 3 }}>
            8. Your Data Protection Rights
          </Typography>
          <Typography paragraph>
            Under the UK GDPR, you have the following rights regarding your personal data:
          </Typography>
          <ul>
            <Typography component='li' sx={{ ml: 4 }}>
              <strong>Right to Access:</strong> Obtain a copy of your personal data and information about how it is
              processed.
            </Typography>
            <Typography component='li' sx={{ ml: 4 }}>
              <strong>Right to Rectification:</strong> Request correction of any inaccuracies in your personal data.
            </Typography>
            <Typography component='li' sx={{ ml: 4 }}>
              <strong>Right to Erasure:</strong> Request deletion of your personal data, also known as the &ldquo;right
              to be forgotten.&rdquo;
            </Typography>
            <Typography component='li' sx={{ ml: 4 }}>
              <strong>Right to Restrict Processing:</strong> Request limitations on how we use your data, especially if
              the data is inaccurate or processed unlawfully.
            </Typography>
            <Typography component='li' sx={{ ml: 4 }}>
              <strong>Right to Data Portability:</strong> Request a copy of your data in a structured, commonly used,
              and machine-readable format, and transfer it to another service.
            </Typography>
            <Typography component='li' sx={{ ml: 4 }}>
              <strong>Right to Object:</strong> Object to the processing of your data, particularly if it is based on
              legitimate interests or used for direct marketing.
            </Typography>
            <Typography component='li' sx={{ ml: 4 }}>
              <strong>Rights Related to Automated Decision-Making:</strong> If our service includes automated
              decision-making or profiling, you have the right to request human intervention, express your point of
              view, and contest the decision.
            </Typography>
          </ul>

          <Typography variant='h5' gutterBottom sx={{ mt: 3 }}>
            9. Cookies and Tracking Technologies
          </Typography>
          <Typography paragraph>
            We use cookies and similar tracking technologies to enhance your experience on our site, such as storing
            your preferences and analyzing site traffic. For more details, please review our Cookie Policy.
          </Typography>

          <Typography variant='h5' gutterBottom sx={{ mt: 3 }}>
            10. Security
          </Typography>
          <Typography paragraph>
            We implement technical and organizational measures to protect your data against unauthorized access,
            alteration, disclosure, or destruction. However, no security measure is completely foolproof, and we cannot
            guarantee absolute security.
          </Typography>

          <Typography variant='h5' gutterBottom sx={{ mt: 3 }}>
            11. Contact Information
          </Typography>
          <Typography paragraph>
            For questions about this Privacy Policy or to exercise your data rights, please contact us at:
          </Typography>
          <Typography paragraph>
            Randisko Privacy Team <br />
            Email: privacy@randisko.com <br />
            Address: [Company Address, UK]
          </Typography>

          <Typography variant='h5' gutterBottom sx={{ mt: 3 }}>
            12. Changes to This Privacy Policy
          </Typography>
          <Typography paragraph>
            We may update this Privacy Policy periodically. Changes will be posted on this page, and we encourage you to
            review it regularly.
          </Typography>
        </Box>
      </Paper>
    </Container>
  )
}

export default PrivacyView
