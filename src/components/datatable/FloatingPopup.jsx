import React from 'react';
import "./FloatingPopup.scss";

const FloatingPopup = ({ type, message, onClose }) => {
    return (
        <div className={`floatingPopup ${type}`}>
            <div className="popupContent">
                <span className="closeIcon" onClick={onClose}>&times;</span>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default FloatingPopup;
