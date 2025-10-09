import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';

const ItemPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [bidAmount, setBidAmount] = useState('');
  const [stompClient, setStompClient] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`/api/items/${id}`);
        setItem(response.data);
      } catch (error) {
        // Handle error
      }
    };
    fetchItem();

    const socket = new SockJS('/ws');
    const client = Stomp.over(socket);

    client.connect({}, () => {
      client.subscribe(`/topic/bids`, (message) => {
        const newBid = JSON.parse(message.body);
        if (newBid.item.id === parseInt(id)) {
          setItem((prevItem) => ({ ...prevItem, currentPrice: newBid.amount }));
        }
      });
    });

    setStompClient(client);

    return () => {
      if (stompClient) {
        stompClient.disconnect();
      }
    };
  }, [id]);

  const placeBid = () => {
    if (stompClient) {
      const bid = {
        item: { id: parseInt(id) },
        amount: parseFloat(bidAmount),
      };
      stompClient.send("/app/bid", {}, JSON.stringify(bid));
    }
  };

  if (!item) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container style={{ marginTop: '2rem' }}>
      <Typography variant="h3">{item.name}</Typography>
      <Typography>{item.description}</Typography>
      <Typography>Start Price: ${item.startPrice}</Typography>
      <Typography>Current Price: ${item.currentPrice}</Typography>
      <TextField
        label="Bid Amount"
        variant="outlined"
        type="number"
        value={bidAmount}
        onChange={(e) => setBidAmount(e.target.value)}
        style={{ marginTop: '1rem' }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={placeBid}
        style={{ marginTop: '1rem' }}
      >
        Place Bid
      </Button>
    </Container>
  );
};

export default ItemPage;
