import { useContext } from "react";
import { LoginContext } from "./LoginContext";

export const useLogin = () => {
  const [user, setUser] = useContext(LoginContext);
  return {
    user,
    needLogin: !user,
    login: setUser,
    logout: () => setUser(null)
  };
};
