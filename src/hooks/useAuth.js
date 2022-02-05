import React, { createContext, useState, useContext } from 'react';

const authContext = createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(false);

  const login = () => {
    setAuth(true)
  };
  const logout = () => {

  };
  const signup = () => {

  };

  return (
    <authContext.Provider value={{ auth, setAuth, login, logout, signup }}>
      {children}
    </authContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(authContext);
};

