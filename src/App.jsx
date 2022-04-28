import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home, Navbar, Register, Login, Footer } from "./components";
import { About } from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
