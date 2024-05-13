import React, { useState, useEffect } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { fetchUserMetrics } from '../../api';
import Loading from 'react-loading'; // Import the Loading component
import './events.scss'; // Assuming you have a separate CSS file for styling

const Events = () => {
  const [tasksData, setTasksData] = useState([]);
  const [loading, setLoading] = useState(true); // State variable for loading

  useEffect(() => {
    const fetchData = async () => {
      try {
        const metricsData = await fetchUserMetrics();
        // Assuming the tasks data is stored in the 'tasks' attribute of the metricsData
        setTasksData(metricsData.task_metrics.tasks || []);
        setLoading(false); // Update loading state after data is fetched
      } catch (error) {
        console.error('Error fetching tasks data:', error);
        setLoading(false); // Update loading state in case of error
      }
    };

    fetchData();
  }, []);

  return (
    <div className="events-container"> {/* Add a wrapper container for styling */}
      {loading ? ( // Display loading animation if loading is true
        <div className="loading-container">
          <Loading type={'spin'} color={'#000000'} height={'20px'} width={'20px'} />
        </div>
      ) : (
        <TableContainer component={Paper} className="table">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow className='mainRow'>
                <TableCell className="tableCell">Id</TableCell>
                <TableCell className="tableCell">Description</TableCell>
                <TableCell className="tableCell">Date</TableCell>
                <TableCell className="tableCell">Department</TableCell>
                <TableCell className="tableCell">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tasksData.map((task) => (
                <TableRow key={task._id} >
                  <TableCell className="tableCell">{task._id}</TableCell>
                  <TableCell className="tableCell">{task.description}</TableCell>
                  <TableCell className="tableCell">{task.date}</TableCell>
                  <TableCell className="tableCell">{task.department}</TableCell>
                  <TableCell className="tableCell value">
                    <span className={`status ${task.status}`}>{task.status}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default Events;
