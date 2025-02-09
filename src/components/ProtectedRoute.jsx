import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, requiredRole }) => {
  const userId = localStorage.getItem("userId");
  const role = localStorage.getItem("role");
  console.log("User ID:", userId);
  console.log("Role:", role);

  if (!userId) {
    return <Navigate to="/login" />; // Redirect if not logged in
  }

  if (requiredRole && requiredRole !== role) {
    return <Navigate to={`/home/${userId}`} />; // Redirect if wrong role
  }

  return children; // Allow access if role matches
};

export default ProtectedRoute;
