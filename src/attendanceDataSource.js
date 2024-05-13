export const attendanceColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'username',
    headerName: 'User',
    width: 230,
    renderCell: (params) => (
      <div className="cellWithImg">
        {/* You can add an image here if needed */}
        {params.row.username}
      </div>
    ),
  },
  {
    field: 'department',
    headerName: 'Department',
    width: 160,
    valueGetter: (params) => params.row.department,
    renderCell: (params) => (
      <div className={`cellWithStatus ${params.row.department}`}>
        {params.row.department}
      </div>
    ),
  },
  {
    field: 'attendance',
    headerName: 'Attendance',
    width: 160,
    renderCell: (params) => (
      <div className={`cellWithStatus ${params.row.attendance && params.row.attendance.status}`}>
        {params.row.attendance && params.row.attendance.status}
      </div>
    ),
  }
];
