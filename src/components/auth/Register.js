import axios from "axios";
import React, { useState, useContext } from "react";
import { MainContext } from "../../context/mainContext";
import { useHistory } from "react-router-dom";
import MessageBox from "../layout/MessageBox";

function Register() {
  const [firstName, setFirtName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const { getLoggedIn } = useContext(MainContext);
  const history = useHistory();

  async function register(e) {
    e.preventDefault();

    try {
      const newUser = {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      };

      await axios.post("http://localhost:5000/auth/", newUser);
      await getLoggedIn();
      history.push("/dashboard");
    } catch (error) {
      console.log(error);
      setError(error.response.data.errorMessage);
    }
  }

  return (
    <div className="container">
      <h2>register</h2>

      <form onSubmit={register}>
        <input
          onChange={(e) => setFirtName(e.target.value)}
          placeholder="first name"
          type="text"
          name="firstName"
          className="form-control mb-2"
        />
        <input
          onChange={(e) => setLastName(e.target.value)}
          placeholder="last name"
          type="text"
          name="lastName"
          className="form-control mb-2"
        />
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
        <input
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="password"
          type="password"
          name="confirmPassword"
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

export default Register;
