// FormComponent.js
import axios from 'axios';
// POST and PUT requests for adding and updating listings


const newListing = {
  name: 'New Listing',
  // other fields
};

axios.post('/api/listings/', newListing)
  .then(response => {
    // handle successful post
  })
  .catch(error => {
    // handle error
  });



const updatedListing = {
  name: 'Updated Listing',
  // other updated fields
};

axios.put('/api/listings/1/', updatedListing)  // '1' is the ID of the listing to be updated
  .then(response => {
    // handle successful update
  })
  .catch(error => {
    // handle error
  });
