import { Link } from "react-router-dom";
import { getAllResults } from "../api/fetch";
// import ErrorMessage from "./errors/ErrorMessage";
import { useEffect, useState } from "react";
import VideoListing from "./VideoListing";

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
        {/* {loadingError ? (
          <ErrorMessage />
        ) : ( */}
          <section className="results-index-wrapper">
            {/* <h2>All Notes</h2>
            <button>
              <Link to="/notes/new">Add a new note</Link>
            </button> */}
            <br />
            <form onSubmit={initiateSearch}>
            <label htmlFor="searchTitle">
              <input
                name="searchItem"
                className="search-bar"
                type="text"
                value={search}
                id="searchTitle"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="submit">Submit</button>
            </label>
            </form>
            <section className="results-index">
              {results?.map((result) => {
                return <VideoListing result={result} key={result.id.videoId} />;
              })}
            </section>
          </section>
      </div>
    );
  }