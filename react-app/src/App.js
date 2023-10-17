// File: App.js

import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { MyContextProvider } from './MyContext';
import ListingComponent from './components/ListingComponent';

// Dummy data for listings
const initialListings = [
  { id: 1, name: 'Listing 1' },
  { id: 2, name: 'Listing 2' },
];

function App() {
  const [listings, setListings] = useState(initialListings);

  useEffect(() => {
    // Fetch data from API here if needed.
    // Commented out for now.
    /*
    fetch('your_API_endpoint_here')
      .then(response => response.json())
      .then(data => setListings(data))
      .catch(error => console.error('Fetch failed:', error));
    */
  }, []);

  const handleDelete = (id) => {
    const updatedListings = listings.filter(listing => listing.id !== id);
    setListings(updatedListings);
  };

  return (
    <MyContextProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Edit <code>src/App.js</code> and save to reload.</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <ListingComponent listings={listings} onDelete={handleDelete} />
        </header>
      </div>
    </MyContextProvider>
  );
}

export default App;
