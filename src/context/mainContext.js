import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const MainContext = createContext();

export const MainProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(undefined);

  async function getLoggedIn() {
    const loggedinRes = await axios.get("http://localhost:5000/auth/loggedIn");
    setLoggedIn(loggedinRes.data);
  }

  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <MainContext.Provider value={{ loggedIn, getLoggedIn }}>
      {props.children}
    </MainContext.Provider>
  );
};
