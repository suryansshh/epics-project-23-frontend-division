import React, { useState, useEffect } from 'react';
import { attendanceColumns } from '../../attendanceDataSource';
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import './attendance.scss';
import { fetchUserData, submitAttendance } from '../../api';

const Attendance = () => {
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);

  useEffect(() => {
    fetchUserData()
      .then(data => setUserData(data))
      .catch(error => console.error('Error fetching user data:', error));
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
    updatedData[rowIndex].attendance = newValue;
    setData(updatedData);
  };

  const handleSubmit = async () => {
    try {
      await submitAttendance(data);
      setShowSuccessPopup(true);
      setTimeout(() => setShowSuccessPopup(false), 3000); // Hide the success popup after 3 seconds
    } catch (error) {
      console.error('Error submitting attendance data:', error);
      setShowErrorPopup(true);
      setTimeout(() => setShowErrorPopup(false), 3000); // Hide the error popup after 3 seconds
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        const user = userData.find(u => u.useremail === params.row.useremail);

        return (
          <div className="cellAction">
            <Link to={`/users/${user ? user.username : ''}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
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
        );
      },
    },
  ];

  return (
    <div className="datatable">
      {showSuccessPopup && <div className="popup success">Data submitted successfully!</div>}
      {showErrorPopup && <div className="popup error">Error submitting data. Please try again.</div>}
      <div className="datatableTitle">
        Attendance Roll
        <div className="submitform">
          <label className="quicksubmit" htmlFor="optionbox">Quick Submit</label>
          <select className="listform" name="option" id="optionBox" onChange={handleQuickSubmitChange}>
            <option value="">Select</option>
            <option value="allpresent">All Present</option>
            <option value="allabsent">All Absent</option>
          </select>
          <button className='formbutton' onClick={handleSubmit}>Submit</button>
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
    </div>
  );
};

export default Attendance;