import React, { useState } from "react";
import "./AuthPage.css";

function AuthPage({ onLogin, onRegister }) {
  const [isLoginActive, setIsLoginActive] = useState(true);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{isLoginActive ? "Login" : "Register"}</h2>

        {isLoginActive ? (
          <form onSubmit={(e) => onLogin(e, loginData, setMessage, setIsLoading)}>
            <label htmlFor="login-email">Email</label>
            <input
              id="login-email"
              className="auth-input"
              type="email"
              placeholder="Enter your email"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
              required
            />
            <label htmlFor="login-password">Password</label>
            <input
              id="login-password"
              className="auth-input"
              type="password"
              placeholder="Enter your password"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              required
            />
            <button className="auth-button" type="submit" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>
        ) : (
          <form
            onSubmit={(e) =>
              onRegister(e, registerData, setMessage, setIsLoading, setIsLoginActive)
            }
          >
            <label htmlFor="register-name">Name</label>
            <input
              id="register-name"
              className="auth-input"
              type="text"
              placeholder="Enter your name"
              value={registerData.name}
              onChange={(e) =>
                setRegisterData({ ...registerData, name: e.target.value })
              }
              required
            />
            <label htmlFor="register-email">Email</label>
            <input
              id="register-email"
              className="auth-input"
              type="email"
              placeholder="Enter your email"
              value={registerData.email}
              onChange={(e) =>
                setRegisterData({ ...registerData, email: e.target.value })
              }
              required
            />
            <label htmlFor="register-password">Password</label>
            <input
              id="register-password"
              className="auth-input"
              type="password"
              placeholder="Enter your password"
              value={registerData.password}
              onChange={(e) =>
                setRegisterData({ ...registerData, password: e.target.value })
              }
              required
            />
            <button className="auth-button" type="submit" disabled={isLoading}>
              {isLoading ? "Registering..." : "Register"}
            </button>
          </form>
        )}

        {message && <p className="auth-message">{message}</p>}

        <p className="auth-toggle">
          {isLoginActive ? "No account?" : "Already registered?"}{" "}
          <span onClick={() => setIsLoginActive(!isLoginActive)}>
            {isLoginActive ? "Register here" : "Login here"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default AuthPage;
