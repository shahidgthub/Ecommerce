import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('✅ Registered successfully!');
      } else {
        setMessage(` ${data.message}`);
      }
    } catch (err) {
      setMessage('Registration failed. Please try again.');
    }
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

          {/* Forgot Password Link */}
          <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
            <Link to="/forgotpassword" style={{ fontSize: '0.875rem' }}>
              Forgot Password?
            </Link>
          </div>

          {message && (
            <Typography color="error" style={{ marginBottom: '1rem' }}>
              {message}
            </Typography>
          )}

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
