// import { useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header({ setSearch, initiateSearch, search }) { 

  // const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    initiateSearch(search);
    // navigate("/results/")
  }

  return (
    <>
      <img id="topbar-logo-container" src="assets/yt_logo_cmyk_light.svg" alt="YouTube Text Logo" />
      <form onSubmit={ handleSubmit } id="query-container">
        <input
          type="text"
          name="query"
          id="query-box"
          value={ search }
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" id="search-button">
          <img src="assets/search.svg" id="search-submit-button" alt="Search" />
        </button>
      </form>
    </>
  );
}