import { createContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const id = localStorage.getItem('userId');

  const [userId, setUserId] = useState(id);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (id) {
      setIsLogin(true);
      setUserId(id);
    }
  }, [id]);

  return (
    <AuthContext.Provider value={{ userId, setUserId, isLogin, setIsLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, AuthContext };
