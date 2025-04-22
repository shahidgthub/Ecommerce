import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add registration logic (e.g., API call to register a new user)
    alert('Registered successfully');
  };

  return (
    <Container maxWidth="xs">
      <div style={{ textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Register
        </Typography>
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
          <div style={{ marginBottom: '1rem' }}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Register
          </Button>
        </form>
        <div style={{ marginTop: '1rem' }}>
          <Typography variant="body2">
            Already have an account? <Link to="/login">Login</Link>
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default Register;
