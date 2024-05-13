import axios from 'axios';

const API_BASE_URL = 'https://epics-project-23-backend-division.onrender.com/api';

// Helper function to get the JWT token from localStorage
const getToken = () => localStorage.getItem('token');

// Helper function to set the JWT token in localStorage
const setToken = (token) => localStorage.setItem('token', token);

// Create an instance of axios with the base URL and default headers
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

// Helper function to set the Authorization header with the JWT token
const setAuthorizationHeader = (token) => {
  axiosInstance.defaults.headers.common['Authorization'] = ` ${token}`;
};

// Helper function to remove the Authorization header
const removeAuthorizationHeader = () => {
  delete axiosInstance.defaults.headers.common['Authorization'];
};

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
    setAuthorizationHeader(response.data.token); // Set the Authorization header with the JWT token
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Fetch user metrics
export const fetchUserMetrics = async () => {
  try {
    const token = getToken(); // Get the JWT token from localStorage

    // Set the Authorization header with the JWT token
    axiosInstance.defaults.headers.common['Authorization'] = `${token}`;

    const response = await axiosInstance.get('/user/getMetrics');
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  } finally {
    // Remove the Authorization header after the request is completed
    delete axiosInstance.defaults.headers.common['Authorization'];
  }
};
// ... (rest of the code remains the same)
// Add a new base user
export const addUser = async (userData) => {
  try {
    const token = getToken(); // Get the JWT token from localStorage

    // Set the Authorization header with the JWT token
    axiosInstance.defaults.headers.common['Authorization'] = `${token}`;

    const response = await axiosInstance.post('/user/addUser', userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  } finally {
    // Remove the Authorization header after the request is completed
    delete axiosInstance.defaults.headers.common['Authorization'];
  }
};

export const addAttendance = async (attendanceData) => {
  try {
    const token = getToken(); // Get the JWT token from localStorage

    // Set the Authorization header with the JWT token
    axiosInstance.defaults.headers.common['Authorization'] = `${token}`;

    const response = await axiosInstance.post('/user/addAttendance', attendanceData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  } finally {
    // Remove the Authorization header after the request is completed
    delete axiosInstance.defaults.headers.common['Authorization'];
  }
};


// Add a new announcement
export const addAnnouncement = async (announcementData) => {
  try {
    const token = getToken(); // Get the JWT token from localStorage

    // Set the Authorization header with the JWT token
    axiosInstance.defaults.headers.common['Authorization'] = `${token}`;

    const response = await axiosInstance.post('/user/addAnnouncement', announcementData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  } finally {
    // Remove the Authorization header after the request is completed
    delete axiosInstance.defaults.headers.common['Authorization'];
  }
};


// Add a new task
export const addTask = async (taskData) => {
  try {
    const token = getToken(); // Get the JWT token from localStorage

    // Set the Authorization header with the JWT token
    axiosInstance.defaults.headers.common['Authorization'] = `${token}`;

    const response = await axiosInstance.post('/user/addTask', taskData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  } finally {
    // Remove the Authorization header after the request is completed
    delete axiosInstance.defaults.headers.common['Authorization'];
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
export const deleteUser = async (userId) => {
  try {
    const token = getToken(); // Get the JWT token from localStorage
    axiosInstance.defaults.headers.common['Authorization'] = `${token}`; // Set the Authorization header with the JWT token

    const response = await axiosInstance.delete('/api/user/deleteUser', {userId } // Include userId in the request body
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  } finally {
    delete axiosInstance.defaults.headers.common['Authorization']; // Remove the Authorization header after the request is completed
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