import React from 'react';

function StockMetrics({ data }) {
  const labelStyle = { fontWeight: 600, color: '#333' };
  const valueStyle = { marginLeft: '0.5rem', fontWeight: 400, color: '#222' };

  // Safely calculate Growth over P/E ratio
  const growthOverPE =
    data.peRatio && data.peRatio > 0
      ? (data.growthRate / data.peRatio).toFixed(2)
      : 'N/A';

  // Create a friendly user-facing comparison message
  let comparisonMessage = '';
  if (growthOverPE !== 'N/A') {
    const numericRatio = parseFloat(growthOverPE);

    if (numericRatio > 1) {
      comparisonMessage =
        '✅ This stock’s growth is outpacing its P/E — strong growth potential.';
    } else if (numericRatio < 1) {
      comparisonMessage =
        '⚠️ The P/E ratio is higher than the growth rate — may be overvalued.';
    } else {
      comparisonMessage =
        '📊 Growth and P/E are evenly matched — consider other factors.';
    }
  } else {
    comparisonMessage = '❌ Growth over P/E not available for this stock.';
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <p>
        <span style={labelStyle}>Current Price:</span>
        <span style={valueStyle}>${data.currentPrice}</span>
      </p>
      <p>
        <span style={labelStyle}>Dividends:</span>
        <span style={valueStyle}>{data.dividends}</span>
      </p>
      <p>
        <span style={labelStyle}>52-Week High:</span>
        <span style={valueStyle}>${data.fiftyTwoWeekHigh}</span>
      </p>
      <p>
        <span style={labelStyle}>52-Week Low:</span>
        <span style={valueStyle}>${data.fiftyTwoWeekLow}</span>
      </p>
      <p>
        <span style={labelStyle}>High per Year:</span>
        <span style={valueStyle}>${data.high}</span>
      </p>
      <p>
        <span style={labelStyle}>Low per Year:</span>
        <span style={valueStyle}>${data.low}</span>
      </p>
      <p>
        <span style={labelStyle}>P/E Ratio:</span>
        <span style={valueStyle}>{data.peRatio}</span>
      </p>
      <p>
        <span style={labelStyle}>Growth Rate:</span>
        <span style={valueStyle}>{data.growthRate}%</span>
      </p>
      <p>
        <span style={labelStyle}>Growth / P/E:</span>
        <span style={valueStyle}>{growthOverPE}</span>
      </p>

      {/*Display comparison message with user-friendly explanation */}
      {comparisonMessage && (
        <p>
          <span style={labelStyle}>Insight:</span>
          <span style={valueStyle}>{comparisonMessage}</span>
        </p>
      )}
    </div>
  );
}

export default StockMetrics;
