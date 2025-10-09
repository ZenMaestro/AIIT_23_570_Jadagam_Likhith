import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import axios from 'axios';

const SellPage = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startPrice, setStartPrice] = useState('');

  const handleCreateItem = async () => {
    try {
      await axios.post('/api/items', { name, description, startPrice });
      // Handle successful item creation
    } catch (error) {
      // Handle error
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" align="center">Sell an Item</Typography>
      <TextField
        label="Item Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Description"
        variant="outlined"
        fullWidth
        margin="normal"
        multiline
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <TextField
        label="Start Price"
        variant="outlined"
        type="number"
        fullWidth
        margin="normal"
        value={startPrice}
        onChange={(e) => setStartPrice(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleCreateItem}
        style={{ marginTop: '1rem' }}
      >
        Create Item
      </Button>
    </Container>
  );
};

export default SellPage;
