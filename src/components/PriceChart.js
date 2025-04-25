import React from 'react';

function PriceChart({ data }) {
  return (
    <div className="mt-4">
      <p>Price Chart (mock data): {data.join(' → ')}</p>
    </div>
  );
}

export default PriceChart;
