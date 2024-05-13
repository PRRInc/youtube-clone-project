import { Link } from "react-router-dom";
import { getAllResults } from "../api/fetch";
// import ErrorMessage from "./errors/ErrorMessage";
import { useEffect, useState } from "react";
import VideoListing from "./VideoListing";
import "./Header.css";

export default function Header() {
    //   const [loadingError, setLoadingError] = useState(false);
  const [results, setResults] = useState([]);
  //   const [allResults, setAllResults] = useState([]);
    const [search, setSearch] = useState("");
    
  
  //   function handleSearch(event) {
  //     const title = event.target.value;
  //     const result = title.length ? filterResults(title, results) : results;
    
  //     setSearch(title);
  //     setResults(result);
  //   }
  
  //   function filterResults(search, results) {
  //     return results.filter((result) => {
  //       return result.snippet.title.toLowerCase().match(search.toLowerCase());
  //     });
  //   }
  
   function initiateSearch(e) {
      e.preventDefault();
      getAllResults(search)
        .then((response) => {
          // setAllResults(response.items);
          console.log(response);
          setResults(response.items);
          // setLoadingError(false);
        })
        .catch((error) => {
          console.error(error);
          // setLoadingError(true);
        });
      };
  
    return (
      <div>
        <div id="topbar-logo-container">
            <img src="assets/yt_logo_cmyk_light.svg" alt="Youtube Text Logo"/>
        </div>
        <div id="query-container">
            <form onSubmit={initiateSearch}>
                <input type="text" className="search-bar" name="query" id="query-box" value={search} placeholder="Search" onChange={(e) => setSearch(e.target.value)}/>
                <img src="assets/search.svg" alt="search icon"/>
                <button type="submit">Submit</button>
            </form>
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