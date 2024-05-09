import React from 'react'
import "./events.scss"
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';



const Events = () => {
    const data = [
        {   "id":"1",
            "Event": "Team Building Workshop",
            "date": "2024-03-15",
            "Department": "Human Resources",
            "Status": "Pending"
        },
        {   
            "id":"2",
            "Event": "Quarterly Review Meeting",
            "date": "2024-03-20",
            "Department": "Operations",
            "Status": "Finished"
        },
        {   "id":"3",
            "Event": "Training Session on New Software",
            "date": "2024-03-25",
            "Department": "Information Technology",
            "Status": "Pending"
        },
        {   "id":"4",
            "Event": "Staff Birthday Celebration",
            "date": "2024-04-02",
            "Department": "Administration",
            "Status": "Finished"
        },
        {   "id":"5",
            "Event": "Employee Recognition Awards",
            "date": "2024-04-10",
            "Department": "Human Resources",
            "Status": "Finished"
        },
        {   "id":"6",
            "Event": "Monthly Team Meeting",
            "date": "2024-04-15",
            "Department": "Marketing",
            "Status": "Finished"
        },
        {   "id":"7",
            "Event": "Sales Training Workshop",
            "date": "2024-04-25",
            "Department": "Sales",
            "Status": "Pending"
        },
        {   "id":"8",
            "Event": "Project Kickoff Meeting",
            "date": "2024-05-05",
            "Department": "Project Management",
            "Status": "Finished"
        },
        {   "id":"9",
            "Event": "Annual Retreat",
            "date": "2024-05-20",
            "Department": "Operations",
            "Status": "Finished"
        },
        {   "id":"10",
            "Event": "Company Town Hall",
            "date": "2024-06-01",
            "Department": "Executive",
            "Status": "Finished"
        }
    
    ];
    return (
        <TableContainer component={Paper} className="table">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow className='mainRow'>
              <TableCell className="tableCell">Id</TableCell>
                <TableCell className="tableCell">Events</TableCell>
                <TableCell className="tableCell">Date</TableCell>
                <TableCell className="tableCell">Department</TableCell>
                <TableCell className="tableCell">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id} >
                  <TableCell className="tableCell">{row.id}</TableCell>
                  <TableCell className="tableCell">{row.Event}</TableCell>
                  <TableCell className="tableCell">{row.date}</TableCell>
                  <TableCell className="tableCell">{row.Department}</TableCell>
                  
                  <TableCell className="tableCell value">
                    <span className={`status ${row.Status}`}>{row.Status}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
    
}

export default Events