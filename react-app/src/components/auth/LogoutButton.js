import React from "react";
import { logout } from "../../services/auth";

const LogoutButton = ({setAuthenticated}) => {
  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
    window.location.reload();
  };

  return <button onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
