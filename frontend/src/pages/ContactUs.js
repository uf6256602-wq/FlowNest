import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ContactUs.css";

function ContactUs({ isLoggedIn, user }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-us">
      <nav className="navbar">
        <div className="nav-left">
          <h2 className="logo">FlowNest</h2>
        </div>
        <div className="nav-right">
          <Link to="/home" className="btn home-btn">Home</Link>
          <Link to="/about" className="btn about-btn">About</Link>
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

      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>Get in touch with us for any queries or support. We're here to help you with all your HR management needs.</p>
        
        {/* Contact Info Section */}
        <div className="contact-info">
          <div className="contact-info-card">
            <h3>📧 Email</h3>
            <p>support@flownest.com</p>
          </div>
          <div className="contact-info-card">
            <h3>📞 Phone</h3>
            <p>+1 (555) 123-4567</p>
          </div>
          <div className="contact-info-card">
            <h3>📍 Address</h3>
            <p>123 Business St, Suite 100<br />New York, NY 10001</p>
          </div>
        </div>
        
        {/* Contact Form */}
        {submitted ? (
          <p className="success-message">Thank you for your message! We'll get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              placeholder="Enter your full name"
            />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              placeholder="Enter your email address"
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              placeholder="Tell us how we can help you..."
            />
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactUs;
