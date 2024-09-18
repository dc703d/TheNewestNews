import blackCross from "../../assets/black-cross.png";
import "./HamburgerMenu.scss";
import { Link } from "react-router-dom";

type HamburgerMenuProps = {
    onClose: () => void;
};

const HamburgerMenu = ({ onClose }: HamburgerMenuProps) => {
    return (
        <div className="hamburger">
            <div className="hamburger__content">
                <img
                    src={blackCross}
                    alt="Close menu"
                    className="hamburger__cross"
                    onClick={onClose}
                />

                <ul className="hamburger__list">
                    <Link
                        className="hamburger__list--item"
                        to={"/TheNewestNews/"}
                        onClick={onClose}
                    >
                        Trending
                    </Link>
                    <Link
                        className="hamburger__list--item"
                        to={"/TheNewestNews/business"}
                        onClick={onClose}
                    >
                        Business
                    </Link>
                    <Link
                        className="hamburger__list--item"
                        to={"/TheNewestNews/entertainment"}
                        onClick={onClose}
                    >
                        Entertainment
                    </Link>
                    <Link
                        className="hamburger__list--item"
                        to={"/TheNewestNews/sports"}
                        onClick={onClose}
                    >
                        Sports
                    </Link>
                    <Link
                        className="hamburger__list--item"
                        to={"/TheNewestNews/science"}
                        onClick={onClose}
                    >
                        Science
                    </Link>
                    <Link
                        className="hamburger__list--item"
                        to={"/TheNewestNews/technology"}
                        onClick={onClose}
                    >
                        Technology
                    </Link>
                    <Link
                        className="hamburger__list--item"
                        to={"/TheNewestNews/health"}
                        onClick={onClose}
                    >
                        Health
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default HamburgerMenu;
