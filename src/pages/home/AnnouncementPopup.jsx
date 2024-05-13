import React, { useState } from 'react';
import './announcementPopup.scss';
import { addAnnouncement } from '../../api'; // Import the addAnnouncement function
const AnnouncementPopup = ({ isOpen, onClose }) => {
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call the addAnnouncement function to post the announcement data
      await addAnnouncement({ description });
      console.log('Announcement added successfully');
      onClose(); // Close the popup after successful submission
    } catch (error) {
      console.error('Error adding announcement:', error.message);
      // Handle error (e.g., display error message to user)
    }
  };

  return (
    <div className={`announcement-popup ${isOpen ? 'open' : ''}`}>
      <div className="popup-content">
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <h2>Add Announcement</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Enter announcement description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AnnouncementPopup;