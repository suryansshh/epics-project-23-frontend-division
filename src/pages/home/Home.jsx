import React from 'react'
import './home.scss'

import Sidebar from './../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import LongWidget from '../../components/widgets/LongWidget';
import Widget from '../../components/widgets/Widget';
import Features from '../../components/featured/Features';
import Chart from '../../components/chart/Charts';
import EventIcon from '@mui/icons-material/Event';
import Events from '../../components/table/Events';

const Home = () => {
    return (
      <div className="home">
        <Sidebar />
        
         <div className="homeContainer">
          <Navbar />
          <div className="widgets">
            <Widget type="user" />
            <LongWidget  />
          </div>
          <div className="charts">
          <Features />
          <Chart title="Last 6 Months (Performance)" aspect={2 / 1} />
          </div>
          <div className='listContainer'>
            <div className="listTitle">Upcoming Events <EventIcon className='eventIcon' fontSize='small'/></div>
            <Events/>
          </div>

          </div>
         
         
          
          {/*<div className="charts">
            <Featured />
            <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest Transactions</div>
            <Table />
          </div>
        </div> */}
      </div>
    );
  };
  
  export default Home;