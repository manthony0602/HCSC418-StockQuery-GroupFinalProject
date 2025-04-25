import React from 'react';

function StockMetrics({ data }) {
  const labelStyle = { fontWeight: 600, color: '#333' };
  const valueStyle = { marginLeft: '0.5rem', fontWeight: 400, color: '#222' };

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
        <span style={valueStyle}>{data.growthOverPE}</span>
      </p>
    </div>
  );
}

export default StockMetrics;
