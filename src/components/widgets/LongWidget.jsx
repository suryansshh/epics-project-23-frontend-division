import React, { useState, useEffect } from 'react';
import './longwidget.scss';
import CampaignIcon from '@mui/icons-material/Campaign';
import { fetchUserMetrics  } from '../../api';
import Loading from 'react-loading'; // Import Loading component from react-loading

function LongWidget() {
  const [latestAnnouncement, setLatestAnnouncement] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchLatestAnnouncement = async () => {
      try {
        const response = await fetchUserMetrics();
        console.log(response);
        if (response && response.announcements && response.announcements.length > 0) {
          const latestAnnouncement = response.announcements[response.announcements.length - 1];
          setLatestAnnouncement(latestAnnouncement);
        } else {
          setLatestAnnouncement(null);
        }
      } catch (error) {
        console.error('Error fetching latest announcement:', error.message);
      } finally {
        setLoading(false); // Set loading state to false after fetching data
      }
    };

    fetchLatestAnnouncement();
  }, []);

  return (
    <div className="widget">
      <div className="left">
        <span className="title">Announcements</span>
        <span className="link">See all Announcements</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          {loading ? <Loading type={'spin'} color={'#000000'} height={'20px'} width={'20px'} /> : null} {/* Display loading indicator */}
        </div>
        {latestAnnouncement && (
          <div className="latest-announcement">
            {latestAnnouncement.description}
          </div>
        )}
      </div>
    </div>
  );
}

export default LongWidget;
