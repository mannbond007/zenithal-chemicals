import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";


const App = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        {/* pt-16 offsets the fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Products />} />
         
        </Routes>
      </div>
    </div>
  );
};

export default App;
