import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../../context/mainContext";

export default function Nav() {
  const { loggedIn } = useContext(MainContext);
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-5">
      <a class="navbar-brand" href="/">
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          {loggedIn === true && (
            <>
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
              <Link className="nav-link" to="/">
                home
              </Link>
            </>
          )}
          {loggedIn === false && (
            <>
              <Link className="nav-link" to="/">
                home
              </Link>
              <Link className="nav-link" to="/login">
                login
              </Link>
              <Link className="nav-link" to="/register">
                register
              </Link>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
