import "./HeaderNav.css";
import { Component } from 'react';

class HeaderNav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className='header-nav'>
                <li className='header-nav-li'>Home</li>
                <li className='header-nav-li'>Movies</li>
                <li className='header-nav-li'>Favourites</li>
                <li className='header-nav-li'>About</li>
            </ul>
        );
    }
}

export default HeaderNav;