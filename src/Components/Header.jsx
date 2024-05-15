import { Link } from "react-router-dom";
import { getAllResults } from "../api/fetch";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ErrorMessage from "../Components/errors/ErrorMessage";
import VideoListing from "./VideoListing";
import "./Header.css";

export default function Header( { results, setResults } ) {
      const [loadingError, setLoadingError] = useState(false);
    //   const [results, setResults] = useState([]);
      const [search, setSearch] = useState("");
      const navigate = useNavigate();

      const [ prevSearch, setPrevSearch ] = useState([]);
      const [ dropdown, setDropdown ] = useState(false);

    
  
   function initiateSearch(e) {
      e.preventDefault();
      let currValue = document.getElementById("query-box").value;
      console.log(currValue);
      getAllResults(search)
        .then((response) => {
          // setAllResults(response.items);
          console.log(response);
          setResults(response.items);
          setLoadingError(false);
          if (!prevSearch.includes(currValue)) {
            setPrevSearch([...prevSearch, currValue]);
          }
          setDropdown(false);
        })
        .catch((error) => {
          console.error(error);
          setLoadingError(true);
        });
      navigate('/results/');
   };

  //  function handleDropdownSearch(e) {
  //     console.log(e.target.value);
  //  }

  
    return (
      <div>
        <div id="topbar-logo-container">
            <img src="assets/yt_logo_cmyk_light.svg" alt="Youtube Text Logo"/>
        </div>
        <div id="query-container">
            <form onSubmit={initiateSearch}>
                <input type="text" className="search-bar" name="query" id="query-box" value={search} placeholder="Search" onClick={(e) => setDropdown(!dropdown)} onChange={(e) => setSearch(e.target.value)}/>
                <img src="assets/search.svg" alt="search icon"/>
                <button type="submit">Submit</button>
            </form>
        </div>
        <div className={`dropdown-container ${dropdown ? 'active' : 'inactive'}`}>
          {prevSearch.map(ele => <p onClick={(e) => {
            getAllResults(ele).then(response => {
              console.log(response);
              setResults(response.items);
              setLoadingError(false);
            })}} id={ele} key={ele} className="dropdown-item" value={ele}>{ele}</p>)}
        </div>
        {/* {loadingError ? (
          <ErrorMessage />
        ) : ( */}
          <section className="results-index-wrapper">
            {/* <h2>All Notes</h2>
            <button>
              <Link to="/notes/new">Add a new note</Link>
            </button> */}
            <br />
            
            {/* <label htmlFor="searchTitle">
              <input
                name="searchItem"
                
              
                
                id="searchTitle"
                
              />
              
            </label> */}
            
            <section className="results-index">
              {results?.map((result) => {
                return <VideoListing result={result} key={result.id.videoId} />;
              })}
            </section>
          </section>
      </div>
    );
}