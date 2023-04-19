import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
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
  useEffect(() => {
    if (window.location.href === 'https://tarikpnr.github.io/') {
      window.location.href = 'https://tarikpinarci.com';
    }
  }, []);

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
