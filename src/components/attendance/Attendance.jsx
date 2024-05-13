import React, { useState, useEffect } from 'react';
import { attendanceColumns } from '../../attendanceDataSource';
import { Link, useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import './attendance.scss';
import { fetchUserMetrics,addAttendance } from '../../api';
import Loading from 'react-loading'; 

const Attendance = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // State variable for loading
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  const navigate = useNavigate();

  const handleViewUser = (userId) => {
    if (apiResponse && apiResponse.users) {
      navigate('/users', { state: { userId, users: apiResponse.users } });
    } else {
      console.error('User data not found');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const response = await fetchUserMetrics();
          if (!Array.isArray(response.attendance) || !Array.isArray(response.users)) {
            console.error('Invalid response data: attendance or users array not found');
            return;
          }

          const attendanceData = response.attendance.map((record) => ({
            id: record._id,
            date: record.date,
            username: record.username,
            useremail: record.useremail,
            department: record.department,
            attendance: record.status || '',
            userId: record.userId,
          }));

          setData(attendanceData);
          setApiResponse(response);
          setLoading(false); // Update loading state after data is fetched
        } else {
          console.error('JWT token not found in localStorage');
        }
      } catch (error) {
        console.error('Error fetching attendance data:', error);
        setData([]);
        setApiResponse(null);
        setLoading(false); // Update loading state in case of error
      }
    };
    fetchData();
  }, []);
  
  
  
  const handleQuickSubmitChange = (event) => {
    const selectedOption = event.target.value;
    if (selectedOption === 'allpresent') {
      const updatedData = data.map((row) => ({ ...row, attendance: 'present' }));
      setData(updatedData);
    } else if (selectedOption === 'allabsent') {
      const updatedData = data.map((row) => ({ ...row, attendance: 'absent' }));
      setData(updatedData);
    }
  };

  const handleCellChange = (params, newValue) => {
    const updatedData = [...data];
    const rowIndex = params.row.id;
    if (updatedData[rowIndex]) { // Check if row exists
      updatedData[rowIndex].attendance = newValue;
      setData(updatedData);
    } else {
      console.error('Row does not exist:', rowIndex);
    }
  };
  

  const handleSubmit = async () => {
    try {
      await Promise.all(
        data.map(async (attendanceData) => {
          await addAttendance(attendanceData);
        })
      );
      setShowSuccessPopup(true);
      setTimeout(() => setShowSuccessPopup(false), 3000);
    } catch (error) {
      console.error('Error submitting attendance data:', error);
      setShowErrorPopup(true);
      setTimeout(() => setShowErrorPopup(false), 3000);
    }
  };

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => (
        <div className="cellAction">
          <div className="viewButton" onClick={() => handleViewUser(params.row)}>
            View
          </div>

          <div className="attendanceMark">
            <select
              name="option"
              value={params.row.attendance}
              onChange={(event) => handleCellChange(params, event.target.value)}
            >
              <option value="present">Present</option>
              <option value="absent">Absent</option>
            </select>
          </div>
        </div>
      ),
    },
  ];
  

  return (
    <div className="datatable">
      {loading && ( // Display loading animation if loading is true
        <div className="loading">
          <Loading type={'spin'} color={'#000000'} height={'20px'} width={'20px'} />
        </div>
      )}
      {showSuccessPopup && <div className="popup success">Data submitted successfully!</div>}
      {showErrorPopup && <div className="popup error">Error submitting data. Please try again.</div>}
      {/* Render data grid only if loading is false */}
      {!loading && (
        <>
          <div className="datatableTitle">
            Attendance Roll
            <div className="submitform">
              {/* Rest of the component code... */}
            </div>
          </div>
          <DataGrid
            className="datagrid"
            rows={data}
            columns={attendanceColumns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
          />
        </>
      )}
    </div>
  );
};

export default Attendance;