import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
    return (
        <div id="sidebar-container">
            
            <div id="sidebar-elements">
                <h5>Site</h5>
                <div className="row sidebar-link">
                    <img src="assets/noun-home-6843542.svg" alt="home icon" />
                    <Link to="/">Home</Link>
                </div>
                <div className="row sidebar-link">
                    <img src="assets/question.svg" alt="home icon" />
                    <Link to="/aboutus">About</Link>
                </div>
                <hr />
                <h5>User</h5>
                <div className="row sidebar-link">
                    <img src="assets/heart.svg" alt="home icon" />
                    <Link to="/favorites">Favorites</Link>
                </div>
                <div className="row sidebar-link">
                    <img src="assets/clock.svg" alt="home icon" />
                    <Link to="/history">History</Link>
                </div>
                <div id="logo-container">
                    <img id="youtube-logo" src="assets/yt_icon_rgb.png" alt="youtube logo"/>
                </div>
            </div>
            
        </div>
    )
}