import React from 'react';
import { Typography, Container } from '@mui/material';

const HomePage = () => {
  return (
    <Container>
      <Typography variant="h2" align="center" style={{ marginTop: '2rem' }}>
        Welcome to the Online Auction System
      </Typography>
      <Typography variant="body1" align="center" style={{ marginTop: '1rem' }}>
        Bid on your favorite items in real-time.
      </Typography>
    </Container>
  );
};

export default HomePage;
