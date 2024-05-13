import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUserMetrics } from '../../api';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Charts';
import Events from '../../components/table/Events';
import Loading from 'react-loading'; // Import Loading component from react-loading
import "./single.scss";

function Single() {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchUserMetrics();
        if (response && response.users) {
          const user = response.users.find(user => user._id === userId);
          if (user) {
            setUserData(user);
          } else {
            console.error('User not found for the given ID');
          }
        } else {
          console.error('Users data not found in the response');
        }
      } catch (error) {
        console.error('Error fetching user metrics:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [userId]);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            {loading && <Loading type={'spin'} color={'#007bff'} height={'50px'} width={'50px'} />} {/* Display loading indicator */}
            {!loading && userData && (
              <div className="item">
                <img
                  src="https://iqsc.org/wp-content/uploads/2017/02/pict-employee-male-business-people-vector-stencils-library.png-diagram-flowchart-example.png"
                  alt=""
                  className="itemImg"
                />
                <div className="details">
                  <h1 className="itemTitle">{userData.username}</h1>
                  <div className="detailItem">
                    <span className="itemKey">Email:</span>
                    <span className="itemValue">{userData.useremail}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Phone:</span>
                    <span className="itemValue">{userData.phone}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Address:</span>
                    <span className="itemValue">{userData.address}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Country:</span>
                    <span className="itemValue">{userData.country}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Performance ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Events</h1>
          <Events />
        </div>
      </div>
    </div>
  );
}

export default Single;
