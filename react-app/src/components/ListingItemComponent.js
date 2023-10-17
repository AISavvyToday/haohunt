// File: ListingItemComponent.js

import React from 'react';

const ListingItemComponent = ({ id, name, onDelete }) => (
  <div className="listing-item">
    {name}
    <button
      onClick={() => {
        if (window.confirm('Are you sure you want to delete this listing?')) {
          onDelete(id);
        }
      }}
    >
      Delete
    </button>
  </div>
);

export default ListingItemComponent;
