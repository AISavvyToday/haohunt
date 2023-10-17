import React, { useState } from 'react';

const SearchBar = ({ updateQuery }) => {
  const [location, setLocation] = useState("");
  const [minBudget, setMinBudget] = useState("");
  const [maxBudget, setMaxBudget] = useState("");
  const [bedrooms, setBedrooms] = useState("");

  const handleSearch = () => {
    const newQuery = {
      location,
      min_budget: minBudget,
      max_budget: maxBudget,
      bedrooms
    };
    updateQuery(newQuery);
  };

  return (
    <div>
      <input placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} />
      <input placeholder="Min Budget" value={minBudget} onChange={e => setMinBudget(e.target.value)} />
      <input placeholder="Max Budget" value={maxBudget} onChange={e => setMaxBudget(e.target.value)} />
      <input placeholder="Bedrooms" value={bedrooms} onChange={e => setBedrooms(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
