import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";

// Routes
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import ShowPage from "./Components/ShowPage";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/aboutus" element={<AboutUs />}/>
          <Route path="/:id" element={<ShowPage />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
