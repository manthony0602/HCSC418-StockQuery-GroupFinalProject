import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  return (
    <Router>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          padding: '1rem 0',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #ddd',
          fontFamily: 'Segoe UI, sans-serif',
        }}
      >
        <NavLink
          to="/"
          style={({ isActive }) => ({
            textDecoration: 'none',
            fontWeight: 500,
            fontSize: '1rem',
            color: isActive ? '#007bff' : '#333',
            borderBottom: isActive ? '2px solid #007bff' : 'none',
            paddingBottom: '0.25rem',
          })}
        >
          📊 Home
        </NavLink>
        <NavLink
          to="/favorites"
          style={({ isActive }) => ({
            textDecoration: 'none',
            fontWeight: 500,
            fontSize: '1rem',
            color: isActive ? '#007bff' : '#333',
            borderBottom: isActive ? '2px solid #007bff' : 'none',
            paddingBottom: '0.25rem',
          })}
        >
          ⭐ Favorites
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;
