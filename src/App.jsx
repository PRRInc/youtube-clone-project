import { useState } from "react";
import { getAllResults, getVideo } from "./api/fetch";
// import ErrorMessage from "./errors/ErrorMessage.jsx";
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
  const [videoShow, setVideoShow] = useState("");
  // const [videoLinkId, setVideoLinkId] = useState("");
  // const { searchTerm } = useParams();

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

  function initiateVideo(videoPlay) {
    getVideo(videoPlay)
      .then((response) => {
        console.log(response);
        setVideoShow(response.items[0]);
        setLoadingError(false);
      })
      .catch((error) => {
        console.error(error);
        setLoadingError(true);
      });
  }

  // function handleVideoPlay(videoClick) {
  //   console.log(videoClick);
  //   setVideoLinkId(videoClick);
  // }

  return (
    <Router>
      <div id="topbar">
        <Header setSearch={setSearch} initiateSearch={initiateSearch} search={search} />
      </div>
      <div id="main-section">
        {/* {loadingError ? (
          <ErrorMessage />
        ) : ( */}
          <>
            <div id="sidebar">
              <NavBar />
            </div>
            <div id="main-content-container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/results/:searchTerm" element={<Results results={results} search={search} />} />
                <Route path="/videos/:id" element={<ShowPage initiateVideo={initiateVideo} videoShow={videoShow} />} />
                {/* <Route path="/favorites" element={ <Favorites /> } /> */}
                {/* <Route path="/history" element={ <History /> } /> */}
              </Routes>
            </div>
          </>
        {/* )} */}
      </div>
      <div id="footer">
        <Footer />
      </div>
    </Router>
  );
}

export default App;
