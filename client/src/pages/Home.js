import React, { useState } from 'react';
import StockSearch from '../components/StockSearch';
import StockMetrics from '../components/StockMetrics';
import PriceChart from '../components/PriceChart';
import { supabase } from '../supabaseClient';

function Home() {
  const [symbol, setSymbol] = useState('AAPL');
  const [industry, setIndustry] = useState('');
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

  const addToFavorites = async () => {
    try {
      const userId = 'demo-user'; // Replace with actual user ID if using auth

      const { error } = await supabase
        .from('favorite_stocks')
        .insert([
          {
            symbol: symbol,
            industry: industry || 'Tech', // hardcoded for now
            user_id: userId,
            current_price: mockData.currentPrice,
            pe_ratio: mockData.peRatio,
            growth_rate: mockData.growthRate,
            high_per_year: mockData.high,
            low_per_year: mockData.low,
            fifty_two_week_high: mockData.fiftyTwoWeekHigh,
            fifty_two_week_low: mockData.fiftyTwoWeekLow,
            dividends: mockData.dividends,
            growth_over_pe: mockData.growthOverPE,
          },
        ]);

      if (error) throw error;
      alert('Stock added to favorites!');
    } catch (error) {
      console.error('Error adding stock to favorites:', error.message);
      alert('Failed to add stock.');
    }
  };

  const handleIndustryChange = (event) => {
    setIndustry(event.target.value);
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

         {/* Dropdown for industry selection */}
        <select
          style={{
            width: '100%',
            padding: '0.75rem',
            margin: '1rem 0',
            border: '1px solid #ccc',
            borderRadius: '6px',
          }}
          value={industry}
          onChange={handleIndustryChange}
        >
          <option value="">Select Industry</option>
          <option value="Tech">Tech</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Clothing">Clothing</option>
          <option value="Auto">Auto</option>
          {/* Add more industries here */}
        </select>

        
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
          onClick={addToFavorites}
        >
          ➕ Add to Favorites
        </button>
      </div>
    </div>
  );
}

export default Home;
