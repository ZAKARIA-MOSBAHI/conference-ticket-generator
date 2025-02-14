import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext();
function ContextProvider({ children }) {
  const [userData, setUserData] = useState({});

  const fetchGithubUsername = async (username, setErr, setUserData) => {
    setUserData((p) => ({ ...p, username: null }));
    setErr((p) => ({ ...p, githubErr: null }));
    try {
      const result = await axios.get(
        `https://api.github.com/users/${username}`
      );
      return true;
    } catch (e) {
      return false;
    }
  };
  useEffect(() => {
    console.log(userData);
  }, [userData]);
  const value = { userData, setUserData, fetchGithubUsername };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default ContextProvider;
