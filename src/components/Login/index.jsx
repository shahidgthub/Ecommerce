import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Container, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      console.log('Login successful:', response.data);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid email or password');
    }
  };

  return (
    <div style={{ backgroundColor: '#FFE0B2', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Container maxWidth="xs">
        <Paper elevation={4} style={{ padding: '2rem', borderRadius: '1rem' }}>
          <Typography variant="h4" gutterBottom align="center" color="primary">
            Login
          </Typography>
          <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <div style={{ marginBottom: '4rem' }}>
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
            <div style={{ marginBottom: '4rem' }}>
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

            {/* Forgot Password Link */}
            <div style={{ marginBottom: '5', textAlign: 'center' }}>
                      <Link to="/forgotpassword" style={{ fontSize: '0.875rem' }}>
                        Forgot Password?
                      </Link>
                    </div>
          </form>
          
          <div style={{ marginTop: '1rem', textAlign: 'center' }}>
            <Typography variant="body2">
              Don’t have an account? <Link to="/register">Register</Link>
            </Typography>
          </div>
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
