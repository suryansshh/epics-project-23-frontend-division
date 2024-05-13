import React, { useState } from 'react';
import './home.scss';

import Sidebar from './../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import LongWidget from '../../components/widgets/LongWidget';
import Widget from '../../components/widgets/Widget';
import Features from '../../components/featured/Features';
import Chart from '../../components/chart/Charts';
import EventIcon from '@mui/icons-material/Event';
import Events from '../../components/table/Events';
import AnnouncementPopup from './../home/AnnouncementPopup';
import TaskPopup from './../home/TaskPopup'; // Import TaskPopup component

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isTaskPopupOpen, setIsTaskPopupOpen] = useState(false); // State for task popup

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleOpenTaskPopup = () => { // Function to open task popup
    setIsTaskPopupOpen(true);
  };

  const handleCloseTaskPopup = () => { // Function to close task popup
    setIsTaskPopupOpen(false);
  };

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <LongWidget />
        </div>
        <div className="charts">
          <Features />
          <Chart title="Last 6 Months (Performance)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">
            <div>
              Upcoming Events <EventIcon className="eventIcon" fontSize="small" />
            </div>
            {/* Add Announcement Button */}
            <div >
            <button onClick={handleOpenPopup} className="add-announcement-btn">
              Add Announcement
            </button>
            {/* Add Task Button */}
            <button onClick={handleOpenTaskPopup} className="add-task-btn">Add Event</button>
            </div>
          </div>
          <Events />
        </div>
      </div>
      <AnnouncementPopup isOpen={isPopupOpen} onClose={handleClosePopup} />
      <TaskPopup isOpen={isTaskPopupOpen} onClose={handleCloseTaskPopup} /> {/* Render TaskPopup */}
    </div>
  );
};

export default Home;
