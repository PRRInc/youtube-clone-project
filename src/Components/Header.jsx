import { Link } from "react-router-dom";
import { getAllResults } from "../api/fetch";
import ErrorMessage from "../Components/errors/ErrorMessage";
import { useEffect, useState } from "react";
import VideoListing from "./VideoListing";
import Results from "./Results";
import "./Header.css";

export default function Header() {
  const [loadingError, setLoadingError] = useState(false);
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
  
  function initiateSearch(e) {
    e.preventDefault();
    getAllResults(search)
    .then((response) => {
        console.log(response);
        setResults(response.items);
        <Results results={ results }/>
        setLoadingError(false);
    })
    // .catch((error) => {
    //   console.error(error);
    //   setLoadingError(true);
    // });
  };

  return (
    <>
      <img id="topbar-logo-container" src="assets/yt_logo_cmyk_light.svg" alt="Youtube Text Logo"/>
      <form onSubmit={ initiateSearch } id="query-container">
          <input type="text" name="query" id="query-box" value={ search } placeholder="Search" onChange={(e) => setSearch(e.target.value)}/>
          <button type="submit" id="search-button"><img src="assets/search.svg" id="search-submit-button"/></button>
      </form>
    </> 
  );
}