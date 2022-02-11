import React, { createContext, useState, useContext, useEffect } from 'react';
import { checkToken, loginByUser } from '../api/authAPI';

const authContext = createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem('user');
    try {
      const userObj = JSON.parse(user);
      if (userObj && userObj.token) {
        checkToken(userObj.token)
          .then(res => {
            localStorage.setItem('user', JSON.stringify(res));
            setAuth(res);
          })
          .catch(() => {
            setAuth(null);
            localStorage.removeItem('user');
          });
      }
    } catch (e) {
      setAuth(null);
      localStorage.removeItem('user');
    }
  }, []);

  const login = ({ username, email, password, rememberMe }) => {
    return loginByUser({ username: (username || email), password })
      .then(user => {
        setAuth(user);
        if (rememberMe) {
          localStorage.setItem('user', JSON.stringify(user));
        }
      });

  };
  const logout = () => {
    setAuth(null);
    localStorage.removeItem('user');
  };
  const signup = () => {

  };

  return (
    <authContext.Provider value={{ auth, login, logout, signup }}>
      {children}
    </authContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(authContext);
};

