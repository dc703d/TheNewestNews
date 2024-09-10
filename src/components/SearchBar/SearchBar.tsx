import { Link } from "react-router-dom";
import "./SearchBar.scss";
import { FormEventHandler } from "react";

type SearchBarProps = {
    searchTerm?: string;
    handleInput?: FormEventHandler<HTMLInputElement>;
};

const SearchBar = ({ searchTerm, handleInput }: SearchBarProps) => {
    return (
        <div className="searchbar">
            <div className="searchbar__inner">
                <label>Search: </label>
                <Link to={"/search"}>
                    <input
                        type="text"
                        className="searchbar__input"
                        value={searchTerm}
                        onInput={handleInput}
                    />
                </Link>
            </div>
        </div>
    );
};
export default SearchBar;
