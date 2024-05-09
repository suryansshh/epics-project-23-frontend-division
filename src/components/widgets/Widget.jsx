import React from 'react'
import './widget.scss'
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";


const Widget = () => {
    const data = {
      title: "EMPLOYEE",
      isMoney: false,
      link: "See all Employee",
      icon: (
        <PersonOutlinedIcon
          className="icon"
          style={{
            color: "crimson",
            backgroundColor: "rgba(255, 0, 0, 0.2)",
          }}
        />
      ),
    };

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          10222
        </span>
        <span className="link">{data.link}</span>
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

export default Widget