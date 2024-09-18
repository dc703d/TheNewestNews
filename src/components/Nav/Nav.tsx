import "./Nav.scss";
import { Link } from "react-router-dom";
import tnn_logo from "../../assets/tnn_logo.webp";
import { useState } from "react";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import menu from "../../assets/menu-icon.png";

const Nav = () => {
    const [showNav, setShowNav] = useState(false);
    const toggleNav = () => {
        setShowNav(!showNav);
    };

    return (
        <div className="navigation">
            {showNav && <HamburgerMenu onClose={toggleNav} />}
            <Link className="navigation__heading" to={"/TheNewestNews/"}>
                <img src={tnn_logo} className="navigation__logo" />
            </Link>
            <ul className="navigation__list">
                <Link className="navigation__list--item" to={"/TheNewestNews/"}>
                    Trending
                </Link>
                <Link
                    className="navigation__list--item"
                    to={"/TheNewestNews/business"}
                >
                    Business
                </Link>
                <Link
                    className="navigation__list--item"
                    to={"/TheNewestNews/entertainment"}
                >
                    Entertainment
                </Link>
                <Link
                    className="navigation__list--item"
                    to={"/TheNewestNews/sports"}
                >
                    Sports
                </Link>
                <Link
                    className="navigation__list--item"
                    to={"/TheNewestNews/science"}
                >
                    Science
                </Link>
                <Link
                    className="navigation__list--item"
                    to={"/TheNewestNews/technology"}
                >
                    Technology
                </Link>
                <Link
                    className="navigation__list--item"
                    to={"/TheNewestNews/health"}
                >
                    Health
                </Link>
            </ul>
            <img
                src={menu}
                className="navigation__item"
                alt="menu icon"
                onClick={toggleNav}
            />
        </div>
    );
};

export default Nav;
