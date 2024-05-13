import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import AttendanceList from "./pages/attendancepage/AttendanceList";

function App() {
  const isAuthenticated = localStorage.getItem('token');

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={isAuthenticated ? <AuthenticatedRoutes /> : <Navigate to="/login" />} />
          <Route path="attendance" element={<AttendanceList />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const AuthenticatedRoutes = () => (
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route index element={<Home />} />
    <Route path="attendance" element={<AttendanceList />} />
    <Route path="users">
      <Route index element={<List />} />
      <Route path=":userId" element={<Single />} />
    </Route>
  </Routes>
);

export default App;