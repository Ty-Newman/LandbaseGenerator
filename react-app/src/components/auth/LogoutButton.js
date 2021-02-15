import React from "react";
import { logout } from "../../services/auth";

const LogoutButton = ({setAuthenticated, id}) => {
  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
    window.location.reload();
  };

  return <button onClick={onLogout} id={id}>Logout</button>;
};

export default LogoutButton;
