import React from 'react';
import { useNavigate } from 'react-router-dom'; // If you're using React Router for navigation

const ModalDialog = ({ onClose }) => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/About'); // Navigate to About page
    onClose(); // Close the modal
  };

  const handleSeeWork = () => {
    navigate('/Home'); // Navigate to Projects page
    onClose(); // Close the modal
  };

  return (
    <div className="ModaldDialog-overlay">
      <div className="ModalDialog-content">
        <h2>Hi, I am Annemarie</h2>
        <p>Product Designer and Innovation Consultant. Do you want to learn more about me and how I work or see my work?</p>
        <div>
          <button onClick={handleLearnMore}>Learn More About Me</button>
          <button onClick={handleSeeWork}>See My Work</button>
        </div>
      </div>
    </div>
  );
};

export default ModalDialog;