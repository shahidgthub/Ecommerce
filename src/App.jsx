// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Home from './components/page/Home';
// import Login from './components/Login';
// import Register from './components/Register';
// import Forgotpassword from './components/Forgotpassword';
// import Resetpassword from './components/Resetpassword';
// import Dashboard from './components/Dashboard';

// function App() {
//   return (
//     <BrowserRouter>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/dashboard" element={<Dashboard />} />

//         <Route path="/forgotpassword" element={<Forgotpassword />} />
//         <Route path="/resetpassword/:token" element={<Resetpassword />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/page/Home';
import Login from './components/Login';
import Register from './components/Register';
import Forgotpassword from './components/Forgotpassword';
import Resetpassword from './components/Resetpassword';
import Dashboard from './components/Dashboard';

// Wrapper component to access useLocation outside <BrowserRouter>
const AppContent = () => {
  const location = useLocation();

  const hideHeaderRoutes = ['/login', '/register', '/dashboard', '/forgotpassword'];
  const hideHeader = hideHeaderRoutes.some(route =>
    location.pathname.startsWith(route)
  );

  return (
    <>
      {!hideHeader && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route path="/resetpassword/:token" element={<Resetpassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;

