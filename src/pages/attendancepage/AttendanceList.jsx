import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Attendance from '../../components/attendance/Attendance'
import './attendancelist.scss'
function AttendanceList() {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Attendance />
      </div>
    </div>
  )
}

export default AttendanceList