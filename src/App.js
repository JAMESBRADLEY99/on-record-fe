import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import AlbumPage from './pages/AlbumPage';

function App() {
  return (
    <Router>
      <nav className="custom-navbar">
        <Link to="/">On Record</Link>
        <Link to="/search">Search Page</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/album/:albumId" element={<AlbumPage />} />
      </Routes>
    </Router>
  );
}

export default App;
