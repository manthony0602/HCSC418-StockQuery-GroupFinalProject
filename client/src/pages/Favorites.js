import React, { useState, useEffect } from 'react'; // ✅ Added useEffect import
import { supabase } from '../supabaseClient'; // ✅ Make sure Supabase is imported
import FavoriteCard from '../components/FavoriteCard';

function Favorites() {
  const [favorites, setFavorites] = useState([]); // ✅ Set function added
  const [industryFilter, setIndustryFilter] = useState(''); // ✅ Fixed typo: 'industyrFilter' to 'industryFilter'

  useEffect(() => {
    const fetchFavorites = async () => {
      const { data, error } = await supabase
        .from('favorite_stocks')
        .select('*'); // ✅ Fetches all favorite stocks including industry

      if (error) {
        console.error('Error fetching favorites:', error);
      } else {
        setFavorites(data); // ✅ Save data to state
      }
    };

    fetchFavorites();
  }, []);

  const filteredFavorites = favorites.filter((fav) =>
    fav.industry?.toLowerCase().includes(industryFilter.toLowerCase()) // ✅ Filters by industry
  );

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
        }}
      >
        ⭐ Your Favorite Stocks
      </h1>

      <input
        placeholder="Filter by industry (e.g. Tech)"
        value={industryFilter} // ✅ Bind to state
        onChange={(e) => setIndustryFilter(e.target.value)} // ✅ Update filter
        style={{
          width: '100%',
          padding: '0.75rem',
          marginBottom: '2rem',
          border: '1px solid #ccc',
          borderRadius: '6px',
          fontSize: '1rem',
        }}
      />

      {filteredFavorites.length === 0 ? ( // ✅ Use filteredFavorites here
        <p style={{ textAlign: 'center', color: '#888' }}>
          No favorites yet. Add some from the Home page!
        </p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {filteredFavorites.map((fav, index) => ( // ✅ Use filtered list here
            <FavoriteCard
              key={index}
              data={{
                name: fav.symbol,
                industry: fav.industry,
                pe: fav.pe_ratio,
                growth: fav.growth_rate,
                growthOverPE: fav.growth_over_pe,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;

