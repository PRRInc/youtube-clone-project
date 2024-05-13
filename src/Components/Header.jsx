import "./Header.css";

export default function Header() {
    return (
        <>
            <div id="topbar-logo-container">
                <img src="assets/yt_logo_cmyk_light.svg" alt="Youtube Text Logo"/>
            </div>
            <div id="query-container">
                <input type="text" name="query" id="query-box" placeholder="Search"/>
                <img src="assets/search.svg" alt="search icon"/>
            </div>
    
        </>
    )
}