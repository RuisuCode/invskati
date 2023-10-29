import { Box, Container, Typography } from "@mui/material";
import Copyright from "./copyright";

export default function Footer() {
  return (
    <>
      <Box component="footer" sx={{ bgcolor: "transparent", pt: 6, pb: 1 }}>
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom>
            Investigaciones
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
            Hecho por Luis Campos. C.I:29.700.647
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </>
  );
}
