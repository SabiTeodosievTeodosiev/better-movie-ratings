import "./HeaderNav.css";

function HeaderNav(props) {
    return (
        <ul className='header-nav'>
            <li className='header-nav-item'>Home</li>
            <li className='header-nav-item'>Movies</li>
            <li className='header-nav-item'>Favourites</li>
            <li className='header-nav-item'>About</li>
        </ul>
    );
}

export default HeaderNav;