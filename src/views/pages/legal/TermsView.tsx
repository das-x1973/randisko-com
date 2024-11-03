// src/views/pages/legal/TermsView.tsx

import { Container, Typography, Paper, Box, Breadcrumbs, Link } from '@mui/material'

import type { Mode } from '@core/types'

const TermsView = ({ mode }: { mode: Mode }) => {
  return (
    <Container maxWidth='lg' sx={{ py: 8 }}>
      <Breadcrumbs sx={{ mb: 4 }}>
        <Link href='/' color='inherit'>
          Home
        </Link>
        <Typography color='text.primary'>Terms of Service</Typography>
      </Breadcrumbs>

      <Paper elevation={0} sx={{ p: 4 }}>
        <Typography variant='h3' component='h1' gutterBottom>
          Terms of Service
        </Typography>
        <Typography variant='subtitle1' color='text.secondary' gutterBottom>
          Last updated: {new Date().toLocaleDateString('en-GB')}
        </Typography>

        <Box sx={{ mt: 4 }}>
          <Typography variant='h5' gutterBottom>
            1. Introduction
          </Typography>
          <Typography paragraph>
            Welcome to Randisko (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). By accessing or using our
            dating platform, you agree to these Terms of Service. These terms constitute a legally binding agreement
            between you and Randisko regarding your use of our mindful dating service.
          </Typography>

          <Typography variant='h5' gutterBottom sx={{ mt: 3 }}>
            2. Eligibility
          </Typography>
          <Typography paragraph>
            You must be at least 18 years old to use Randisko. By using our service, you represent and warrant that:
          </Typography>
          <ul>
            <Typography component='li' sx={{ ml: 4 }}>
              You are at least 18 years of age.
            </Typography>
            <Typography component='li' sx={{ ml: 4 }}>
              You are legally capable of entering into binding contracts.
            </Typography>
            <Typography component='li' sx={{ ml: 4 }}>
              You are not prohibited by law from using our services.
            </Typography>
          </ul>

          <Typography variant='h5' gutterBottom sx={{ mt: 3 }}>
            3. Account Registration
          </Typography>
          <Typography paragraph>
            To use certain features, you must create an account with accurate and complete information. You are
            responsible for keeping your login information secure and for all activity that occurs under your account.
          </Typography>

          <Typography variant='h5' gutterBottom sx={{ mt: 3 }}>
            4. User Conduct
          </Typography>
          <Typography paragraph>When using Randisko, you agree not to engage in any behavior that:</Typography>
          <ul>
            <Typography component='li' sx={{ ml: 4 }}>
              Violates any applicable laws or regulations.
            </Typography>
            <Typography component='li' sx={{ ml: 4 }}>
              Harasses, abuses, or harms others.
            </Typography>
            <Typography component='li' sx={{ ml: 4 }}>
              Involves any unauthorized commercial activities, such as advertising or spamming.
            </Typography>
            <Typography component='li' sx={{ ml: 4 }}>
              Infringes on intellectual property rights or privacy rights of others.
            </Typography>
          </ul>

          <Typography variant='h5' gutterBottom sx={{ mt: 3 }}>
            5. Content Ownership and License
          </Typography>
          <Typography paragraph>
            You retain ownership of the content you post on Randisko. However, by posting content, you grant us a
            non-exclusive, transferable, sub-licensable, royalty-free, worldwide license to use, distribute, modify, and
            display that content in connection with providing the service.
          </Typography>

          <Typography variant='h5' gutterBottom sx={{ mt: 3 }}>
            6. Termination of Account
          </Typography>
          <Typography paragraph>
            We reserve the right to suspend or terminate your account if we believe you have violated these Terms of
            Service or engaged in behavior that could harm us or others.
          </Typography>

          <Typography variant='h5' gutterBottom sx={{ mt: 3 }}>
            7. Disclaimers and Limitation of Liability
          </Typography>
          <Typography paragraph>
            Our service is provided &ldquo;as is&rdquo; without warranties of any kind. We do not guarantee the accuracy
            or reliability of any content. To the fullest extent permitted by law, we disclaim liability for any
            indirect, incidental, special, or consequential damages arising from your use of the service.
          </Typography>

          <Typography variant='h5' gutterBottom sx={{ mt: 3 }}>
            8. Indemnification
          </Typography>
          <Typography paragraph>
            You agree to indemnify and hold harmless Randisko and its affiliates from any claims, damages, or expenses
            (&ldquo;including legal fees&rdquo;) arising from your use of the service or violation of these terms.
          </Typography>

          <Typography variant='h5' gutterBottom sx={{ mt: 3 }}>
            9. Modifications to the Terms
          </Typography>
          <Typography paragraph>
            We may update these Terms of Service periodically. Any changes will be posted here, and it is your
            responsibility to review these terms regularly. Continued use of Randisko after changes constitutes
            acceptance of the updated terms.
          </Typography>

          <Typography variant='h5' gutterBottom sx={{ mt: 3 }}>
            10. Governing Law and Dispute Resolution
          </Typography>
          <Typography paragraph>
            These Terms of Service are governed by the laws of the United Kingdom. Any disputes arising out of or
            related to these terms will be resolved in the courts of the UK.
          </Typography>

          <Typography variant='h5' gutterBottom sx={{ mt: 3 }}>
            11. Contact Information
          </Typography>
          <Typography paragraph>For questions about these Terms of Service, please contact us at:</Typography>
          <Typography paragraph>
            Randisko Legal Team <br />
            Email: legal@randisko.com <br />
            Address: [Company Address, UK]
          </Typography>
        </Box>
      </Paper>
    </Container>
  )
}

export default TermsView
