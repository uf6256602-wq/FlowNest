import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"; // styling alag rakhi hai

function HomePage({ isLoggedIn, user }) {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <>
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

        {/* Animated Info Banner */}
        <section className="info-banner">
          <div className="info-ticker">
            <div className="ticker-item">
              <span>📈 85% of employees feel more engaged with streamlined HR processes</span>
            </div>
            <div className="ticker-item">
              <span>⚡ Reduce onboarding time by 50% with automated workflows</span>
            </div>
            <div className="ticker-item">
              <span>🎯 Improve retention rates with smart approval systems</span>
            </div>
            <div className="ticker-item">
              <span>📊 Gain real-time insights into HR performance metrics</span>
            </div>
            <div className="ticker-item">
              <span>🤝 Enhance employee experience with seamless integrations</span>
            </div>
          </div>
        </section>

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

        {/* Knowledge Section */}
        <section className="knowledge">
          <h2>HR Knowledge Hub</h2>
          <div className="knowledge-cards">
            <div className="knowledge-card">
              <h3>📚 Onboarding Best Practices</h3>
              <p>Discover proven strategies to make employee onboarding smooth and effective. Learn about creating welcoming environments, comprehensive training programs, and integration techniques that reduce turnover and increase productivity from day one.</p>
            </div>
            <div className="knowledge-card">
              <h3>🧠 Employee Engagement Tips</h3>
              <p>Boost productivity with insights on fostering a positive work culture. Explore communication strategies, recognition programs, work-life balance initiatives, and team-building activities that enhance morale and job satisfaction.</p>
            </div>
            <div className="knowledge-card">
              <h3>📈 HR Analytics Insights</h3>
              <p>Leverage data to make informed decisions and improve HR outcomes. Understand key metrics like employee retention rates, performance indicators, diversity statistics, and predictive analytics for better workforce planning.</p>
            </div>
            <div className="knowledge-card">
              <h3>⚖️ Compliance & Legal Updates</h3>
              <p>Stay updated on labor laws and compliance requirements. Get insights into employment regulations, workplace safety standards, data privacy laws, and best practices for maintaining legal compliance in your organization.</p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2023 FlowNest. All rights reserved. | Empowering HR Excellence</p>
          <div className="footer-links">
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default HomePage;
