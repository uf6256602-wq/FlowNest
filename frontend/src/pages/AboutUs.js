import React from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";

function AboutUs({ isLoggedIn, user }) {
  return (
    <div className="about-us">
      <nav className="navbar">
        <div className="nav-left">
          <h2 className="logo">FlowNest</h2>
        </div>
        <div className="nav-right">
          <Link to="/home" className="btn home-btn">Home</Link>
          <Link to="/contact" className="btn contact-btn">Contact</Link>
          {isLoggedIn ? (
            <>
              <Link to="/employee" className="btn employee-btn">Employee</Link>
              <Link to="/admin" className="btn admin-btn">Admin</Link>
              <button onClick={() => { localStorage.removeItem("token"); window.location.reload(); }} className="btn logout-btn">Logout</button>
            </>
          ) : (
            <Link to="/login" className="btn login-btn">Login</Link>
          )}
        </div>
      </nav>

      <div className="about-content">
        <h1>About Us</h1>
        <p>FlowNest is a comprehensive HR management system designed to streamline onboarding, approvals, and workflows. We empower organizations to manage their human resources efficiently and effectively.</p>
        <p>Our mission is to make HR processes efficient and user-friendly for organizations of all sizes, enabling them to focus on what matters most - their people.</p>
        
        <h2>Our Mission</h2>
        <div className="mission-vision">
          <div className="mission-card">
            <h3>🚀 Mission</h3>
            <p>To revolutionize HR management by providing innovative, user-friendly solutions that streamline processes and enhance productivity for organizations worldwide.</p>
          </div>
          <div className="vision-card">
            <h3>👁️ Vision</h3>
            <p>To be the leading HR management platform that transforms how organizations manage their most valuable asset - their people.</p>
          </div>
          <div className="values-card">
            <h3>💎 Values</h3>
            <p>Innovation, Integrity, Excellence, and Customer-Centricity drive everything we do at FlowNest.</p>
          </div>
        </div>

        <h2>Our Features</h2>
        <ul>
          <li>User Authentication & Security</li>
          <li>Comprehensive Admin Dashboard</li>
          <li>Efficient Employee Management</li>
          <li>Streamlined Workflow Approvals</li>
        </ul>

        <h2>Meet Our Team</h2>
        <div className="team-section">
          <div className="team-grid">
            <div className="team-member">
              <img src="/logo192.png" alt="Team Member 1" />
              <h4>John Doe</h4>
              <p>CEO & Founder</p>
            </div>
            <div className="team-member">
              <img src="/logo192.png" alt="Team Member 2" />
              <h4>Jane Smith</h4>
              <p>CTO</p>
            </div>
            <div className="team-member">
              <img src="/logo192.png" alt="Team Member 3" />
              <h4>Mike Johnson</h4>
              <p>Head of HR</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
