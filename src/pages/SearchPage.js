import React, { useState } from 'react';

function SearchPage() {
  const [searchText, setSearchText] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchText) {
      return;
    }
    fetch(`http://localhost:9000/searchAlbums/${searchText}`)
      .then(res => res.json())
      .then(data => setResults(data))
  };

  return (
    <div className="main">
      <h1>Search</h1>
      <form onSubmit={handleSearch}>
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <ul className="no-bullets">
        {results.map((item, index) => (
          <>
          <li key={index}>
            <a href={`/album/${item.album_id}`}>{item.name}</a>
          </li>
            <p className="artist" >{item.artist}</p>
          </>
        ))}
      </ul>
    </div>
  );
}

export default SearchPage;