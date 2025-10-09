import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Alert } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await axios.post('/api/auth/signup', { username, password, email });
      setSuccess(true);
      setError(null);
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      setError('Failed to sign up. Please try again.');
      setSuccess(false);
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" style={{ marginTop: '2rem' }}>Sign Up</Typography>
      {error && <Alert severity="error" style={{ marginTop: '1rem' }}>Failed to edit, 0 occurrences found for old_string (import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import axios from 'axios';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignup = async () => {
    try {
      await axios.post('/api/auth/signup', { username, password, email });
      // Handle successful signup (e.g., redirect to login)
    } catch (error) {
      // Handle signup error
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" style={{ marginTop: '2rem' }}>Sign Up</Typography>
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSignup}
        style={{ marginTop: '1rem' }}
      >
        Sign Up
      </Button>
    </Container>
  );
};). Original old_string was (import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import axios from 'axios';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignup = async () => {
    try {
      await axios.post('/api/auth/signup', { username, password, email });
      // Handle successful signup (e.g., redirect to login)
    } catch (error) {
      // Handle signup error
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" style={{ marginTop: '2rem' }}>Sign Up</Typography>
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSignup}
        style={{ marginTop: '1rem' }}
      >
        Sign Up
      </Button>
    </Container>
  );
};) in C:\Users\sai43\online-auction-system\frontend\src\pages\SignupPage.js. No edits made. The exact text in old_string was not found. Ensure you're not escaping content incorrectly and check whitespace, indentation, and context. Use read_file tool to verify.</Alert>}
      {success && <Alert severity="success" style={{ marginTop: '1rem' }}>Sign up successful! Redirecting to login...</Alert>}
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSignup}
        style={{ marginTop: '1rem' }}
      >
        Sign Up
      </Button>
    </Container>
  );
};
