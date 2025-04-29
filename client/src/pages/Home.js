import React, { useState } from 'react';
import StockSearch from '../components/StockSearch';
import StockMetrics from '../components/StockMetrics';
import PriceChart from '../components/PriceChart';

function Home() {
  const [symbol, setSymbol] = useState('AAPL');
  const [mockData] = useState({
    currentPrice: 142.3,
    priceHistory: [120, 130, 125, 140, 150],
    peRatio: 25,
    growthRate: 30,
    growthOverPE: 1.2,
    high: 160,
    low: 100,
    fiftyTwoWeekHigh: 170,
    fiftyTwoWeekLow: 90,
    dividends: '1.5% with 5% annual growth',
  });

  const handleAddToFavorites = async () => {
    const userID = 'exampleUserId'; // will replace with the actual user ID 

    const stockDara = {
      symbol,
      name: 'Apple Inc.',
      industry: 'Technology',
      pe: mockData.peRatio,
      growth: mockData.growthRate,
      userId: userId,

    };

    try {
      await addStockToFavorites(stockData);

      alert('Stock added to favorites!');
    } catch (error) {
      alert('Failed to add stock to favorites.');
    }

  };

    

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
          color: '#222',
        }}
      >
        📈 StockQ Dashboard
      </h1>

      <div
        style={{
          backgroundColor: '#ffffff',
          padding: '2rem',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
          marginBottom: '2rem',
        }}
      >
        <StockSearch onSearch={setSymbol} />
        <StockMetrics data={mockData} />
        <PriceChart data={mockData.priceHistory} />
        <button
          style={{
            marginTop: '1.5rem',
            width: '100%',
            padding: '0.75rem',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            fontSize: '1rem',
            fontWeight: 500,
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
        >
          ➕ Add to Favorites
        </button>
      </div>
    </div>
  );
}

export default Home;
