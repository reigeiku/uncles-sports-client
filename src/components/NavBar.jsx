import "../styling/NavBar.css";
import logo from "../the_uncles_sports_logo.png"
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <div className="left">
                <Link to="/">
                    <div className="nav-logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="nav-title">
                        THE UNCLES' SPORTS
                    </div>
                </Link>
            </div>
            <div className="right">
                <Link to="/login">Log In</Link>
            </div>
        </nav>
    );
}

export default NavBar;