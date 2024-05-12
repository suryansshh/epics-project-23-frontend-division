import axios from 'axios';

const API_BASE_URL = 'https://epics-project-23-backend-division.onrender.com/api';

// Helper function to get the JWT token from localStorage
const getToken = () => localStorage.getItem('token');

// Helper function to set the JWT token in localStorage
const setToken = (token) => localStorage.setItem('token', token);

// Create an instance of axios with the base URL and default headers
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

// Register a new admin user
export const registerUser = async (userData) => {
  try {
    const response = await axiosInstance.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Login an existing user
export const loginUser = async (credentials) => {
  try {
    const response = await axiosInstance.post('/auth/login', credentials);
    setToken(response.data.token); // Store the JWT token in localStorage
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Fetch user metrics
export const fetchUserMetrics = async () => {
  try {
    const response = await axiosInstance.get('/user/getMetrics');
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Add a new base user
export const addUser = async (userData) => {
  try {
    const response = await axiosInstance.post('/user/addUser', userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
export const submitAttendance = async (attendanceData) => {
  try {
    const response = await axios.post('/api/managementMetrics/addAttendance', attendanceData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error submitting attendance data:', error);
    throw error;
  }
};
// Add attendance data
export const addAttendance = async (attendanceData) => {
  try {
    const response = await axiosInstance.post('/user/addAttendance', attendanceData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Add a new announcement
export const addAnnouncement = async (announcementData) => {
  try {
    const response = await axiosInstance.post('/user/addAnnouncement', announcementData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Add a new task
export const addTask = async (taskData) => {
  try {
    const response = await axiosInstance.post('/user/addTask', taskData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
export const fetchUserData = async () => {
  try {
    const response = await axios.get('/api/managementMetrics/getUserData', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
// Set a target
export const setTarget = async (targetData) => {
  try {
    const response = await axiosInstance.post('/user/setTarget', targetData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Delete a base user
export const deleteUser = async (userId) => {
  try {
    const response = await axiosInstance.delete(`/user/deleteUser/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Delete a task
export const deleteTask = async (taskId) => {
  try {
    const response = await axiosInstance.delete(`/user/deleteTask/${taskId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};