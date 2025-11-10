import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";
import ThemeToggle from "../../client/src/components/ThemeToggle";

function AdminLogin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy credentials (replace with real logic later)
    if (form.email === "admin@123.com" && form.password === "admin") {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin-dashboard");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="admin-login-page">
      {/* 🌗 Global Theme Toggle — Fixed to right side */}
      <div className="theme-toggle-global">
        <ThemeToggle />
      </div>

      <div className="login-card">
        <h1>Admin Login</h1>
        <p>Welcome back, please sign in to continue.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />

          {error && <p className="error-text">{error}</p>}

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
