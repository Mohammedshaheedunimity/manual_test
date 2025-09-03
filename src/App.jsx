
import React, { useState } from 'react';
import { Login, Signup } from './AuthForms';

function App() {
  const [showLogin, setShowLogin] = useState(true);
  const [message, setMessage] = useState('');

  const handleLogin = (email, password) => {
    setMessage(`Logged in as ${email}`);
  };

  const handleSignup = (email, password) => {
    setMessage(`Signed up as ${email}`);
  };

  return (
    <div>
      <button onClick={() => setShowLogin(true)}>Login</button>
      <button onClick={() => setShowLogin(false)}>Sign Up</button>
      {showLogin ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Signup onSignup={handleSignup} />
      )}
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
