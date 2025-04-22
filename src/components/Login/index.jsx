import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Add axios for making API calls

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password }); // POST request to your backend
      console.log('Login successful:', response.data);
      navigate('/dashboard'); // Redirect after successful login
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid email or password'); // Display error message from backend
    }
  };

  return (
    <Container maxWidth="xs">
      <div style={{ textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Login
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
          {error && <Typography color="error">{error}</Typography>}
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>
        <div style={{ marginTop: '1rem' }}>
          <Typography variant="body2">
            Don't have an account? <Link to="/register">Register</Link>
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default Login;
