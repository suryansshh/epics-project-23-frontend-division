import React, { useState } from 'react';
import './taskpopup.scss';
import { addTask } from '../../api'; // Import the addTask method

const TaskPopup = ({ isOpen, onClose }) => {
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [department, setDepartment] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [status, setStatus] = useState('');
  const [notification, setNotification] = useState({ message: '', type: '' }); // State for notification

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call addTask method to add the task
      await addTask({ description, date, department, assignedTo, status });
      console.log('Task added successfully!');
      onClose(); // Close the popup after submission
      alert('Task added successfully!'); // Display success alert
    } catch (error) {
      console.error('Error adding task:', error.message);
      alert('Error adding task. Please try again.'); // Display error alert
    }
  };
  return (
    <div className={`task-popup ${isOpen ? 'open' : ''}`}>
      <div className="popup-content">
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <h2>Add Task</h2>
        {notification.message && ( // Display notification if message is not empty
          <div className={`notification ${notification.type}`}>
            {notification.message}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="date"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="text"
            placeholder="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
          <input
            type="text"
            placeholder="Assigned To"
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
          />
          <input
            type="text"
            placeholder="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
          <button type="submit">Submit</button>
          <br />
          <button type="button" onClick={onClose}>Close</button> {/* Close button */}
        </form>
      </div>
    </div>
  );
};

export default TaskPopup;
