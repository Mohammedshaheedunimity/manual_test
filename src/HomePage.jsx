import React from 'react';

const HomePage = ({ onLogout }) => {
  return (
    <div className="home-container" data-testid="home-page">
      <h1>Welcome to the Home Page</h1>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default HomePage;
