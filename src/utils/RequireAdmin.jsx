import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function RequireAdmin({ children }) {
  const isAdmin = useSelector((state) => !!state.user.admin);

  return isAdmin ? <Outlet /> : <Navigate to="/login" />;
}
