import React from 'react';
import { Typography, Container } from '@mui/material';

const AboutPage = () => {
  return (
    <Container>
      <Typography variant="h4" style={{ marginTop: '2rem' }}>About Us</Typography>
      <Typography variant="body1" style={{ marginTop: '1rem' }}>
        We are a premier online auction platform dedicated to providing a seamless and exciting bidding experience.
      </Typography>
    </Container>
  );
};

export default AboutPage;
