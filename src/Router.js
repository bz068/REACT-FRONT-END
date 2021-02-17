import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import LogoutBtn from "./components/auth/LogoutBtn";
import Register from "./components/auth/Register";
import Nav from "./components/layout/Nav";
import { MainContext } from "./context/mainContext";

export default function Router() {
  const { loggedIn } = useContext(MainContext);

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Switch>
          {loggedIn === false && (
            <>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route exact path="/">
                <div className="">home page</div>
              </Route>
            </>
          )}
          {loggedIn === true && (
            <>
              <Route exact path="/">
                <div className="">home page</div>
              </Route>
              <Route exact path="/dashboard">
                <div className="">dashboard page</div>
              </Route>
              <LogoutBtn />
            </>
          )}
        </Switch>
      </BrowserRouter>
    </>
  );
}
