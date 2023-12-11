import React from 'react';

const UserPage = () => {
  // Replace this with your user data
  const user = {
    username: 'example_user',
    followers: 10000,
    achievementsLink: '/achievements',
    cardsLink: '/cards',
    // Assuming your images are stored in the public folder
    profilePicture: '/images/profile.jpg',
  };

  return (
    <div>
      <h1>User Profile</h1>
      <img src={user.profilePicture} alt="Profile" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
      <h2>{user.username}</h2>
      <p>Followers: {user.followers}</p>
      <p>
        <a href={user.achievementsLink}>Achievements Pagee</a>
      </p>
      <p>
        <a href={user.cardsLink}>Showcase Cards</a>
      </p>
    </div>
  );
};

export default UserPage;