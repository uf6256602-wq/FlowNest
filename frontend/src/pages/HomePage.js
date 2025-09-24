import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"; // styling alag rakhi hai

function HomePage({ isLoggedIn, user }) {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="homepage">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <h2 className="logo">FlowNest</h2>
        </div>
        <div className="nav-right">
          {isLoggedIn ? (
            <>
              <span>Welcome, {user?.name || "User"}!</span>
              <Link to="/about" className="btn about-btn">About</Link>
              <Link to="/contact" className="btn contact-btn">Contact</Link>
              <Link to="/employee" className="btn employee-btn">Employee</Link>
              <Link to="/admin" className="btn admin-btn">Admin</Link>
              <button onClick={handleLogout} className="btn logout-btn">Logout</button>
            </>
          ) : (
            <>
              <Link to="/about" className="btn about-btn">About</Link>
              <Link to="/contact" className="btn contact-btn">Contact</Link>
              <Link to="/login" className="btn login-btn">Login</Link>
              <Link to="/login" className="btn register-btn">Register</Link>
            </>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <img src="/logo512.png" alt="FlowNest Logo" className="hero-image" />
        <h1>Welcome to FlowNest</h1>
        <p>Streamline your HR onboarding, approvals, and workflows in one place.</p>
        {isLoggedIn ? (
          <div>
            <p>You are logged in. Go to your dashboard or admin panel.</p>
            <Link to="/admin" className="btn cta-btn">Go to Dashboard</Link>
          </div>
        ) : (
          <Link to="/login" className="btn cta-btn">Get Started</Link>
        )}
      </header>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <h3>🚀 Efficient Onboarding</h3>
          <p>Streamline employee onboarding with automated workflows and seamless integration.</p>
        </div>
        <div className="feature-card">
          <h3>✅ Smart Approvals</h3>
          <p>Manage approvals with intelligent routing and real-time notifications.</p>
        </div>
        <div className="feature-card">
          <h3>📊 Comprehensive Analytics</h3>
          <p>Get insights into your HR processes with detailed analytics and reporting.</p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
