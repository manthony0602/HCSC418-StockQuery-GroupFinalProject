import React, { useState } from 'react';

function StockSearch({ onSearch }) {
  const [input, setInput] = useState('');

  return (
    <div
      style={{
        display: 'flex',
        gap: '0.75rem',
        marginBottom: '1.5rem',
        alignItems: 'center',
      }}
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter stock symbol (e.g. AAPL)"
        style={{
          flex: 1,
          padding: '0.75rem',
          border: '1px solid #ccc',
          borderRadius: '6px',
          fontSize: '1rem',
        }}
      />
      <button
        style={{
          backgroundColor: '#28a745',
          color: 'white',
          padding: '0.75rem 1.25rem',
          borderRadius: '6px',
          fontSize: '1rem',
          fontWeight: 500,
          transition: 'background-color 0.3s ease',
        }}
        onClick={() => onSearch(input)}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#1e7e34')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#28a745')}
      >
        🔍 Search
      </button>
    </div>
  );
}

export default StockSearch;
