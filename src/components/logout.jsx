import { useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    console.log("logout");
    await axios.delete("http://localhost:2000/login");
    localStorage.removeItem("id_token");
    navigate("/");
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
