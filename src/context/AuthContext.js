// import jwt from "jsonwebtoken";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import jwt from "jsonwebtoken";

import {
  addAccessToken,
  removeAccessToken,
  getAcccessToken,
} from "../utils/localStorage";
const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const go = useNavigate();
  const [user, setUser] = useState(null);

  //   const genToken = (payload) =>
  //     jwt.sign(payload, "55555", { expiresIn: "30d" });

  useEffect(() => {
    try {
      getMe();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const getMe = async () => {
    const now = getAcccessToken();
    console.log("now", now);
    const userData = JSON.parse(now);
    setUser(userData);
  };
  const login = (input) => {
    const res = JSON.stringify(input);

    addAccessToken(res);
  };

  const logout = async () => {
    setUser(null);
    removeAccessToken();
    go("/");
  };
  return (
    <AuthContext.Provider value={{ user, login, logout, getMe }}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
