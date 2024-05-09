import React, { useState } from 'react';
import { attendanceColumns, attendanceRows } from '../../attendanceDataSource';
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import './attendance.scss'

const Attendance = () => {
  const [data, setData] = useState(attendanceRows);

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

  const handleSubmit = () => {
    // Code to submit the attendance data to the backend
    console.log('Submitting attendance data:', data);
    // Replace the above console.log with your backend submission code
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div className="attendanceMark">
              <select
                name="option"
                id="optionBox"
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
      <div className="datatableTitle">
        Attendance Roll
        <div className="submitform">
          <label className=" quicksubmit" htmlFor="optionbox">Quick Submit</label>
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