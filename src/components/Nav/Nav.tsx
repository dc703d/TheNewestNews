import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="navigation">
            <h1 className="navigation__heading">TheNewestNews</h1>
            <ul className="navigation__list">
                <Link to={"/home"}>Trending</Link>
                <li>Trending</li>
                <li>Business</li>
                <li>Entertainment</li>
                <li>Sports</li>
                <li>Science</li>
                <li>Technology</li>
                <li>Health</li>
            </ul>
        </div>
    );
};

export default Nav;
