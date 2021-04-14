import "./HeaderNav.css";
import { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderNav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className='header-nav'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/all">Movies</Link></li>
                <li><Link to="/search">Find Movie</Link></li>
                <li><Link to="/">Profile</Link></li>
            </ul>
        );
    }
}

export default HeaderNav;