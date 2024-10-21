// src/views/randisko/AuthHomePageView.tsx

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

// import Box from "@mui/material/Box";

import type { Session } from "next-auth";

export default function AuthHomeView({ session }: { session: Session }) {

  return (
    <Container>
      <Typography> Home page - auth user</Typography>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Welcome, {session?.user?.name || "user"}!
      </Typography>


      {/* <Box sx={{ mt: 2 }}>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </Box> */}
    </Container>
  );
}


