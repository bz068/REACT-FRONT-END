import axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { MainContext } from "../../context/mainContext";

export default function LogoutBtn() {
  const { getLoggedIn } = useContext(MainContext);

  const history = useHistory();

  async function logout() {
    await axios.get("http://localhost:5000/auth/logout");
    await getLoggedIn();
    history.push("/login");
  }

  return (
    <button className="btn btn-secondary" onClick={logout}>
      logout
    </button>
  );
}
