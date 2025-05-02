import axios from 'axios';

const ALPHA_VANTAGE_API_KEY = 'your_alpha_vantage_api_key'; // Replace with your actual API key
const ALPHA_VANTAGE_API_URL = 'https://www.alphavantage.co/query';

const fetchStockData = async (symbol) => {
  try {
    const response = await axios.get(ALPHA_VANTAGE_API_URL, {
      params: {
        function: 'TIME_SERIES_DAILY', // You can change the function to get different types of data
        symbol: symbol,
        apikey: ALPHA_VANTAGE_API_KEY,
      },
    });

    const data = response.data;
    if (data['Time Series (Daily)']) {
      const timeSeries = data['Time Series (Daily)'];
      console.log(timeSeries);
      return timeSeries;
    } else {
      console.error('Error fetching stock data:', data);
    }
  } catch (error) {
    console.error('Error fetching stock data:', error);
  }
};

export default fetchStockData;

