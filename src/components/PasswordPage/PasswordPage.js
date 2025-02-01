import React, { useState } from 'react';
import './PasswordPage.css';

const PasswordPage = ({ onPasswordCorrect }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const correctPassword = "best-password";

    if (password === correctPassword) {
      onPasswordCorrect();
    } else {
      setError('Incorrect password. Please try again.');
      setPassword(''); // Clear the password input field
    }
  };

  return (
    <div className="password-page">
      <h1>Annemarie's Portfolio</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter password"
        />
        <button type="submit">Enter</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default PasswordPage;