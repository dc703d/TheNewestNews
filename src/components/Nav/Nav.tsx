import SearchBar from "../SearchBar/SearchBar";
import "./Nav.scss";
import { Link } from "react-router-dom";
import tnn_logo from "../../assets/tnn_logo.webp";

const Nav = () => {
    return (
        <div className="navigation">
            <Link className="navigation__heading" to={"/"}>
                <img src={tnn_logo} className="navigation__logo" />
                {/* The Newest News */}
            </Link>
            <ul className="navigation__list">
                <Link className="navigation__list--item" to={"/"}>
                    Trending
                </Link>
                <Link className="navigation__list--item" to={"/business"}>
                    Business
                </Link>
                <Link className="navigation__list--item" to={"/entertainment"}>
                    Entertainment
                </Link>
                <Link className="navigation__list--item" to={"/sports"}>
                    Sports
                </Link>
                <Link className="navigation__list--item" to={"/science"}>
                    Science
                </Link>
                <Link className="navigation__list--item" to={"/technology"}>
                    Technology
                </Link>
                <Link className="navigation__list--item" to={"/health"}>
                    Health
                </Link>
            </ul>
        </div>
    );
};

export default Nav;
