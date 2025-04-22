import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';

const Forgotpassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h5">Forgot Password</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {message && <Typography color="primary">{message}</Typography>}
        <Button type="submit" fullWidth variant="contained">Send Reset Link</Button>
      </form>
    </Container>
  );
};

export default Forgotpassword;
