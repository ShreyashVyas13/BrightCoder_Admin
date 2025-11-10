import AdminLayout from "../admin/AdminLayout";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  FaComments,
  FaBook,
  FaChalkboardTeacher,
} from "react-icons/fa";
import "./AdminDashboard.css";
import ThemeToggle from "../../client/src/components/ThemeToggle";

function AdminDashboard() {
  const [stats, setStats] = useState({
    totalBlogs: 0,
    totalTutorials: 0,
    totalFeedbacks: 0,
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/admin/stats")
      .then((res) => setStats(res.data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <AdminLayout>
      <div className="admin-dashboard">
        <h1 className="dashboard-title"> Admin Dashboard</h1>
        <p className="dashboard-subtitle">
          Welcome back, Here’s your platform overview.
        </p>

        <div className="stats-grid">
          <div className="stat-card feedback">
            <div className="icon">
              <FaComments />
            </div>
            <div className="details">
              <h2>{stats.totalFeedbacks}</h2>
              <p>Total Feedbacks</p>
            </div>
          </div>

          <div className="stat-card tutorial">
            <div className="icon">
              <FaChalkboardTeacher />
            </div>
            <div className="details">
              <h2>{stats.totalTutorials}</h2>
              <p>Total Tutorials</p>
            </div>
          </div>

          <div className="stat-card blog">
            <div className="icon">
              <FaBook />
            </div>
            <div className="details">
              <h2>{stats.totalBlogs}</h2>
              <p>Total Blogs</p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default AdminDashboard;
