import './Nav.scss';

const Nav = () => {
    return (
        <div className='navigation'>
            <h1 className='navigation__heading'>NewsPulse</h1>
            <ul className='navigation__list'>
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
}

export default Nav;