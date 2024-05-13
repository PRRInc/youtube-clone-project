import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const API_KEY = import.meta.env.VITE_API_KEY;

// Components
import Header from "./Components/Header";
// import Footer from "./Components/Footer";

// Routes
// import Home from "./Components/Home";
// import AboutUs from "./Components/AboutUs";
// import ShowPage from "./Components/ShowPage";

// Functions
import { getAllVideos } from "./api/fetch";

function App() {

  const [ list, setList ] = useState([]);

  const [ search, setSearch ] = useState("");
  
  useEffect(() => {
    getAllVideos(search)
      .then((response) => {
        setList(response.items);
        console.log(response);
      })
      // .catch(error => console.error(error))
  },[]);

  

  console.log(search)

  return (
    <div>
      <Router>
        <Header search={search} setSearch={setSearch} />
        <Routes>
          {/* <Route path="/" element={<Home />}/>
          <Route path="/aboutus" element={<AboutUs />}/>
          <Route path="/:id" element={<ShowPage />}/> */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
