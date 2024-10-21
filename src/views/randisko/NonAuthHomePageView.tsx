// src/views/randisko/NonAuthHomePageView.tsx

import { Container, Typography } from "@mui/material";

export default function NonAuthHomeView() {
  return (
    <Container>
      <Typography variant="body1" sx={{ mt: 2 }}>
        You shall not pass - NON auth user
      </Typography>
      <Typography>
        Sign-up or Sign-in to enter
      </Typography>
    </Container>
  );
}
