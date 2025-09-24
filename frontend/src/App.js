import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import AdminDashboard from "./pages/AdminDashboard";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Employee from "./pages/Employee";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const API_BASE_URL =
    process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

  // Email + Password Validation
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password) => password.length >= 8;

  // Profile check
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const fetchUserProfile = async () => {
        try {
          const response = await fetch(`${API_BASE_URL}/api/auth/profile`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (response.ok) {
            const userData = await response.json();
            setUser(userData);
            setIsLoggedIn(true);
          } else {
            setIsLoggedIn(false);
          }
        } catch (error) {
          console.error("Profile fetch error:", error);
          setIsLoggedIn(false);
        }
      };
      fetchUserProfile();
    }
  }, [API_BASE_URL]);

  // Login
  const handleLogin = async (e, loginData, setMessage, setIsLoading) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    if (!validateEmail(loginData.email)) {
      setMessage("❌ Email format ghalat hai");
      setIsLoading(false);
      return;
    }
    if (!validatePassword(loginData.password)) {
      setMessage("❌ Password 8 characters se zyada hona chahiye");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        setUser(data.user);
        setIsLoggedIn(true);
        navigate("/home");
      } else {
        setMessage(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("Network error. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Register
  const handleRegister = async (
    e,
    registerData,
    setMessage,
    setIsLoading,
    setIsLoginActive
  ) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    if (!validateEmail(registerData.email)) {
      setMessage("❌ Email format ghalat hai");
      setIsLoading(false);
      return;
    }
    if (!validatePassword(registerData.password)) {
      setMessage("❌ Password 8 characters se zyada hona chahiye");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerData),
      });
      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Registration successful! Ab login karo.");
        setIsLoginActive(true);
      } else {
        setMessage(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Register error:", error);
      setMessage("Network error. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route
        path="/login"
        element={<AuthPage onLogin={handleLogin} onRegister={handleRegister} />}
      />
      <Route
        path="/home"
        element={<HomePage isLoggedIn={isLoggedIn} user={user} />}
      />
      <Route
        path="/about"
        element={<AboutUs isLoggedIn={isLoggedIn} user={user} />}
      />
      <Route
        path="/contact"
        element={<ContactUs isLoggedIn={isLoggedIn} user={user} />}
      />
      <Route
        path="/employee"
        element={<Employee isLoggedIn={isLoggedIn} user={user} />}
      />
      <Route
        path="/admin"
        element={<AdminDashboard isLoggedIn={isLoggedIn} user={user} />}
      />
      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  );
}

export default App;
