import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Login, Signup } from './AuthForms';
import HomePage from './HomePage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState('');

  const handleLogin = (email, password) => {
    setMessage(`Logged in as ${email}`);
    setIsLoggedIn(true);
  };


  const handleLogout = () => {
    setIsLoggedIn(false);
    setMessage('');
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/home" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/login"
          element={<Login onLogin={handleLogin} />}
        />
        <Route
          path="/signup"
          element={<Signup onSignup={(email, password) => setMessage(`Signed up as ${email}`)} />}
        />
        <Route
          path="/home"
          element={
            isLoggedIn ? (
              <HomePage onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
      {message && <p>{message}</p>}
    </>
  );
}

export default App;
