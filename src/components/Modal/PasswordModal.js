import React, { useState } from 'react';
import './PasswordModal.css';

const PasswordModal = ({ isOpen, onClose, onSuccess, projectName }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);


  // Password for protected projects
  const PROTECTED_PASSWORDS = {
    'DAYONE': 'best-password',
    'Carhartt-WIP': 'best-password'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate a brief loading state for better UX
    setTimeout(() => {
      if (password === PROTECTED_PASSWORDS[projectName]) {
        onSuccess();
        setPassword('');
        setError('');
      } else {
        setError('Incorrect password. Please try again.');
      }
      setIsLoading(false);
    }, 500);
  };

  const handleClose = () => {
    setPassword('');
    setError('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="password-modal-overlay" onClick={handleClose}>
      <div className="password-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="password-modal-close" onClick={handleClose}>
          ×
        </button>
        
        <div className="password-modal-header">
          <div className="lock-icon">🔒</div>
          <h2>Protected Project</h2>
          <p>{projectName} requires a password to view</p>
        </div>

        <form onSubmit={handleSubmit} className="password-form">
          <div className="password-input-group">
            <div className="password-input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className={`password-input ${error ? 'error' : ''}`}
                disabled={isLoading}
                autoFocus
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                disabled={isLoading}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
            {error && <span className="error-message">{error}</span>}
          </div>
          
          <button 
            type="submit" 
            className="password-submit"
            disabled={isLoading || !password.trim()}
          >
            {isLoading ? 'Verifying...' : 'Access Project'}
          </button>
        </form>
        
        <div className="password-note">
          <p>This project contains confidential work. Password available upon request.</p>
        </div>
      </div>
    </div>
  );
};

export default PasswordModal; 