import "./HeaderNav.css";

function HeaderNav(props) {
    return (
        <ul className='header-nav'>
            <li className='header-nav-li'>Home</li>
            <li className='header-nav-li'>Movies</li>
            <li className='header-nav-li'>Favourites</li>
            <li className='header-nav-li'>About</li>
        </ul>
    );
}

export default HeaderNav;