const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());  // Enable CORS

// Endpoint for querying stock data
app.get('/api/stock/:ticker', async (req, res) => {
  const ticker = req.params.ticker;
  const apiKey = process.env.ALPHA_VANTAGE_API_KEY;
  const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=${apiKey}`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    if (data.Note || !data.Symbol) {
      return res.status(404).json({ error: 'Stock not found or API limit reached' });
    }

    // Calculate growth rate (dummy calculation)
    const growthRate = data.NetIncomeGrowth ? parseFloat(data.NetIncomeGrowth) : 0;
    const peRatio = parseFloat(data.PeRatio);

    // Send the relevant data back
    res.json({
      name: data.Name,
      symbol: data.Symbol,
      industry: data.Industry,
      growthRate: growthRate,
      peRatio: peRatio,
      growthOverPe: growthRate > peRatio,
      currentPrice: data.Price,
      high52Week: data['52WeekHigh'],
      low52Week: data['52WeekLow'],
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch stock data' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
