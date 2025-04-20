import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await axios.get('/auth/profile', {
          headers: {
            Authorization: token,
          },
        });
        setUser(res.data.user);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      {user ? (
        <p>Welcome, {user.id}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;
