import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";

// Routes
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import ShowPage from "./Components/ShowPage";
import { Results } from "./Components/Results";

function App() {

  return (
    
    <>
      <Router>
        <Header />
        < NavBar />
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/aboutus" element={ <AboutUs /> } />
            <Route path="/results/:etag" element={ <Results /> } />
            <Route path="/video/:id" element={ <ShowPage /> } />
          </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
