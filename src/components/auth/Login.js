import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { MainContext } from "../../context/mainContext";
import MessageBox from "../layout/MessageBox";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  const { getLoggedIn } = useContext(MainContext);
  const history = useHistory();

  async function login(e) {
    e.preventDefault();

    try {
      const loginUser = {
        email,
        password,
      };

      await axios.post("http://localhost:5000/auth/login/", loginUser);
      await getLoggedIn();
      history.push("/dashboard");
    } catch (error) {
      console.log(error);
      setError(error.response.data.errorMessage);
    }
  }

  return (
    <div className="container">
      <h2>login</h2>

      <form onSubmit={login}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          type="text"
          name="email"
          className="form-control mb-2"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          type="password"
          name="password"
          className="form-control mb-2"
        />

        {error ? <MessageBox variant="danger">{error}</MessageBox> : ""}

        <button className="btn btn-success" type="submit">
          submit
        </button>
      </form>
    </div>
  );
}

export default Login;
