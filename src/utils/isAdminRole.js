import { useSelector } from "react-redux";

export function IsManagerRole() {
  const role = useSelector((state) => state.user.role);
  const adminRoles = ["ADM", "SMGR", "HMGR"];
  if (adminRoles.includes(role)) {
    return true;
  } else {
    return false;
  }
}

export function IsAdminRole() {
  const role = useSelector((state) => state.user.role);
  if (role === "ADM") {
    return true;
  } else {
    return false;
  }
}
