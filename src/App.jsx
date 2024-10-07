import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
// import About from './pages/About'
import Product from "./pages/Product";

import Footer from "./component/Footer";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Bags-Website" Component={Home} />
        <Route path="/Product" Component={Product} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
