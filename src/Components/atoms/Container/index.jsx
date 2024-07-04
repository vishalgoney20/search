import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function AppContainer({children}) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ height: '100vh' }}> 
          {children}
        </Box>
      </Container>
    </React.Fragment>
  );
}
