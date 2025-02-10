import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/home/Home";
import { Header } from "./components/header/Header";
import { Login } from "./components/login/Login";

function App() {
  return (
    <>
      <Header />
      <h1>Welcome to our site</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
