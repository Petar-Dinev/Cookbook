import { useNavigate } from "react-router-dom";
import { AuthContext } from './AuthContext'
import { login, logout, register } from "../../services/userService";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function AuthProvider({ children }) {
  const [authData, setAuthData] = useLocalStorage('auth', {});
  const navigate = useNavigate();

  const onLogin = async ({ email, password }) => {
    try {
      if (!email || !password) {
        throw new Error('All fields are required!');
      }

      const result = await login(email, password);
      setAuthData(result);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  const onRegister = async ({ email, username, password, rePass }) => {
    try {
      if (!email || !username || !password || !rePass) {
        throw new Error('All fields are required!');
      }

      if (password !== rePass) {
        throw new Error('Passwords do not match!');
      }

      const result = await register(email, username, password);
      setAuthData(result);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
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