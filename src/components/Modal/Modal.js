import React from "react";
import PropTypes from "prop-types";
import './Modal.css';
const Modal = ({ isOpen, onClose, content }) => {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                {content}
            </div>
        </div>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    content: PropTypes.element,
};

export default Modal;
