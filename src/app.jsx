import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import Footer from './pages/footer';
import { Home } from './pages/home';
import './style.css';

function App() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (window.location.href === 'https://tarikpnr.github.io/') {
      window.location.href = 'https://tarikpinarci.com';
    }
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div class="redirect-loader">
        <div class="circle"></div>
        <div class="text">Redirecting...</div>
      </div>
    );
  }

  return (
    <Router basename="/">
      <div className="App">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
