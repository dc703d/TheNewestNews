import { Link } from "react-router-dom";
import "./SearchBar.scss";

const SearchBar = () => {
    return (
        <div className="searchbar">
            <label>Search: </label>
            <Link to={"/search"}>
                <input className="searchbar__input" />
            </Link>
        </div>
    );
};
export default SearchBar;
