'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import InitHistoryPage from '@/components/InitHistoryPage';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
  },
});


export default function Home() {



  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Container>
          <InitHistoryPage />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
