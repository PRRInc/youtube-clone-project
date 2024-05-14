import { useState, useEffect } from "react";
import { getAllResults } from "./api/fetch";

import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
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

  const [loadingError, setLoadingError] = useState(false);
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");

  function initiateSearch(query) {
    getAllResults(query)
      .then((response) => {
        console.log(response);
        setResults(response.items);
        setLoadingError(false);
      })
      .catch((error) => {
        console.error(error);
        setLoadingError(true);
      });
  }

  return ( 
      <Router>
        <div id="topbar">
          <Header setSearch={setSearch} initiateSearch={initiateSearch} search={search} />
        </div>
        <div id="main-section">
          <div id="sidebar">
            <NavBar />
          </div>
          <div id="main-content-container">
            <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="/aboutus" element={ <AboutUs /> } />
              <Route path="/results" element={ <Results results={results} search={search}/> } />
              <Route path="/video" element={ <ShowPage /> } />
              {/* <Route path="/favorites" element={ <Favorites /> } /> */}
              {/* <Route path="/history" element={ <History /> } /> */}
            </Routes>
          </div>
        </div>
        <div id="footer">
          <Footer /> 
        </div>  
    </Router>
  )
}

export default App;
