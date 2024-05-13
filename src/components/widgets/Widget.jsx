import React, { useState, useEffect } from 'react';
import './widget.scss';
import { Link } from 'react-router-dom'; // Import Link component
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { fetchUserMetrics } from '../../api'; // Import the fetchUserMetrics function

const Widget = () => {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const response = await fetchUserMetrics(); // Fetch user metrics from the API
        const userCount = response.users.length; // Assuming users array is returned in response. Adjust accordingly if needed
        setUserCount(userCount);
      } catch (error) {
        console.error('Error fetching user count:', error.message);
        // Handle error (e.g., display error message to user)
      }
    };

    fetchUserCount();
  }, []);

  const data = {
    title: 'EMPLOYEE',
    isMoney: false,
    val:'See all Employee',
    link: '/users', // Link to the users route
    icon: (
      <PersonOutlinedIcon
        className="icon"
        style={{
          color: 'crimson',
          backgroundColor: 'rgba(255, 0, 0, 0.2)',
        }}
      />
    ),
  };

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{userCount}</span> {/* Display user count */}
        <Link to={data.link} className="link">{data.val}</Link> {/* Use Link component for navigation */}
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
