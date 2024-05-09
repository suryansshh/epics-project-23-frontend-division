import React from 'react'
import './longwidget.scss'
import CampaignIcon from '@mui/icons-material/Campaign';
function LongWidget() {
    return (
        <div className="widget">
          <div className="left">
            <span className="title">Announcements</span>
            
            <span className="link">See all Announcements</span>
          </div>
          <div className="right">
          <div className="percentage positive">
          <CampaignIcon />
        </div>
          </div>
        </div>
      );
}

export default LongWidget