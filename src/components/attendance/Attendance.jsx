import React, { useState, useEffect } from 'react';
import { attendanceColumns } from '../../attendanceDataSource';
import { DataGrid } from "@mui/x-data-grid";
import './attendance.scss';
import { fetchUserMetrics, addAttendance } from '../../api';
import Loading from 'react-loading';

const Attendance = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [submittedData, setSubmittedData] = useState([]);

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
            attendance: record.status,
            userId: record.userId,
          }));

          setData(attendanceData);
          setLoading(false);
        } else {
          console.error('JWT token not found in localStorage');
        }
      } catch (error) {
        console.error('Error fetching attendance data:', error);
        setData([]);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const getFormattedDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

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
    const { row } = params;
    const updatedRow = {
      ...row,
      attendance: newValue,
      date: getFormattedDate(),
    };
  
    setData((prevData) => {
      const updatedData = [...prevData];
      const rowIndex = params.row.id;
      if (updatedData[rowIndex]) {
        updatedData[rowIndex] = updatedRow;
      } else {
        console.error('Row does not exist:', rowIndex);
      }
      return updatedData;
    });
  
    setSubmittedData((prevSubmittedData) => {
      const updatedSubmittedData = [...prevSubmittedData];
      const existingRowIndex = updatedSubmittedData.findIndex((row) => row.id === params.row.id);
  
      if (existingRowIndex !== -1) {
        updatedSubmittedData[existingRowIndex] = updatedRow;
      } else {
        updatedSubmittedData.push(updatedRow);
      }
  
      return updatedSubmittedData;
    });
  };
  const handleSubmit = async () => {
    try {
      await Promise.all(
        submittedData.map(async (attendanceData) => {
          const { date, username, useremail, department, attendance: status } = attendanceData;

          const requestBody = {
            date,
            username,
            useremail,
            department,
            status,
          };

          await addAttendance(requestBody);
        })
      );
      setShowSuccessPopup(true);
      setTimeout(() => setShowSuccessPopup(false), 3000);
      setSubmittedData([]); // Reset the submittedData array
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
      renderCell: (params) => {
        const rowIndex = params.row.id;
        const rowData = data.find((row) => row.id === rowIndex);
        const attendance = rowData ? rowData.attendance : '';
  
        return (
          <div className="cellAction">
            <div className="attendanceMark">
              <select
                name="option"
                value={attendance}
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
      {loading && (
        <div className="loading">
          <Loading type={'spin'} color={'#000000'} height={'20px'} width={'20px'} />
        </div>
      )}
      {showSuccessPopup && <div className="popup success">Data submitted successfully!</div>}
      {showErrorPopup && <div className="popup error">Error submitting data. Please try again.</div>}
      {!loading && (
        <>
          <div className="datatableTitle">
            Attendance Roll
            <div className="submitform">
              <button className="formbutton" onClick={handleSubmit}>
                Submit
              </button>
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