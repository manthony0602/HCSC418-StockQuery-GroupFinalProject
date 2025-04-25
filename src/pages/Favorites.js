import React, { useState } from 'react';
import FavoriteCard from '../components/FavoriteCard';

function Favorites() {
  const [favorites] = useState([]); // test with empty array to see empty message

  return (
    <div
      style={{
        padding: '3rem 1rem',
        maxWidth: '700px',
        margin: '0 auto',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      <h1
        style={{
          fontSize: '2rem',
          fontWeight: 600,
          marginBottom: '2rem',
          textAlign: 'center',
        }}
      >
        ⭐ Your Favorite Stocks
      </h1>

      <input
        placeholder="Filter by industry (e.g. Tech)"
        style={{
          width: '100%',
          padding: '0.75rem',
          marginBottom: '2rem',
          border: '1px solid #ccc',
          borderRadius: '6px',
          fontSize: '1rem',
        }}
      />

      {favorites.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#888' }}>
          No favorites yet. Add some from the Home page!
        </p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {favorites.map((fav, index) => (
            <FavoriteCard key={index} data={fav} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
