import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";


// Routes
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import ShowPage from "./Components/ShowPage";
import Results from "./Components/Results";

function App() {

  return ( 
      <Router>
        <div id="topbar">
          <Header/>
        </div>
        <div id="main-section">
          <div id="sidebar">
            <NavBar />
          </div>
          <div id="main-content-container">
            <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="/aboutus" element={ <AboutUs /> } />
              <Route path="/results/" element={ <Results /> } />
              <Route path="/video/" element={ <ShowPage /> } />
              {/* <Route path="/favorites" element={ <Favorites /> } /> */}
              {/* <Route path="/history" element={ <History /> } /> */}
            </Routes>
          </div>
        </div>
        <div id="footer">
          <Footer /> 
        </div>  

    </Router>
  );
}

export default App;
