import "./HeaderNav.css";
import { Component } from 'react';
import { NavLink } from 'react-router-dom';

class HeaderNav extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <ul className='header-nav'>
                <li><NavLink activeStyle={{ backgroundColor: 'gold' }} to="/" exact>All Movies</NavLink></li>
                {/* MAKE /all /all/currentUserId OR SEND TO /all IF NOT LOGGED IN */}
                <li><NavLink activeStyle={{ backgroundColor: 'gold' }} to="/all">My Movies</NavLink></li>
                <li><NavLink activeStyle={{ backgroundColor: 'gold' }} to="/search">Add Movie</NavLink></li>
                {/* CHANGE Guest WHEN LOGGED IN */}
                <li><NavLink activeStyle={{ backgroundColor: 'gold' }} to="/user">Guest</NavLink></li>
            </ul>
        );
    }
}

export default HeaderNav;