import "./HeaderNav.css";
import { Component } from 'react';

class HeaderNav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className='header-nav'>
                <li>Home</li>
                <li>Movies</li>
                <li>Favourites</li>
                <li>About</li>
            </ul>
        );
    }
}

export default HeaderNav;