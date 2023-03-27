import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const value = {
    user,
    setUser
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
