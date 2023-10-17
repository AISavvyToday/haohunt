// src/components/UserProfile/UserProfile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = ({ token }) => {
  const [username, setUsername] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Fetch the profile data when the component mounts
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const config = {
          headers: {
            'Authorization': `Token ${token}`
          }
        };
        const response = await axios.get('/api/user-profile/', config);
        setUsername(response.data.username);
      } catch (error) {
        console.error('Failed to fetch profile:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [token]);

  const handleUsernameChange = (e) => {
    setNewUsername(e.target.value);
  };

  const handleUpdate = async () => {
    try {
      const config = {
        headers: {
          'Authorization': `Token ${token}`
        }
      };
      const data = { username: newUsername };
      await axios.put('/api/user-profile/', data, config);
      setUsername(newUsername);
      alert('Username updated successfully');
    } catch (error) {
      console.error('Failed to update profile:', error);
    }
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>Your Profile</h1>
          <p>Username: {username}</p>

          <h2>Update Profile</h2>
          <input
            type="text"
            value={newUsername}
            onChange={handleUsernameChange}
            placeholder="New Username"
          />
          <button onClick={handleUpdate}>Update</button>
        </>
      )}
    </div>
  );
};

export default UserProfile;
