import "./App.css";
import { Route, Routes } from "react-router-dom";
import {Navbar, Footer } from "./components";
import { useState } from "react";

import {About, Home, Login, Register} from "./pages/index";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/login" exact element={<Login setIsLogin={setIsLogin} isLogin={isLogin} />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
