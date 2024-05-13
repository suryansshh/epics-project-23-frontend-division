import React, { useState, useEffect } from 'react';
import "./datatable.scss";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { fetchUserMetrics, addUser ,deleteUser } from "../../api";
import FloatingPopup from './FloatingPopup';
import Loading from 'react-loading'; // Import Loading component from react-loading

const Popup = ({ closePopup }) => {
  const [username, setUsername] = useState('');
  const [useremail, setUseremail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
  
    try {
      const userData = { username, useremail, phone, address, country };
      await addUser(userData);
  
      closePopup();
      setShowSuccessPopup(true); // Show success popup
    } catch (error) {
      console.error('Error submitting user data:', error);
      setShowErrorPopup(true); // Show error popup
    }
  };

  return (
      <div className="popup">
          <div className="popupInner">
              <form onSubmit={handleSubmit}>
                  <h1>Add New Employee</h1>
                  <input
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                  />
                  <input
                      type="email"
                      placeholder="Email"
                      value={useremail}
                      onChange={(e) => setUseremail(e.target.value)}
                      required
                  />
                  <input
                      type="text"
                      placeholder="Phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                  />
                  <input
                      type="text"
                      placeholder="Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                  />
                  <input
                      type="text"
                      placeholder="Country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      required
                  />
                  <button type="submit">Submit</button>
                  <button type="button" onClick={closePopup}>Close</button>
              </form>
          </div>
          {showSuccessPopup && <FloatingPopup type="success" message="User added successfully!" onClose={() => setShowSuccessPopup(false)} />}
          {showErrorPopup && <FloatingPopup type="error" message="Error adding user. Please try again." onClose={() => setShowErrorPopup(false)} />}
      </div>
  );
};

const Datatable = () => {
  const [data, setData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(true); // State variable for loading

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchUserMetrics();
        if (response.users) {
          const userData = response.users.map((user) => ({
            id: user._id,
            username: user.username,
            useremail: user.useremail,
            phone: user.phone,
            address: user.address,
            country: user.country,
          }));
          setData(userData);
        } else {
          console.error('Users data not found in the response');
        }
      } catch (error) {
        console.error('Error fetching user metrics:', error);
      } finally {
        setLoading(false); // Update loading state after data is fetched
      }
    };
    fetchData();
  }, []);
  const handleDelete = async (id) => {
    try {
      console.log(id);
      await deleteUser(id);
      setData(data.filter((user) => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/users/${params.row.id}`} style={{ textDecoration: 'none' }}>
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New Employee
        <button onClick={() => setShowPopup(true)} className="link addButton">
          {loading ? (
            <Loading type={'spin'} color={'#000000'} height={'20px'} width={'20px'} />
          ) : (
            'Add New'
          )}
        </button>
      </div>
      {showPopup && <Popup closePopup={() => setShowPopup(false)} />}
      {!loading && (
        <DataGrid
          className="datagrid"
          rows={data}
          columns={userColumns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
        />
      )}
    </div>
  );
};

export default Datatable;
