import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { generateToken, isAuthenticated } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useAppContext();
  const navigate = useNavigate();

  const handleLogin = () => {
    // Dummy login validation
    if (email === "user@example.com" && password === "password123") {
      const token = generateToken({ email });
      localStorage.setItem("token", token);
      setUser({ email });
      alert("Login successful");
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    alert("Logged out");
  };

  return (
    <div>
      <h2>Login</h2>
      {isAuthenticated() ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
};

export default LoginPage;
