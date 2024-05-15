import { useState, useEffect } from "react";
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
import History from "./Components/History";

function App() {

  const [results, setResults] = useState([]);

  // Create a State for it be passed and used in the Results page, so that each time a video is clicked, that video is added to an array of watched videos that will be displayed on the History Page.

  const [ history, setHistory ] = useState([]);

  return ( 
      <Router>
        <div id="topbar">
          <Header results={results} setResults={setResults}/>
        </div>
        <div id="main-section">
          <div id="sidebar">
            <NavBar />
          </div>
          <div id="main-content-container">
            <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="/aboutus" element={ <AboutUs /> } />
              <Route path="/results" element={ <Results results={results} /> } />
              <Route path="/video" element={ <ShowPage /> } />
              <Route path="/history" element={ <History /> }/>
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
