import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';  // Assuming SearchBar component is in the same directory
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MapWithAMarker = withScriptjs(withGoogleMap(props => (
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: props.latitude, lng: props.longitude }}
  >
    <Marker
      position={{ lat: props.latitude, lng: props.longitude }}
    />
  </GoogleMap>
)));

const ListingComponent = () => {
  const [listings, setListings] = useState([]);
  const [query, setQuery] = useState({
    location: "",
    min_budget: "",
    max_budget: "",
    bedrooms: ""
  });

  // Function to update query state
  const updateQuery = (newQuery) => {
    setQuery(newQuery);
  };

  // Fetch listings
  useEffect(() => {
    const fetchListings = async () => {
      try {
        const queryString = Object.keys(query)
          .map(key => query[key] && `${key}=${query[key]}`)
          .filter(Boolean)
          .join('&');
        const response = await axios.get(`/api/listings/?${queryString}`);
        setListings(response.data);
      } catch (error) {
        console.log("An error occurred:", error);
      }
    };

    fetchListings();
  }, [query]);  // Re-run effect when `query` state changes

  // Function to handle delete
  const handleDelete = (id) => {
    axios.delete(`/api/listings/${id}/`)
      .then(response => {
        setListings(listings.filter(listing => listing.id !== id));
      })
      .catch(error => {
        console.log("An error occurred:", error);
      });
  };

  return (
    <div className="listing-container">
      <SearchBar updateQuery={updateQuery} />
      {listings.map(listing => (
        <div key={listing.id}>
          {listing.name}
          <button onClick={() => handleDelete(listing.id)}>Delete</button>
          <div className="map-container">
            <MapWithAMarker
              latitude={listing.latitude}
              longitude={listing.longitude}
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY"
              loadingElement={<div style={{ height: '100%' }} />}
              containerElement={<div style={{ height: '400px' }} />}
              mapElement={<div style={{ height: '100%' }} />}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListingComponent;
