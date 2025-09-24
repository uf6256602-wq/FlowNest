import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./AdminDashboard.css";

function AdminDashboard({ isLoggedIn, user }) {
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState({ totalUsers: 0, activeUsers: 0 });

  const API_BASE_URL =
    process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

  const fetchUsers = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${API_BASE_URL}/api/admin/users`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }, [API_BASE_URL]);

  const fetchStats = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${API_BASE_URL}/api/admin/stats`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.ok) {
        const data = await response.json();
        setStats(data);
      }
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  }, [API_BASE_URL]);

  useEffect(() => {
    if (isLoggedIn) {
      fetchUsers();
      fetchStats();
    }
  }, [isLoggedIn, fetchUsers, fetchStats]);

  if (!isLoggedIn) {
    return <div>Please log in to access the admin dashboard.</div>;
  }

  return (
    <div className="admin-dashboard">
      <nav className="admin-navbar">
        <h2>Admin Dashboard</h2>
        <Link to="/home" className="btn back-btn">Back to Home</Link>
      </nav>

      <div className="admin-content">
        <div className="stats-section">
          <h3>Statistics</h3>
          <div className="stats">
            <div className="stat-card">
              <h4>Total Users</h4>
              <p>{stats.totalUsers}</p>
            </div>
            <div className="stat-card">
              <h4>Active Users</h4>
              <p>{stats.activeUsers}</p>
            </div>
          </div>
        </div>

        <div className="users-section">
          <h3>User Management</h3>
          <table className="users-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.status}</td>
                  <td>
                    <button className="btn edit-btn">Edit</button>
                    <button className="btn delete-btn">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="reports-section">
          <h3>HR Reports</h3>
          <div className="reports">
            <div className="report-card">
              <h4>Employee Attendance</h4>
              <p>85% Present Today</p>
            </div>
            <div className="report-card">
              <h4>Leave Requests</h4>
              <p>5 Pending</p>
            </div>
            <div className="report-card">
              <h4>Performance Reviews</h4>
              <p>10 Due This Month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
