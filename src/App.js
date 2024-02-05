import "./App.css";
import Navbar from "./components/landing/Navbar";
import About from "./components/landing/About";
import Contact from "./components/landing/Contact";
import Home from "./components/landing/Home";
import Login from "./components/login/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/enterapp" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
