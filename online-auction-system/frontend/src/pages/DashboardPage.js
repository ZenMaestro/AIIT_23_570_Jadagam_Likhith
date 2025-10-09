import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography, Container } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('/api/items');
        setItems(response.data);
      } catch (error) {
        // Handle error
      }
    };
    fetchItems();
  }, []);

  return (
    <Container style={{ marginTop: '2rem' }}>
      <Grid container spacing={3}>
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card>
              <CardContent>
                <Typography variant="h5">{item.name}</Typography>
                <Typography>Start Price: ${item.startPrice}</Typography>
                <Typography>Current Price: ${item.currentPrice}</Typography>
                <Link to={`/item/${item.id}`}>View Details</Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DashboardPage;
