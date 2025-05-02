
import React from 'react';

function FavoriteCard({ data }) {
  const labelStyle = { fontWeight: 600, color: 'inherit' };
  const valueStyle = { marginLeft: '0.5rem', color: 'inherit' };

  return (
    <div
      className="fade-in"
      style={{
        backgroundColor: 'inherit',
        color: 'inherit',
        padding: '1.5rem',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        transition: 'box-shadow 0.3s ease',
      }}
      onMouseOver={(e) =>
        (e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.12)')
      }
      onMouseOut={(e) =>
        (e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.06)')
      }
    >
      <h2 style={{ fontSize: '1.25rem', margin: 0 }}>{data.name}</h2>
{data.industry && (
      <p style={{ margin: 0, opacity: 0.7 }}>
        <span style={labelStyle}>Industry:</span>
        <span style={valueStyle}>{data.industry}</span>
      </p>  
  )}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <p style={{ margin: 0 }}>
          <span style={labelStyle}>P/E:</span>
          <span style={valueStyle}>{data.pe}</span>
        </p>
        <p style={{ margin: 0 }}>
          <span style={labelStyle}>Growth:</span>
          <span style={valueStyle}>{data.growth}%</span>
        </p>
      </div>
      <button
        style={{
          marginTop: '1rem',
          alignSelf: 'flex-end',
          padding: '0.5rem 1rem',
          backgroundColor: '#dc3545',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          fontWeight: 500,
          fontSize: '0.95rem',
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#a71d2a')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#dc3545')}
      >
        ❌ Remove
      </button>
    </div>
  );
}

export default FavoriteCard;
