import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaChartPie,
  FaBook,
  FaChalkboardTeacher,
  FaComments,
  FaSignOutAlt,
} from "react-icons/fa";
import "./AdminLayout.css";
import ThemeToggle from "../../client/src/components/ThemeToggle";

function AdminSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    if (window.innerWidth <= 900) setMenuOpen(!menuOpen);
    else setCollapsed(!collapsed);
  };

  // ✅ Logout handler
  const handleLogout = () => {
    localStorage.removeItem("isAdmin"); // Clear admin session
    setMenuOpen(false); // Close sidebar on mobile
    navigate("/admin-login"); // Redirect to login
  };

  return (
    <>
      {/* Hamburger for mobile */}
      <div className="hamburger-menu" onClick={toggleSidebar}>
        <FaBars size={20} />
      </div>

      <aside
        className={`admin-sidebar ${collapsed ? "collapsed" : ""} ${
          menuOpen ? "open" : ""
        }`}
      >
        <div className="sidebar-inner">
          <div className="sidebar-top">
            <ThemeToggle />
            {!collapsed && <h2 className="sidebar-title">Admin Panel</h2>}

            <nav className="sidebar-nav">
              <NavLink to="/admin-dashboard" className="sidebar-link">
                <FaChartPie />
                {!collapsed && <span>Dashboard</span>}
              </NavLink>

              <NavLink to="/manage-blog" className="sidebar-link">
                <FaBook />
                {!collapsed && <span>Blogs</span>}
              </NavLink>

              <NavLink to="/manage-tutorial" className="sidebar-link">
                <FaChalkboardTeacher />
                {!collapsed && <span>Tutorials</span>}
              </NavLink>

              <NavLink to="/manage-feedback" className="sidebar-link">
                <FaComments />
                {!collapsed && <span>Feedback</span>}
              </NavLink>
            </nav>
          </div>

          {/* Bottom - Logout + Collapse Button */}
          <div className="sidebar-bottom">
            {/* ✅ Working Logout */}
            <button className="logout-btn" onClick={handleLogout}>
              <FaSignOutAlt />
              {!collapsed && <span>Logout</span>}
            </button>

            {/* Collapse toggle button */}
            <button className="collapse-btn" onClick={toggleSidebar}>
              {collapsed ? "»" : "«"}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

export default AdminSidebar;
