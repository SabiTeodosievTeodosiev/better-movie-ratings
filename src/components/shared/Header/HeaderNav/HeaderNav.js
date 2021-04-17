import "./HeaderNav.css";
import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { auth } from '../../../../utils/firebase';

class HeaderNav extends Component {
    // constructor(props) {
    //     super(props);
    // }
    

    render() {
        let user = auth.currentUser;
        let myMoviesLi, logInLi, logOutLi, registerLi;
        if (user) {
            myMoviesLi = <li><NavLink activeStyle={{ backgroundColor: 'gold' }} to={'/all/:' + user.uid}>{`${user.email}'s Movies`}</NavLink></li>;
            logOutLi = <li><NavLink to="/logout">Log Out</NavLink></li>;
        } else {
            logInLi = <li><NavLink activeStyle={{ backgroundColor: 'gold' }} to="/login">Log In</NavLink></li>;
            registerLi = <li><NavLink activeStyle={{ backgroundColor: 'gold' }} to="/register">Register</NavLink></li>;
        }

        return (
            <ul className='header-nav'>
                <li><NavLink activeStyle={{ backgroundColor: 'gold' }} to="/all" exact>All Movies</NavLink></li>
                {/* MAKE /all /all/currentUserId OR SEND TO /all IF NOT LOGGED IN */}
                {myMoviesLi}
                <li><NavLink activeStyle={{ backgroundColor: 'gold' }} to="/search">Add Movie</NavLink></li>
                {logInLi}
                {logOutLi}
                {registerLi}
            </ul>
        );
    }
}

export default HeaderNav;