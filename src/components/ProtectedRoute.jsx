import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ allowedRoles }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const role = localStorage.getItem("role");

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/" />; 
  }

  return <Outlet />;
}
