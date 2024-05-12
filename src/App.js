import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import AttendanceList from "./pages/attendancepage/AttendanceList";

function App() {
  const isAuthenticated = localStorage.getItem('token'); // Check if user is authenticated

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={isAuthenticated ? <AuthenticatedRoutes /> : <Navigate to="/login" />}
          />
          <Route path="attendance" element={<AttendanceList />} />
      <Route path="users">
        <Route index element={<List />} />
        <Route path=":userId" element={<Single />} />
        {/* Nested routes for "users" */}
        {/* <Route path="new" element={<New inputs={userInputs} title="Add New User" />} /> */}
      </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const AuthenticatedRoutes = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path="attendance" element={<AttendanceList />} />
    <Route path="users">
      <Route index element={<List />} />
      <Route path=":userId" element={<Single />} />
      {/* Nested routes for "users" */}
      {/* <Route path="new" element={<New inputs={userInputs} title="Add New User" />} /> */}
    </Route>
    {/* Uncomment and modify the following for nested routes under "products" */}
    {/* <Route path="products">
      <Route index element={<List />} />
      <Route path=":productId" element={<Single />} />
      <Route path="new" element={<New inputs={productInputs} title="Add New Product" />} />
    </Route> */}
  </Routes>
);

export default App;