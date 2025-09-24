import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./Employee.css";

function Employee({ isLoggedIn, user }) {
  const [profile, setProfile] = useState(null);

  const API_BASE_URL =
    process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

  const fetchProfile = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${API_BASE_URL}/api/auth/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.ok) {
        const data = await response.json();
        setProfile(data);
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  }, [API_BASE_URL]);

  useEffect(() => {
    if (isLoggedIn) {
      fetchProfile();
    }
  }, [isLoggedIn, fetchProfile]);

  if (!isLoggedIn) {
    return <div>Please log in to access the employee dashboard.</div>;
  }

  return (
    <div className="employee">
      <nav className="navbar">
        <div className="nav-left">
          <h2 className="logo">FlowNest</h2>
        </div>
        <div className="nav-right">
          <Link to="/home" className="btn home-btn">Home</Link>
          <Link to="/about" className="btn about-btn">About</Link>
          <Link to="/contact" className="btn contact-btn">Contact</Link>
          <Link to="/admin" className="btn admin-btn">Admin</Link>
          <button onClick={() => { localStorage.removeItem("token"); window.location.reload(); }} className="btn logout-btn">Logout</button>
        </div>
      </nav>

      <div className="employee-content">
        <h1>Employee Dashboard</h1>
        <p>Welcome, {user?.name || "Employee"}!</p>
        {profile ? (
          <div className="profile-section">
            <h2>Your Profile</h2>
            <div className="profile-info">
              <div className="profile-item">
                <strong>Name</strong>
                {profile.name}
              </div>
              <div className="profile-item">
                <strong>Email</strong>
                {profile.email}
              </div>
              <div className="profile-item">
                <strong>Role</strong>
                {profile.role || "Employee"}
              </div>
            </div>
          </div>
        ) : (
          <div className="profile-section">
            <h2>Your Profile</h2>
            <p>Loading profile...</p>
          </div>
        )}
        <div className="tasks-section">
          <h2>Your Tasks</h2>
          <div className="tasks-list">
            <div className="task-item">
              Complete onboarding form
            </div>
            <div className="task-item">
              Submit expense report
            </div>
            <div className="task-item">
              Attend team meeting
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employee;
