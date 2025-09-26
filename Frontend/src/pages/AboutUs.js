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
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Mission" className="mission-icon" />
            <h3>Mission</h3>
            <p>To revolutionize HR management by providing innovative, user-friendly solutions that streamline processes and enhance productivity for organizations worldwide.</p>
          </div>
          <div className="vision-card">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Vision" className="mission-icon" />
            <h3>Vision</h3>
            <p>To be the leading HR management platform that transforms how organizations manage their most valuable asset - their people.</p>
          </div>
          <div className="values-card">
            <img src="https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Values" className="mission-icon" />
            <h3>Values</h3>
            <p>Innovation, Integrity, Excellence, and Customer-Centricity drive everything we do at FlowNest.</p>
          </div>
        </div>

        <h2>Our Features</h2>
        <div className="features-grid">
          <div className="feature-item streamlined-item">
            <div className="feature-icon">🔐</div>
            <div className="feature-content">
              <h3>User Authentication & Security</h3>
              <p>Advanced security measures with multi-factor authentication and role-based access control.</p>
            </div>
          </div>
          <div className="feature-item streamlined-item">
            <div className="feature-icon">📊</div>
            <div className="feature-content">
              <h3>Comprehensive Admin Dashboard</h3>
              <p>Powerful analytics and management tools for administrators to oversee all operations.</p>
            </div>
          </div>
          <div className="feature-item streamlined-item">
            <div className="feature-icon">👥</div>
            <div className="feature-content">
              <h3>Efficient Employee Management</h3>
              <p>Streamlined employee onboarding, tracking, and performance management system.</p>
            </div>
          </div>
          <div className="feature-item streamlined-item">
            <div className="feature-icon">⚡</div>
            <div className="feature-content">
              <h3>Streamlined Workflow Approvals</h3>
              <p>Automated approval processes that reduce paperwork and increase efficiency.</p>
            </div>
          </div>
        </div>

        <h2>Meet Our Team</h2>
        <div className="team-section">
          <div className="team-grid">
            <div className="team-member">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=256" alt="Team Member 1" />
              <h4>Alexandra Chen</h4>
              <p>CEO & Founder</p>
            </div>
            <div className="team-member">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=256" alt="Team Member 2" />
              <h4>Michael Rodriguez</h4>
              <p>CTO</p>
            </div>
            <div className="team-member">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=256" alt="Team Member 3" />
              <h4>Sarah Johnson</h4>
              <p>Head of HR</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
