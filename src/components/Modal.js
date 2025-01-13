import React from "react";

function Modal({ isOpen, onClose, content }) {
  if (!isOpen) return null; // Do not render anything if the modal is not open

  return (
    <div className="modal" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal content
      >
        <span className="close" onClick={onClose}>
          &times;
        </span>
        {content} {/* Render the modal content */}
      </div>
    </div>
  );
}

export default Modal;
