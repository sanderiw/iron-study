import { Link } from "react-router-dom";
import logo from "./images/iron-study-logo.png";

function Navbar() {
    return (
        <nav className="px-4 navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
                <Link className="navbar-brand" to="/">
                    <img
                        className="is-logo"
                        src={logo}
                        alt=""
                        width="94.50"
                        height="34"
                    />
                </Link>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/create">
                            <i className="fas fa-plus-square fa-lg"></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">
                            <i className="fas fa-home fa-lg"></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/info">
                            <i className="fas fa-info-circle fa-lg"></i>
                        </Link>
                    </li>
                </ul>
            
        </nav>
    );
}
export default Navbar;
