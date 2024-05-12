import React from 'react';
import './AnnouncementPopup.scss'; // Import the styles for the popup

const AnnouncementPopup = ({ announcements, onClose }) => {
  return (
    <div className="announcementPopup">
      <div className="announcementPopupContent">
        <div className="popupHeader">
          <h2>Announcements</h2>
          <button className="closeButton" onClick={onClose}>
            Close
          </button>
        </div>
        <div className="announcementList">
          {announcements.map((announcement, index) => (
            <div key={index} className="announcementItem">
              <h3>{announcement.title}</h3>
              <p>{announcement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementPopup;
