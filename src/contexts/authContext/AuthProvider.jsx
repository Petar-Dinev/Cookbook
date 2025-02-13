import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from './AuthContext'

export default function AuthProvider({ children }) {
  const [authData, setAuthData] = useState(null);
  const navigate = useNavigate();

  const onLogin = (values) => {
    setAuthData(values);
    navigate("/");
  };

  const onRegister = ({ email, username }) => {
    setAuthData({ email, username });
    navigate("/");
  };

  const onLogout = () => {
    setAuthData(null)
  }

  const contextValues = {
    authData,
    isAuthenticated: !!authData?.email,
    onLogin,
    onRegister,
    onLogout
  };

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};