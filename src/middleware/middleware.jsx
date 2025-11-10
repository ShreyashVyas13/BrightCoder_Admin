import { Navigate } from "react-router-dom";

function AdminAuth({ children }) {
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  // If not logged in, redirect to login page
  if (!isAdmin) {
    return <Navigate to="/admin-login" replace />;
  }

  // If logged in, allow access
  return children;
}

export default AdminAuth;
