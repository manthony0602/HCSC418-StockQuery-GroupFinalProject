import React, { useState } from 'react';
import axios from 'axios';

const StockQuery = () => {
  const [ticker, setTicker] = useState('');
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setTicker(e.target.value);
  };

  const fetchStockData = async () => {
    if (!ticker) return;

    setLoading(true);
    setError('');
    setStockData(null);

    try {
      const response = await axios.get(`http://localhost:5000/api/stock/${ticker}`);
      setStockData(response.data);
    } catch (error) {
      setError('Error fetching stock data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="stock-query">
      <h1>Stock Query</h1>
      <input 
        type="text" 
        value={ticker} 
        onChange={handleChange} 
        placeholder="Enter Stock Ticker"
      />
      <button onClick={fetchStockData} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Stock Data'}
      </button>

      {error && <div className="error">{error}</div>}

      {stockData && (
        <div className="stock-info">
          <h2>{stockData.name} ({stockData.symbol})</h2>
          <p><strong>Industry:</strong> {stockData.industry}</p>
          <p><strong>Growth Rate:</strong> {stockData.growthRate}%</p>
          <p><strong>P/E Ratio:</strong> {stockData.peRatio}</p>
          <p><strong>Growth over P/E:</strong> {stockData.growthOverPe ? 'Yes' : 'No'}</p>
          <p><strong>52 Week High:</strong> {stockData.high52Week}</p>
          <p><strong>52 Week Low:</strong> {stockData.low52Week}</p>
          <p><strong>Current Price:</strong> {stockData.currentPrice}</p>
        </div>
      )}
    </div>
  );
};

export default StockQuery;
