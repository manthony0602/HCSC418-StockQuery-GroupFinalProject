import { supabase } from './supabaseClient'; // Import your Supabase client

const insertStockData = async (symbol, timeSeries) => {
  try {
    const stockData = Object.keys(timeSeries).map((date) => {
      const { '1. open': open, '2. high': high, '3. low': low, '4. close': close, '5. volume': volume } = timeSeries[date];
      return {
        symbol,
        date,
        open: parseFloat(open),
        high: parseFloat(high),
        low: parseFloat(low),
        close: parseFloat(close),
        volume: parseInt(volume),
      };
    });

    const { error } = await supabase.from('stock_data').insert(stockData);

    if (error) {
      console.error('Error inserting stock data into Supabase:', error.message);
    } else {
      console.log('Stock data inserted successfully');
    }
  } catch (error) {
    console.error('Error inserting stock data:', error.message);
  }
};

export default insertStockData;
