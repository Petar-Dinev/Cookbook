import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello world!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
