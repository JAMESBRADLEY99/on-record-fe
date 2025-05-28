import './App.css';
import React, { useState } from 'react';

function App() {
  const [searchText, setSearchText] = useState('');
  const [results, setResults] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    fetch(`http://localhost:9000/searchAlbums/${searchText}`)
      .then(res => res.json())
      .then(data => setResults(JSON.stringify(data)))
  };

  return (
    <div>
      <h1>Search</h1>
      <form onSubmit={handleSearch}>
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <p>{results}</p>
    </div>
  );
}

export default App;
