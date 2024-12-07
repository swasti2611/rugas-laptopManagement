import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';
import UserDashboard from "./Components/UserDashboard/UserDashbord";
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import AddLaptop from './Components/AddLaptop/AddLaptop';
import ReportIssue from './Components/ReportIssue/ReportIssue';
import RequestLaptop from './Components/RequestLaptop/RequestLaptop';
import UpdateLaptop from './Components/UpdateLaptop/UpdateLaptop';
import AdminLogin from './Components/AdminLogin/AdminLogin';
import AssignLaptop from "./Components/AssignLaptop/Assignlaptop"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the user is logged in (based on token in localStorage)
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Routes with Sidebar */}
        <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={isLoggedIn ? <Navigate to="/" /> : <SignUp />} />

        {/* Home route for logged-in users */}
        <Route
          path="/"
          element={isLoggedIn ? (
            <Layout>
              <UserDashboard />
            </Layout>
          ) : (
            <Navigate to="/login" />
          )}
        />

        <Route
          path="/request-laptop"
          element={isLoggedIn ? (
            <Layout>
              <RequestLaptop />
            </Layout>
          ) : (
            <Navigate to="/login" />
          )}
        />

        <Route
          path="/addLaptop"
          element={isLoggedIn ? (
            <Layout>
              <AddLaptop />
            </Layout>
          ) : (
            <Navigate to="/login" />
          )}
        />

        <Route
          path="/updateLaptop/:laptopId"
          element={isLoggedIn ? (
            <Layout>
              <UpdateLaptop />
            </Layout>
          ) : (
            <Navigate to="/login" />
          )}
        />

        <Route
          path="/reportissue"
          element={isLoggedIn ? (
            <Layout>
              <ReportIssue />
            </Layout>
          ) : (
            <Navigate to="/login" />
          )}
        />

        <Route
          path="/assignLaptop"
          element={isLoggedIn ? (
            <Layout>
              <AssignLaptop />
            </Layout>
          ) : (
            <Navigate to="/login" />
          )}
        />

        <Route
          path="/adminboard"
          element={isLoggedIn ? (
            <Layout>
              <AdminDashboard />
            </Layout>
          ) : (
            <Navigate to="/login" />
          )}
        />

        <Route
          path="/adminlogin"
          element={isLoggedIn ? <Navigate to="/adminboard" /> : <AdminLogin />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
