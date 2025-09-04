import React from 'react';
import './HomePage.css'; // Import the CSS file for styling

const HomePage = ({ onLogout }) => {
  return (
    <div className="home-container" data-testid="home-page">
      <h1 className="home-title">Welcome to the Home Page</h1>
      <p className="home-subtitle">Explore our features and enjoy your stay!</p>
      <button className="logout-button" onClick={onLogout}>Logout</button>
    </div>
  );
};

export default HomePage;
