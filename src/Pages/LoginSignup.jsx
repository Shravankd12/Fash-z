import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import { login, signup } from "./api"; // Import API functions
import { GlobalContext } from "../../Context/GlobalContext"; // Import context
import "./CSS/LoginSignup.css"; // Import CSS

const LoginSignup = () => {
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between login and signup
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState({ type: "", text: "" });
  const [loading, setLoading] = useState(false); // Tracks loading state for button
  const { handleLogin } = useContext(GlobalContext); // Context to manage global login state
  const navigate = useNavigate(); // For navigation

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle login or signup
  const handleSubmit = async () => {
    if (!formData.username || !formData.password || (isSignUp && !formData.email)) {
      setMessage({ type: "error", text: "Please fill in all required fields." });
      return;
    }

    try {
      setLoading(true);
      if (isSignUp) {
        // Sign up new user
        const response = await signup({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        });
        setMessage({ type: "success", text: "Signup Successful: " + response });
        setIsSignUp(false); // Switch to login after signup
      } else {
        // Login existing user
        const response = await login({
          username: formData.username,
          password: formData.password,
        });
        setMessage({ type: "success", text: "Login Successful: " + response });
        handleLogin(); // Update global context for logged-in state
        navigate("/home"); // Navigate to Home Page
      }
    } catch (error) {
      setMessage({ type: "error", text: error.message || "Error during login/signup." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        {/* Render based on login state */}
        <h1>{isSignUp ? "Sign Up" : "Login"}</h1>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        {isSignUp && (
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
        )}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button onClick={handleSubmit} disabled={loading}>
          {loading ? (isSignUp ? "Signing up..." : "Logging in...") : isSignUp ? "Sign Up" : "Login"}
        </button>
        <p>
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <span
            className="toggle-link"
            onClick={() => {
              setIsSignUp(!isSignUp);
              setMessage({ type: "", text: "" }); // Clear messages on toggle
            }}
          >
            {isSignUp ? "Login" : "Sign Up"}
          </span>
        </p>
        {/* Display messages */}
        {message.text && <p className={`loginsignup-message ${message.type}`}>{message.text}</p>}
      </div>
    </div>
  );
};

export default LoginSignup;
