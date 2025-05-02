import React, { useState, useEffect } from 'react';
import fetchStockData from './fetchStockData';  // Import the function to fetch data from Alpha Vantage
import insertStockData from './insertStockData'; // Import the function to insert data into Supabase

const StockDashboard = () => {
  const [symbol, setSymbol] = useState('AAPL'); // Default stock symbol (Apple)
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const timeSeries = await fetchStockData(symbol);  // Fetch stock data
      setStockData(timeSeries);  // Update state with fetched data
      await insertStockData(symbol, timeSeries);  // Insert data into Supabase
    };

    fetchData();
  }, [symbol]);  // Only fetch data when symbol changes

  return (
    <div>
      <h1>{symbol} Stock Data</h1>
      <pre>{JSON.stringify(stockData, null, 2)}</pre>  {/* Display stock data for now */}
    </div>
  );
};

export default StockDashboard;
