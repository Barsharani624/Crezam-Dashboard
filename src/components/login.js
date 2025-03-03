
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const validatePassword = (password) => {
    return (
      password.length >= 8 &&
      /[!@#$%^&*(),.?":{}|<>]/.test(password) &&
      /[a-zA-Z]/.test(password) &&
      /\d/.test(password)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePassword(password)) {
      setError("Password must be 8+ chars, contain a special char, a letter, and a number.");
      return;
    }
    setError("");
    navigate("/dashboard"); // Redirect after successful login
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <p className="forgot-password" onClick={() => navigate("/forgot-password")}>
          Forgot Password?
        </p>
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
      <p className="signup-link">
        Not a Member? <span onClick={() => navigate("/Signup")}>Sign up</span>
      </p>
    </div>
  );
}
