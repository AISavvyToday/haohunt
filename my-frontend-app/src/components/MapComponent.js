// src/components/MapComponent.js
import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MapComponent = ({ listings, google }) => {

  const mapStyles = {
    width: '100%',
    height: '100%',
  };

  return (
    <Map
      google={google}
      zoom={14}
      style={mapStyles}
      initialCenter={{ lat: -1.2921, lng: 36.8219 }}  // Coordinates for Nairobi, change as needed
    >
      {listings.map((listing, index) => (
        <Marker
          key={index}
          position={{ lat: listing.latitude, lng: listing.longitude }}
          title={listing.name}
        />
      ))}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAv9wnyF34qAzle_9wHV4kk381aQNVU-Y4' // replace with your API Key
})(MapComponent);
