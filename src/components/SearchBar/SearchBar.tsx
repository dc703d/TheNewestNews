import { Link } from "react-router-dom";
import "./SearchBar.scss";
import { FormEventHandler } from "react";

type SearchBarProps = {
    searchTerm: string;
    handleInput: FormEventHandler<HTMLInputElement>;
};

const SearchBar = ({ searchTerm, handleInput }: SearchBarProps) => {
    return (
        <div className="searchbar">
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
    );
};
export default SearchBar;
