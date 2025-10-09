import React from 'react';
import { Typography, Container } from '@mui/material';

const ProfilePage = () => {
  return (
    <Container>
      <Typography variant="h4" style={{ marginTop: '2rem' }}>My Profile</Typography>
      {/* Display user's orders here */}
    </Container>
  );
};

export default ProfilePage;
