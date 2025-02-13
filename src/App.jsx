import { Route, Routes } from "react-router-dom";
import "./App.css";

import AuthProvider from "./contexts/authContext/AuthProvider";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Logout from "./components/logout/Logout";

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <h1>Welcome to our site</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
