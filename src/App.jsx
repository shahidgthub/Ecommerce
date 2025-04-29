import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/page/Home';
import Login from './components/Login';
import Register from './components/Register';
import Forgotpassword from './components/Forgotpassword';
import Resetpassword from './components/Resetpassword';
import Dashboard from './components/Dashboard';
import Myaccount from './components/Myaccount';
import Mymember from './components/Mymember';
import Myprofile from './components/Myprofile';
import Signout from './components/Signout';
import Chatbox from './components/Chatbox';
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  const path = location.pathname;

  // Only show Header on home, login, and register
  const showHeader = path === '/' || path === '/login' || path === '/register';

  return (
    <>
      {showHeader && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route path="/resetpassword/:token" element={<Resetpassword />} />

        {/* Dashboard main route */}
        <Route path="/dashboard" element={<Dashboard />}>
  <Route index element={<Myaccount />} /> {/* This makes Myaccount the default */}
  <Route path="myaccount" element={<Myaccount />} />
  <Route path="mymember" element={<Mymember />} />
  <Route path="myprofile" element={<Myprofile />} />
  <Route path="chatbox" element={<Chatbox />} />

  <Route path="signout" element={<Signout />} />


</Route>

      </Routes>
    </>
  );
}

export default App;
