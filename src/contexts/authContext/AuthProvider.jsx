import { useNavigate } from "react-router-dom";
import { AuthContext } from './AuthContext'
import { login, logout } from "../../services/userService";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function AuthProvider({ children }) {
  const [authData, setAuthData] = useLocalStorage('auth', {});
  const navigate = useNavigate();

  const onLogin = async ({ email, password }) => {
    try {
      const result = await login(email, password);
      setAuthData(result);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  const onRegister = ({ email, username }) => {
    setAuthData({ email, username });
    navigate("/");
  };

  const onLogout = async () => {
    await logout();
    setAuthData({});
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