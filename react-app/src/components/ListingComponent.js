// File: ListingComponent.js

import React from 'react';
import ListingItemComponent from './ListingItemComponent';

const ListingComponent = ({ listings, onDelete }) => (
  <div className="listing-container">
    {listings.map((listing) => (
      <ListingItemComponent key={listing.id} {...listing} onDelete={onDelete} />
    ))}
  </div>
);
export default ListingComponent;
