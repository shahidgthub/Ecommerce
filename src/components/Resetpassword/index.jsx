import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Button, Typography, Container } from '@mui/material';

const Resetpassword = () => {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:5000/api/reset-password/${token}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ newPassword }),
    });
    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h5">Reset Password</Typography>
      <form onSubmit={handleReset}>
        <TextField
          label="New Password"
          fullWidth
          margin="normal"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        {message && <Typography color="primary">{message}</Typography>}
        <Button type="submit" fullWidth variant="contained">Reset Password</Button>
      </form>
    </Container>
  );
};

export default Resetpassword;
