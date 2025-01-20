import React from "react";
import PropTypes from "prop-types";
import './Modal.css';

const Modal = ({ isOpen, onClose, content }) => {
    if (!isOpen) return null;

    return (
        <div className="modal">

            <div className="modal-content">
                <button className="close" onClick={onClose}>&times;</button>
                {content}
        </div></div> 
    
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    content: PropTypes.element,
};

export default Modal;