import React from 'react';
import { Typography, Container } from '@mui/material';

const HelpPage = () => {
  return (
    <Container>
      <Typography variant="h4" style={{ marginTop: '2rem' }}>Help & Support</Typography>
      <Typography variant="body1" style={{ marginTop: '1rem' }}>
        If you need any assistance, please contact our support team at support@onlineauction.com.
      </Typography>
    </Container>
  );
};

export default HelpPage;
